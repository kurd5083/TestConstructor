let pass = document.querySelectorAll('.pass');

let arr = [
    [{question: 'В каком году состоялась Невская битва?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410041/fkxscnctys3m83wzygf1.jpg',
    answers: [
        {id: 1,
        value: 'В 1240 году',
        correct: true},
        {id: 2,
        value: 'В 1245 году',
        correct: false},
        {id: 3,
        value: 'В 1248 году',
        correct: false}
    ]
    },
    {question: 'Что такое вече?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410041/xiuoovkzgnqwgjkfdkbz.jpg',
    answers: [
        {id: 4,
        value: 'Торжественное письменное обращение верховной власти к населению',
        correct: false},
        {id: 5,
        value: 'Предприятие, основанное на ручном труде',
        correct: false},
        {id: 6,
        value: 'Собрание горожан для решения общественных дел',
        correct: true}
    ]
    },
    {question: 'Между кем был подписан пакт Молотова — Риббентропа?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410042/l069tgm3oiq0nfesjcgk.jpg',
    answers: [
        {id: 7,
        value: 'Между США и Советским Союзом',
        correct: false},
        {id: 8,
        value: 'Между Германией и Советским Союзом',
        correct: true},
        {id: 9,
        value: 'Между США и Германией',
        correct: false}
    ]
    },
    {question: 'Как звали египетского бога знаний и мудрости?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410041/luouatohi7itjqlp6p9e.jpg',
    answers: [
        {id: 10,
        value: 'Осирис',
        correct: false},
        {id: 11,
        value: 'Ра',
        correct: false},
        {id: 12,
        value: 'Тот',
        correct: true}
    ]
    },
    {question: 'В каком году был подписан договор об образовании СССР?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410042/l069tgm3oiq0nfesjcgk.jpg',
    answers: [
        {id: 13,
        value: 'В 1917 году',
        correct: false},
        {id: 14,
        value: 'В 1918 году',
        correct: false},
        {id: 15,
        value: 'В 1922 году',
        correct: true}
    ]
    },
    {question: 'Как называется союз государств, возглавляемый одним монархом?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410030/o3dsg8icyunv57xlkhg8.jpg',
    answers: [
        {id: 16,
        value: 'Община',
        correct: false},
        {id: 17,
        value: 'Уния',
        correct: true},
        {id: 18,
        value: 'Конфессия',
        correct: false}
    ]
    },
    {question: 'Кто был первым московским князем?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410060/ukxa3j5osyhlngljuzbc.png',
    answers: [
        {id: 19,
        value: 'Юрий Данилович',
        correct: false},
        {id: 20,
        value: 'Дмитрий Донской',
        correct: false},
        {id: 21,
        value: 'Даниил Александрович',
        correct: true}
    ]
    },
    {question: 'Как называется период в истории СССР, ознаменованный бурным строительством промышленных предприятий?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596409995/ct82vyjbht43znsqnre7.jpg',
        answers: [
        {id: 22,
        value: 'Индустриализация ',
        correct: true},
        {id: 23,
        value: 'НЭП',
        correct: false},
        {id: 24,
        value: 'Коллективизация',
        correct: false}
    ]
    },
    {question: 'Какой корабль в 1900 году спустил на воду лично Николай II?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596409974/nkwvh3mhxhsqfwue4zct.jpg',
    answers: [
        {id: 25,
        value: 'Фрегат «Паллада»',
        correct: false},
        {id: 26,
        value: 'Крейсер «Варяг»',
        correct: false},
        {id: 27,
        value: 'Крейсер «Аврора»',
        correct: true}
    ]
    },
    {question: 'В каком году была принята первая Конституция СССР?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596409974/ckrrxutfomeav1fpwgsl.jpg',
    answers: [
        {id: 28,
        value: 'В 1924 году',
        correct: true},
        {id: 29,
        value: 'В 1926 году',
        correct: false},
        {id: 30,
        value: 'В 1933 году',
        correct: false}
    ]
    },
    "5"
    ],
    [{question: 'Итак, кто сказал эти слова?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/v1586267247/frqbme8o71kqv78vdgn8.jpg',
    answers: [
        {id: 1,
        value: 'Н.С. Хрущев',
        correct: true},
        {id: 2,
        value: 'В.В. Жириновский',
        correct: false},
        {id: 3,
        value: 'И.В. Сталин',
        correct: false}
    ]
    },
    {question: 'Что насчет этой фразы?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/v1586267319/nm03kdsihenx8rwal7ul.jpg',
    answers: [
        {id: 4,
        value: 'В.В. Путин',
        correct: false},
        {id: 5,
        value: 'В.И. Ленин',
        correct: false},
        {id: 6,
        value: 'Л.Д.Троцкий',
        correct: true}
    ]
    },
    {question: 'Думаем, вы справитесь!',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/v1586267378/yujowpqxfoykcrboyvk1.jpg',
    answers: [
        {id: 7,
        value: 'В.В. Жириновский',
        correct: false},
        {id: 8,
        value: 'Б.Н. Ельцин',
        correct: true},
        {id: 9,
        value: 'М.С. Горбачев',
        correct: false}
    ]
    },
    {question: 'Кто является автором этой цитаты?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/v1586267563/ntcctrgpqistdurvpmqn.jpg',
    answers: [
        {id: 10,
        value: 'В.И. Ленин',
        correct: true},
        {id: 11,
        value: 'Л.П. Берия',
        correct: false},
        {id: 12,
        value: 'И.В. Сталин',
        correct: false}
    ]
    },
    {question: 'Припоминаете автора этих слов?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/v1586267699/haoutefd5egtvnycyb5s.jpg',
    answers: [
        {id: 13,
        value: 'М.С. Горбачев',
        correct: false},
        {id: 14,
        value: 'Г.А. Зюганов',
        correct: false},
        {id: 15,
        value: 'В.С. Черномырдин',
        correct: true}
    ]
    },
    {question: 'Ваши догадки:',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/v1586267767/mvtqn6sjpckwhg2lry8j.jpg',
    answers: [
        {id: 16,
        value: 'Б.Н. Ельцин',
        correct: false},
        {id: 17,
        value: 'Н.С. Хрущев',
        correct: true},
        {id: 18,
        value: 'Г.К. Жуков',
        correct: false}
    ]
    },
    {question: 'И, наконец, вспомните человека, который считается автором этой цитаты:',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1.5/v1586267988/rsgrvwsoidjdrouq0v46.jpg',
    answers: [
        {id: 19,
        value: 'Ю.В. Андропов',
        correct: false},
        {id: 20,
        value: 'Л.Д. Троцкий',
        correct: false},
        {id: 21,
        value: 'Л.И. Брежнев',
        correct: true}
    ]
    },
    "5"
    ],
    [{question: 'В каком году состоялась Невская битва?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410041/fkxscnctys3m83wzygf1.jpg',
    answers: [
        {id: 1,
        value: 'В 1240 году',
        correct: true},
        {id: 2,
        value: 'В 1245 году',
        correct: false},
        {id: 3,
        value: 'В 1248 году',
        correct: false}
    ]
    },
    {question: 'Что такое вече?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410041/xiuoovkzgnqwgjkfdkbz.jpg',
    answers: [
        {id: 4,
        value: 'Торжественное письменное обращение верховной власти к населению',
        correct: false},
        {id: 5,
        value: 'Предприятие, основанное на ручном труде',
        correct: false},
        {id: 6,
        value: 'Собрание горожан для решения общественных дел',
        correct: true}
    ]
    },
    {question: 'Между кем был подписан пакт Молотова — Риббентропа?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410042/l069tgm3oiq0nfesjcgk.jpg',
    answers: [
        {id: 7,
        value: 'Между США и Советским Союзом',
        correct: false},
        {id: 8,
        value: 'Между Германией и Советским Союзом',
        correct: true},
        {id: 9,
        value: 'Между США и Германией',
        correct: false}
    ]
    },
    {question: 'Как звали египетского бога знаний и мудрости?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410041/luouatohi7itjqlp6p9e.jpg',
    answers: [
        {id: 10,
        value: 'Осирис',
        correct: false},
        {id: 11,
        value: 'Ра',
        correct: false},
        {id: 12,
        value: 'Тот',
        correct: true}
    ]
    },
    {question: 'В каком году был подписан договор об образовании СССР?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410042/l069tgm3oiq0nfesjcgk.jpg',
    answers: [
        {id: 13,
        value: 'В 1917 году',
        correct: false},
        {id: 14,
        value: 'В 1918 году',
        correct: false},
        {id: 15,
        value: 'В 1922 году',
        correct: true}
    ]
    },
    {question: 'Как называется союз государств, возглавляемый одним монархом?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410030/o3dsg8icyunv57xlkhg8.jpg',
    answers: [
        {id: 16,
        value: 'Община',
        correct: false},
        {id: 17,
        value: 'Уния',
        correct: true},
        {id: 18,
        value: 'Конфессия',
        correct: false}
    ]
    },
    {question: 'Кто был первым московским князем?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596410060/ukxa3j5osyhlngljuzbc.png',
    answers: [
        {id: 19,
        value: 'Юрий Данилович',
        correct: false},
        {id: 20,
        value: 'Дмитрий Донской',
        correct: false},
        {id: 21,
        value: 'Даниил Александрович',
        correct: true}
    ]
    },
    {question: 'Как называется период в истории СССР, ознаменованный бурным строительством промышленных предприятий?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596409995/ct82vyjbht43znsqnre7.jpg',
        answers: [
        {id: 22,
        value: 'Индустриализация ',
        correct: true},
        {id: 23,
        value: 'НЭП',
        correct: false},
        {id: 24,
        value: 'Коллективизация',
        correct: false}
    ]
    },
    {question: 'Какой корабль в 1900 году спустил на воду лично Николай II?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596409974/nkwvh3mhxhsqfwue4zct.jpg',
    answers: [
        {id: 25,
        value: 'Фрегат «Паллада»',
        correct: false},
        {id: 26,
        value: 'Крейсер «Варяг»',
        correct: false},
        {id: 27,
        value: 'Крейсер «Аврора»',
        correct: true}
    ]
    },
    {question: 'В каком году была принята первая Конституция СССР?',
    img: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1596409974/ckrrxutfomeav1fpwgsl.jpg',
    answers: [
        {id: 28,
        value: 'В 1924 году',
        correct: true},
        {id: 29,
        value: 'В 1926 году',
        correct: false},
        {id: 30,
        value: 'В 1933 году',
        correct: false}
    ]
    },
    "5"
    ],
    
]


function pas() {
        for (let i = 0; i < pass.length; i++) {
            pass[i].onclick = function () {
                localStorage.setItem('DATA', JSON.stringify(arr[i]));
            }
        }
    }
pas()