import React from 'react';
import User from "../images/user.png"

const CommonButton = () => {
  return (
    <>
        <div className='ui form'>
            <button className='screen-button'><img src={User} /></button>
        </div>
    </>
  )
}

export default CommonButton