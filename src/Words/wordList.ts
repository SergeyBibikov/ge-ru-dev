import {WordData, Category, PartOfSpeech} from './types';

export const allWords: WordData[] = [
    new WordData("утро", "დილა", "у", "დ", Category.Time, PartOfSpeech.Noun),
    new WordData("день", "დღეს", "д", "დ", Category.Time, PartOfSpeech.Noun),
    new WordData("вечер", "საღამო", "в", "ს", Category.Time, PartOfSpeech.Noun),
    new WordData("ночь", "ღამე", "н", "ღ", Category.Time, PartOfSpeech.Noun),
    new WordData("1", "ერთი", "1", "ე", Category.Number, PartOfSpeech.Numeric),
    new WordData("2", "ორი", "2", "ო", Category.Number, PartOfSpeech.Numeric),
    new WordData("3", "სამი", "3", "ს", Category.Number, PartOfSpeech.Numeric),
    new WordData("4", "ოთხი", "4", "ო", Category.Number, PartOfSpeech.Numeric),
    new WordData("5", "ხუთი", "5", "ხ", Category.Number, PartOfSpeech.Numeric),
    new WordData("6", "ექვსი", "6", "ე", Category.Number, PartOfSpeech.Numeric),
    new WordData("7", "შვიდი", "7", "შ", Category.Number, PartOfSpeech.Numeric),
    new WordData("8", "რვა", "8", "რ", Category.Number, PartOfSpeech.Numeric),
    new WordData("9", "ცხრა", "9", "ცხრა", Category.Number, PartOfSpeech.Numeric),
    new WordData("10", "ათი", "1", "ა", Category.Number, PartOfSpeech.Numeric),
    new WordData("11", "თერთმეტი", "1", "თ", Category.Number, PartOfSpeech.Numeric),
    new WordData("12", "თორმეტი", "1", "თ", Category.Number, PartOfSpeech.Numeric),
    new WordData("13", "ცამეტი", "1", "ც", Category.Number, PartOfSpeech.Numeric),
    new WordData("14", "თოთხმეტი", "1", "თ", Category.Number, PartOfSpeech.Numeric),
    new WordData("15", "თხუთმეტი", "1", "თ", Category.Number, PartOfSpeech.Numeric),
    new WordData("16", "თექვსმეტი", "1", "თ", Category.Number, PartOfSpeech.Numeric),
    new WordData("17", "ჩვიდმეტი", "1", "ჩ", Category.Number, PartOfSpeech.Numeric),
    new WordData("18", "თვრამეტი", "1", "თ", Category.Number, PartOfSpeech.Numeric),
    new WordData("19", "ცხრამეტი", "1", "ც", Category.Number, PartOfSpeech.Numeric),
    new WordData("20", "ოცი", "2", "ო", Category.Number, PartOfSpeech.Numeric),
    new WordData("100", "ასი", "1", "ა", Category.Number, PartOfSpeech.Numeric),
    new WordData("1000", "ათასი", "1", "ათასი", Category.Number, PartOfSpeech.Numeric),

]
export const verbs: WordData[] = [
];