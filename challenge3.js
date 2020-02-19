//Determines if two strings of letters are anagrams.
//Instructions: Run the program with string1 and string2 in the brackets.

function anagrams(stringA, stringB) {
    return niceString(stringA) === niceString(stringB);
}

function niceString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}   

console.log(anagrams('eat','tae'))