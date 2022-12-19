import React from 'react';
import Cookies from 'js-cookie';
import {
    CalendarOutlined,
    BuildOutlined,
    UserOutlined,
    SettingOutlined,
    PoweroffOutlined,
} from '@ant-design/icons';
import { Icons } from '../../atoms';
import logo from '../../../images/landing/logo.png';

import './style.css';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: '' };
    }

    componentDidMount() {
        if (window.location.pathname === '/teacher') {
            return this.setState({ active: 'teacher' });
        } else if (window.location.pathname === '/teacher/lesson') {
            return this.setState({ active: 'teacher/lesson' });
        } else if (window.location.pathname === '/teacher/note') {
            return this.setState({ active: 'teacher/note' });
        } else if (window.location.pathname === '/teacher/class') {
            return this.setState({ active: 'teacher/class' });
        } else if (window.location.pathname === '/teacher/request') {
            return this.setState({ active: 'teacher/request' });
        } else if (window.location.pathname === '/teacher/settings') {
            return this.setState({ active: 'teacher/settings' });
        } else if (window.location.pathname === '/student') {
            return this.setState({ active: 'student' });
        } else if (window.location.pathname === '/student/lesson') {
            return this.setState({ active: 'student/lesson' });
        } else if (window.location.pathname === '/student/class') {
            return this.setState({ active: 'student/class' });
        } else if (window.location.pathname === '/student/note') {
            return this.setState({ active: 'student/note' });
        } else if (window.location.pathname === '/student/settings') {
            return this.setState({ active: 'student/settings' });
        } else if (window.location.pathname === '/parent') {
            return this.setState({ active: 'parent' });
        } else if (window.location.pathname === '/parent/lesson') {
            return this.setState({ active: 'parent/lesson' });
        } else if (window.location.pathname === '/parent/class') {
            return this.setState({ active: 'parent/class' });
        } else if (window.location.pathname === '/parent/note') {
            return this.setState({ active: 'parent/note' });
        } else if (window.location.pathname === '/parent/settings') {
            return this.setState({ active: 'parent/settings' });
        }

        return this.setState({ active: '' });
    }

    removeFromCookies() {
        Cookies.remove('token');
    }

    render() {
        const isRole = this.props?.user?.role;

        console.log(this.props.user);
        return (
            <div className="menuContainer">
                <div className="userProfileContain">
                    <div className="userProfile">
                        <img src={logo} alt="" />
                        <div>
                            <p>
                                {`${(this.props?.user?.last_name || '')?.slice(
                                    0,
                                    1
                                )} ${this.props?.user?.first_name || ''}`}
                            </p>
                            <div className="sidebarRole">
                                {isRole === 'teacher'
                                    ? 'Багш'
                                    : isRole === 'student'
                                    ? 'Сурагч'
                                    : isRole === 'guardian'
                                    ? 'Асран хамгаалагч'
                                    : 'Асран хамгаалагч'}
                            </div>
                        </div>
                    </div>
                    <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                </div>
                {window.location.pathname.slice(0, 8) === '/teacher' ? (
                    <>
                        <div className="today">
                            <p>Өнөөдөр</p>
                            <a href="/teacher">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active === 'teacher'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <CalendarOutlined />
                                    Хуваарь
                                </div>
                            </a>
                            <a href="/teacher/class">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active ===
                                            'teacher/class'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <UserOutlined />
                                    Анги
                                </div>
                            </a>
                            <a href="/teacher/lesson">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active ===
                                            'teacher/lesson'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <BuildOutlined />
                                    Хичээл
                                </div>
                            </a>
                            <a href="/teacher/note">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active === 'teacher/note'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <Icons.NoteIcon />
                                    Тэмдэглэгээ
                                </div>
                            </a>
                        </div>
                        <div className="setting">
                            <a href="/teacher/settings">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active ===
                                            'teacher/settings'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <SettingOutlined />
                                    Тохиргоо
                                </div>
                            </a>
                            <a
                                href="/"
                                onClick={() => this.removeFromCookies()}
                            >
                                <div className="menuItem" id="logout">
                                    <PoweroffOutlined />
                                    Гарах
                                </div>
                            </a>
                        </div>
                    </>
                ) : null}

                {window.location.pathname.slice(0, 8) === '/student' ? (
                    <>
                        <div className="today">
                            <p>Өнөөдөр</p>
                            <a href="/student">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active === 'student'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <CalendarOutlined />
                                    Хуваарь
                                </div>
                            </a>
                            <a href="/student/lesson">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active ===
                                            'student/lesson'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <BuildOutlined />
                                    Хичээлүүд
                                </div>
                            </a>
                            <a href="/student/class">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active ===
                                            'student/class'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <UserOutlined />
                                    Анги
                                </div>
                            </a>
                        </div>
                        <div className="setting">
                            <a href="/student/settings">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active ===
                                            'student/settings'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <SettingOutlined />
                                    Тохиргоо
                                </div>
                            </a>
                            <a
                                href="/"
                                onClick={() => this.removeFromCookies()}
                            >
                                <div className="menuItem" id="logout">
                                    <PoweroffOutlined />
                                    Гарах
                                </div>
                            </a>
                        </div>
                    </>
                ) : null}

                {window.location.pathname.slice(0, 7) === '/parent' ? (
                    <>
                        <div className="today">
                            <p>Өнөөдөр</p>
                            <a href="/parent">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active === 'parent'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <CalendarOutlined />
                                    Хуваарь
                                </div>
                            </a>
                            <a href="/parent/lesson">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active ===
                                            'parent/lesson'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <BuildOutlined />
                                    Хичээлүүд
                                </div>
                            </a>
                            <a href="/parent/class">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active === 'parent/class'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <UserOutlined />
                                    Анги
                                </div>
                            </a>
                            <a href="/parent/note">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active === 'parent/note'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <Icons.NoteIcon />
                                    Тэмдэглэгээ
                                </div>
                            </a>
                        </div>
                        <div className="setting">
                            <a href="/parent/settings">
                                <div
                                    className="menuItem"
                                    style={{
                                        color: `${
                                            this.state.active ===
                                            'parent/settings'
                                                ? '#1570EF'
                                                : '#667085'
                                        }`,
                                    }}
                                >
                                    <SettingOutlined />
                                    Тохиргоо
                                </div>
                            </a>
                            <a
                                href="/"
                                onClick={() => this.removeFromCookies()}
                            >
                                <div className="menuItem" id="logout">
                                    <PoweroffOutlined />
                                    Гарах
                                </div>
                            </a>
                        </div>
                    </>
                ) : null}
            </div>
        );
    }
}
