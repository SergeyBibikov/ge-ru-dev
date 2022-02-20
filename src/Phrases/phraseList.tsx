import {PhraseData, PhraseCategory} from '../types';

export const allPhrases = [
    new PhraseData("Доброе утро", "დილა მშვიდობისა", PhraseCategory.Greeting),
    new PhraseData("Добрый вечер", "საღამო მშვიდობისა", PhraseCategory.Greeting),
    new PhraseData("До свидания", "ნახვამდის", PhraseCategory.Farewell),
]