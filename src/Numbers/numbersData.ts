const basic = {
    "1": "ერთი",
    "2": "ორი",
    "3": "სამი",
    "4": "ოთხი",
    "5": "ხუთი",
    "6": "ექვსი",
    "7": "შვიდი",
    "8": "რვა",
    "9": "ცხრა",
    "10": "ათი",
    "11": "თერთმეტი",
    "12": "თორმეტი",
    "13": "ცამეტი",
    "14": "თოთხმეტი",
    "15": "თხუთმეტი",
    "16": "თექვსმეტი",
    "17": "ჩვიდმეტი",
    "18": "თვრამეტი",
    "19": "ცხრამეტი",
    "20": "ოცი",
    "100": "ასი",
    "1000": "ათასი",
    "1000000":"მილიონი"
}

const tens = {
    "40":"ორმოცი",
    "60":"სამოცი",
    "80":"ოთხმოცი",
}

const hundreds = {
    "200":"ორასი",
    "300":"სამასი",
    "400":"ოთხასი",
    "500":"ხუთასი",
    "600":"ექვსასი",
    "700":"შვიდასი",
    "800":"რვაასი",
    "900":"ცხრაასი",
}

export const allNumbers: {[key: string]: string} = {...tens, ...basic, ...hundreds}