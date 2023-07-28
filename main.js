let addbutton=document.getElementById('addbutton');
let container=document.getElementById('todocontainer');
let input=document.getElementById('inputfeild');

addbutton.addEventListener('click', function(){
    var para=document.createElement('p');
    para.classList.add('paragraph-styling');
    para.innerText=input.value;
    container.appendChild(para);
    input.value="";
    para.addEventListener('click', function(){
        para.style.textDecoration="line-through";
    })
    para.addEventListener('dblclick', function(){
        container.removeChild(para);
    })
})