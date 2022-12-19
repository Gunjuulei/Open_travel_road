/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tabs } from 'antd';
import './style.css';
export const Tabbar = ({ tabs }) => {
    return (
        <div className="tabbar">
            <Tabs defaultActiveKey="1">
                {(tabs || []).map((tab, key) => (
                    <Tabs.TabPane tab={tab.title} key={key - 3}>
                        {tab.content}
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </div>
    );
};
