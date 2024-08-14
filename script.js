
{
{
    function prnum(){
        let i
        for(i=1;i<=10;i++)
        console.log(i)
    }
    prnum()
}
}




{
function sumn(){
    let i,sum=0
    for(i=1;i<=10;i++)
        sum = sum+i
    return sum
}
q = sumn()
console.log("Sum : ",q)
}




{
function evep(){
    let i
    for(i=1;i<=20;i++)
    {
        if(i%2==0)
            console.log(i)
    }
}
evep()
}




{
function cvow(str){

c=0
strlen = str.length
for(let i=0;i<=strlen;i++)
    {
    if(str[i]=="a" || str[i]=='A' || str[i]=='e' ||str[i]=='E' ||str[i]=='i' ||str[i]=='I' ||str[i]=='o' ||str[i]=='O' ||str[i]=='u' ||str[i]=='U')
        c=c+1
    }
    console.log("string = ",str)
    return c
}
str = "hi how are you"
c=cvow(str)
console.log("No of vowels = ",c)
}



{
function prime(){
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
prime()
}







{
function pstar(){
    for (let i = 1; i <= 5; i++) {
        let p = '';
        for (let j = 1; j <= i; j++) {
            p = p + j;
        }
        console.log(p);
    }
}
pstar()
}




{
function starp(){
    let i,j,str=``
    for(i=5;i>0;i--){
        for(j=1;j<=i;j++)
            str = str + "*"
        str = str + "\n"
    }
    return str
}
strm = starp()
console.log(strm)
}