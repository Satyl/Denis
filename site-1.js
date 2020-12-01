const contactsBtn = document.querySelector('.contacts__button');
const popup = document.querySelector('.popup');
const close = document.querySelector('.popup__button');
const btn = document.querySelectorAll('a[href^="#"]');
const main = document.querySelector('#blur');
// const anchors = document.querySelectorAll('a[href^="#"]')


contactsBtn.addEventListener('click', function(e) {
	popup.classList.add('active');
	main.classList.add('active_blur');
});

close.addEventListener('click', function(e) {
	popup.classList.remove('active');
	main.classList.remove('active_blur');
});

btn.forEach(function(elem) {
	elem.addEventListener('click', function(e) {
		e.preventDefault()
		const id = elem.hasAttribute('href') ? elem.getAttribute('href') : 'body'
		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
});

