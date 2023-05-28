const formF = document.forms.mainF;
const brands = mainF.brandSelect;
const carprice = document.querySelector('.carprice');
const price = document.querySelector('.summary');

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
    
    price.innerHTML = `hoba!выбран бренд ${brandSelect.value} <p> выберите модель</p>`;
    for (let i = 0; i <= models.length; i++){
        const option = document.createElement("option");
        option.text = models[i];
        option.value = values[i];
        modelSelect.add(option);
        console.log(modelSelect[i]);
    }
    
}
selectBrand();

// function selectModel() {
    
// }

carprice.addEventListener ('click', function(evt) {
    // console.log('');
    
})

// console.log(modelSelect.innerHTML);