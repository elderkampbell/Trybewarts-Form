const loginButton = document.getElementById('loginButton');
const emailInput = document.getElementById('emailInput');
const senhaInput = document.getElementById('senhaInput');
const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const TextSection =  document.getElementById('TextSection');
let p = document.getElementById('counter');
const inputName = document.getElementById('input-name');
const inputLastname = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const houseInput = document.getElementById('house');
const familyInput = document.getElementsByName('family');
const evaluationForm = document.getElementById('evaluation-form');

loginButton.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('click', () => {
  if (agreement.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

textArea.addEventListener('input', () => {
  p.innerText = '';
  p.innerText = 500 - textArea.value.length;
});

submitButton.addEventListener('click', () => {
  evaluationForm.innerHTML = '';
  const form = document.createElement('form');
  form.setAttribute('id', 'form-data');
  evaluationForm.appendChild(form);
  const nome = document.createElement('p');
  nome.innerText = `Nome: ${inputName.value} ${inputLastname.value}`;
  form.appendChild(nome);
  const email = document.createElement('p');
  email.innerText = `Email: ${inputEmail.value}`;
  form.appendChild(email);
  const house = document.createElement('p');
  house.innerText = `Casa: ${houseInput.value}`;
  form.appendChild(house);
  const family = document.createElement('p');
  family.innerText = `Família: ${familyInput.value}`;
  form.appendChild(family);
});
