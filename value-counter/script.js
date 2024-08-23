let data = 100

document.getElementById("counting").innerText = data

function increment() {
	data = data + 1
	document.getElementById("counting").innerText = data
}

function decrement() {
	data = data - 1
	document.getElementById("counting").innerText = data
}

function reset(){
    data = 100
	document.getElementById("counting").innerText = data
}

//second part

let data1 = 200

document.getElementById("counting1").innerText = data1

function increment1() {
	data1 = data1 + 1
	document.getElementById("counting1").innerText = data1
}

function decrement1() {
	data1 = data1 - 1
	document.getElementById("counting1").innerText = data1
}

function reset1(){
    data1 = 200
	document.getElementById("counting1").innerText = data1
}