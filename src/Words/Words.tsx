import React, { useState } from 'react';
import './styles/Words.css';
import { Word } from './Word';
import { WordData } from "./types";
import { getWords } from './helpers';

export function Words(props: any) {

    const allWords = getWords();

    const [currentDirection, newDirection] = useState("GERU");
    const [ currentWordlist, newWordlist] = useState(allWords);
    const renderWord = (direction: string, w: WordData) => {
        let left, right;
        if (direction === "RUGE") {
            left = w.russian;
            right = w.georgian;
        }
        else {
            left = w.georgian;
            right = w.russian;
        }
        return <Word left={left} right={right} category={w.getCategoryNameRu()} />
    }
    const findWord = () => {
        const a: HTMLInputElement | null = document.querySelector('[name="findWord"]');
        const wordToFind = a?.value;
        const result = allWords.find(a => a.russian === wordToFind || a.georgian === wordToFind);
        result ? newWordlist([result]) : newWordlist([])
    }
    return (
        <div className={`words section-wrapper ${props.isShown}`}>
            <div id="words" className={`section-content ${props.isShown}`}>
                <div id='filters'>
                    <div className="langDirection">
                        <div className='geru'>
                            <label htmlFor="ge-ru">GE-RU</label>
                            <input onChange={_ => { newDirection("GERU") }}
                                value="GERU" type="radio" name='langDirection' defaultChecked id="ge-ru" />
                        </div>
                        <div className='ruge'>
                            <label htmlFor="ru-ge">RU-GE</label>
                            <input onChange={_ => { newDirection("RUGE") }}
                                value="RUGE" type="radio" name='langDirection' id="ru-ge" />
                        </div>
                    </div>
                    <div className="wordSearch">
                        <form onSubmit={e=> e.preventDefault()}>
                            <input type="text" name='findWord' />
                            <input type="submit" value="Найти" onClick={e => {e.preventDefault();findWord()}}/>
                            <input type="submit" value="Показать все" onClick={e => newWordlist(allWords)}/>
                        </form>
                    </div>
                </div>
                <div className='wordList'>
                    {currentWordlist.map(w => renderWord(currentDirection, w))}
                </div>
            </div>
        </div>
    )
}