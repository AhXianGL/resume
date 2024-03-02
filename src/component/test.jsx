import React from 'react'
import { useState, useEffect } from 'react'
export default function Test() {
    const [list, setList] = useState([]);
    useEffect(() => {
        let init = Array(5).fill(null)
        setList(init.map((item,index)=>{return {
            key: index,
            text: index + "th content"
        }}))
    }, [])
    return (
        <div>
            <button onClick={()=>{
                let _list = [...list];
                _list[0].key = 4;
                setList(_list)
            }}>change Key</button>
            <button onClick={()=>{
                let _list = [...list];
                _list[0].key = 8;
                setList(_list)
            }}>change Key</button>
            <button 
            style={{marginLeft: 15}}
            onClick={()=>{
                let _list = [...list]
                _list.splice(0,1)
                setList(_list);
            }}>delete item</button>
            <ul>
                {list.map((item) => {
                    return <li key={item.key}>{item.text}</li>
                })}
            </ul>
        </div>
    )
}
