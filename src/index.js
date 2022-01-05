module.exports = function toReadable (number) {
    const objNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred"
    }
    
    let str = String(number);
    
    if (objNumbers[number] !== undefined) {
        return objNumbers[number];
    } else {
        if (str.length === 2) {
            return objNumbers[+(str[0]+'0')] + ' ' + objNumbers[+str[1]];
        } else if (objNumbers[str[1]+str[2]] !== undefined) {
            return objNumbers[str[0]+'00'] + ' ' + objNumbers[str[1]+str[2]];
        } else if (str[1] === '0') {
            return objNumbers[+(str[0]+'00')] + ' ' +objNumbers[+str[2]];
        } else if (str[2] === 0) {
            return objNumbers[+(str[0] + '00')] + ' ' + objNumbers[+(str[1] + '0')];
        } else {
            return objNumbers[+(str[0]+'00')] + ' ' + objNumbers[+(str[1]+'0')] + ' ' +objNumbers[+str[2]];
        }
    }
}
