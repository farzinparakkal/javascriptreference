const datefor = /^([012]?\d|3[01])-([0]\d|[1][012])-(\d{4})$/i

function Myfun(){
    let date = document.getElementById("date").value;
    let show = document.getElementById("show")
    console.log("value :",date)
    if(datefor.test(date)){
        console.log("Date is valid")
        show.innerHTML = "Date is valid"
    }else{
        console.log("Date is not valid")
        show.innerHTML = "Date is not valid"
    }
}