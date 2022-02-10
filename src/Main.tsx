import React from 'react';
import { Alphabet } from './Alphabet';
import { Words } from './Words/Words';

export function Main(props: any) {
    return(
        <main id="main">
            <Alphabet isShown={props.showAlphabet}/>
            <Words isShown={props.showWords}/>
        </main>
    )
}