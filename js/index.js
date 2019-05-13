const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// page navigation
const nav = document.querySelector('.main-nav');
const navArray = Array.from(nav.children);
navArray.forEach((curr, index) => {
	curr.textContent = siteContent['nav'][`nav-item-${index + 1}`];
	curr.style.color = 'green';
});

// Create new <a> tag
const anchor = document.createElement('a');
anchor.setAttribute('href', '#');
anchor.textContent = 'Gallery';
anchor.setAttribute('style', 'color:green');
nav.appendChild(anchor);

const anotherAnchor = document.createElement('a');
anotherAnchor.textContent = 'Investors';
anotherAnchor.setAttribute('style', 'color:green');
nav.prepend(anotherAnchor);

// Get and set cta heading content
const ctaChantArr = siteContent.cta.h1.split(' ');
let ctaHeadingContent = '';
ctaChantArr.forEach(curr => {
	ctaHeadingContent += `<span>${curr}</span>`;
});

const ctaHeading = document.querySelector('.cta-text-heading');
ctaHeading.innerHTML = ctaHeadingContent;

// Get and set cta button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

// Get and set image source for cta
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

/************************
 * Main-content section
 * ********************** */

// features heading
const featuresHeading = document.querySelector('.features-h4');
featuresHeading.textContent = siteContent['main-content']['features-h4'];

// features content
const featuresContent = document.querySelector('.features-content');
featuresContent.textContent = siteContent['main-content']['features-content'];

// about heading
const aboutHeading = document.querySelector('.about-h4');
aboutHeading.textContent = siteContent['main-content']['about-h4'];

// about content
const aboutContent = document.querySelector('.about-content');
aboutContent.textContent = siteContent['main-content']['about-content'];

// Set Middle image source
const infoImg = document.querySelector('#middle-img');
infoImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Service heading
const serviceHeading = document.querySelector('.services-h4');
serviceHeading.textContent = siteContent['main-content']['services-h4'];

// Service content
const serviceContent = document.querySelector('.services-content');
serviceContent.textContent = siteContent['main-content']['services-content'];

// Product heading
const productHeading = document.querySelector('.product-h4');
productHeading.textContent = siteContent['main-content']['product-h4'];

// Product content
const productContent = document.querySelector('.product-content');
productContent.textContent = siteContent['main-content']['product-content'];

// Vision heading
const visionHeading = document.querySelector('.vision-h4');
visionHeading.textContent = siteContent['main-content']['vision-h4'];

// Vision content
const visionContent = document.querySelector('.vision-content');
visionContent.textContent = siteContent['main-content']['vision-content'];

/*********************
 ** Contact section **
 *********************/

// Contact heading
const contactHeading = document.querySelector('.contact-h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];

// address
const address = document.querySelector('.address');
const addressContent = siteContent.contact.address;

address.insertAdjacentText('beforeend', addressContent.substr(0, addressContent.length - 14));
address.insertAdjacentHTML('beforeend', '<br>');
address.insertAdjacentText('beforeend', addressContent.substr(18, addressContent.length - 1));

// phone
const phone = document.querySelector('.phone');
phone.textContent = siteContent['contact']['phone'];

// email
const email = document.querySelector('.email');
email.textContent = siteContent['contact']['email'];

// footer
const copyright = document.querySelector('.copyright');
copyright.textContent = siteContent['footer']['copyright'];
