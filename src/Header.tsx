import React from 'react';

export function Header(props: any) {
    const toggleVisibility = (t: string) => {
        console.log("Init state", props);
        let newState = Object.assign({},props);
        if (props[t] === "dontShow") {
            newState[t] = "";
        } else {
            newState[t] = "dontShow";
        }
        console.log("New state",newState);
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