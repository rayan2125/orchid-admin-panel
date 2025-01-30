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

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

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
            <div className="max-w mx-auto bg-gray-200 p-6 shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4 text-center">Membership Form</h1>

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
                            <Form.Item label="Member Name">
                                <Input name="members_name" onChange={handleChange}  />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Check-in & Check-out">
                                <RangePicker />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Guest Count">
                                <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Second Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Room Category">
                                <Cascader
                                    options={[
                                        {
                                            label: 'Deluxe',
                                            value: 'deluxe',
                                            
                                        },
                                        {
                                            label: 'Regular',
                                            value: 'regular',
                                            
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Booking Date">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Booking Type">
                                <Cascader
                                    options={[
                                        {
                                            value: 'domestic',
                                            label: 'Domestic',
                                            
                                        },
                                        {
                                            value: 'international',
                                            label: 'International',
                                            
                                        },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Third Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Total Rooms">
                                <InputNumber />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Booking Location">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Additional Amount Paid">
                                <InputNumber />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Fourth Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Payment Purpose">
                                <Select>
                                    <Select.Option value="advance">Advance</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Upload Voucher" valuePropName="fileList" getValueFromEvent={normFile}>
                                <Upload action="/upload.do" listType="picture-card">
                                    <button style={{ border: 0, background: 'none' }} type="button">
                                        <PlusOutlined />
                                        <div style={{ marginTop: 8 }}>Upload</div>
                                    </button>
                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Payment Status">
                                <Switch />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Col>
                    </Row>

                </Form>
            </div>
        </section>
    );
};

export default MemberShipForm;
