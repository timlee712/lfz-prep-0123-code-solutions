var person = {
  firstName: 'Timothy',
  lastName: 'Lee',
  hobby: 'Video Games'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is: ", fullName);

person.job = 'Web Developer';
console.log("This person's current job is: ", person.job);

person.previousJob = 'Jamba Juice Employee';
console.log("This person's previous job is: ", person.previousJob);

console.log(person);
