//  Task:
/*
Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone 
numbers. You will then be given an unknown number of names to query your phone book for. For each  
name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; 
if an entry for name is not found, print Not found instead.

Note: Your phone book should be a Dictionary/Map/HashMap data structure.

Sample Input:
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry

Sample Output:
sam=99912222
Not found
harry=12299933
*/

function processData(input) {
    input = input.split('\n');
    var phoneBook =  [];

    for(let i=1; i <= parseInt(input[0]); i++) {
        var word = input[i].split(' ');
        phoneBook[word[0]] = word[1];
    }

    for(let i = (parseInt(input[0])+1); i < input.length; i++){
        if (phoneBook[input[i]]) {
            console.log(input[i] + '=' + phoneBook[input[i]]);
        } else {
            console.log('Not found');
        }
    }
}