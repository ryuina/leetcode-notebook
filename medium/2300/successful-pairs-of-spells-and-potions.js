/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

const findTargetIndex = (list, target) => {
    let start = 0
    let end = list.length - 1
    while (start <= end) {
        let i = Math.floor((start + end) / 2)
        
        if (target > list[i]) {
            start = i+1
        }
        else {
            end = i-1
        }
    }
    return start
}

var successfulPairs = function(spells, potions, success) {
    let result = []
    potions.sort((a, b) => a-b)

    for (let i=0; i < spells.length; i++) {
        const target = success / spells[i]
        result.push(potions.length - findTargetIndex(potions, target))
    }
    return result
};

// Time: O(s*plogp) 
// Space: O(p)
