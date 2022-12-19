import { HomeOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Input, Button } from '../../../component/atoms';
import logo from '../../../images/landing/whiteLogo.png';
import { submitLoginFetch } from '../../../App';

import './style.css';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="login-contain">
            <div className="login-main-item">
                <div>
                    <div className="login-item-header">
                        <img src={logo} alt="" />
                    </div>
                    <div className="login-item-title">
                        Дунд сургуулийн <br /> систем
                    </div>
                    <div className="login-item-subTitle">
                        Багш, эцэг эхийн хөтөч
                    </div>
                </div>
                <div className="login-item-footer">
                    <p>Багшийн модуль</p>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. the industry's standard{' '}
                    </div>
                </div>
            </div>
            <div className="login-sign-item">
                <a href="/">
                    <div className="login-return-to-home">
                        <span>Нүүр хуудас руу буцах</span>
                        <HomeOutlined />
                    </div>
                </a>
                <div style={{ width: '100%' }}>
                    <div className="login-sign-title">Нэвтрэх</div>
                    <div className="login-sign-subTitle">
                        Эргэн тавтай морил
                    </div>
                    <div className="login-sign-input-one">
                        <div className="login-sign-input-one-title">
                            Нэвтрэх нэр
                        </div>
                        <div className="login-sign-input-one-input">
                            <Input
                                placeholder="Нэвтрэх нэр"
                                setUsername={(e) => setUsername(e)}
                            />
                        </div>
                    </div>
                    <div className="login-sign-password-one">
                        <div className="login-sign-password-one-title">
                            Нууц үг
                        </div>
                        <div className="login-sign-password-one-input">
                            <Input
                                placeholder="**********"
                                setUsername={(e) => setPassword(e)}
                                type="password"
                            />
                        </div>
                    </div>
                </div>
                <div className="login-sign-footer">
                    <Button
                        onClick={() => {
                            submitLoginFetch({
                                email: username,
                                password,
                            });
                        }}
                    >
                        Нэвтрэх
                    </Button>
                    <a href="register">
                        <Button>Бүртгүүлэх</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
