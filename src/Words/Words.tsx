import React, { useState } from 'react';
import './styles/Words.css';
import { Word } from './Word';
import { CategorySelect } from './CategorySelect';
import { WordData, Category } from "./types";
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
        return <Word key={left} left={left} right={right} category={w.category} />
    }
    const findWord = () => {
        const a: HTMLInputElement | null = document.querySelector('[name="findWord"]');
        const wordToFind = a?.value || "";
        const cat = (document.querySelector('select#categories') as HTMLSelectElement).value;
        const result = allWords
        .filter(word => { 
            if (cat) {
                if (word.category !== cat) {
                    return false
                }
            }
            return word.russian.includes(wordToFind) || word.georgian.includes(wordToFind)
        });
        newWordlist(result)
    }

    return (
        <div className={`words section-wrapper ${props.isShown}`}>
            <div id="words" className={`section-content ${props.isShown}`}>
                <div className="filters-wrapper">
                    <div id='filters'>
                        <div className="lang-direction">
                            <div className='geru'>
                                <label htmlFor="ge-ru">GE-RU</label>
                                <input onChange={_ => { newDirection("GERU") }}
                                    value="GERU" type="radio" name='lang-direction' defaultChecked id="ge-ru" />
                            </div>
                            <div className='ruge'>
                                <label htmlFor="ru-ge">RU-GE</label>
                                <input onChange={_ => { newDirection("RUGE") }}
                                    value="RUGE" type="radio" name='lang-direction' id="ru-ge" />
                            </div>
                        </div>
                        <CategorySelect/>
                        <div className="word-search">
                            <form onSubmit={e=> e.preventDefault()}>
                                <input type="text" name='findWord' />
                                <input type="submit" value="Найти" onClick={e => {e.preventDefault();findWord()}}/>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='word-list'>
                    {currentWordlist.map(w => renderWord(currentDirection, w))}
                </div>
            </div>
        </div>
    )
}