/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.trim().toLowerCase()
  str2 = str2.trim().toLowerCase()

  if(str1.length != str2.length){
    return false;
  }
  
  s = str1.split('').sort();
  s1 = str2.split('').sort();
  
  let ans = true;
  for(let i=0; i<s.length; i++){
      if(s[i] != s1[i]){
        ans = false;
      }
  }
    return ans;
} 

module.exports = isAnagram;
