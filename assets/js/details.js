const details = document.querySelector('div.details');
const content = document.querySelector('div.content');

function showDetails(number, name, photo, type, types, altura, peso, habilidades) {
    console.log(number)
    constructDetails(number, name, photo, types, altura, peso, habilidades)
    detailsClass(type)
    details.style.visibility = 'visible'
};

function closeDetails(){
    detailsClass('');
    details.style.visibility = 'hidden'
}

function constructDetails(number, name, photo, types, altura, peso, habilidades) {
    let ret = `
        <h2>${name}</h2>
        <img src="${photo}" alt="${name}">

        <p>
            Número: ${number} <br>
            Peso: ${peso}Kg <br>
            Altura: ${altura}cm <br>
            Tipo: ${types}<br>
            Habilidades: ${habilidades}
        </p>
    `

    content.innerHTML = ret;
}

function detailsClass(cll) {
    for (i=0; i<=details.classList.length; i++) {
        if (details.classList[i] != 'details') {
            details.classList.remove(details.classList[i]);
        }
    }
    if (cll != ''){
        details.classList.add(cll);
    }
}

