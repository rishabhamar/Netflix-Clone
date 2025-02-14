import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload, FiUploadCloud } from 'react-icons/fi';

function Uploader() {
    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        maxSize: 100000,
        onDrop: (acceptedFiles) => {
            alert(acceptedFiles[0].name);
        },
    });
    return (
        <div className='w-full text-center'>
            <div 
                {...getRootProps()}
                className='px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer'>
                <input {...getInputProps()} />
                <span className='mx-auto flex-colo text-subMain text-3xl'>
                    <FiUploadCloud />
                </span>
                <p className='text-lg mt-2'>
                    Drag or Upload your image here
                </p>
                <em className='text-sm text-border'>
                    (only .jpg and .png files will be accepted)
                </em>
            </div>
        </div>
    )
}

export default Uploader
