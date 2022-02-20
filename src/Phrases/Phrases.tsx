import React, {useState} from 'react';
import { Phrase } from './Phrase';
import { allPhrases } from "./phraseList";
import { PhraseData , PhraseCategory} from "../types";
import { CategorySelect } from "../CategorySelect";
import { StringSearch } from '../StringSearch';
import "./Phrases.css";

function renderPhrases(phrases:PhraseData[]) {
    return phrases.map(ph=>{
        return <Phrase 
        key={`${ph.russian}`}
        up={ph.georgian}
        down={ph.russian}
        category={ph.category}
    />
    })

}

export function Phrases(props: any) {
    const [ currentPhraseList, newPhraslist] = useState(allPhrases);
    return (
        <div className={`phrases section-wrapper ${props.isShown}`}>
            <div className="phrases-filters">
            <CategorySelect id="categories" categories={PhraseCategory}/>
            <StringSearch section={"phrases"} arr={allPhrases} f={newPhraslist}/>
            </div>
            <div id="phrases" className={`section-content ${props.isShown}`}>
                {renderPhrases(currentPhraseList)}
            </div>
        </div>
    )
}