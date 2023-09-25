import React from 'react'
import classNames from 'classnames'
export default function FirmBlock({
  name, timeRange, responsibilities
}) {
  return (
    <div className='firm-block-wrapper'>
      <div className='title'>
        <span className='firm-name'>{name}</span>
        <span>{timeRange}</span>
      </div>
      <div className='description'>
        <ul>
          {responsibilities.map(responsibility => {
            return <li>{responsibility}</li>
          })}
        </ul>
      </div>
    </div>
  )
}
