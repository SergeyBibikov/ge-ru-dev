import React from 'react';
import './Words.css';
import {Word} from './Word';
export function Words(props: any) {
    return(
        <div className={`section-wrapper ${props.isShown}`}>
            <div id="words" className={`section-content ${props.isShown}`}>
                <Word {...{left: "утро", right:"დილა"}}/>
            </div>
        </div>
    )
}