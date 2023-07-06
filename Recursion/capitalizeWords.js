// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeWords (arr) {
    if (arr.length === 1) return [arr[0].toUpperCase()]    
    let caps = capitalizeWords(arr.slice(0, -1))
    caps.push((arr[arr.length-1]).toUpperCase())
    return caps
}

let words = ['i', 'am', 'poop', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// words = ['i', 'am', 'learning', 'recursion'];
//         ['I'] + capitalizeWords ['am', 'learning', 'recursion']
//                 ['am'] + capitalizeWords['learning', 'recursion']
//                         ['learning'] + capitalizeWords['recursion']
//                                         ['recursion']

// words = ['i', 'am', 'learning', 'recursion'];
// ['I'] + capitalizeWords ['am', 'learning', 'recursion']
//         ['AM'] + capitalizeWords['learning', 'recursion']
//                 ['LEARNING'] + ['RECURSION']                                       

// words = ['i', 'am', 'learning', 'recursion'];
// ['I'] + capitalizeWords ['am', 'learning', 'recursion']
//         ['AM'] + ['LEARNING', 'RECURSION'] 
                   
// words = ['i', 'am', 'learning', 'recursion'];
// ['I'] + ['AM', 'LEARNING', 'RECURSION']

// words = ['I', 'AM', 'LEARNING', 'RECURSION'];
