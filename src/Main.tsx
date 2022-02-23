import React from 'react';
import { Alphabet } from './Alphabet';
import { Words } from './Words/Words';
import { Phrases } from './Phrases/Phrases';
import { Numbers } from './Numbers/Numbers';

export function Main(props: any) {
    return(
        <main id="main">
            <Alphabet isShown={props.showAlphabet}/>
            <Words isShown={props.showWords}/>
            <Phrases isShown={props.showPhrases}/>
            <Numbers isShown={props.showNumbers}/>
        </main>
    )
}