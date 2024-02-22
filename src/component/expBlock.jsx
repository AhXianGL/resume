import React from 'react'

export default function ExpBlock({ title, timeStamp, contribution, highlight }) {
  return (
    <div className='exp-block-wrapper'>
      <div className='header bold'>{title}</div>
      <div className='content'>
        {/* <div className='contribution'>
          <div className='bold'>贡献: </div>
          <ol>
            {contribution.map(
              item => <li>{item}</li>
            )}
          </ol>
        </div> */}
        <div className='highlight'>
          <ul>
            {highlight.map(
              item => <li>{item}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
