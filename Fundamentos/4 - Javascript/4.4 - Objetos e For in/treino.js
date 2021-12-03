let palavra = "arara";

function palindromo(palavra){
    if (palavra.reverse() === palavra){
        return true;
    } else {
        return  false;
    }
}
console.log(palindromo("arara"))