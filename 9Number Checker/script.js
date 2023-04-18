function numberChecker(arr){
    this.array = arr
    return function anotherFunc(arr){
        this.anotherArray = arr
        if(this.array.includes(this.anotherArray)){
            console.log("True");
        }else{
            console.log("False");
        }
    }
}

let arr = [1,2,3,4,9];
let check = numberChecker(arr);
console.log(check(9));