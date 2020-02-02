// a b c
/*
  a     b    c
 b c   a c  a b
 c b   b c  b a
*/


const getAllAnagrams = (string) => {
  const anagrams = [];

  if (string.length === 1) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    const remainingChars = getAllAnagrams(string.slice(0, i) + string.slice(i + 1));

    for (let j = 0; j < remainingChars.length; j++) {
      anagrams.push(string[i] + remainingChars[j]);
    }
  }

  return anagrams;
};

console.log(getAllAnagrams('abc'));