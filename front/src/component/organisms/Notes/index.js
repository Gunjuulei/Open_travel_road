import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    deleteAnnouncementFetch,
    getAnnouncementFetch,
    getClassFetch,
    submitAnnouncementFetch,
} from '../../../pages/GetDataFromApi/Teacher';
import { compareIds } from '../../../utils/util';
import { Avatar, Button, Card, PopConfirm, Tag } from '../../atoms';
import { Select } from '../../atoms/Select';
import { NotesHeader } from '../../molecules';
import './style.css';

export const Notes = ({ user }) => {
    const [noteValue, setNoteValue] = useState('');
    const [classes, setClasses] = useState([]);
    const [isClassId, setIsClassId] = useState('');
    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        getAnnouncementFetch({ setAnnouncement });
    }, []);
    useEffect(() => {
        getClassFetch({ setClasses }).then(
            () =>
                (classes || []).find((lesson) => {
                    if (compareIds(lesson?._id)) {
                        return true;
                    }
                    return false;
                })?.class?._id
        );
    }, []);
    console.log(classes);

    const submit = () => {
        submitAnnouncementFetch({
            value: noteValue,
            classId: isClassId,
            setAnnouncement,
            announcement,
        }).then((el) => {
            setNoteValue('');
        });
    };

    const deleteAnnoun = ({ id }) => {
        deleteAnnouncementFetch({ id, announcement, setAnnouncement });
    };
    return (
        <div className="notes">
            <NotesHeader
                submit={submit}
                setNoteValue={setNoteValue}
                noteValue={noteValue}
                classes={classes}
                setIsClassId={setIsClassId}
                user={user}
            />
            {(announcement || []).map((el, key) => (
                <Card style={{ marginTop: '3rem', width: '100%' }} key={key} className="isCard">
                    <div className="announCardContain">
                        <div className="announCard">
                            <div className="notes-profile">
                                <Avatar />
                                <div className="notes-profile-name">
                                    <div className="notes-profile-username">
                                        {`${
                                            (el.teacher || '').first_name || ''
                                        } ${
                                            (el.teacher || '').last_name || ''
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
                        </div>
                        {/* <ConfirmModal
                            show={open}
                            id={el?._id}
                            deleteFunc={deleteAnnoun}
                            handleCancel={handleCancel}
                            handleShow={handleShow}
                        /> */}
                        <PopConfirm
                            title="Та тэмдэглэл устгах гэж байна!!!"
                            okText="Зөвшөөрөх"
                            cancelText="Цуцлах"
                            onFinish={() => deleteAnnoun({ id: el._id })}
                        >
                            <Button
                                className="announDelete"
                                style={{ color: 'red' }}
                            >
                                Устгах
                            </Button>
                        </PopConfirm>
                    </div>
                    <div className="notes-date-contain">
                        <div className="classTitle">
                            Анги:{' '}
                            <Tag color="blue" backgroundColor="blue">
                                {`${el?.class?.level}${el?.class?.group}`}
                            </Tag>
                        </div>
                        <div className="notes-date">
                            {el?.created.slice(0, 10)}
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};
