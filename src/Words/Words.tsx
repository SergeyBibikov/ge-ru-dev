import React from 'react';
import './Words.css';
import { Word } from './Word';
import { getWords } from './helpers';

export function Words(props: any) {
    //добавить useState, чтобы при нажатии на кнопку, менялось направление слов
    const words = getWords();
    const renderWord = (direction: any, w: any) => {
        if (direction === "RUGE") {
            return <Word left={w.russian} right={w.georgian} />
        }
        else return <Word left={w.georgian} right={w.russian} />
    }
    return (
        <div className={`section-wrapper ${props.isShown}`}>
            <div id="words" className={`section-content ${props.isShown}`}>
                <div id='filters'>
                    <div className="direction">
                        <button>RU-GE</button>
                        <button>GE-RU</button>
                        <br/><input type="text" />
                    </div>
                </div>
                <div className='wordList'>
                    {words.map(w => renderWord("RUGE", w))}
                </div>
            </div>
        </div>
    )
}