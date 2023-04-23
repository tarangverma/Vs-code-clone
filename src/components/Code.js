import React from 'react'
import vscode from "../assets/vscode.png"
import "./Code.css"

export default function Code() {
  return (
    <div className='code-1'>
        <img className='img-vscode' src={vscode} width={350} height={350}></img>
        <p className='para-4'>Show All Commands</p>
        <p className='para-4'>Go To File</p>
        <p className='para-4'>Find In Files</p>
        <p className='para-4'>Toggle Full Screen</p>
        <p className='para-4'>Show Settings</p>
    </div>
  )
}
