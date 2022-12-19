import React, { useState } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { submitRegisterFetch } from '../../../App';
import { Input, Button } from '../../../component/atoms';
import logo from '../../../images/landing/whiteLogo.png';

import './style.css';
import { Select } from 'antd';

export const Register = () => {
    const [role, setRole] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [register, setRegister] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [studentId, setStudentId] = useState('');

    const submit = () => {
        submitRegisterFetch({
            first_name: firstname,
            last_name: lastname,
            email: email,
            phone: phone,
            register_id: register,
            password: password,
            gender: gender,
            role: role,
            student_id: '6395ce480137bd4f53c5ddfb'
        });
    };
    return (
        <div className="register-contain">
            <div className="register-main-item">
                <div>
                    <div className="register-item-header">
                        <img src={logo} alt="" />
                    </div>
                    <div className="register-item-title">
                        Дунд сургуулийн <br /> систем
                    </div>
                    <div className="register-item-subTitle">
                        Lorem Ipsum is simply dummy text of the <br /> printing
                        and typesetting industry. the <br /> industry's standard
                    </div>
                </div>
                <div className="register-item-footer">
                    <p>Сурагчын модуль</p>
                    <div>
                        Багш, эцэг эхийн хөтөч typesetting industry. the
                        industry's standard
                    </div>
                </div>
            </div>
            <div className="register-sign-item">
                <a href="/">
                    <div className="register-return-to-home">
                        Нүүр хуудас руу буцах <HomeOutlined />
                    </div>
                </a>
                <div style={{ width: '100%' }}>
                    <div className="register-sign-title">Бүртгүүлэх</div>
                    <div className="register-sign-subTitle">Тавтай морил</div>
                    <div className="register-sign-header-role">
                        <Button
                            onClick={() => setRole('teacher')}
                            style={{
                                backgroundColor: `${
                                    role === 'teacher' ? '#1570ef' : ''
                                }`,
                                color: `${role === 'teacher' ? '#fff' : ''}`,
                            }}
                        >
                            Багш
                        </Button>
                        <Button
                            onClick={() => setRole('guardian')}
                            style={{
                                backgroundColor: `${
                                    role === 'guardian' ? '#1570ef' : ''
                                }`,
                                color: `${role === 'guardian' ? '#fff' : ''}`,
                            }}
                        >
                            Эцэг эх
                        </Button>
                        <Button
                            onClick={() => setRole('student')}
                            style={{
                                backgroundColor: `${
                                    role === 'student' ? '#1570ef' : ''
                                }`,
                                color: `${role === 'student' ? '#fff' : ''}`,
                            }}
                        >
                            Сурагч
                        </Button>
                    </div>
                </div>
                <div className="register-sign-footer">
                    <div>
                        <div className="register-usernamme">
                            <div className="register-sign-input-one">
                                <div className="register-sign-input-one-title">
                                    Овог
                                </div>
                                <div className="register-sign-input-one-input">
                                    <Input
                                        placeholder="Нэвтрэх нэр..."
                                        setUsername={(e) => setLastname(e)}
                                    />
                                </div>
                            </div>
                            <div className="register-sign-input-one">
                                <div className="register-sign-input-one-title">
                                    Нэр
                                </div>
                                <div className="register-sign-input-one-input">
                                    <Input
                                        placeholder="Нэвтрэх нэр..."
                                        setUsername={(e) => setFirstname(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="register-sign-input-one">
                            <div className="register-sign-input-one-title">
                                Регистерийн дугаар
                            </div>
                            <div className="register-sign-input-one-input">
                                <Input
                                    placeholder="Регистерийн дугаар..."
                                    setUsername={(e) => setRegister(e)}
                                />
                            </div>
                        </div>
                        <div className="register-usernamme">
                            <div className="register-sign-input-one">
                                <div className="register-sign-input-one-title">
                                    Утасны дугаар
                                </div>
                                <div
                                    className="register-sign-input-one-input"
                                    style={{ marginTop: '5px' }}
                                >
                                    <Input
                                        placeholder="Утасны дугаар..."
                                        setUsername={(e) => setPhone(e)}
                                    />
                                </div>
                            </div>
                            <div className="register-sign-input-one">
                                <div className="register-sign-input-one-title">
                                    Емэйл
                                </div>
                                <div className="register-sign-input-one-input">
                                    <Input
                                        placeholder="Емэйл дугаар..."
                                        setUsername={(e) => setEmail(e)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="register-usernamme">
                            <div className="register-sign-input-one">
                                <div
                                    className="register-sign-input-one-title"
                                    style={{ marginTop: '26px' }}
                                >
                                    Хүйс
                                </div>
                                <div className="register-sign-input-one-input">
                                    <Select
                                        style={{ marginTop: '3px' }}
                                        placeholder="Хүйс сонгох..."
                                        optionFilterProp="children"
                                        onChange={(e) => setGender(e)}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '')
                                                .toLowerCase()
                                                .includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'male',
                                                label: 'Эрэгтэй',
                                            },
                                            {
                                                value: 'female',
                                                label: 'Эмэгтэй',
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="register-sign-password-one">
                                <div className="register-sign-password-one-title">
                                    Нууц үг
                                </div>
                                <div className="register-sign-password-one-input">
                                    <Input
                                        placeholder="**********"
                                        type="password"
                                        setUsername={(e) => setPassword(e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register-sign-footer-button">
                        <Button onClick={() => submit()}>Бүртгүүлэх</Button>
                        <a href="login">
                            <Button>Нэвтрэх</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
