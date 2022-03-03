module.exports = function toReadable (number) {
    const numbers = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
        30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 
        80: 'eighty', 90: 'ninety', 100: 'hundred'
    }
    let lengthNumber = String(number).length
    let ranksDigits = String(number).split('')//214

    if (lengthNumber == 1) return numbers[ranksDigits[0]]
    if (lengthNumber == 2) {
        return numbers[ranksDigits[0] + ranksDigits[1]] ? numbers[ranksDigits[0] + ranksDigits[1]] : `${numbers[ranksDigits[0]+0]} ${numbers[ranksDigits[1]]}`
    }
    if (lengthNumber == 3) {
        if (ranksDigits[1] + ranksDigits[2] == 0) return `${numbers[ranksDigits[0]]} hundred`
        if (ranksDigits[1] == 0 && ranksDigits[2] != 0) return `${numbers[ranksDigits[0]]} hundred ${numbers[ranksDigits[2]]}`
        if (numbers[ranksDigits[1]+ranksDigits[2]]) return `${numbers[ranksDigits[0]]} hundred ${numbers[ranksDigits[1]+ranksDigits[2]]}`
        else return `${numbers[ranksDigits[0]]} hundred ${numbers[ranksDigits[1]+0]} ${numbers[ranksDigits[2]]}`
    }
}