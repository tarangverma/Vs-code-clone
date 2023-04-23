import React, { useEffect, useState } from 'react'
import more from "../assets/more.png"
import "./Explorer.css"
import arrow from "../assets/down.png"
import Editor from '@monaco-editor/react';
import Code from './Code';

function Explorer() {
 
  const [file, setFile] = useState();
  const [value, setValue] = useState();


   
  const FileUploader = ({ onFileLoad }) => {
    return <input className='btn-2' type="file" onChange={(e) => onFileLoad(e.target.files[0])} />;
  };
      
    
  useEffect(() => {
    if (file) {
      var reader = new FileReader();
      reader.onload = async (e) => {
        setValue(e.target.result);
      };
      reader.readAsText(file);
    }
  }, [file]);

  
  return (
    <div className='exp'>
    <div className='explore'>
        <div className='explore-1'>
            <p className='para'>EXPLORER</p>
            <img className='more-img' src={more} height={15} width={15}></img>
        </div>
        <div className='explore-2'>
            <img src={arrow} height={15} width={15}></img>
            <p className='para'>NO FOLDER OPENED</p>
        </div>
        <div className='explore-3'>
            <p className='para-1'>You have not yet opened a folder.</p>
            
            <FileUploader onFileLoad={setFile} />
          
            <button className='btn-2' >Open Recent</button>
            <p className='para-1'>You can open a remote repository or pull request without cloning.</p>
            <button className='btn-2'>Open Remote Repository</button>
        </div>
        </div>
        <div className='code'>
          {(file ? <Editor className='editor' width="1180px" height="720px" language="javascript" value={value} /> : <Code />)}
        
        </div>
    </div>
  )
}


export default Explorer