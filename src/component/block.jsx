import React from 'react'
import classNames from 'classnames'
export default function Block({ blockClassName, title, ...props }) {
  let blockClass = classNames('block', { [`${blockClassName}`]: Boolean(blockClassName) })
  return (
    <div className={blockClass}>
      <div className='title'>{title}</div>
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}
