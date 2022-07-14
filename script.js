const loginButton = document.getElementById('loginButton');
const emailInput = document.getElementById('emailInput');
const senhaInput = document.getElementById('senhaInput');
const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const p = document.getElementById('counter');
const inputName = document.getElementById('input-name');
const inputLastname = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const houseInput = document.getElementById('house');
const familyInput = document.querySelectorAll('[name="family"]');
const subjectInput = document.querySelectorAll('.subject');
const rateInput = document.querySelectorAll('[name="rate"]');
const textAreaInput = document.getElementById('textarea');
const evaluationForm = document.getElementById('evaluation-form');
const form = document.createElement('form');
form.setAttribute('id', 'form-data');

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

function replyName() {
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(form);
  const name = document.createElement('p');
  name.innerText = `Nome: ${inputName.value} ${inputLastname.value}`;
  form.appendChild(name);
}

function replyEmail() {
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(form);
  const email = document.createElement('p');
  email.innerText = `Email: ${inputEmail.value}`;
  form.appendChild(email);
}

function replyFamily() {
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(form);
  for (let i = 0; i < familyInput.length; i += 1) {
    if (familyInput[i].checked) {
      const family = document.createElement('p');
      family.innerText = `Família: ${familyInput[i].value}`;
      form.appendChild(family);
    }
  }
}

function replyHouse() {
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(form);
  const house = document.createElement('p');
  house.innerText = `Casa: ${houseInput.value}`;
  form.appendChild(house);
}

function replySubject() {
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(form);
  const subject = document.createElement('p');
  subject.innerText = 'Matérias: ';
  for (let i = 0; i < subjectInput.length; i += 1) {
    if (subjectInput[i].checked) {
      subject.innerText += `${subjectInput[i].value}, `;
    }
  }
  form.appendChild(subject);
}

function replyAvaliation() {
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(form);
  for (let i = 0; i < rateInput.length; i += 1) {
    if (rateInput[i].checked) {
      const avaliation = document.createElement('p');
      avaliation.innerText = `Avaliação: ${rateInput[i].value}`;
      form.appendChild(avaliation);
    }
  }
}

function replyComment() {
  evaluationForm.innerHTML = '';
  evaluationForm.appendChild(form);
  const comment = document.createElement('p');
  comment.innerText = `Observações: ${textAreaInput.value}`;
  form.appendChild(comment);
}

submitButton.addEventListener('click', () => {
  replyName();
  replyEmail();
  replyFamily();
  replyHouse();
  replySubject();
  replyAvaliation();
  replyComment();
});
