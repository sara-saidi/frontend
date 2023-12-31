import React from 'react'
import {AiFillDelete}from "react-icons/ai"
import {BiEdit}from "react-icons/bi"
export const ToDo = ({text, updateMode, deleteTodo}) => {
  return (
    <div className='todo'>
        <div className='text'>
        {text}

        </div>
        <div className='icons'>
            <BiEdit className='icon' onClick={updateMode}></BiEdit>
            <AiFillDelete className='icon' onClick={deleteTodo}></AiFillDelete>
        </div>
    </div>
  )
}
export default ToDo