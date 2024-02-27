import React from 'react'
import './ProfileDocument.css';
import documentOne from '../../assets/img/icons/common/profile-doc-1.png';
import documentTwo from '../../assets/img/icons/common/profile-doc-2.png';
const ProfileDocument = ({heading}) => {
  return (
    <div className='profile-document'>
    <h3 className='document-heading ml-2'>{heading}</h3>
    <img src={documentOne} className='document-pic' alt="document"/>
    <img src={documentTwo} className='document-pic' alt="document"/>
    </div>
  )
}

export default ProfileDocument