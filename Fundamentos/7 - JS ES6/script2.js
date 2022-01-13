
// num 1
const fatorial = number => {
    let answer = 1;
      for(let i = number; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  
  console.log(fatorial(6));

//   num 2

const maiorPalavra = frase => {
        let longestWord = frase.split(' ').reduce(function(longest, currentWord) {
          return currentWord.length > longest.length ? currentWord : longest;
        }, "");
        return longestWord.length;
      }
      console.log(maiorPalavra("The quick brown fox jumped over the lazy dog"));