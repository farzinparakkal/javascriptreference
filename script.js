
// //q1
// {
//     function fsum(arr){
//         let i,s=0
//         for(i=0;i<5;i++)
//         {
//             s=s+arr[i]
//         }
//         return s
//     }

//     arr=[10,20,30,40,50]
//     os=fsum(arr)
//     console.log("Sum : ",os)
// }

// //q2
// {
//     function fsum(arr){
//         let i,s=0
//         for(i=0;i<5;i++)
//         {
//             s=s+arr[i]
//         }
//         return s
//     }
//     function Avg(os,n){
//         avg=os/n
//         return avg
//     }

//     arr=[10,20,30,40,50]
//     os=fsum(arr)
//     avg=Avg(os,5)
//     console.log("Average : ",avg)
// }

// //q3
// {
//     function minmax(arr){
//         let i,m,n
//         m=arr[0]
//         n=arr[0]
//         for(i=0;i<5;i++)
//         {
//             if(arr[i]>m)
//                 m=arr[i]
//             else if(arr[i]<n)
//                 n=arr[i]
//         }
//         console.log("Max : ",m)
//         console.log("Min : ",n)

//     }

//     arr=[10,20,30,40,50]
//     minmax(arr)
// }

// //q4
// {
//     function abs(n){
//         pn=Math.abs(n)
//         console.log("Possitive num is :",pn)
//     }
//     n=-10
//     abs(n)
//     m=20
//     abs(m)
// }

// //q5
// {
//     function fsum(arr){
//         let i,s=0
//         for(i=0;i<5;i++)
//         {
//             if((arr[i]%2)==0)
//                 s=s+arr[i]
//         }
//         return s
//     }

//     arr=[10,19,30,41,50]
//     os=fsum(arr)
//     console.log('array : ',arr)
//     console.log("even sum = ",os)
// }

// //q6
// {
//     function fsum(arr){
//         let i,s=0
//         for(i=0;i<5;i++)
//         {
//             if((arr[i]%2)!=0)
//                 s=s+arr[i]
//         }
//         return s
//     }

//     arr=[10,19,30,41,50]
//     os=fsum(arr)
//     console.log('array : ',arr)
//     console.log("odd sum = ",os)
// }

// //factorial
// {
//     function fact(n){
//         if(n==0 ||  n==1)
//             return 1
//         return n*fact(n-1)
//     }
//     let a =4
//     re=fact(a)
//     console.log("factorial : ",re)
// }

//q1 (multiplication)

{
    console.log("Multiplication Table:")
    function mult(n){
        for(let i=1;i<=10;i++)
            console.log(`${i} x ${n} : `,i*n)
    }
    mult(5)
}

{
    console.log("\n\n\n\n\n")
    console.log("Program to reverse a string and check it is palindrome or not!")
    str = "malayalam";
    spStr = str.split("");
    revstr = spStr.reverse();
    jostr = revstr.join("");
    console.log("String : ",str);
    console.log("Reversed String : ",jostr);
    if(str==jostr)
    {
        console.log("It is a Palindrome")
    }else{
        console.log("It is not a Palindrome")
    }
}


{
    console.log("\n\n\n\n\n")
    console.log("Program to reverse a string and check it is palindrome or not!")
    function revpal(){
        spStr = str.split("");
        revstr = spStr.reverse();
        jostr = revstr.join("");
        // console.log("String : ",str);
        // console.log("Reversed String : ",jostr);
        if(str==jostr)
        {
            console.log("It is a Palindrome")
        }else{
            console.log("It is not a Palindrome")
        }
        return jostr
    }
    str = "english";
    rev =revpal(str)
    console.log("String : ",str);
    console.log("Reversed String : ",rev);
    
}

