const body = document.querySelector('body');
const alertBanner = document.querySelector('.alert-banner');
const display = document.querySelector('.display');
const displayOverlay = document.querySelector('.display-overlay')
const phoneDisplay = document.querySelector('.settings-container');
const dark = document.querySelector('.iphone-dark');
const light = document.querySelector('.iphone-light');
const bar = document.querySelectorAll('.bar');
const barInfo = document.querySelectorAll('.bar-info');
const togglePath = document.querySelector('.toggle-path');
const settingsHeader = document.querySelector('.settings-header');
const userImage = document.querySelector('.user-image');
const input = document.querySelector('input');
const appearanceSettings = document.querySelector('.appearance-settings');
const iphone = document.querySelectorAll('.iphone');
let scrollPos;

// general event listener
body.addEventListener('click', e => {
	console.log(e.target);
	if (e.target === display) {
		scrollPos = phoneDisplay.scrollTop;
		console.log(scrollPos)
		displayOverlay.style.width = '100%';
		displayOverlay.style.height = '600px';
		phoneDisplay.scrollTop = 0;
		phoneDisplay.style.overflow = 'hidden';
	}
});

setTimeout(() => {
	alertBanner.classList.add('show-alert');
}, 500);
setTimeout(() => {
	alertBanner.classList.remove('show-alert');
}, 5000)

// event listener for 'back' functionality
const header = document.querySelector('header');
header.addEventListener('click', () => {
	closeDisplaySettings();
});

// event listener for adding active class for theme options
appearanceSettings.addEventListener('click', e => {
	if (e.target.classList.contains('iphone')) {
		iphone.forEach((option, index) => {
			option.classList.remove('active');
		});
		e.target.classList.add('active');
	}
});

// theme option event listeners
dark.addEventListener('click', () => {
	darkMode();
});

light.addEventListener('click', () => {
	lightMode();
});

// function to close the display settings
function closeDisplaySettings() {
		phoneDisplay.scrollTop = scrollPos;
		displayOverlay.style.width = '0px';
		displayOverlay.style.height = '1200px';
		phoneDisplay.style.overflow = 'auto';
}

// function to toggle darkmode styles
function darkMode() {
	closeDisplaySettings();
	alertBanner.classList.remove('show-alert');
	togglePath.style.opacity = '0';
	phoneDisplay.classList.add('dark-theme-bg')
	settingsHeader.classList.add('dark-theme-text');
	userImage.style.filter = 'invert(1) brightness(1.9)';
	input.classList.add('dark-theme-input');
	bar.forEach((bar) => {
		bar.classList.add('dark-theme-item-styles');
	});
	barInfo.forEach((bar) => {
		bar.classList.add('dark-theme-border');
	});
}

// function toggle default/lightmode styles
function lightMode() {
	closeDisplaySettings();
	togglePath.style.opacity = '1';
	phoneDisplay.classList.remove('dark-theme-bg');
	settingsHeader.classList.remove('dark-theme-text')
	userImage.style.filter = 'none';
	input.classList.remove('dark-theme-input');
	bar.forEach((bar) => {
		bar.classList.remove('dark-theme-item-styles');
	});
	barInfo.forEach((bar) => {
		bar.classList.remove('dark-theme-border');
	});
}