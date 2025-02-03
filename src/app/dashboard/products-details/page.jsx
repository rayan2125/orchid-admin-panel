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

const ProductsDetails = () => {
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
        navigation.push('customers')
    };

    return (
        <section className="p-8">
            <div className="max-w mx-auto bg-gray-200 p-6 shadow-md rounded-lg">
                <h1 className="text-xl font-bold mb-4 text-center">Products</h1>

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
                            <Form.Item label="Product Name">
                                <Input name="application" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Product Tenure">
                                <DatePicker />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16} className='left-10'>
                        <Col span={8} >
                            <Form.Item label="Product Price">
                                <DatePicker />
                            </Form.Item>

                        </Col>
                        <Col span={8}>
                            <Form.Item label="Net Price:">
                                <Input name="members_name" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Dp Amount Paid:">
                            <Input name="dp_amount_paid" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Second Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Net Dp Amount Paid:">

                                <Input name="net_dp_amount_paid" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Dp Percentage">
                                <Input name="dp_percentage" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Excess Payment Pp">
                                <Input name="excess_payment_pp" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Offer Applicable">
                                <Input name="offer_applicable" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Offer Details">
                                <Input name="offer_details" onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Offer Remarks">
                                <Input name='offer_remarks' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Third Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Is Bonus Night">
                            <Input name='is_bonus_night' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Bonus Night">
                                <Input name='bonus_night' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Welcome Start Date">
                            <Input name='welcome_start_date' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Fourth Row */}
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="Welcome End Date">
                                <Input name='welcome_end_date' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Welcome Remark">
                                <Input name='Welcome Remark' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Welcome End Date">
                                <Input name='welcome_end_date' onChange={handleChange} />
                            </Form.Item>
                        </Col>


                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                        <Form.Item label="SoftCopy Received" name="maf_soft_copy_received">
                                <Select>
                                    <Option value="yes">Yes</Option>
                                    <Option value="no">No</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                        <Form.Item label="HardCopy Received" name="maf_hard_copy_received">
                                <Select>
                                    <Option value="yes">Yes</Option>
                                    <Option value="no">No</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Maf Number">
                                <Input name='maf_number' onChange={handleChange} />
                            </Form.Item>
                        </Col>


                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                        <Form.Item label="Is Kyc" name="is_kyc">
                                <Select>
                                    <Option value="yes">Yes</Option>
                                    <Option value="no">No</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                        <Form.Item label="Kyc Doc Type" >
                        <Input name='kyc_doc_type' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                        <Form.Item label="KYC Doc Upload" name="kyc_doc_upload">
    <Upload
        name="file"
        listType="picture"
        beforeUpload={() => false} // Prevent automatic upload
        onChange={(info) => {
            setFormData({ ...formData, kyc_doc_upload: info.file });
        }}
    >
        <Button icon={<PlusOutlined />}>Upload</Button>
    </Upload>
</Form.Item>
                        </Col>


                    </Row>
                   
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
