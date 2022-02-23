import React, { useState } from 'react';
import { parseInputNumber, parseTens } from './helpers';

export function Numbers(props: any) {
    const [result, setResult] = useState("");
    const translate = () => {
        const a: HTMLInputElement | null = document.querySelector(`#numbers input[type="text"]`);
        const num = a?.value || "";
        setResult(parseInputNumber(num));
    }

    return (
        <div className={`numbers section-wrapper ${props.isShown}`}>
            <div id="numbers" className={`section-content ${props.isShown}`}>
                <div className="result">
                    {result}
                </div>
                <input type="text" name="" id="" />
                <input type="button" value="Перевести" onClick={_ => translate()} />
            </div>
        </div>
    )
}