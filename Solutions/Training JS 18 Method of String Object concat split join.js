//  Task:
/*
Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters 
and join them back with the specified separator, join all the resulting "words" back into a sentence with 
spaces.
*/

/*
For Example:
splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
*/


function splitAndMerge(string, separator) {
    let word = string.split(" ");
    let str  = word.map(element => element.split("").join(separator));
    return str.join(" ");
}
splitAndMerge("My name is John"," ");
splitAndMerge("My name is John","-")
splitAndMerge("My name is John",".")
splitAndMerge("My name is John",",")
