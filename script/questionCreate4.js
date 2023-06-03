let btnRecord = document.querySelector('.btn-record');
let btnSave = document.querySelector('.btn-save');
let heading = document.querySelector('.heading');
let checkboxOne = document.getElementById('checkbox-one');
let checkboxTwo = document.getElementById('checkbox-two');
let checkboxThree = document.getElementById('checkbox-three');
let slider = document.querySelector('.slider');
let DATA = [];
let n = 1;
let id1 = 1; let id2 = 2; let id3 = 3; let idDifference = 3;
let fi = document.forms['fi']

btnRecord.addEventListener('click', function () {
    heading.innerHTML = `Вопрос ${n}`
    class Questions {
        constructor() {
        {
            this.question = document.fi.question.value,
            this.img = document.fi.src.value,
            this.answers = [{
                id: id1,
                value: document.fi.answerOne.value,
                correct: checkboxOne.checked,
            },
            {
                id: id2,
                value: document.fi.answerTwo.value,
                correct: checkboxTwo.checked,
            },
            {
                id: id3,
                value: document.fi.answerThree.value,
                correct: checkboxThree.checked
            }]
        }
    }
}
    DATA.push(new Questions);
    console.log(DATA);
    fi.reset()
    id1 += idDifference;
    id2 += idDifference;
    id3 += idDifference;
    n++;
    heading.innerHTML = `Вопрос ${n}`
})

let inputName = document.querySelector('.inputName');
let srcCard = document.querySelector('.srcCard');
let DATA2 = []
btnSave.addEventListener('click', function(){
    DATA.push(inputName.value, srcCard.value, slider.value)
    let proposal = localStorage.getItem('DATA1');  
    if(proposal !== null){
        let a = JSON.parse(proposal)
        for(let i = 0; i < a.length; i++){
            console.log(a[i])
            DATA2.push(a[i])
        }
    }
    DATA2.push(DATA);
    console.log(DATA2)
    if (DATA2.length >= 1 && (inputName.value != '')){
    localStorage.setItem(`DATA1`, JSON.stringify(DATA2));
    window.location.href = './passTest.html';
} 
})
