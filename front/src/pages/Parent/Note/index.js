import React from 'react';
import { Container } from '../../../component/Container';
import { Header } from '../../../component/molecules';
import { ParentNotes } from '../../../component/organisms';

export const ParentNote = () => {
    return (
        <div style={{ width: '100%', height: 'fit-content' }}>
            <Header title="Тэмдэглэл" />

            <Container size="small">
                <ParentNotes />
            </Container>
        </div>
    );
};
