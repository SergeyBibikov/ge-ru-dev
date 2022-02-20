import * as wl from "./wordList";
import {WordData} from "../types";

export function getWords(): WordData[] {
    return wl.allWords;
}