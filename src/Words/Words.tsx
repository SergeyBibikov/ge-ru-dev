import React from 'react';
import './Words.css'

export function Words(props: any) {
    return(
        <div className={`section-wrapper ${props.isShown}`}>
            <div id="words" className={`section-content ${props.isShown}`}>
                Слова
            </div>
        </div>
    )
}