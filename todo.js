
   
/* function myFunction(){
    const arr = [];
    var a = document.getElementById('in').value;
    let len=arr.length;
    arr[len]=a;


    var list = "<ul>";
    for(let i=0;i<=len;i++)
    {   
        list+="<li>" + arr[i] + "</li>" ;
         
    }
    list+="</ul>";
    document.getElementById('p1').innerHTML=list;


    

} */


function myFunction(){
    document.getElementById('error').innerHTML="";
    let val = document.getElementById('in').value;
    if(val==""){
        document.getElementById('error').innerHTML="Please Enter Something";
    }else{
        let p1 = document.getElementById('p1');
        let li = document.createElement('li');
        li.textContent = val;
        let edit =document.createElement('button');
        edit.textContent = "EDIT";
        li.appendChild(edit);
        p1.appendChild(li);
        let rem = document.createElement('button');
        rem.textContent = "X";
        li.appendChild(rem);
        p1.appendChild(li);
    }
    document.getElementById('in').value="";

}
let remx=document.querySelector('ul');
remx.addEventListener('click',function(e){
    let p1 = document.getElementById('p1');
    let li = e.target.parentNode;
    p1.removeChild(li);
})
let edit = document.querySelector('ul');
edit.addEventListener('click',textContent) ;