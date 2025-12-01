name = "Tony Stark";
age = 24;

x = null;
y = undefined;
console.log(name);
console.log(age);

console.log(x);
console.log(y);


const student = {
    fullName: "Tony Stark",
    age: 25,
    cgpa: 8.2,
    isPass: true
};

console.log(student["age"]);

student.age = student.age + 1;


let marks = [85,97,44,37,76,60];
let sum= 0;
for (let i of marks) {
    sum += i;
}

let average = sum/marks.length;
let statement = `The Average of class is  ${average} !`;
console.log(statement);

let prices = [250,645,300,900,50];

console.log(prices);

for (let i=0; i<prices.length; i++){
    prices[i] = prices[i] * 0.90;
}

console.log(prices);

let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];

console.log(companies);
companies.shift()
console.log(`first company removed: ${companies}.`);
companies.splice(1,1,"Ola")
console.log(`removed Uber & add Ola: ${companies}.`);
companies.push("Amazon")
console.log(companies);

function vowelsFinder(string){
    let count = 0;
    for (let i of string.toLowerCase()){
        if (i === 'e' || i === 'a' || i === 'i' || i === 'o' || i === 'u'){
            console.log(i);
            count++;
        }
    }
    return count;
}

const arrowVowels = (string) => {
    let count = 0;
    for (let i of string.toLowerCase()){
        if (i === 'e' || i === 'a' || i === 'i' || i === 'o' || i === 'u'){
            console.log(i);
            count++;
        }
    }
    return count;
}

vowelsFinder("hello")
arrowVowels("hello")














