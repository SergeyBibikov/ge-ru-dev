
export enum WordCategory{
    Time = "Время",
    Number = "Числа",
}

export enum PhraseCategory{
    Greeting = "Приветствие",
    Farewell = "Прощание",
}

export enum PartOfSpeech{
    Noun = 1,
    Verb,
    Numeric,
}

export class WordData {
    constructor(public russian: string,
        public georgian: string,
        public firstLetterRu: string,
        public firstLetterGe: string,
        public category: WordCategory,
        public partOfSpeech: PartOfSpeech){
    }
    getPartOfSpeechName(){
        return PartOfSpeech[this.partOfSpeech];
    }
}

export class PhraseData {
    constructor(public russian: string,
        public georgian: string,
        public category: WordCategory
        ){
    }
}