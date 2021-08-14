
let employeeDetails = {}


function Avg_Number(){ 
        return employeeDetails.avgNo = document.getElementById("Avg_no").value;
}

function Employ_Number(){ 
    return employeeDetails.employeeNumber = document.getElementById("Employ_no").value;
}

function percentage_Number(){ 
    return employeeDetails.timeReq = document.getElementById("Time_req").value;
}


let avg = 0;
function Numb_perEmp(e) { 
    
    
    avg = Avg_Number() / Employ_Number();
    
    document.getElementById("numb").innerText = Math.round(avg);
    
    
    
    let per = ((avg * percentage_Number()/480) * 100 ) ;
    
    console.log(avg);
    console.log(percentage_Number());
    console.log(per);


    document.getElementById("percentage_per_imployee").innerText =parseFloat(per).toFixed(1);
    e.preventDefault();
}


// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }














