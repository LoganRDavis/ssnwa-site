const headerContentPromise = new Promise((resolve) => {
	$('#headerContent').load('/partials/header.html', () => {
		resolve();
	});
});

const footerContentPromise = new Promise((resolve) => {
	$('#footerContent').load('/partials/footer.html', () => {
		resolve();
	});
});

Promise.all([headerContentPromise]).then(function () {
	$(document).ready(function () {
		setTimeout(() => {
			$('.main-container').show();
			$('#preloader').fadeOut(1000, function () {
			});
		}, 500);
	});
});
