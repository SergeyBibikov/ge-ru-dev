import {WordData, Category, PartOfSpeech} from './types';

export const allWords: WordData[] = [
    new WordData("утро", "დილა", "у", "დ", Category.Time, PartOfSpeech.Noun),
    new WordData("день", "დღეს", "д", "დ", Category.Time, PartOfSpeech.Noun),
    new WordData("вечер", "საღამო", "в", "ს", Category.Time, PartOfSpeech.Noun),
    new WordData("ночь", "ღამე", "н", "ღ", Category.Time, PartOfSpeech.Noun),
]
export const verbs: WordData[] = [
];