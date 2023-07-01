// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
    if (str.length <=1) return str
    return reverse(str.slice(1)) + str[0]
}


console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

// reverse('awesome')
//     reverse(wesome) + a
//         reverse(esome) + w
//             reverse (some) + e
//                 reverse (ome) + s 
//                     reverse (me) + o 
//                         reverse (e) + m 
//                             e

// emosewa
//     emosew + a
//         emose + w                    
//             emos + e
//                 emo + s
//                     em + o
//                         e + m
//                             e