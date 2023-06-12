const CV = {
    title:"Dr",
    name:"Kudaya Paul Yao",
    date_of_birth:"07-Dec-1995",
    home:"Ashaiman Zenu School Junction",
    school:["Kwame Nkrumah University of Science and Technology","Accra Academy"],
    technologies:["Git","Firebase","React.js","TailwindCss","CSS","HTML"],
    programming_language:"Javascript",
    languages:["English","German","French","Ewe","Twi","Ga"],
    marital_status: "Single",
    children: null,
    pets: null,
    hobbies:["Camping","Cooking","Reading","Travelling"]
}

const spices = [
    {name:"Emma",nickname:"Baby"},
    {name:"Susan", nickname:"Stone"}
]

const {name,nickname}=spices[0];

const spiceSellers = {
    albums:["Spice","Spiceworld","Forever"],
    motto:"Girl Power",
    members:spices
}
// console.log(spiceSellers.members[1].nickname)
const names =spices.map((item)=>item.name)
const endInY = spices.filter((item)=>item.nickname.endsWith('y'))


console.log (names)
console.log(endInY)
