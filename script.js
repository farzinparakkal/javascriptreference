// console.log("javascript conditions")

// let n1=4,n2=6;
// if(n1<n2){
//     console.log(`${n1} less than ${n2}`)
// }
// else{
//     console.log(`${n1} greater than ${n2}`)
// }

// n1 > n2 ? console.log(`${n1} greater than ${n2}`) : console.log(`${n1} less than ${n2}`)

// let day=8
// switch(day){
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("Invalid..........")
// }


// let i,j,str=``
// for(i=0;i<10;i++){
//     for(j=0;j<=i;j++)
//         str = str + "*"
//     str = str + "\n"
// }
// console.log(str)

// {

// let i,j,str=``
// for(i=0;i<10;i++){
//     for(j=0;j<10;j++){
//     if(i==j)
//         str = str + "*"
//     else
//         str = str + " "
//     }
//     str = str + "\n"
// }
// console.log(str)
// }

{
let i
for(i=1;i<=10;i++)
    console.log(i)
}

{
    let i,sum=0
    for(i=1;i<=10;i++)
        sum = sum+i
    console.log("Sum = ",sum)
}

{
    let i
    for(i=1;i<=20;i++)
    {
        if(i%2==0)
            console.log(i)
    }
}
{
str = "hi how are you"
c=0
strlen = str.length
for(let i=0;i<=strlen;i++)
    {
    if(str[i]=="a" || str[i]=='A' || str[i]=='e' ||str[i]=='E' ||str[i]=='i' ||str[i]=='I' ||str[i]=='o' ||str[i]=='O' ||str[i]=='u' ||str[i]=='U')
        c=c+1
    }
    console.log("string = ",str)
    console.log("No of vowels = ",c)
}

{
    let k=83,c,i
    for(i=2;i<=10;i++){
        if(k==i)
            continue
        else if(k%i==0){
            c=1
            console.log("It is not a prime number !")
            break
        }
        else if(k%i!=0){
            c=0
        }
    }
    if(c==0)
    {
        console.log("It is a prime number !")
    }
}

// {
//     let k,i,j,p
//     for(i=0;i<5;i++)
//     {
//         k=1
//         for(j=0;j<=i;j++)
//         {
//             console.log(k)
//             k=k+1
//         }
//         console.log("\n")
//     }
// }

{
    for (let i = 1; i <= 5; i++) {
        let p = '';
        for (let j = 1; j <= i; j++) {
            p = p + j;
            // p=p+" "
        }
        console.log(p);
    }
}

{
    let i,j,str=``
    for(i=5;i>0;i--){
        for(j=1;j<=i;j++)
            str = str + "*"
        str = str + "\n"
    }
    console.log(str)
}