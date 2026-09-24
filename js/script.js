const frases = [
    "Acredite em você e no seu potencial!",
    "Cada dia é uma nova oportunidade para aprender.",
    "Nunca desista dos seus objetivos.",
    "Pequenos passos também levam a grandes conquistas.",
    "O sucesso começa quando você decide tentar.",
    "Aprender é uma jornada, não uma corrida.",
    "Tenha paciência com o seu processo.",
    "Você é capaz de superar novos desafios."
];

const textoFrase = document.getElementById("texto-frase");

const botaoNova = document.getElementById("btn-nova");

botaoNova.addEventListener("click", function () {

    const indiceAleatorio = Math.floor(
        Math.random() * frases.length
    );

    textoFrase.textContent = frases[indiceAleatorio];

});