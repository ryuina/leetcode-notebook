/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = Array(rooms.length).fill(false)
    let currVisiting = [0]
    while (currVisiting.length > 0) {
        const nextVisiting = []
        currVisiting.forEach((room) => {
            visited[room] = true
            const cands = rooms[room]
            cands.forEach((cand) => {
                if (!visited[cand]) {
                    nextVisiting.push(cand)
                }
            })
        })
        currVisiting = nextVisiting
    }
    return visited.filter((v) => !v).length === 0
};

// Time Complexity: O(N)
// Space Complexity: O(N)
