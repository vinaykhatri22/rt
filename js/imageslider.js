let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }

        function nextSlide() {
            const slides = document.querySelectorAll('.slide');
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Show the first slide
        showSlide(currentSlide);

        // Change slides every 3 seconds
        setInterval(nextSlide, 3000);