{
    console.log("\n\n\n\n")
    str = "Hindi";
    function reverse(){ 
        rev = "";
        for (let i = str.length - 1; i >= 0; i--) {
           rev = rev+str[i];
        }
        console.log("Original String: " + str);
        console.log("Reversed String: " + rev);
        if(str==rev)
            {
                console.log("It is a Palindrome")
            }else{
                console.log("It is not a Palindrome")
            }
    }
    reverse(str)
}

console.log("\n\n\n\n")
//s2 q1
{
    console.log("Given an array of numbers, use the map method to create a new array where each number is doubled.")
    arr=[3,5,6,7,9]
    mapv= arr.map((element)=>{
        return element*2
    })
    console.log("Values : ",arr)
    console.log("Doubled values : ",mapv)
}


console.log("\n\n\n\n")
//q2
{
    console.log("Given an array of numbers, use the filter method to create a new array containing only the even numbers.")
    arr=[2,5,6,7,8]
    evenv= arr.filter((element)=>{
        return element%2==0
    })
    console.log("Values : ",arr)
    console.log("Even values : ",evenv)
}

console.log("\n\n\n\n")
//q3
{
    console.log("Given an array of numbers, use the reduce method to calculate the sum of all the numbers")
    arr=[2,5,6,7,8]
    sumv= arr.reduce((total, element)=>{
        return total + element
    },0)
    console.log("Values : ",arr)
    console.log("Total : ",sumv)
}

console.log("\n\n\n\n")
//q4
{
    console.log("Given an array of numbers, use the reduce method to find the maximum value in the array.")
    arr=[3,5,6,7,9]
    maxv= arr.reduce((max, element)=>{
        return Math.max(max, element)
    },0)
    console.log("Values : ",arr)
    console.log("Max value : ",maxv)
}

console.log("\n\n\n\n")
//q5
{
    console.log("Given an array of strings, use the map method to create a new array where each string is capitalized.")
    arr=['malayalam','hindi','maths','english']
    capv= arr.map((element)=>{
        return element.toUpperCase()
    })
    console.log("Values : ",arr)
    console.log("Capitalized values : ",capv)
}

console.log("\n\n\n\n")
//q6
{
    console.log("Given an array of words, use the filter method to create a new array containing only the words with a length greater than a specified value.")
    arr=['hi','hello','hey','where']
    length=3
    longv= arr.filter((element)=>{
        return element.length>length

    })
    console.log("Values : ",arr)
    console.log("Words with length greater than ",length," : ",longv)
}

console.log("\n\n\n\n")
//q7
{
    console.log("Given an array of numbers, use the map method to create a new array of strings indicating whether each number is even or odd.")
    arr=[2,5,6,7,8]
    evnoddv= arr.map((element)=>{
        if(element%2==0)
        {
            return `${element}:Even`
        }
        else
        {
            return `${element}:Odd`
        }
    })
    console.log("Values : ",arr)
    console.log("Even/Odd values : ",evnoddv)
}

console.log("\n\n\n\n")
//q8
{
    console.log("Given an array, use the filter method to create a new array with only unique elements (remove duplicates).")
    arr=[2,4,6,2,3,5,4]
    univ= arr.filter((element,index)=>{
        return arr.indexOf(element)==index
    })
    console.log("Values : ",arr)
    console.log("Values without duplicate : ",univ)
}
//q9
console.log("\n\n\n\n")

{
    console.log("Given an array of numbers, use the sort method to sort them in ascending order")
    arr=[9,5,3,7,4,1,6]
    console.log("Values : ",arr)
    arr.sort((a,b)=>{
        return a-b
    })
    console.log("sorted Values : ",arr)
}

//q10
console.log("\n\n\n\n")
{
    console.log("Given an array of objects with a name property, use the map method to create a new array containing only the names.")
    arr=[
        {
            name:"John",
            age:25
        },
        {
            name:"Alice",
            age:30
        },
        {
            name:"Bob",
            age:35
        },
        {
            name:"Eve",
            age:40
        }
    ]
    console.log("Values : ",arr)
    names=arr.map((element)=>{
        return element.name
    })
    console.log("Names : ",names)

}