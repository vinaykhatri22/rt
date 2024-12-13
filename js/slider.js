var style = document.createElement('style');
        var position = 'right';


        var textSlider = document.querySelector('.text_silder');
        var offsetWidth = textSlider ? textSlider.offsetWidth : 0;

        style.innerHTML = `
        @keyframes my-animation {
            0% { ${position}: -${offsetWidth + 10}px; }
            100% { ${position}: 100%; }
        }
    `;
        document.head.appendChild(style);