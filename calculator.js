function get(n)
{
    document.getElementById('sh').innerText+=n;
    let getVal= document.getElementById('sh').innerText;
   
    let b=0;
    for (let i = 0; i < getVal.length; i++) {
        if(getVal[i]=='+'|| getVal[i]=='-'|| getVal[i]=='*'|| getVal[i]=='/')
        {
                b++;
        }
        
        
    }
    if(b>1)
    {
        e();
    }
    // if(n=='+' || n=='-' || n=='*' || n=='/'){
    //  let getVal=document.getElementById('sh').innerText;
    //  if(getVal.includes(n)){
    //     getVal.replace(n," ");
    //  }
    //  console.log(getVal);  
     
}
function c(){
    document.getElementById('sh').innerText="";

   
}
function e(){
    let ele=document.getElementById('sh').innerText;

    let m=ele.slice(0,-1);
    document.getElementById('sh').innerText=m;
}
function operations(){
    let cont;
    let e=document.getElementById('sh').innerText;
    for(let i=0;i<e.length;i++){
        if(e[i]=='+' || e[i]=='-' || e[i]=='*' || e[i]=='/'){
            cont=e[i];
            break;
        } 
    }
    switch(cont){
        case '+':
        let a=e.split("+");
        let num1=parseFloat(a[0]);
        let num2=parseFloat(a[1]);
        console.log(e);
        let add=num1+num2;
        document.getElementById('sh').innerText=add;
        // document.getElementById('sh').setAttribute('class','shift');
        break;
        case '-':
        let b=e.split("-");
        let num3=parseFloat(b[0]);
        let num4=parseFloat(b[1]);
        let sub=num3-num4;
        document.getElementById('sh').innerText=sub.toFixed(2);
        break;        
        case '*':
        let c=e.split("*");
        let num5=parseFloat(c[0]);
        let num6=parseFloat(c[1]);
        let mul=num5*num6;
        document.getElementById('sh').innerText=mul;
        break;
        case '/':
        let d=e.split("/");
        let num7=parseFloat(d[0]);
        let num8=parseFloat(d[1]);
        let div=num7/num8;
        document.getElementById('sh').innerText=div;
        
    }

}