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

    if(min === 0) return match;
    if(min >= match.length) return shellowMatchStrings(array,strTocheck);
    //clac match of 65%;
    const matchPercent = (match.length-min)/match.length
    return matchPercent < 0.65 ? shellowMatchStrings(array,strTocheck) : match;
}


const shellowMatchStrings = (array, strTocheck) => {
    const tempArry = strTocheck.split(/[\s,-.\:]+/) //split the string by multiple seperator (' '/','/'-',':','.') 
    let totals = {}
    let maxCounter = 0;
    let maxMatch = null
    for(let i = 0; i < tempArry.length; i++){
        const matchArr = tempArry[i].length >= 3 ? array.filter(value => value.toLowerCase().indexOf(tempArry[i].toLowerCase()) != -1) : null;
        if(matchArr){
            matchArr.forEach((match) => {
                totals[match] = !totals[match] ? 1 : totals[match] + 1; 
                if(maxCounter < totals[match]) maxMatch = match;
            })
        }
    }
    return maxMatch;
}