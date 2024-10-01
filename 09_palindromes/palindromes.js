const palindromes = function (phrase) {
    removedspaces = phrase.split(" ").join("");
    noPunctuationPhrase = "";
    for (let i = 0; i < removedspaces.length; i++) {
        let character = removedspaces.charAt(i);
        if (!checkPunctuation(character)) {
            noPunctuationPhrase += character;
        }
    }

    noPunctuationPhrase = noPunctuationPhrase.trim().toLowerCase();
    reversedPhrase = "";
    for (let i = noPunctuationPhrase.length-1; i >= 0; i--) {
        reversedPhrase += noPunctuationPhrase.charAt(i);
    }

    return (noPunctuationPhrase === reversedPhrase);
};

function checkPunctuation(character) {
    const punctuations = "~!@#$%^&*()_+\`-={}|[]:;\'<>?,./\""
    return punctuations.includes(character);
}

// Do not edit below this line
module.exports = palindromes;
