import React from 'react';
import { Arr } from '../../../utils/util';
import { Card, Divider } from '../../atoms';
import { RequestHeader } from '../../molecules';
import './style.css';

export const Requests = () => {
    return (
        <div className="request-container">
            <RequestHeader />
            <Divider />
            {(Arr || []).map((el, key) => (
                <Card style={{ gap: '10px', padding: '1rem' }} key={key}>
                    <div className="request-card-header">
                        <span className="request-card-who">Хэнд:</span>
                        <span className="request-card-role">Багш</span>
                        <span className="request-card-role">Админ</span>
                    </div>
                    <div className="request-card-title">
                        Когда от милой моей долины поднимается (2.986rem/42px)
                    </div>
                    <div className="request-card-description">
                        Officia commodo elit nostrud sunt fugiat irure qui sit
                        velit commodo non non. Mollit nostrud deserunt ex magna
                        voluptate. Lorem ea pariatur irure minim nulla irure
                        aliqua velit aliquip occaecat pariatur officia ea. Anim
                        commodo pariatur mollit enim ullamco enim adipisicing
                        elit deserunt laborum amet ullamco.
                    </div>
                    <div className="request-card-date">10/28/12</div>
                </Card>
            ))}
        </div>
    );
};
