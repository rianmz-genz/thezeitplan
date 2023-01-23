import Image from 'next/image'
import React from 'react'
import Text from './Text'
interface UserProfileProps{
    username: string
    profileImage: string
    role: string
}
const UserProfile = ({username, profileImage, role}: UserProfileProps) => {
  return (
    <div className='flex space-x-3 items-center'>
        <Image src={`/${profileImage}`} width={50} height={50} alt='user Profile' />
        <div>
            <Text textStyle='Username' value={username} />
            <Text textStyle='Role' value={role} textColor='DarkLight' />
        </div>
    </div>
  )
}

export default UserProfile