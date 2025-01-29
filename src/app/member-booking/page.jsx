'use client'

import React, { useState } from 'react';


const MemberShipForm = () => {
    const [formData, setFormData] = useState({
        members_name: '',
        checkin_date: '',
        checkout_date: '',
        guest_count: '',
        adult_guest_count: '',
        children_guest_count: '',
        nights_booking: '',
        total_rooms: '',
        room_category: '',
        amount_paid_ov: '',
        booking_type: '',
        booking_location: '',
        booking_hotel: '',
        guest_visited: '',
        booking_voucher: '',
        nights_utilised_under: '',
        additional_amt_paid: '',
        payment_purpose: '',
        payment_status: '',
        nights_debited_details: '',
        reason_not_giving: '',
        booking_by: '',
        booking_date: '',
        voucher_details: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/membership-bookings', formData);
            alert('Booking submitted successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form', error);
            alert('Failed to submit booking.');
        }
    };

    return (
        <section className="p-8">
            <div className="max-w mx-auto bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 p-6 shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4 text-center">Membership Form</h1>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Change here for 3 fields per row */}
                        {Object.keys(formData).map((key) => (
                            <div key={key} className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                                    {key.replace('_', ' ').toUpperCase()}
                                </label>
                                <input
                                    className="w-full px-3 py-2 border bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id={key}
                                    name={key}
                                    type="text"
                                    placeholder={`Enter ${key}`}
                                    value={formData[key]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default MemberShipForm;
