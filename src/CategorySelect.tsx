import React from 'react';
import { WordCategory, PhraseCategory } from "./types";

export function CategorySelect(props: any) {
    const categories: WordCategory | PhraseCategory = props.categories;
    const cats = Object.entries(categories).map(c => { return <option key={c[0]} id={c[0]} value={c[1]}>{c[1]}</option> })
    return (
        <div className='category-select-wrapper'>
            <span>Категория</span>
            <select name="category" id="categories">
                <option id="empty" value=""></option>
                { cats }
            </select>
        </div>
    )
}