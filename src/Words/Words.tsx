import React, {useState} from 'react';
import './Words.css';
import { Word } from './Word';
import { getWords } from './helpers';

export function Words(props: any) {
    //добавить useState, чтобы при нажатии на кнопку, менялось направление слов
    const words = getWords();
    const [currentDirection, newDirection] = useState("GERU");
    const renderWord = (direction: any, w: any) => {
        if (direction === "RUGE") {
            return <Word left={w.russian} right={w.georgian} />
        }
        else return <Word left={w.georgian} right={w.russian} />
    }
    return (
        <div className={`words section-wrapper ${props.isShown}`}>
            <div id="words" className={`section-content ${props.isShown}`}>
                <div id='filters'>
                    <div className="langDirection">
                        <div className='geru'>
                        <label htmlFor="ge-ru">GE-RU</label>
                        <input onChange={_=>{newDirection("GERU")}}
                             value="GERU" type="radio" name='langDirection' defaultChecked id="ge-ru"/>
                        </div>
                        <div className='ruge'>
                        <label htmlFor="ru-ge">RU-GE</label>
                        <input onChange={_=>{newDirection("RUGE")}}
                            value="RUGE" type="radio" name='langDirection' id="ru-ge"/>
                        </div>
                    </div>
                    <div className="wordSearch">
                        <input type="text" name='findWord'/>
                    </div>
                </div>
                <div className='wordList'>
                    {words.map(w => renderWord(currentDirection, w))}
                </div>
            </div>
        </div>
    )
}