import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core'; 

export const PurePDF = ({ path }) => {
    return (
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
    )
}