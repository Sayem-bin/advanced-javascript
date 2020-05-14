const students=[
    {id: 32, name: "sakib khan"},
    {id:23 , name:"zahid khan"},
    {id:44,  name:"Mouyri"},
    {id:55,  name:"Dipjol"}

];

const name= students.map( s => s.name);
const ids= students.map(s =>s.id);
const bigger= students.filter( s =>s.id>40)
const bigger2=students.find(s =>s.id>40)
console.log(bigger2);