/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length ) {
        return false
    }
    let wordmap1 = word1.split('').reduce((prev, acc) => ({...prev, [acc]: (prev[acc] || 0) + 1}), {})
    let wordmap2 = word2.split('').reduce((prev, acc) => ({...prev, [acc]: (prev[acc] || 0) + 1}), {})

    const keylist1 = Object.keys(wordmap1)
    const keyset2 = new Set(Object.keys(wordmap2))
    if (keylist1.length !== Array.from(keyset2).length) {
        return false
    }

    for (let i=0; i< keylist1.length; i++) {
        if (!keyset2.has(keylist1[i])) {
            return false
        }
    }
    

    const counts1 = Object.values(wordmap1).reduce((prev, acc) => ({...prev, [acc]: (prev[acc] || 0) + 1}), {})
    const counts2 = Object.values(wordmap2).reduce((prev, acc) => ({...prev, [acc]: (prev[acc] || 0) + 1}), {})
    if (Object.entries(counts1).find(([key, value]) => !counts2[key] || counts2[key] !== value)){
        return false   
    }
    return true
};

// Time: O(n+m)
// space: O(n+m)

// from solution
var closeStrings2 = function(word1, word2) {
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    for (let ch of word1) {
        freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let ch of word2) {
        freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0 && freq2[i] !== 0) || (freq1[i] !== 0 && freq2[i] === 0)) {
            return false;
        }
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    }
    return true
};
