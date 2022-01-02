$('.slider').on('init', function (event, slick) {
	console.log('.slider init');

	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
	});
});
$('.our_works').on('init', function (event, slick) {
	console.log('.our_works init');

	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
	});
});
$('.review').on('init', function (event, slick) {
	console.log('.review init');

	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
	});
});
$(document).ready(function () { 		//слайдер
	$('.slider').slick({
		slidesToShow: 1,
		autoplay: false,
		speed: 2000,
		lazyLoad: 'ondemand',
		arrows: true,
		autoplaySpeed: 1500,

	});
});
$(document).ready(function () { 		//слайдер
	$('.our_works').slick({
		slidesToShow: 1,
		autoplay: false,
		speed: 2000,
		arrows: true,
		autoplaySpeed: 1500,
		dots: true,
		dotsClass: 'slick-dots',
	});
});

$(document).ready(function () { 		//слайдер
	$('.review').slick({
		centerMode: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 2000,
		lazyLoad: 'ondemand',
		arrows: false,
		autoplaySpeed: 1500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});



function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

let options = {
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
	observer.observe(elm);
}
