import AnimaNumeros from '/anima-numeros.js';
export default function fetchAnimais(url, target){


    //cria uma div contendo informações
    //com o total de animais
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }
    //puxa animais atraves de um arquivo json, e cria um animal utilizando crate animal
    async function criarAnimais() {
        try {
            //fetch e espera a resposta
            const animaisResponse = await fetch(url);
            //transforma a resposta em json
            const animaisJson = await animaisResponse.json();
            //preenche cada animal no DOM
            const numerosGrid = document.querySelector(target);
            animaisJson.forEach((animal) => {
                const divAnimal = createAnimal(animal);
                numerosGrid.appendChild(divAnimal);
            })
            const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros' , 'ativo');
            animaNumeros.init();
        } catch (erro) {
            console.log(erro);
        }
    }

    return criarAnimais();

}

