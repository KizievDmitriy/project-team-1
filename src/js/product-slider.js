let offset = 0; 
const sliderLine = document.querySelector('.line1');

document.querySelector('.button1').addEventListener('click', function () {
    offset = offset + 200;
    if (offset > 200) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

var current_rotation = 0;

document.querySelector('.button1').addEventListener('click', function() {
	current_rotation += 180;

	document.querySelector('.icon1').style.transform = 'rotate(' + current_rotation + 'deg)';
});

