import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAnnouncementFetch } from '../../../pages/GetDataFromApi/Parent';
import { Avatar, Button, Card, Empty } from '../../atoms';
import { NotesHeader } from '../../molecules';
import './style.css';

export const ParentNotes = () => {
    const [open, setOpen] = useState(false);
    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        getAnnouncementFetch({ setAnnouncement });
    }, []);

    return (
        <div className="notes">
            {announcement?.length > 0 ? (
                announcement?.map((el, key) => (
                    <Card
                        style={{ marginTop: '3rem', width: '100%' }}
                        key={key}
                    >
                        <div className="announCardContain">
                            <div className="announCard">
                                <div className="notes-profile">
                                    <Avatar />
                                    <div className="notes-profile-name">
                                        <div className="notes-profile-username">
                                            {`${
                                                (el?.teacher || '').first_name ||
                                                ''
                                            } ${
                                                (el?.teacher || '').last_name ||
                                                ''
                                            }`}
                                        </div>
                                        <div className="notes-profile-rolename">
                                            Ангийн багш
                                        </div>
                                    </div>
                                </div>

                                <div className="notes-description">
                                    {el?.text || ''}
                                </div>

                                <div className="notes-date">
                                    {el?.created.slice(0, 10)}
                                </div>
                            </div>
                        </div>
                    </Card>
                ))
            ) : (
                <div
                    style={{
                        margin: '1rem 0',
                        width: '90%',
                        height: '60vh',
                    }}
                >
                    <Empty title="Тэмдэглэл байхгүй байна" />
                </div>
            )}
        </div>
    );
};
