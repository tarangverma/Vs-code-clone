import React, { useState } from 'react'
import "./Menu.css"
import debug from '../assets/debug.png'
import setting from '../assets/setting.png'
import user from '../assets/user.png'
import remote from '../assets/remote-access.png'
import git from '../assets/git.png'
import extension from '../assets/extension.png'
import document from '../assets/document.png'
import menu from '../assets/menu.png'
import search from '../assets/search.png'
import Explorer from './Explorer'



function Menu() {
  const [click , setClick] = useState(false)
  const openExplorer = () => setClick(true) 
    return (
      
      
      <div className='main'>
      <div className='menu'>
        <div className='menu-1'>
        <button className='btn'><img className='image' src={menu} height={15} width={15}></img></button>
        <button className='btn'><img className='image' src={document} height={25} width={25}></img></button>
        <button className='btn'><img className='image' src={search} height={25} width={25}></img></button>
        <button className='btn'><img className='image' src={git} height={25} width={25}></img></button>
        <button className='btn'><img className='image' src={debug} height={25} width={25}></img></button>
        <button className='btn'><img className='image' src={extension} height={25} width={25}></img></button>
        <button className='btn'><img className='image' src={remote} height={25} width={25}></img></button>
        </div>
        <div className='menu-2'>
        <button className='btn'><img className='image' src={user} height={25} width={25}></img></button>
        <button className='btn'><img className='image' src={setting} height={25} width={25}></img></button>
        </div>
       
    </div>
    <div className='exp'>
      <Explorer />
    </div>
    </div>
  )
}



export default Menu