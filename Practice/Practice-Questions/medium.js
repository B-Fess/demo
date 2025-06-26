function findUniqueCharacters(str){
    let unique = ''
    let input = []

    for (char of str){
        input.push(char)
    }
    for (char of input){
        let count = 0
        for (x of input){
            if(x == char){
                count ++
            }
        }
        if(count == 1){
            unique += char
        }
    }
    return unique
}


function mergeSortedArrays(arr1, arr2){
    let merged = []
    let len = arr1.length + arr2.length
    let array1 = arr1
    let array2 = arr2

    for(let i = 0; i < len; i++){
        if(array1[0] == undefined){
            merged.push(array2[0])
            array2.shift()
            continue
        } 
        if (array2[0] == undefined){
            merged.push(array1[0])
            array1.shift()
            continue
        } 
        if(array1[0] <= array2[0]){
            merged.push(array1[0])
            array1.shift()
        }else{
            merged.push(array2[0])
            array2.shift()
        }
    }

    return merged
}


const employees0 = [
{ id: 1, name: "John Doe", position: "Software Engineer", salary:
70000, department: { name: "Engineering", location: "New York" } },
{ id: 2, name: "Jane Smith", position: "Product Manager", salary:
80000, department: { name: "Product", location: "San Francisco" } }
];
const employees1 = [
{ id: 1, name: "John Doe", position: "Developer", salary: 60000,
department: { name: "Development", location: "New York" } },
{ id: 2, name: "Jane Smith", position: "Designer", salary: 65000,
department: { name: "Design", location: "San Francisco" } }
];
const employees2 = [
{ id: 1, name: "Alice Brown", position: "Manager", salary: 75000,
department: { name: "Management", location: "London" } }
];
const employees3 = [
{ id: 1, name: "Bob Green", position: "Analyst", salary: 50000,
department: { name: "Analytics", location: "Berlin" } }
];

function updateEmployeeSalary(employees, employeeId, newSalary){
    for (person of employees){
        if(person.id == employeeId){
            person.salary = newSalary
            return person
        }
        return null
    }
}


function rotateArray(arr, k){
    let len = arr.length - 1
    let newArray = arr
    let rotation = arr

    for (let i = 0; i < k; i++){
        rotation = [newArray[len]]
        for (let x = 0; x < (len); x++){
            rotation.push(newArray[x])
        }
        newArray = rotation
    }

    return newArray
}


function isPalindrome(str){
    let string = ''
    let punctuation = [' ', '?', ',', '.', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', "'"]
    let reverse = ''

    for (item of str){           // separes punctionation and spaces
        let isPunct = false

        for (char of punctuation){
            if (char == item){
                isPunct = true
                continue
            }
        }
        if (isPunct == false){
            string += item
        }
    }
    
    let len = string.length

    for (let i = 0; i < len; i++){
        reverse += string[(len - 1) - i]
    }

    if (string.toLowerCase() == reverse.toLowerCase()){
        return true
    }else return false
    
}

console.log(isPalindrome("12321! #@!12321")); 


