//Déclaration des variables permettant de cibler les balises HTML
const displayPw = document.querySelector('#pw');
const copyBtn = document.querySelector('#copy');
const passwordLength = document.querySelector('#len');
const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const number = document.querySelector('#number');
const symbol = document.querySelector('#symbol');
const generateBtn = document.querySelector('#generate');
//Déclaration des valeurs servant pour construire le mot de passe
const upperLetters = 'AZERTYUIOPMLKJHGFDSQWXCVBN';
const lowerLetters = 'azertyuiopmlkjhgfdsqwxcvbn';
const numbers = '1234567890';
const symbols = '!?&*()_+=';

//fonction permettant d'obtenir aléatoirement soit une majuscule soit une minuscule soit un nombre soit un symbole.
function randomCharacter(x){

    return x[Math.floor(Math.random() * x.length)];
}

//Création d'un tableau intermédiaire servant à stocker la ou les valeurs aléatoires obtenues via les fct précédentes.
function generateCharacter() {
    let characters = [];
    if(upper.checked) characters.push(randomCharacter(upperLetters));

    if(lower.checked) characters.push(randomCharacter(lowerLetters));

    if(number.checked) characters.push(randomCharacter(numbers));

    if(symbol.checked) characters.push(randomCharacter(symbols));

    return characters[Math.floor(Math.random() * characters.length)] ?? '';
}

//Afficher le mot de passe quand on clique sur le boutton généré
function generatePassword() {
    const pwLength = passwordLength.value;
    let password = '';

    for(let i=0; i<pwLength; i++){
        let character = generateCharacter();
        password += character;
    }

    displayPw.innerText = password;
}

generateBtn.addEventListener('click', () => {
    generatePassword();
});

//Le copier dans le presse papier
copyBtn.addEventListener('click', () => {
    const password = displayPw.innerText;

    if(!password) return;

    navigator.clipboard.writeText(password);

    alert('Mot de passe copié dans le presse papier');
})
