let str = "javascript";

// Object to map
let map = {};

for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
        // If present, then update it
        map[str[i]] += 1;
    } else {
        // Not present, add it
        map[str[i]] = 1;
    }
}

console.log(map);
