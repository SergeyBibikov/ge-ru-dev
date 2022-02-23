import React from 'react';

type F = (a: any[]) => void;

const findWord = (section: string, arr:any[], f:F) => {
    const a: HTMLInputElement | null = document.querySelector(`.${section} [name="findString"]`);
    const wordToFind = a?.value || "";
    const cat = (document.querySelector(`.${section} select#categories`) as HTMLSelectElement).value;
    const result = arr
    .filter(word => { 
        if (cat) {
            if (word.category !== cat) {
                return false
            }
        }
        return word.russian.includes(wordToFind) || word.georgian.includes(wordToFind)
    });
    
    f(result)
}

export function StringSearch(props: any) {
    
    return (
        <div className="string-search">
                            <form onSubmit={e=> e.preventDefault()}>
                                <input type="text" name='findString' />
                                <input type="submit" value="Найти" onClick={e => {e.preventDefault();findWord(props.section, props.arr, props.f)}}/>
                            </form>
                        </div>
    )
}