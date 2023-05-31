let modelSelect = document.getElementById('modelSelect');

//функция определения моделей в зависимости от бренда с базовой стоимостью моделей
function selectBrand() {

    modelSelect.innerHTML = '<option value="0">--выберите модель авто--</option>';

    if(brandSelect.value === "Renault"){
        models = ['Duster', 'Kangoo', 'Espace', 'Arkana', 'Fluence'];
        values = [355465, 655000, 450000, 850000, 710500, 500900];
    }else if (brandSelect.value === "Mazda"){
        models = ['CX-9', 'CX', 'CX-4', '6'];
        values = [500650, 355000, 610000, 450000];
    }else if (brandSelect.value === "Opel"){
        models = ['Crossland', 'Combo Cargo', 'Zafira Life', 'Combo Life', 'Grandland','Vivaro'];
        values = [650800, 155000, 630000, 410000, 355000, 880000];
    }else{return null}

    //подсказка выбрать модель
    price.innerHTML = `hoba!выбран бренд ${brandSelect.value} <p> выберите модель</p>`;
    
    //обход массива с записью названия и цены модели и добавление в опцию выбора
    for (let i = 0; i < models.length; i++){
        const option = document.createElement("option");
        option.text = models[i];
        option.value = values[i];
        modelSelect.add(option);
        // console.log(option.text, option.value);
        
    }
}
selectBrand(); 

//получаем базовую цену модели
const base = () =>{
    modelSelect.addEventListener('change', function(e) {
        if (e.target.selected = true) {
            let basePrice = this.value;
            console.log(basePrice);
            return basePrice;
        }
    })
}

base();

//выводим и скрываем поле владельцев исходя из выбора опции состояния
const old = document.getElementById("old");
const new1 = document.getElementById("new1");

old.addEventListener ('click', function(evt) {
    if (evt.target.checked) {
        document.querySelector('.own').style.display = 'block';
    } 
})
new1.addEventListener ('click', function(evt) {
    if (evt.target.checked) {
        document.querySelector('.own').style.display = 'none';
    } 
})

//получаем наценку за вид топлива
const fuel = document.getElementsByName ('fuel');
for (let i=0; i<fuel.length; i++){
    fuel[i].addEventListener('click', fuelAdd);
};

function fuelAdd(e) {
    const fuelPrice = this.value;
    console.log(fuelPrice);
    return fuelPrice;
}


//получаем стоимость поля объем
const volume = document.querySelector ('.volume');
console.log(volume);
volume.addEventListener ('input', volAdd);


function volAdd(e) {
    const volPrice = this.value*300;
    console.log(volPrice);
    return volPrice;
}


//переменная для вывода стоимости
const price = document.querySelector('.summary');


function summary (basePrice, fuelPrice, volPrice, condAdd, ownAdd, colorAdd, payAdd) {
    const summ = `${basePrice} + ${fuelPrice}`;
    console.log(basePrice);
    console.log(fuelPrice);
    console.log(summ);
    price.innerHTML = `<p>${summ}/p>`;
}

const carprice = document.querySelector('.carprice');

carprice.addEventListener('click', summary);





// var ul = document.createElement('ul');
// document.body.appendChild(ul);

// var li1 = document.createElement('li');
// li1.innerHTML = 'hao';
// var li2 = document.createElement('li');
// li2.innerHTML = 'mao';
// ul.appendChild(li1);
// ul.appendChild(li2);

// function hide(e) {
//     e.target.style.visibility = 'hidden';
// }

// function hide(e) {
//     e.currentTarget.style.visibility = 'hidden';
// }

// ul.addEventListener('click', hide, false);