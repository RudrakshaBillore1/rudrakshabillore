import React from 'react'
import userData from '@constants/data'


const LoadingPage = () => {
  return (
    <div>
       <img src={userData.avatarUrl} alt="avatar" className=" shadow center  " />




       <div>
        <span>Made 😍 and Design ❤️ By</span>
        <span>Rudraksha Billore.Inc</span>
       </div>
    </div>
    
  )
}

export default LoadingPage