
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