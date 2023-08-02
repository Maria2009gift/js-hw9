
// -----Завдання 1-----

let numbersT1 = [1, 2, 3]
numbersT1 = [1, 10, 3]

console.log(numbersT1)

// -----Завдання 2-----

let strT2 = ["str1 ", "str2 ", "str3 ",]
strT2 = ["str1 ", "str2 ", "str3 ", "str4"]

console.log(strT2)

// -----Завдання 3-----

const addAllNumbers = [15, 3, 67, 25]
let sum = 0
for (let i = 0; i < addAllNumbers.length; i+=1) {
    const element = addAllNumbers[i]
    sum += element
}
console.log(sum);

// ------Завдання 4-----

const numbersT4 = [78, 24, 5, 93, 4]

for (let k = 0; k < numbersT4.length; k+=1) {
    const allNumbers = numbersT4[k]
    console.log(allNumbers)
}

// -----Завдання 5-----

const strT5 = ["tree", "puzzle", "glasses", "pen", "dolphin"]

for (let w = 0; w < strT5.length; w+=1) {
    const allStr = strT5[w]
    if (allStr.length > 5) {
        console.log(allStr)
    }
}

// -----Завдання 6-----

const numbersT6 = [78, 24, 5, 93, 4, 59, 12, 92, 103, 51]
let maxNumber = numbersT6[0]

for (let x = 0; x < numbersT6.length; x+=1) {

    if (maxNumber < numbersT6[x]) {
        maxNumber = numbersT6[x]
    }
}
console.log(maxNumber)

// -----Завдання 7-----

const numberT7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let m = 0; m < numberT7.length; m += 1) {

    if (numberT7[m] % 2 === 0) {
      console.log(numberT7[m])
    }
  }







