function palindromes(sentense){
  let result = sentense.toLowerCase();
  const char = result.split('');
  let Regex = /\W|\s/g;
  //let Regex = /A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ/g;
  for(let i = 0; i < char.length + 1; i++){
    console.log(char.length);    
               
      if (Regex.test(char[i])) {   
        char.splice(i, 1); 
        i = i - 2;       
        }             
      }      
  
  console.log(char);
 
  let licznik = 0;
  for (let j = 0; j < char.length; j++){  

    if (char[j] == char[char.length - 1 - j]){
      licznik++;
      console.log(licznik);
      if (licznik == char.length){
        return true;
      }

    } else {
      return false;
    } 
  } 
}
console.log(palindromes("A Diana lulu, Ulu. Ululana Ida"));