import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import {
    Button,
    Card,
    Divider,
    Message as message,
    Input,
} from '../../../atoms';

import './style.css';
import { Form } from 'antd';

export const TeacherSettings = ({ user }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        if (!user) {
            form.resetFields();
        }
    }, [user]);
    
    form.setFieldsValue({
        email: user?.email,
        last_name: user?.last_name,
        first_name: user?.first_name,
        phone: user?.phone,
    });

    const onFinish = async (data) => {
        try {
            const response = await fetch(
                'http://localhost:3000/api/change/basic/info',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `bearer ${Cookies.get('token')}`,
                    },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            if (result.success === true) {
                message.success('Амжилттай шинэчиллээ');
            } else {
                message.warning(result.msg);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="settings-container">
            <Card style={{ width: '70%' }}>
                <p className="settings-title">Хэрэглэгчийн тохиргоо</p>
                <Divider style={{ margin: '20px 0 0 0' }} />
                <Form
                    // form={form}
                    name="setting"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={(e) => onFinish(e)}
                    autoComplete="off"
                    labelCol={{
                        span: 16,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                >
                    <div className="settings-name-contain">
                        <Form.Item
                            label="Овог"
                            name="last_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Овог оруулна уу!',
                                },
                            ]}
                        >
                            <Input value="" placeholder="Овог оруулах..." />
                        </Form.Item>
                        <Form.Item
                            label="Нэр"
                            name="first_name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Нэр оруулна уу!',
                                },
                            ]}
                        >
                            <Input value="" placeholder="Нэр оруулах..." />
                        </Form.Item>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <Form.Item
                            label="Емэйл"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Емэйл оруулна уу!',
                                },
                            ]}
                        >
                            <Input value="" placeholder="Емэйл оруулах..." />
                        </Form.Item>
                    </div>

                    {/* <div className="settings-upload">
                        <Avatar width={70} height={70} />
                        <Card style={{ width: '80%' }}>
                            <Text className="settings-upload-icon">
                                <UploadIcon />
                            </Text>
                            <Text className="settings-upload-header-text">
                                <Upload>
                                    <span>Энд дарж зурагаа оруулна уу</span>
                                </Upload>
                                эсвэл ийш чирж оруулж болно
                            </Text>
                            <Text className="settings-upload-footer-text">
                                SVG, PNG, JPG эсвэл GIF (Дээд хэмжээ. 800x400px)
                            </Text>
                        </Card>
                    </div> */}

                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            justifyContent: 'flex-end',
                            marginTop: '20px',
                        }}
                    >
                        {/* <Button
                            size="xs"
                            style={{
                                width: '90px',
                                display: 'flex',
                                gap: '5px',
                                color: '#344054',
                                border: '1px solid #D0D5DD',
                                backgroundColor: 'white',
                            }}
                        >
                            Цуцлах
                        </Button> */}
                        <Button
                            size="xs"
                            variant="primary"
                            style={{
                                width: '90px',
                                display: 'flex',
                                gap: '5px',
                            }}
                            type="submit"
                        >
                            Хадгалах
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};
