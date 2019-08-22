// 917. Reverse Only Letters

/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:
Input: "ab-cd"
        s   e
Output: "dc-ba"

Example 2:
Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

var reverseOnlyLetters = function (S) {
    //split string into array
    let arr = S.split("")
    //using two pointers , s & e  

    function swap (arr){
        let s = 0;
        let e = arr.length - 1;
        while (arr[s]!== e) {
            if (arr[s].charCodeAt() >= 65 && arr[s].charCodeAt() <= 90 || arr[s].charCodeAt() >= 97 && arr[s].charCodeAt() <= 122){
                if (arr[e].charCodeAt() >= 65 && arr[e].charCodeAt() <= 90 || arr[e].charCodeAt() >= 97 && arr[e].charCodeAt() <= 122)
                let temp = arr[e];
                arr[e] = arr[s];
                arr[s] = temp;
            }else{
                e--;
            }
        }
        charCodeAt()
    }    
    //write a swap function to pass in an array 
    //if the charcodeat 65~90 upper 97~122 lower S[i].charcodeat()
};