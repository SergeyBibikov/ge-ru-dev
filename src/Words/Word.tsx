import React from 'react';

export function Word(props: any) {
    return (
        <div className="word">
            <div className='left'>{props.left}</div>
            <div className='right'>{props.right}</div>
        </div>
    )
}