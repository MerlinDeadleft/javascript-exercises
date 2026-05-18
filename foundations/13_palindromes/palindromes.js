const palindromes = function (str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversed = cleanedStr.split("").reverse().join("");

    console.log(cleanedStr+"\n"+reversed);
    return cleanedStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
