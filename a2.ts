// Assignment 1: Building your friend list
// 1.
type Mod = {
    friends: any[],
}

let people: Mod = {
    friends: [],
}

// 2.
const friend1 = {
    firstname: "Ali",
    lastname: "Akbar"
}
const friend2 = {
    firstname: "Noor",
    lastname: "Amjad"
}
const friend3 = {
    firstname: "Asif",
    lastname: "Iqbal"
}

// 3,
people.friends.push(friend1,friend2,friend3);

// 4.
console.log(people);

// Assignment 2: Manipulating an Array: Rearranging Words
// 1.
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]

// Modification:
scrambledArray.splice(2, 2);
let correctArray = ["I", "am", "a", "student", "of", "GIAIC"]

let rearrangedArray = (array:any[], target: any[]) => {
    return target.map(elements => array[array.indexOf(elements)])
};
const arrangedArray = rearrangedArray(scrambledArray, correctArray)

// Output:
console.log(`\nThe resultant array in string format is: "${arrangedArray.join(" ")}".`);

// Assignment 3: Company Product Catalog
// 1,
let inventory:any[] = []

// 2.
const pro1: object = {
    name:"iPhone",
    model: 12,
    cost: 1200,
    quantity: 145,
}
const pro2: object =     {
    name:"Rolex",
    model: 8,
    cost: 150,
    quantity: 53,
}
const pro3: object =    {
    name:"Hand Bag",
    model: 29,
    cost: 50,
    quantity: 70,
}

// 3.
inventory.push(pro1, pro2, pro3)

// 4.
console.log(`\nQuantity of Hand Bag: ${inventory[2].quantity} pcs.`);

// 5.                  I'm accessing property of iPhone.
console.log(`Quantity of iPhone: ${inventory[0].quantity} pcs.`);

// Assignment 4: Student List Organizer
// 1.
type Student = {
    name: string,
    seniorStatus: boolean,
    assignmentsCompleted: boolean,
}

// 2.
let students: Student[] = [
    {
        name: "Shaheer",
        seniorStatus: false,
        assignmentsCompleted: true,
    },
    {
        name: "Uzair",
        seniorStatus: true,
        assignmentsCompleted: true,
    },
    {
        name: "Taha",
        seniorStatus: false,
        assignmentsCompleted: false,
    },
    {
        name: "Ahmed",
        seniorStatus: true,
        assignmentsCompleted: false,
    },
]

// 3.
function seniorsWithAssignments(students: Student[]){
    return students.filter(x => x.assignmentsCompleted && x.seniorStatus)
}
const seniors = seniorsWithAssignments(students)
console.log('\n', seniors);
console.log('\nThis approach helps us to look after the progress of hardworking students\naccept for the lazy ones and keep an eye on whose up to date so that we can award the hard working ones.');

// 4.
function classListUpdate(students: Student[]){
    return students.filter(i => i.assignmentsCompleted)
}
const goodStudents = classListUpdate(students)
console.log('\n', goodStudents);