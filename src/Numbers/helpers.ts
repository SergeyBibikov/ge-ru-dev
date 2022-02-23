import { allNumbers } from './numbersData';

//TODO: добавить обработку тысяч
export function parseInputNumber(input:string) {
    const fromDict = allNumbers[input];
    if (fromDict) return fromDict;
    switch (input.length) {
        case 2:
            return parseTens(input);
        case 3:
            return parseHundreds(input);
        default:
            return "";
    }
}

export function parseTens(n:string) {
    const num = Number(n);
    if (num < 20) {
        return allNumbers[n]
    }
    const twenties = Math.floor(num/20) * 20;
    const remainder = num - twenties;
    const twentiesString = allNumbers[String(twenties)];
    return twentiesString.slice(0, twentiesString.length-1) + 'და' + allNumbers[String(remainder)]
}

export function parseHundreds(n:string) {
    const hundreds = allNumbers[Number(n[0])*100 + ""];
    const tens = parseTens(n.slice(1));
    return hundreds.slice(0, hundreds.length - 1) + " " + tens;
}
