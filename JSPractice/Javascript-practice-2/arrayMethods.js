let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

number.map((e) => {
  console.log(e * 2);
});

  let employee = [
    { name: 'John', age: 25, department: 'IT' },
    { name: 'Jane', age: 30, department: 'HR' },
    { name: 'Bob', age: 35, department: 'IT' }
  ];

    let itEmployees = employee.filter((emp) => emp.department === 'IT'); 


    let itEmp = employee.filter((abc) => abc.department === 'IT');
    console.log(itEmp);

    let itempAge = employee.filter((empage)  => empage.age >= 35);
    console.log(itempAge);
    

