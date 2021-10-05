import levenshtein from 'js-levenshtein';

export const findMatchString = (array = [], strTocheck = '') => {
    let min = null;
    let match = '';
    array.forEach((value) => {
        //if it's first iteration or levienshtein algorithem return minimal value
        if(min == null || min > levenshtein(strTocheck.toLowerCase(),value.toLowerCase())) {
            match = value;
            min = levenshtein(strTocheck.toLowerCase(),value.toLowerCase())
        }
    })

    //clac 65% match;
    if(min === 0) return match;
    if(min > match.length) return null;
    const matchPercent = (1 - (match.length-min)/match.length)
    if(matchPercent < 0.65) return null;
    return match;
}