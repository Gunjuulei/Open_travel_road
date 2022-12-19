import React, { useState } from 'react';
import logo from '../../images/landing/logo.png';
import edu from '../../images/landing/education.png';
import pre from '../../images/landing/presentation.png';
import aa from '../../images/landing/aa.png';
import rightArrow from '../../images/landing/rightArrow.png';
import edu2 from '../../images/landing/education2.png';
import user from '../../images/landing/user.png';
import cpu from '../../images/landing/cpu.png';
import lock from '../../images/landing/lock.png';
import figma from '../../images/landing/figma.png';
import vector1 from '../../images/landing/vector1.png';
import vector2 from '../../images/landing/vector2.png';
import vector3 from '../../images/landing/vector3.png';
import content4 from '../../images/landing/content4.png';
import footer from '../../images/landing/footer.png';
import footerItem from '../../images/landing/footerItem.png';

import './style.css';
import { Link } from 'react-router-dom';

function LandingComp() {
    const [nav, setnav] = useState('');

    return (
        <div className="landing-container">
            <div className="landing">
                <div className="menu-contain">
                    <div className="menu">
                        <a href="/">
                            <div className="menu-logo">
                                <img src={logo} alt="" />
                                <p>Learning management system</p>
                            </div>
                        </a>

                        <div className="menu-main">
                            <a href="#about">
                                <p
                                    onClick={() => setnav('about')}
                                    style={{
                                        color: `${
                                            nav === 'about'
                                                ? '#1890ff'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    Бидний тухай
                                </p>
                            </a>
                            <a href="#news">
                                <p
                                    onClick={() => setnav('news')}
                                    style={{
                                        color: `${
                                            nav === 'news'
                                                ? '#1890ff'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    Мэдээ
                                </p>
                            </a>
                            <a href="#instruction">
                                <p
                                    onClick={() => setnav('instruction')}
                                    style={{
                                        color: `${
                                            nav === 'instruction'
                                                ? '#1890ff'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    Заавар
                                </p>
                            </a>
                        </div>
                        <div className="menu-login">
                            <a href="login">
                                <div>Нэвтрэх</div>
                            </a>
                            <a href="register">
                                <div>Бүртгүүлэх</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="content-1" id="/">
                    <div className="content-1-presentation-mobile">
                        <img src={pre} alt="" />
                    </div>
                    <div className="content-1-text">
                        <div className="content-1-text-item">
                            <img src={edu} alt="" />
                            <img src={aa} alt="" />
                        </div>
                        <div className="content-1-text-item2">
                            ЕБС-ууд ямар ч үед үйл ажиллагааны доголдолгүй ажилж
                            байх үүднээс “SCHOOL ERP <br /> system” нь бүхийл
                            үйл ажиллагааг цахим систем байрлууллаа.
                        </div>
                        <Link to="/register">
                            <button>
                                Бүртгүүлэх
                                <img src={rightArrow} alt="" />
                            </button>
                        </Link>
                    </div>
                    <div className="content-1-presentation-desktop">
                        <img src={pre} alt="" />
                    </div>
                </div>

                <div className="content-2" id="about">
                    <div className="content-2-text">
                        <div className="content-2-text-item2">
                            Та шинэ сургуулийн систем <br /> хайж байна уу?
                            Тэгвэл энд
                            <br />
                            байна өө
                        </div>
                        <div className="content-2-text-item3">
                            <div className="content-2-text-item3-item">
                                <div>
                                    <img src={user} alt="" />
                                    Цахим боловсролыг хүн бүрд
                                </div>
                                <div>
                                    <img src={cpu} alt="" />
                                    Хэвийн үйл ажиллагаа
                                </div>
                                <div>
                                    <img src={lock} alt="" />
                                    Аюулгүй байдал
                                </div>
                                <div>
                                    <img src={figma} alt="" />
                                    UI/UX минимал төрхийг агуулсан
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-2-presentation">
                        <img src={edu2} alt="" />
                    </div>
                </div>

                <div className="content-3" id="news">
                    <div className="content-3-item">
                        <div className="content-3-item-item">
                            <div>12 Сар</div>
                            <div>24 Сар</div>
                            <div>36 Сар</div>
                        </div>
                    </div>
                    <div className="content-3-item2">
                        <div className="content-3-item2-card">
                            <img src={aa} alt="" />
                            <p>Simple</p>
                            <img className="vector" src={vector1} alt="" />
                        </div>
                        <div className="content-3-item2-card">
                            <img src={aa} alt="" />
                            <p>Medium</p>
                            <img className="vector" src={vector2} alt="" />
                        </div>
                        <div className="content-3-item2-card">
                            <img src={aa} alt="" />
                            <p>Expert</p>
                            <img className="vector" src={vector3} alt="" />
                        </div>
                    </div>
                </div>

                <div className="content-4" id="instruction">
                    <div className="content-4-card">
                        <img src={content4} alt="" />
                        <div className="content-4-card-card">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="content-4-card-item">
                            <p>Цахим сургуулийн систем</p>
                            <p>Цахим сургуулийн систем</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-item">
                    <img className="footer-item-bgImg" src={footer} alt="" />
                    <img
                        className="footer-item-bgImg-item"
                        src={footerItem}
                        alt=""
                    />
                    <div className="footer-header">
                        <img src={logo} alt="" />
                        <p>School System</p>
                    </div>
                    <div className="footer-content">
                        <h3>Contact us , purchase it, take your chance</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard <br /> dummy text ever since the
                            1500s, when an unknown printer
                        </p>
                    </div>
                    <div className="footer-btn">
                        <button>Бүртгүүлэх</button>
                        <button>Нэвтрэх</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingComp;
