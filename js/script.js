"use strict"

const prew = document.querySelector(".btn-prev"),
	next = document.querySelector(".btn-next"),
	slides = document.querySelectorAll(".slide"),
	currentSlide = document.querySelector(".slider>img"),
	slidesLine = document.querySelector(".slider-wrapper"),
	work = document.querySelectorAll(".work");
const iconMenu = document.querySelector('.menu-burger');
const body = document.querySelector('.body');
const logo = document.querySelector('.logo');
const header = document.getElementById('header');
console.log(header);

console.log(slides);
	
let index = 2;
let offset = slidesLine.style.right;

const activeSlide = n => {
	for(let i = 0; i < slides.length; i++){
		console.log(i);
		slides[i].classList.remove('active');
	}
	slides[n].classList.add('active');
}
const prewSlide = () => {
	if(index <= 0){
		index = slides.length - 1;
		offset = 850;
		activeSlide(index);
		translatePrew();
	}else {
		index--;
		activeSlide(index);
		translatePrew();
	}
}

const nextSlide = () => {
	if(index == slides.length - 1){
		index = 0;
		offset = -950;
		activeSlide(index);
		translateNext();
	}else {
		index++;
		activeSlide(index);
		translateNext();
	}	
}
const translatePrew = () => {
		offset -= slides[index].offsetWidth;
		slidesLine.style.right = offset + "px";
		chanheCurrentSlide();
}

const translateNext = () => {
		offset += slides[index].offsetWidth;
		slidesLine.style.right = offset + "px";
		chanheCurrentSlide();
}
prew.addEventListener('click', prewSlide);
next.addEventListener('click', nextSlide);
const chanheCurrentSlide = () => {
			console.log(currentSlide);
	switch (index){
		case 0: 
			currentSlide.src = 'img/silder-lion.png';
			break;
		case 1: 
			currentSlide.src = 'img/slider-leopard.png';
			break;
		case 2: 
			currentSlide.src = 'img/slider-jaguar.png';
			break;		
		case 3: 
			currentSlide.src = "img/slider-tiger.png";
			break;
		}
}
console.log(work);

if(iconMenu){
	iconMenu.addEventListener("click", function(){
		iconMenu.classList.toggle('active');
		body.classList.toggle('active');
		logo.classList.toggle('active');
		header.classList.toggle('active');
	});

}
console.log();