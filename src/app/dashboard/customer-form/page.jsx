'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Row,
    Col
} from 'antd';

const AddMember = () => {
    const router = useRouter();
    const [form] = Form.useForm();

    const [formData, setFormData] = useState({
        application_date: null,
        login_date: null,
        member_name: "",
        member_dob: null,
        membership_id: "",
        mobile_no: "",
        application_id: "",
        co_applicant_email: "",
        email_id: "",
        member_address: "",
        state: "",
        country: "",
        coapplicant_name: "",
        coa_dob: null,
        coa_mobile: "",
        product_name: "",
        offer_given: "",
        membership_status: "Active"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (name, date, dateString) => {
        setFormData({ ...formData, [name]: dateString });
    };

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            console.log("Form Values:", { ...formData, ...values });

            const response = await axios.post('http://localhost:8081/api/member/details', {
                ...formData,
                ...values
            });

            alert('Booking submitted successfully!');
            console.log(response.data);
            router.push('products-details');
        } catch (error) {
            console.error('Error submitting form', error);
            alert('Failed to submit booking.');
        }
    };

    return (
        <section className="p-8">
            <div className="max-w-2xl mx-auto bg-gray-100 p-6 shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4 text-center">Add Member</h1>

                <Form
                    form={form}
                    className='w-full'
                  
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Membership ID" name="membership_id">
                                <Input name="membership_id" value={formData.membership_id} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Application ID" name="application_id">
                                <Input name="application_id" value={formData.application_id} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Application Date" name="application_date">
                                <DatePicker onChange={(date, dateString) => handleDateChange("application_date", date, dateString)} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Login Date" name="login_date">
                                <DatePicker onChange={(date, dateString) => handleDateChange("login_date", date, dateString)} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Member Name" name="member_name">
                                <Input name="member_name" value={formData.member_name} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Member DOB" name="member_dob">
                                <DatePicker onChange={(date, dateString) => handleDateChange("member_dob", date, dateString)} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Mobile No" name="mobile_no">
                                <Input name="mobile_no" value={formData.mobile_no} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Email ID" name="email_id">
                                <Input name="email_id" value={formData.email_id} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Address" name="member_address">
                                <Input name="member_address" value={formData.member_address} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="State" name="state">
                                <Input name="state" value={formData.state} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Country" name="country">
                                <Input name="country" value={formData.country} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Product Name" name="product_name">
                                <Input name="product_name" value={formData.product_name} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Offer Given" name="offer_given">
                                <Input name="offer_given" value={formData.offer_given} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Co-Applicant Name" name="coapplicant_name">
                                <Input name="coapplicant_name" value={formData.coapplicant_name} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Co-Applicant DOB" name="coa_dob">
                                <DatePicker onChange={(date, dateString) => handleDateChange("coa_dob", date, dateString)} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Co-Applicant Mobile" name="coa_mobile">
                                <Input name="coa_mobile" value={formData.coa_mobile} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Button type="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </section>
    );
};

export default AddMember;
