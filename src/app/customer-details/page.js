'use client'
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import { MdWorkHistory } from "react-icons/md";
import { RiFileHistoryFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const CustomerDetails = () => {
    // Example data for the Pie chart (used holidays vs remaining holidays)
    const data = {
        labels: ['Used Holidays', 'Remaining Holidays'],
        datasets: [
            {
                label: 'Holiday Usage',
                data: [10, 15], // Example data: 10 holidays used, 15 holidays remaining
                backgroundColor: ['red', 'green'], // Pie slice colors
                borderColor: ['red', 'green'],
                borderWidth: 1,
            },
        ],
    };
    const router = useRouter()
const handleNavigation =()=>{
router.push("/member-booking")
}
    return (
        <section className="bg-white p-10">
            <div className="flex space-x-10 px-10 py-10 bg-gray-200 w-full rounded-xl shadow-sm relative">
                <button onClick={()=>handleNavigation()} className="bg-green-500 text-white px-4 py-2  rounded mt-4 bottom-5 right-20 absolute">Book Now</button>
                <div className="flex flex-col items-center w-1/4">
                    <div className="bg-red-100 h-32 w-32 rounded-full mb-4">
                        {/* <Image src={'/avatar-1.png'} alt="User Avatar" width={128} height={128} /> */}

                    </div>
                    <h1 className="font-semibold text-xl">Ramesh Vishnoi</h1>
                    <h2 className="text-gray-500">Membership Type: Elite</h2>
                    <button
                    
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4">Send WhatsApp</button>
                </div>

                <div className='flex w-full '>
                    <div className="flex-1">
                        <div>
                            <h1 className="text-xl font-semibold">Official Information</h1>
                            <div className="flex mt-10 space-x-10 w-full justify-around">
                                <div>
                                    <h2 className="font-medium">Email</h2>
                                    <h3 className="text-gray-700">Vp@gmail.com</h3>
                                </div>
                                <div>
                                    <h2 className="font-medium">Phone</h2>
                                    <h3 className="text-gray-700">+91 9876543210</h3>
                                </div>
                                <div>
                                    <h2 className="font-medium">Address</h2>
                                    <h3 className="text-gray-700">123 Street, City</h3>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <h1 className="text-xl font-semibold">Personal Information</h1>
                            <div className="flex mt-10 space-x-10 w-full justify-around">
                                <div>
                                    <h2 className="font-medium">Email</h2>
                                    <h3 className="text-gray-700">Vp@gmail.com</h3>
                                </div>
                                <div>
                                    <h2 className="font-medium">Phone</h2>
                                    <h3 className="text-gray-700">+91 9876543210</h3>
                                </div>
                                <div>
                                    <h2 className="font-medium">Address</h2>
                                    <h3 className="text-gray-700">123 Street, City</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1/3 flex flex-col items-center mb-10 justify-center">
                        <h1 className="text-xl font-semibold">Holidays Used</h1>
                        <div className="h-3/4">
                            <Pie data={data} />
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex w-full justify-between mt-10 gap-5'>

                <div className='bg-cyan-200 h-80 w-1/3 px-10 py-10 rounded-xl flex flex-col items-center justify-center'>
                    <div className='bg-white h-40 w-40 rounded-full flex items-center justify-center'>
                        <RiFileHistoryFill size={120} />
                    </div>
                    <h1 className="text-lg font-semibold mt-4">Booking History</h1>
                </div>

                {/* Payment History */}
                <div className='bg-red-200 h-80 w-1/3 px-10 py-10 rounded-xl flex flex-col items-center justify-center'>
                    <div className='bg-white h-40 w-40 rounded-full flex items-center justify-center'>
                        <MdWorkHistory size={120} />
                    </div>
                    <h1 className="text-lg font-semibold mt-4">Payment History</h1>
                </div>

                {/* Request History */}
                <div className='bg-cyan-200 h-80 w-1/3 px-10 py-10 rounded-xl flex flex-col items-center justify-center'>
                    <div className='bg-white h-40 w-40 rounded-full flex items-center justify-center'>
                        <FaHistory size={120} />
                    </div>
                    <h1 className="text-lg font-semibold mt-4">Request History</h1>
                </div>
            </div>
        </section>
    );
};

export default CustomerDetails;
