function convertToFarenheit(celsius) {
    return ((celsius * 9 / 5) + 32)
}


function sumEvenNumbers(numbers){
    let sum = 0
    for (num of numbers){
        if (num % 2 == 0){
            sum += num
        }
    }
    return sum
}


function countVowelsAndConsonants(inputString){
    const vowelMaster = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let vowels = []
    let consonants = []

    for (letter of inputString){
        yesVowel = false
        for (item of vowelMaster){
            if (item == letter){
                yesVowel = true
            }
        }
        if (yesVowel == true){
            vowels.push(letter)
        }else{
            consonants.push(letter)
        }
    }
    return `Vowels: ${vowels.length}, Consonants: ${consonants.length}`
}


function findLongestWord(sentence){
    let longest = ''
    let currentWord = ''

    for (letter of sentence){
        if (letter == ' '){
            if (currentWord.length > longest.length){
                longest = currentWord
            }
            currentWord = ''
        }else{
            currentWord += letter
        }
    }
    
    return longest
}


function findLargestAgeDifference(agePairs){
    let largestDifference = 0
    let currentDifference = 0

    for (pair of agePairs){
        currentDifference = pair[1] - pair[0]
        if (currentDifference > largestDifference){
            largestDifference = currentDifference
        }
    }
    return largestDifference
}


console.log(findLargestAgeDifference([]));
