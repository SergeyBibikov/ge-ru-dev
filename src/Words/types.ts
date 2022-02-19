
export enum Category{
    Time = "Время",
    Number = "Числа",
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
        public category: Category,
        public partOfSpeech: PartOfSpeech){
    }
    getPartOfSpeechName(){
        return PartOfSpeech[this.partOfSpeech];
    }
}

