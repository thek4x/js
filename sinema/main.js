let $ = (param) => {
    return document.querySelector(param);
};
let container = $(".container");
let koltuk = document.querySelectorAll('.koltuk');
let salon = $("select");
const amount = $(".amount");
const price = $(".price");
var koltukArr, seciliArr = [];

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('koltuk') && !e.target.classList.contains('dolu')) {
        e.target.classList.toggle('secili');
        total_price();
    }

    if (e.target.nodeName == 'SELECT') {
        total_price();
    }
});

let total_price = () => {
    let seciliKoltuk = document.querySelectorAll('.koltuk.secili');

    koltukArr = [...koltuk];
    seciliArr = [...seciliKoltuk];

    let indexs = seciliArr.map(element => {
        return koltukArr.indexOf(element);
    });

    saveLStorage(indexs);







    let count_koltuk = document.querySelectorAll(".secili").length;
    let total = count_koltuk * salon.value;
    amount.innerText = count_koltuk;
    price.innerText = total;
};

let saveLStorage = (indexs) => {
    return localStorage.setItem("indexs", JSON.stringify(indexs));
};

let getStorage = () => {
    let getmemory = JSON.parse(localStorage.getItem('indexs'));

    koltuk.forEach((element, index) => {
        if (getmemory.indexOf(index) > -1) {
            element.classList.add('secili');
        }
    });
};

getStorage();