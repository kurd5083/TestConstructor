let btnBack = document.getElementById('btn-back');
let listTest = document.querySelector('.list-test');
let passTest = document.querySelector('.pass-test');
let form = document.querySelector('.form');

let DATA = JSON.parse(window.localStorage.getItem(`DATA1`));
console.log(listTest);


// if (arrayNumberName == null) {
//     form.innerHTML += `<img class="imgCat" src="./img/cat.png">
//     <p>Здесь пока ничего нет,<br>
//     Заглядывайте позже.</p> `;
// }
console.log(DATA)
    for (let i = 0; i < 1; i++) {
        console.log(DATA[i][2])
        listTest.innerHTML += `
        <div class="line">
        <img src="${DATA[i][2]}" alt="">
        <p>Тест ${i + 1}: ${DATA[i][1]}</p>
        <div class="btn">
            <a href="questionPass.html"><button class="btn-pass-delet pass">Пройти тсет</button></a>
            <button class="btn-pass-delet delet">Удалить тест</button>
        </div>
        </div>
        `;
    }
    let delet = document.querySelectorAll('.delet');
    let pass = document.querySelectorAll('.pass');
    let line = document.querySelectorAll('.line');
    console.log(delet, line)
    function pas() {
    for (let i = 0; i < pass.length; i++) {
        pass[i].addEventListener('click', function() {
            DATA = DATA[i]
            localStorage.setItem('DATA', JSON.stringify(DATA));
        })
    }
}
pas();
console.log(DATA)
function deletIndex() {
    for (let i = 0; i < delet.length; i++) {
        delet[i].addEventListener('click', function() {
            line[i].innerHTML = '';
            line[i].classList.remove('line');
  
            // window.localStorage.removeItem(`DATA1`);
            // arrayNumberName -= 1;
            // localStorage.setItem('arrayNumberName', JSON.stringify(arrayNumberName));
            // if (arrayNumberName == 0) {
            //     window.localStorage.removeItem('arrayNumberName');
            //     form.innerHTML += `<img class="imgCat" src="./img/cat.png">
            //     <p>Здесь пока ничего нет,<br>
            //     Заглядывайте позже.</p> `;
            // }
        })
    }

}

deletIndex();




