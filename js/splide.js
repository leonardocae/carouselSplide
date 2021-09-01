new Splide( '.splide' ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.splide', {
		type: 'loop',
		height: '20rem',
		perPage: 4,
		pagination: 0,
		breakpoints: {
			1440: {
				perPage: 4,
			},

			1024: {
				perPage: 3,
			},

			667: {
				perPage: 2,
			},

			450: {
				perPage: 1,
			}
		}
	} ).mount();
} );