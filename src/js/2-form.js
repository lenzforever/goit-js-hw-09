'use strict';
import validator from 'validator';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

const formData = {
  email: '',
  message: ''
};

form.addEventListener('input', () => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  saveToLS(STORAGE_KEY, formData);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedData = loadFromLS(STORAGE_KEY);
  if (savedData) {
    form.elements.email.value = savedData.email || '';
    form.elements.message.value = savedData.message || '';
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  if (formData.email === '' || formData.message === '') {
    alert('Please fill all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return null;
  }
}
