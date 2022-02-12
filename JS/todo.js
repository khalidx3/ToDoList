document.addEventListener('DOMContentLoaded', function(){
document.querySelector('.submit').disabled = true;

document.querySelector('.task').onkeyup = ()=>{
    if (document.querySelector('.task').value.length
    >1){
        document.querySelector('.submit').disabled=false;
    }else{
        document.querySelector('.submit').disabled=true;
    }
}



document.querySelector('form').onsubmit= ()=>{
    const task= document.querySelector(".task").value;
    
    const li =document.createElement('li');
    li.innerHTML= task;
    li.style= "font-size:25px; "

    document.querySelector('.tasks').append(li);

    document.querySelector('.task').value='';

    alert("Click on the task to delete it")

    li.onclick=function(){
        this.parentNode.removeChild(this);
    }

    document.querySelector('.submit').disabled = true;
    
    



    //Stop form from submitting
    return false;

 }
})