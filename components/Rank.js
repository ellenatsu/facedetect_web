import React from 'react'

const Rank = ({name,entries}) => {
  return (
    <div>
        <div className='white f2'>
            {`Hi ${name}! Your already detected ${entries} faces.`}
        </div>
        <div className='white f3'>
        </div>
    </div>
  )
}

export default Rank