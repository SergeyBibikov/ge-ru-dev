
export enum Category{
    Time = 1,
    Number,
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
    getCategoryName(){
        return Category[this.category];
    }
    getCategoryNameRu(){
        switch(this.category){
            case 1:
                return "Время"
            case 2:
                return "Числа"
        }
    }
}

