const mobile_menu = () => {
	const burger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	const body = document.querySelector('.scroll');
	const hide = document.querySelector('.hide');
	burger.addEventListener('click', () => {
		menu.classList.toggle('menu-active');
		body.classList.toggle('overflow');
		burger.classList.toggle('toggle');
		hide.classList.toggle('hide');
	});
};

mobile_menu();

const mobile_menu_links = () => {
	const mediaQuery = window.matchMedia('(max-width: 640px)');
	const burger = document.querySelector('.hamburger');
	const mLinks = document.querySelectorAll('.m-link');
	const menu = document.querySelector('.menu');
	const body = document.querySelector('.scroll');
	const hide = document.querySelector('.hide');
	if (mediaQuery.matches) {
		mLinks.forEach(function(mLink) {
			mLink.addEventListener('click', function() {
				console.log('m-link clicked');
				menu.classList.toggle('menu-active');
				body.classList.toggle('overflow');
				hide.classList.toggle('hide');
				burger.classList.toggle('toggle');
			});
		});
	}
		
};

mobile_menu_links();
