import React from 'react';
import './styles/Word.css'

export function Word(props: any) {
    return (
        <div className='word'>
            <div className='left'>{props.left}</div>
            <div className='right'>{props.right}</div>
            <div className='category'>Категория: {props.category}</div>
        </div>
    )
}