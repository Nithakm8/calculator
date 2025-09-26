let input=document.getElementById('inp')
console.log(input);
let button=document.querySelectorAll('button')
console.log(button);
let array=Array.from(button)
let str=''
array.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText=='='){
            str=eval(str)
            input.value=str
        }
        else if(e.target.innerText=='AC'){
            str=''
            input.value=str
        }
        else if(e.target.innerText=='DEL'){
            str=str.substring(0,str.length-1)
            input.value=str
        }
        else{
            str+=e.target.innerText;
            input.value=str
        }
        
    })
})


