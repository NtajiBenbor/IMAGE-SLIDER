
const slides = document.querySelectorAll('.slide');
const  nextBtn = document.querySelector('.nextBtn');
const  prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%` 
})

let counter = 0
nextBtn.addEventListener('click',()=>{
    
    counter++
    if(counter < slides.length){
        applyTransform(counter,slides)
    }else {
        counter = 0;
        applyTransform(counter,slides)
    } 
    
})


prevBtn.addEventListener('click',()=>{
    counter--;
    if(counter >= 0){
        applyTransform(counter,slides)
    }else {
        counter = slides.length - 1;
        applyTransform(counter,slides)
    } 
})


function applyTransform(counter,slides){
   slides.forEach(slide =>{
    slide.style.transform = `translateX(${-(counter *100)}%)`;
   })
}


// const students = ['jamilu','sarah','greg','aliko'];

// students.forEach((student,index)=>{
//     console.log(students[index])
// })