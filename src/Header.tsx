import React from 'react';

export function Header(props: any) {
    const toggleVisibility = (t: string) => {
        let newState = {...props.defaults};
        if (props.currentState[t] === "dontShow") {
            newState[t] = "";
        } else {
            newState[t] = "dontShow";
        }
        props.visHandler(newState);
    }
    return (
        <header id="header">
            <ul>
                <li onClick={_ => toggleVisibility("showAlphabet")}>Алфавит</li>
                <li onClick={_ => toggleVisibility("showWords")}>Слова</li>
                <li onClick={_ => toggleVisibility("showPhrases")}>Фразы</li>
                <li onClick={_ => toggleVisibility("showNumbers")}>Числительные</li>
                <li onClick={_ => toggleVisibility("showGrammar")}>Грамматика</li>
            </ul>
        </header>
    )
}