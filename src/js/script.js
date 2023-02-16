window.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
	if( /iPhone|iPad/i.test(navigator.userAgent) ) {
		body.classList.add('ios');
	} else{
		body.classList.add('web');
	};
    body.classList.remove('loaded'); 

});