const btn=document.querySelector('.btn'),
 name=document.querySelector('.name') ,
 nameInput=document.querySelector('.inputName'),
 nameTwo =document.querySelector('.nameTwo'),
 nameTwoInput =document.querySelector('.inputNameTwo'),
 age=document.querySelector('.age'),
 ageInput=document.querySelector('.inputAge'),
 job=document.querySelector('.job'),
 jobInput=document.querySelector('.inputJob');
 error =document.querySelector('.error');


btn.addEventListener('click',()=> {

    if (nameInput.value.length !== 0 && nameTwoInput.value.length !== 0 && ageInput.value.length !== 0 && jobInput.value.length !== 0) {


        name.innerText += nameInput.value;
        nameTwo.innerText += nameTwoInput.value;
        age.innerText += ageInput.value;
        job.innerText += jobInput.value;

        nameInput.value = '';
        nameTwoInput.value = '';
        ageInput.value = '';
        jobInput.value = '';

        error.style.display ='none'
    } else{
        error.style.display = "block"
        }
})