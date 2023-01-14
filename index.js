


console.log('Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.')

var ages = [3,9,23,64,2,8,28,93]
console.log(ages)

//////////////

console.log('Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed!')
function lastFirst(){
    console.log(ages[ages.length-1] - ages[0])
}

lastFirst()

/////////////

console.log('Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).')

ages.push(18)

lastFirst()

/////////////

console.log('Use a loop to iterate through the array and calculate the average age.')


var sum = 0


function averageAge(){
    for(let i = 0;i < ages.length;i++){
        sum += ages[i]
    }
    console.log(sum/ages.length)
}

averageAge()

/////////////

console.log('Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob.')

var names = ['Sam','Tommy','Tim','Sally','Buck','Bob']
console.log(names)

//////////
console.log('Use a loop to iterate through the array and calculate the average number of letters per name.')

var sumTwo = 0

function letterAverage(){
    for (let i = 0; i < names.length; i++){
        sumTwo += names[i].length
    }
    console.log(sumTwo/names.length)
}

letterAverage()

///////////

console.log('Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.')

var allNames = ''

function namesCombine(){
    for (let i = 0; i < names.length; i++){
    allNames += names[i] + ' '
    }
}

namesCombine(names)


console.log(allNames)

///////////

console.log('How do you access the last element of any array?')

console.log('array[array.length-1]')

////////////////

console.log('How do you access the first element of any array?')

console.log('array[0]')

///////////////

console.log('Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.')

var nameLengths = []

for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
}

console.log(nameLengths)

/////////////////

console.log('Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.')

var sumThree = 0

for(let i = 0; i < nameLengths.length; i++){
    sumThree += nameLengths[i]
}

console.log(sumThree)

//////////////////

console.log('Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.')

var finalString = ''
var wordAmount = (n,word) =>{
    finalString = ''
    for(let i= 0 ; i < n; i++){
        finalString += word
    }
    return finalString
}

console.log(wordAmount(3,'Hello'))

/////////////////

console.log('Write a function that takes two parameters, firstName and lastName, and returns a full name.')


var fullName = (firstName,lastName) => `${firstName} ${lastName}`

console.log(fullName('Levi','Manning'))

///////////////////


console.log('Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.')

var numberArray1 = [25,30,40,50,45]
var numberArray2 = [1,2,3,4,5]

function oneHundred(arr){
    var arrSum = 0
    for (let i = 0;i < arr.length; i++){
        arrSum += arr[i]
    }
    if (arrSum > 100){
        return true
    } else {
        return false
    }
}

console.log(numberArray1)

console.log(oneHundred(numberArray1))

console.log(numberArray2)

console.log(oneHundred(numberArray2))


//////////////////

console.log('Write a function that takes an array of numbers and returns the average of all the elements in the array.')

function arrayAverage(arr){
    var arrSum = 0
    for (let i = 0; i < arr.length; i++){
        arrSum += arr[i]
    }
    return arrSum/arr.length
}

console.log(numberArray1)
console.log(arrayAverage(numberArray1))

console.log(numberArray2)
console.log(arrayAverage(numberArray2))

////////////////////

console.log('Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.')

var compareAverages = (arr1,arr2) =>{
    oneSum = 0
    for (let i = 0; i < arr1.length; i++){
        oneSum += arr1[i]
    }
    var averageOne = oneSum/arr1.length

    twoSum = 0
    for (let i = 0; i < arr2.length; i++){
        twoSum += arr2[i]
    }
    var averageTwo = twoSum/arr2.length

    if (averageOne>averageTwo){
        return true
    } else {
        return false
    }
}

console.log(numberArray1)
console.log(numberArray2)

console.log(compareAverages(numberArray1,numberArray2))

console.log(numberArray2)
console.log(numberArray1)

console.log(compareAverages(numberArray2,numberArray1))


//////////

console.log('Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.')

var willBuyDrink = (isHotOutside,moneyInPocket) => {
    if (isHotOutside == true && moneyInPocket > 10.50){
        return true
    } else {return false}
}

console.log ("true, 11.53")
console.log(willBuyDrink(true,11.53))

console.log('false, 12.36')
console.log(willBuyDrink(false,12.36))

console.log('true, 10.32')
console.log(willBuyDrink(true, 10.32))


/////////////

console.log('Create a function of your own that solves a problem.  In comments, write what the function does and why you created it.')

////////////
////the nameFix function I created takes an array of names and makes sure the first letter of every name is capital
////////////

console.log('My function makes sure all the names in an array have the first letter capitalized')

var namesArray1 = ['tony','paul','chris','bobby','jennifer','hope']

var namesArray2 = ['george','John','Roger','Frank','bill','ted']


function nameFix(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    return arr
}

console.log('before')
console.log(namesArray1)
console.log('after')
console.log(nameFix(namesArray1))

console.log('before')
console.log(namesArray2)
console.log('after')
console.log(nameFix(namesArray2))





