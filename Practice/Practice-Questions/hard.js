function mergeAndFormat(books, format){
    let newBooks = []

    for (obj of books){
        let count = 0
        for (item of books){
            if(obj.title == item.title){
                if(obj.author == item.author){
                    count++
                    if(count > 1){
                        obj.year = obj.year.concat(item.year)
                        yesAdded = false
                        for (titles of newBooks){
                            if (titles.title == obj.title){
                                yesAdded = true
                            }
                        }
                        if (yesAdded == false){
                            newBooks.push(obj)
                        }
                    }
                }
                
            }
        }
    }
    if (format == "string"){
        result = []
        for (item of newBooks){
            result.push(`${item.title} by ${item.author} (${item.year})`)
        }
        console.log(result)
    }
    if (format == "object"){
        console.log(newBooks)
    }


}

const books = [
{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year:
[1925] },
{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year:
[2020] },
{ title: "1984", author: "George Orwell", year: [1949] },
{ title: "1984", author: "George Orwell", year: [1983] }
];

const format = "object";


function filterAndTransform(people){
    result = []

    for (person of people){
        if (person.age > 17){
            result.push(`${person.name} is ${person.age} years old and loves ${person.hobby}`)
        }
    }
    console.log(result)
}

const people = [
{ name: "Kare", age: 22, hobby: "skiing" },
{ name: "Leo", age: 24, hobby: "equestrianism" }
];


function compressString(str){
    result = ""
    count = ""

    if (str == ""){return ""}  

    for (letter of str){
        if (count.includes(letter) || count == ""){
            count += letter
        }else{
            result += count[0]
            if (count.length > 1){
                result += count.length
            }
            count = letter
        }

    }
    result += count[0]
    if (count.length > 1){
        result += count.length
    }
    console.log(result)
}


function canFormPalindrome(str){
    input = []
    singles = []
    singleCount = 0

    for (char of str){
        if (char != ' '){
            input.push(char)
        }
    }
    input = input.toString()

    for (char of input){
        if (singles.includes(char)){
            delete singles[singles.indexOf(char)]
        }else {
            singles.push(char)
        }
    }
    for (char of singles){
        if (char != undefined){
            singleCount ++
        }
    }
    
    if (input.length % 2 == 0){
        if (singleCount == 0){
            return true
        }else return false
    }else {
        if (singleCount == 1){
            return true
        }else return false
    }
}


function customSort(arr){
    let result = []
    let accounted = []
    let maxCount = 0
    let maxChar = []
    
    while (result.length < arr.length){

        

    }
    
    return result
}

console.log(customSort(4,3,1,6,4,3,6,4))

