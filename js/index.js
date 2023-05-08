"use strict";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

////// swiper //////
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 80,
    initialSlide: 1,
})

////// accordion //////
const buttons = document.querySelectorAll('.question__title');
const iconActives = document.querySelectorAll('.button_question_plus');
const iconDisables = document.querySelectorAll('.button__question');
const texts = document.querySelectorAll('.question__text');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        iconActives[index].classList.toggle('active');
        iconDisables[index].classList.toggle('active');
        texts[index].classList.toggle('active');
    });
});

////// toggle menu //////
const menu = document.querySelector('.menu');
const line = document.querySelectorAll('.line');
const text = document.querySelector('.toggle__screen');
const body = document.body;
const header = document.querySelector('header');

menu.addEventListener('click', () => {
    line.forEach((lines) => {
        lines.classList.toggle('active');
    });
    body.classList.toggle('blocked')
    text.classList.toggle('active');
    header.classList.toggle('active');
});