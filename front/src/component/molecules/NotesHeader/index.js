import React from 'react';
import { Avatar, Button, Tag, TextArea, Select, Icons } from '../../atoms';
import './style.css';

export const NotesHeader = ({
    submit,
    setNoteValue,
    noteValue,
    classes,
    setIsClassId,
    user,
}) => {
    return (
        <div className="request-container">
            <form onSubmit={(e) => console.log(e.target)}>
                <Avatar />
                <p className="request-title">{`${user?.last_name?.slice(
                    0,
                    1
                )}.${user?.first_name}`}</p>
                <div className="note-header-flex">
                    <Tag color="blue" backgroundColor="blue">
                        {user?.role === 'teacher'
                            ? 'Багш'
                            : user?.role === 'student'
                            ? 'Сурагч'
                            : user?.role === 'guardian'
                            ? 'Асран хамгаалагч'
                            : 'Асран хамгаалагч'}
                    </Tag>
                    <Select
                        placeholder="Анги сонгох..."
                        options={(classes || []).map((el) => ({
                            label: `${el.level || ''}${el.group || ''}`,
                            value: el._id || '',
                        }))}
                        setSelectValue={(e) => setIsClassId(e)}
                    />
                </div>
                <div className="request-select">
                    <TextArea
                        placeholder="Хүсэлтээ энд бичнэ үү"
                        color="#667085"
                        minHeight="100px"
                        value={noteValue}
                        setValue={(e) => setNoteValue(e)}
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            size="xs"
                            type="primary"
                            style={{
                                width: '90px',
                                display: 'flex',
                                gap: '5px',
                            }}
                            onClick={() => submit()}
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
