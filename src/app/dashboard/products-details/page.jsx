'use client'

import React, { useState } from 'react';
import { MdChangeHistory } from "react-icons/md";
import axios from "axios";
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
    Upload,
    Row,
    Col
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

const { Option } = Select;

const ProductsDetails = () => {
    let navigation = useRouter();

    const [formData, setFormData] = useState({
        member_id:null ,
        membership_id: "",
        product_id: null,
        product_name: "",
        product_tenure: null,
        product_price:null,
        net_price: null,
        dp_amount_paid:null,
        net_dp_amount_paid:null,
        dp_percentage:null,
        excess_payment_pp: "",
        offer_applicable: "",
        offer_details: "",
        offer_remarks: "",
        is_bonus_night: "",
        bonus_night: null,
        welcome_start_date: "",
        welcome_end_date: "",
        welcome_status: "",
        welcome_remark: "",
        welcome_kit_shared: "",
        kit_shared_date: "",
        maf_soft_copy_received: "",
        maf_hard_copy_received: "",
        maf_number: "",
        is_kyc: "",
        kyc_doc_type: null,
        kyc_doc_upload: "kyc_documents/passport.pdf"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8081/api/mmberPrdt/create', formData);
    
            alert('Booking submitted successfully!');
            console.log(response.data);
            navigation.push('customers'); // Ensure the correct path is used
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Error submitting booking.');
        }
    };
    

    return (
        <section className="p-8">
            <div className="max-w mx-auto bg-gray-200 p-6 shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4 text-center">Products</h1>

                <Form
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 16 }}
                    layout="horizontal"
                    className='w-full'
                >
                    {/* First Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Membership ID">
                                <Input name="membership_id" value={formData.membership_id} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Product Name">
                                <Input name="product_name" value={formData.product_name} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Product Tenure">
                                <Input name="product_tenure" value={formData.product_tenure} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Second Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Product Price">
                                <Input name="product_price" value={formData.product_price} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Net Price">
                                <Input name="net_price" value={formData.net_price} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="DP Amount Paid">
                                <Input name="dp_amount_paid" value={formData.dp_amount_paid} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Third Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Net DP Amount Paid">
                                <Input name="net_dp_amount_paid" value={formData.net_dp_amount_paid} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="DP Percentage">
                                <Input name="dp_percentage" value={formData.dp_percentage} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Excess Payment">
                                <Input name="excess_payment_pp" value={formData.excess_payment_pp} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Offer Details */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Offer Applicable">
                                <Select name="offer_applicable" value={formData.offer_applicable} onChange={(value) => setFormData({ ...formData, offer_applicable: value })}>
                                    <Option value="yes">Yes</Option>
                                    <Option value="no">No</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Offer Details">
                                <Input name="offer_details" value={formData.offer_details} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Offer Remarks">
                                <Input name="offer_remarks" value={formData.offer_remarks} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Welcome Details */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Welcome Start Date">
                                <DatePicker name="welcome_start_date" value={dayjs(formData.welcome_start_date)} format="YYYY-MM-DD" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Welcome End Date">
                                <DatePicker name="welcome_end_date" value={dayjs(formData.welcome_end_date)} format="YYYY-MM-DD" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Welcome Remark">
                                <Input name="welcome_remark" value={formData.welcome_remark} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* KYC & MAF Details */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="MAF Number">
                                <Input name="maf_number" value={formData.maf_number} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="KYC Type">
                                <Input name="kyc_doc_type" value={formData.kyc_doc_type} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="KYC Document">
                                <Upload
                                    name="kyc_doc_upload"
                                    listType="picture"
                                    beforeUpload={() => false}
                                    onChange={(info) => setFormData({ ...formData, kyc_doc_upload: info.file })}
                                >
                                    <Button icon={<PlusOutlined />}>Upload</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Submit Button */}
                    <Row>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>Add</Button>
                        </Col>
                    </Row>

                </Form>
            </div>
        </section>
    );
};

export default ProductsDetails;
