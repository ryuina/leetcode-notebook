/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let availability = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if ((i === 0 && (flowerbed.length === 1 || flowerbed[1] === 0))
                || (i === flowerbed.length - 1 && flowerbed[flowerbed.length - 1 - 1] === 0)
                || (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0)
            ) {
                flowerbed[i] = 1
                availability += 1
            }
        }
    }
    return availability >= n
};

// Time: O(n)
// Space: O(1)
