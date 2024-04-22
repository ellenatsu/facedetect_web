"use client";

import React from 'react'
import { useState } from 'react';

const FaceRecognition = ({userId, setEntries}) => {
    const [value, setValue] = useState('');
    const [url, setUrl] = useState('');
    const [box, setBox] = useState([{}]);


    //calculate face location
    const calculateBox = (data) => {
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
          leftCol: data.left * width,
          topRow: data.top * height,
          rightCol: width - (data.right * width),
          bottomRow: height - (data.bottom * height)
        }
      }
    

    const onInputChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = () => {
        setUrl(value);
        fetch('https://aiapp-api-ffd161fcfa13.herokuapp.com/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({imageUrl: value })
          })
          .then(response => response.json())
          .then(response => {
            if (response) {
              fetch('https://aiapp-api-ffd161fcfa13.herokuapp.com/image', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  id: userId
                })
              })
              .then(response => response.json())
              .then(count => {
                setEntries(count);
               })
              .catch(console.log);
               //console.log(response)
              setBox(calculateBox(response))
            }
          })
          .catch(err => console.log(err));
        };


    return (
        <>
            <div>
                <p className='f3 light-yellow'>{'Enter a picture link to detect face in it.'}</p>
                <div className='center'>
                    <div className='form center pa4 br3 shadow-5 '>
                        <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
                    </div>
                </div>
            </div>
            <div className='center ma'>
                <div className='absolute mt2'>
                    {url && (
                        <>
                      <img id='inputimage' alt='' src={url} width='500px' heigh='auto'/>
                      <div className='facedetect-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                      </>
                    )}
                </div>
            </div>

        </>

    )
}

export default FaceRecognition