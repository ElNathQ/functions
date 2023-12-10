function firstLetterName(name){
   console.log("The name " + name + " starts with the letter " + name[0] + "."); 
}

function divisibleByTwo(num){
    if(num % 2 == 0){
        console.log("True, even number.");
    }else{
        console.log("False, odd number.");
    }
}

function largestNum(array){
    var large = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > large){
            large = array[i];
        }
    }
    console.log(large);
}

firstLetterName("Dog");
divisibleByTwo(9);
largestNum([1, 4, 5, 2, 7, 1, 9]);