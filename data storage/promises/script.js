document.getElementById("fetchData").addEventListener("click", fetchEmployeeData);

function fetchEmployeeData(){

    let employeePromise = new Promise((resolve, reject) => {
        setTimeout(() => {

        let success = true;
        if(success){
            let employeeData = {
        name : "John Doe",
        age: 25,
        designation: "software engineer"
            }
            resolve(employeeData)
        } 
        else{
            reject("Failed to fetch data");
        }
    },100)
        })
    
employeePromise.then((employeeData) => {
    console.log(employeeData);
    document.getElementById('employeeData').innerHTML = `Name:${employeeData.name}, Age:${employeeData.age}, Designation${employeeData.designation}`;

})

.catch((error) => {
console.log(error)
})

    
}
