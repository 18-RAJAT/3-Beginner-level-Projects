const closeFace=document.querySelector('.closed');
const openFace=document.querySelector('.open');

//Event listener for the closed face
closeFace.addEventListener('click',()=>{
if(openFace.classList.contains('open')){
    openFace.classList.add('active');
    closeFace.classList.remove('active');
}
});


//Event listener for the open face
openFace.addEventListener('click',()=>{
    if(openFace.classList.contains('open')){
    closeFace.classList.add('active');
    openFace.classList.remove('active');
    }
});