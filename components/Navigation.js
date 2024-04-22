import React from 'react'

const Navigation = ({ isSignedIn, onRouteChange }) => {
  return (
    <div>
      {isSignedIn && (<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signout')}
          className='f3 link dim underline pa3 pointer white'
        >Sign out</p>
      </nav>)}
      {!isSignedIn && (
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim underline pa3 pointer white'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim underline pa3 pointer white'>Register</p>
        </nav>)
      }
    </div>
  )
}

export default Navigation