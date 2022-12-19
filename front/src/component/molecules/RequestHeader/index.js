import React from 'react';
import { Avatar, Button, Input, TextArea, Upload, Icons } from '../../atoms';
import './style.css';

export const RequestHeader = () => {
    return (
        <div className="request-container">
            <form
                action="/teacher/request"
                onSubmit={e => console.log(e)}
                onClick={e => console.log(e)}
            >
                <Avatar />
                <p className="request-title">А.Түвшинжаргал</p>
                <div className="request-select">
                    <select
                        name="role"
                        id="selectRole"
                        placeholder="Хүсэлтийн төрөл"
                    >
                        <option value="">Захиралд</option>
                        <option value="">eeee</option>
                        <option value="">oooo</option>
                        <option value="">uuuu</option>
                    </select>
                    <select
                        name="type"
                        id="selectType"
                        placeholder="Хүсэлтийн төрөл"
                    >
                        <option value="">Хүсэлтийн төрөл</option>
                        <option value="">eeee</option>
                        <option value="">oooo</option>
                        <option value="">uuuu</option>
                    </select>
                    <Input
                        width="100%"
                        height="40px"
                        color="#667085"
                        background="white"
                        label="Хүсэлтийн гарчиг"
                        labelFor="request"
                        placeholder="Хүсэлтийн гарчигаа энд бичнэ үү"
                    />
                    <TextArea
                        placeholder="Хүсэлтээ энд бичнэ үү"
                        color="#667085"
                        minHeight="100px"
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Upload>
                            <Icons.UploadImageIcon />
                        </Upload>
                        <Button
                            size="xs"
                            type="primary"
                            style={{
                                width: '90px',
                                display: 'flex',
                                gap: '5px',
                            }}
                            htmlType="submit"
                        >
                            <Icons.SendIcon size={14} />
                            Илгээх
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
