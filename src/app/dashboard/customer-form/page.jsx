'use client'

import React, { useState } from 'react';
import { MdChangeHistory } from "react-icons/md";
import {
    Button,
    Cascader,
    Checkbox,
    ColorPicker,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
    Row,
    Col
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';


const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const AddMember = () => {
    let navigation = useRouter()
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
        // e.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:5000/api/membership-bookings', formData);
        //     alert('Booking submitted successfully!');
        //     console.log(response.data);
        // } catch (error) {
        //     console.error('Error submitting form', error);
        //     alert('Failed to submit booking.');
        // }
        navigation.push('products-details')
    };

    return (
        <section className="p-8">
            <div className="max-w mx-auto bg-gray-200 p-6 shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4 text-center">Add Member</h1>

                <Form
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 16 }}
                    layout="horizontal"
                    disabled={false}
                    // style={{ maxWidth: 800 }}
                    className='w-full'
                >
                    {/* First Row */}
                    <Row gutter={16} className='left-10'>
                        <Col span={8} >
                            <Form.Item label="Membership Id">
                                <Input name="membership_id" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Application Id">
                                <Input name="application" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Application Date">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16} className='left-10'>
                        <Col span={8} >
                            <Form.Item label="Login Date">
                                <DatePicker />
                            </Form.Item>

                        </Col>
                        <Col span={8}>
                            <Form.Item label="Member Name">
                                <Input name="members_name" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Member Dob">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Second Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Mobile No">

                                <Input name="mobile_no" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Email Id">
                                <Input name="email_id" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label=" Member Address">
                                <Input name="hotel_name" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="State">
                                <Input name="state" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Country">
                                <Input name="country" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Product Name">
                                <Input name='product_name' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Third Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Offer Given">
                                <InputNumber />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Coapplicant Name">
                                <Input name='coapplicant_name' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Coa dob">
                                <DatePicker />

                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Fourth Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Coa mobile">
                                <Input name='coa_mobile' onChange={handleChange} />
                            </Form.Item>
                        </Col>


                    </Row>

                    <Row>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>Next</Button>
                        </Col>
                    </Row>

                </Form>
            </div>
        </section>
    );
};

export default AddMember;
