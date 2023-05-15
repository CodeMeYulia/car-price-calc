const formF = document.forms.mainF;
const brands = mainF.brandSelect;

function selectBrand() {
    modelSelect.innerHTML = '<option value="0">выберите модель авто</option>';
    if(brandSelect.value === "Renault"){
        models = ['Duster', 'Kangoo', 'Espace', 'Arkana', 'Fluence'];
    }else if (brandSelect.value === "Mazda"){
        models = ['CX-9', 'CX', 'CX-4', '6'];
    }else if (brandSelect.value === "Opel"){
        models = ['Crossland', 'Combo Cargo', 'Zafira Life', 'Combo Life', 'Grandland','Vivaro'];
    }else{return null}
    for (let i = 0; i < models.length; i++){
        const option = document.createElement("option");
        option.text = models[i];
        modelSelect.add(option);
    }
}
selectBrand();




