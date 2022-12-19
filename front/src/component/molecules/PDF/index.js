import React, { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import { fullScreenPlugin } from '@react-pdf-viewer/full-screen';
import { Modal } from '../../atoms';

// const defaultLayoutPluginInstance = defaultLayoutPlugin();
// const fullScreenPluginInstance = fullScreenPlugin();

export const PDF = ({ path, children }) => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <div onClick={() => setModal(true)}>{children}</div>
            <Modal
                open={modal}
                onCancel={() => setModal(false)}
                style={{ marginTop: 200 }}
                footer={null}
            >
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={path}
                        plugins={
                            [
                                // defaultLayoutPluginInstance,
                                // fullScreenPluginInstance,
                            ]
                        }
                    />
                </Worker>
            </Modal>
        </>
    );
};
