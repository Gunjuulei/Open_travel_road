import React from 'react';
import { Container } from '../../../component/Container';
import { Header } from '../../../component/molecules';
import { Notes } from '../../../component/organisms';

export const TeacherNote = ({ user }) => {
    return (
        <div style={{ width: '100%', height: 'fit-content' }}>
            <Header
                title="Тэмдэглэл"
                // action={
                //     <Button
                //         size="xs"
                //         style={{
                //             border: '1px solid #D0D5DD',
                //             color: '#344054',
                //             display: 'flex',
                //             alignItems: 'center',
                //             gap: '6px',
                //         }}
                //     >
                //         <PrintIcon />
                //         Хэвлэх
                //     </Button>
                // }
            />

            <Container size="small">
                <Notes user={user} />
            </Container>
        </div>
    );
};
