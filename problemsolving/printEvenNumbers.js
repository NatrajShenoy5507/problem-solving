class NumberPrinter {
    constructor(limit, startNum) {
        this.limit = limit;
        this.startNum = startNum;
    }

    printEvenNumbers() {
        for (let i = 0; i <= this.limit; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
    printEvenNumbersBetween(){
        for (let i = this.startNum; i <= this.limit; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
    printOddNumber(){
        for (let i = 0; i <= this.limit; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
    }
    printPrimeNumber(){
        for(let i=2;i<this.limit; i++){
            let prime=true
            for(let j=2; j<i; j++){
                if(i%j===0){
                    prime=false;
                    break
                }
            }
            if (prime) {
                console.log(i);
            }
        }
    }
    printFactorial(){
        let result = 1;
        let i = 1;
        while (i <= this.limit) {
            result *= i;
            i++;
        }
        console.log(`Factorial of ${this.limit} is ${result}`);
    }
}

// Usage
const printer = new NumberPrinter(3);
// printer.printEvenNumbers();
// printer.printEvenNumbersBetween()
// printer.printOddNumber()
// printer.printPrimeNumber()
printer.printFactorial()
