'use strict';

const postaButton = document.querySelector('.posta-btn');
const montingButton = document.querySelector('.monting-btn');
const sersButton = document.querySelector('.sers-btn');
const experienceBoxText = document.querySelector('.experience-box__text');

const aboutBtn = document.querySelector('.nav__about');
const experienceBtn = document.querySelector('.nav__experience');
const projectBtn = document.querySelector('.nav__projects');
const contactBtn = document.querySelector('.nav__contact');
const logoImg = document.querySelector('.logo');
const imageOfMe = document.querySelector('.me');

const anotherProject = document.querySelector('.hidden-project');
const anotherAbout = document.querySelector('.hidden-about');
const anotherExperience = document.querySelector('.hidden-experience');
const anotherContact = document.querySelector('.hidden-contact');
const logoBox = document.querySelector('.logo-box');

const aboutSection = document.querySelector('.section__two');
const allSections = document.querySelectorAll('.section');

const projectImage = document.querySelectorAll('.project-image');
const maptyTextSquare = document.querySelector('.mapty__square');
const bankistTextSquare = document.querySelector('.bankist__square');
const piggameTextSquare = document.querySelector('.piggame__square');
const bankistLeftSquare = document.querySelector('.bankist__square-left');

const arrowBox = document.querySelector('.arrows');
const navMenu = document.querySelector('.nav-menu');
const hiddenNavItems = document.querySelectorAll('.hidden-nav');

projectImage.forEach(el => {
  el.addEventListener('mouseenter', function () {
    if (el.classList.contains('mapty') || el.classList.contains('bankistapp')) {
      maptyTextSquare.classList.add('move-right');
      bankistTextSquare.classList.add('move-right');
      this.addEventListener('mouseleave', () => {
        maptyTextSquare.classList.remove('move-right');
        bankistTextSquare.classList.remove('move-right');
      });
    }

    if (el.classList.contains('right')) {
      console.log('contains');
      piggameTextSquare.classList.add('move-left');
      bankistLeftSquare.classList.add('move-left');
      this.addEventListener('mouseleave', () => {
        piggameTextSquare.classList.remove('move-left');
        bankistLeftSquare.classList.remove('move-left');
      });
    }
  });
});

const tl = new TimelineMax();

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');

const fadeIn = () =>
  tl.fromTo(
    experienceBoxText,
    0.5,
    { opacity: '0' },
    { opacity: '1', ease: Power2.easeInOut }
  );

const me = () => {
  tl.fromTo(
    imageOfMe,
    4,
    { opacity: '0' },
    { opacity: '1', ease: Power2.easeInOut }
  );
};

postaButton.addEventListener('click', function () {
  if (!postaButton.classList.contains('.active__btn')) {
    postaButton.classList.add('active__btn');
    montingButton.classList.remove('active__btn');
    sersButton.classList.remove('active__btn');
  }

  const experienceHtmlText = `
    <div class="experience__label">Postman<span class="neo-text__span"> @ Pošta Slovenija</span></div>
      <div class="experience__time">Duration : <span class="neo-text__span">@ 2018 - Present</span></div>
      <div class="experience__text">
        <ul class="experience__list">
          <li>Quick response and organization.</li>
          <li>Quick adjustment of work according to the circumstances.</li>
          <li>Quick learning.</li>
          <li>Developing communication skills.</li>
          <li>Good organization and scheduling with time.</li>
        </ul>
      </div>
      `;
  experienceBoxText.innerHTML = experienceHtmlText;
  fadeIn();
});

montingButton.addEventListener('click', function () {
  if (!montingButton.classList.contains('.active__btn')) {
    montingButton.classList.add('active__btn');
    postaButton.classList.remove('active__btn');
    sersButton.classList.remove('active__btn');
  }
  const experienceHtmlText = `
    <div class="experience__label">Group leader <span class="neo-text__span"> @ Monting plus</span></div>
      <div class="experience__time">Duration : <span class="neo-text__span">@ 2013 - 2018</span></div>
      <div class="experience__text">
        <ul class="experience__list">
          <li>Leading a small group.</li>
          <li>Organization of the work process.</li>
          <li>Work scheduling.</li>
          <li>Organization of transport.</li>
          <li>Communication with customers.</li>
        </ul>
      </div>
      `;
  experienceBoxText.innerHTML = experienceHtmlText;
  fadeIn();
});

sersButton.addEventListener('click', function () {
  if (!sersButton.classList.contains('.active__btn')) {
    sersButton.classList.add('active__btn');
    montingButton.classList.remove('active__btn');
    postaButton.classList.remove('active__btn');
  }

  const experienceHtmlText = `
    <div class="experience__label">Education <span class="neo-text__span"> @ SERŠ, Smart Ninja, Udemy</span></div>
      <div class="experience__time">Duration : <span class="neo-text__span">@ 2020 - Present</span></div>
      <div class="experience__text">
      <ul class="experience__list">
      <li>Graduated from computer high school.</li>
      <li>Completed web development 1 course at Smart Ninja.</li>
      <li>Completed a basic course in HTML and CSS on udemy.</li>
      <li>I am completing a SASS course at Udemy.</li>
      <li>I am completing a Java Script course at Udemy.</li>
      </ul>
      </div>
      `;
  experienceBoxText.innerHTML = experienceHtmlText;
  fadeIn();
});

aboutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const id = this.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

experienceBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const id = this.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

projectBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const id = this.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

contactBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const id = this.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

const hiddenBtn = function (btn) {
  navMenu.classList.toggle('show-nav-menu');
  arrowBox.classList.toggle('change');
  const id = btn.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};

const homeSection = () => {
  const id = '#home-section';
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  navMenu.classList.toggle('show-nav-menu');
};

anotherAbout.addEventListener('click', function (e) {
  e.preventDefault();
  hiddenBtn(this);
});

anotherExperience.addEventListener('click', function (e) {
  e.preventDefault();
  hiddenBtn(this);
});

anotherProject.addEventListener('click', function (e) {
  e.preventDefault();
  hiddenBtn(this);
});

anotherContact.addEventListener('click', function (e) {
  e.preventDefault();
  hiddenBtn(this);
});

logoImg.addEventListener('click', function (e) {
  e.preventDefault();
  homeSection();
});

logoBox.addEventListener('click', function (e) {
  e.preventDefault();
  homeSection();
});

console.log(arrowBox);
arrowBox.addEventListener('click', function () {
  this.classList.toggle('change');
  navMenu.classList.toggle('show-nav-menu');
  arrowBox.style.zIndex = '115';
  hiddenNavItems.forEach(el => {
    el.classList.toggle('fade-in-animation');
  });
});

const reavelSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('blur');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(reavelSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  if (section === aboutSection) me();
  sectionObserver.observe(section);
  section.classList.add('blur');
});
