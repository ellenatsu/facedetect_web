"use client";

import React from 'react'
import { useState } from 'react';

const FaceRecognition = () => {
    const [value, setValue] = useState('');
    const [url, setUrl] = useState('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA/gMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABgQAQEBAQEAAAAAAAAAAAAAAAARATEh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APZIkUoEABUFBBQEigCCgIKAgoCCgIKgG4kUBIRQBIoCG4siWggqAAA2kIAKAAAAAAAAAAAAAGmABoACKgAACVSAlKu4gCKmgAA0qVQAAAAAAAAAAAAAAAABAAKAAmgqVUAoIAAAgA2oAAAAAAoIKgAAAAAAAgAAACb0DQoACAqAAJoBoAN4oAAAAAAAAAAAIAAAAFA0xNANEAUQAAAABNBNBUwAdFQBQAANACgAIAAABQN1MADdEAVAAAAAAQAAAE1UABN0HWlIQBUAWpVAATdADCgFEBaggKgAAAAgLEAAAAABAAAASZq1AdKACiUoKJQFIhQOAgLRAAABABRAFTQAAABAVFQAABNU0EABtUKCiAKgAAAAACAKipAAAAAAAAABFBF8QAAARUAA0HRAAAAAAABAAAAAAAAAAE0AAAAAAAN6ABqAAYAP/9k=');

    const onInputChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = () => {
        setUrl(value);
    }
    return (
        <>
            <div>
                <p className='f3'>{'Enter the picture link to detect face in it.'}</p>
                <div className='center'>
                    <div className='form center pa4 br3 shadow-5'>
                        <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
                    </div>
                </div>
            </div>
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img src={url} width='400px' height='auto' alt="image" />
                </div>
            </div>

        </>

    )
}

export default FaceRecognition