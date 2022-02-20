import React from 'react';
import { Phrase } from './Phrase';
import "./Phrases.css";

export function Phrases(props: any) {

    return (
        <div className={`section-wrapper ${props.isShown}`}>
            <div id="phrases" className={`section-content ${props.isShown}`}>
                <Phrase 
                    up={"დილა მშვიდობისა"}
                    down={"Доброе утро"}
                    category={"Приветствие"}
                />
            </div>
        </div>
    )
}