//переменная для вывода стоимости
const price = document.querySelector('.summary');

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
    for (let i = 0; i <= models.length; i++){
        const option = document.createElement("option");
        option.text = models[i];
        option.value = values[i];
        modelSelect.add(option);
        // console.log(modelSelect[i]);
    }
    
}
selectBrand(); 

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

// console.log(modelSelect.innerHTML);