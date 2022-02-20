import React from 'react';
import './Phrase.css';

export function Phrase(props: any) {
    return (
        <div className='phrase'>
            <div className='category'>Категория: {props.category}</div>
            <div className='up'>{props.up}</div>
            <div className='down'>{props.down}</div>
        </div>
    )
}