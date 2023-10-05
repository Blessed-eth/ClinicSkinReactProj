import React, { useState } from 'react';

const Profile = () => {
  const [activePage, setActivePage] = useState('');

  const handleButtonClick = (target) => {
    setActivePage(target);
  };

  const handleCloseClick = () => {
    setActivePage('');
  };

  return (
    <div className='container'>
      <div className='avatar'>
        <img
          src='https://assets.codepen.io/5453939/internal/avatars/users/default.png?format=auto&amp;version=1638034680&amp;width=300&amp;height=300'
          alt='User Avatar'
        />
      </div>
      <div className='username'>
        <h3>Usman Kabir</h3>
      </div>
      <div
        className='button'
        data-target='#home'
        onClick={() => handleButtonClick('#home')}
      >
        <div className='button__icon'>
          <i className='fa-solid fa-house'></i>
        </div>
        <div className='button__text'>Home</div>
      </div>
      <div
        className='button'
        data-target='#contact'
        onClick={() => handleButtonClick('#contact')}
      >
        <div className='button__icon'>
          <i className='fa-solid fa-phone'></i>
        </div>
        <div className='button__text'>Contact</div>
      </div>
      <div
        className='button'
        data-target='#about'
        onClick={() => handleButtonClick('#about')}
      >
        <div className='button__icon'>
          <i className='fa-solid fa-user'></i>
        </div>
        <div className='button__text'>About</div>
      </div>
      <div
        className='button'
        data-target='#education'
        onClick={() => handleButtonClick('#education')}
      >
        <div className='button__icon'>
          <i className='fa-solid fa-user-graduate'></i>
        </div>
        <div className='button__text'>Education</div>
      </div>

      {/* Render active pages */}
      {activePage && (
        <div className={`page page--active`} id={activePage}>
          <div className='page__header'>
            <div className='page__title'>{activePage.replace('#', '')}</div>
            <div className='page__close' onClick={handleCloseClick}>
              <i className='fa-solid fa-xmark'></i>
            </div>
          </div>
          <div className='page__body'>
            {/* Page content goes here */}
            {/* You can customize the content for each page */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
