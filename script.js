document.addEventListener("DOMContentLoaded", () => {
    gsap.to("header", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
            trigger: "header",
            start: "top top",
            end: "200 top",
            scrub: 0.5 
        }
    });
    gsap.to("#welcome-section", {
        backgroundPositionY: "30%", 
        ease: "none",
        scrollTrigger: {
            trigger: "#welcome-section",
            start: "top top",
            end: "bottom+=200 top",
            scrub: true
        }
    });

    gsap.to("#popular-dishes", {
        backgroundPositionY: "20%",
        ease: "none",
        scrollTrigger: {
            trigger: "#popular-dishes",
            start: "top top",
            end: "bottom+=200 top",
            scrub: true
        }
    });

    gsap.from("header", { opacity: 0,y:-20, duration: 1, ease: "power2.out" });

    gsap.from("#welcome-section .welcome-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });

    gsap.set(".slideshow-container .slide", { opacity: 0, scale: 0.9 });
    gsap.fromTo(".slideshow-container .slide.active", {
        opacity: 0,
        scale: 0.9,
        rotateY: 60
    }, {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".dish-card", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#popular-dishes",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".form-container", {
        opacity: 0,
        x: -100,
        scale: 0.95,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#register-login",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".contact-info", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-info",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            gsap.to(window, { duration: 1, scrollTo: `#${targetId}`, ease: "power2.out" });
        });
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function changeSlide(n) {
        slides[currentSlide].classList.remove("active"); 
        currentSlide = (currentSlide + n + totalSlides) % totalSlides;
        slides[currentSlide].classList.add("active"); 

        gsap.fromTo(slides[currentSlide],
            { opacity: 0, scale: 0.9, rotateY: 60 },
            { opacity: 1, scale: 1, rotateY: 0, duration: 1, ease: "power2.out" });

        gsap.fromTo(slides[currentSlide - n],
            { opacity: 1, scale: 1 },
            { opacity: 0, scale: 0.9, duration: 1, ease: "power2.out" });
    }

    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));

    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.05, duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { scale: 1.1, duration: 0.3 });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { scale: 1, duration: 0.3 });
        });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const backdrop = document.querySelector('.mobile-menu-backdrop');
    
    if (menuToggle && nav && backdrop) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            backdrop.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        backdrop.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            this.classList.remove('active');
            document.body.style.overflow = '';
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 992) {
                    menuToggle.classList.remove('active');
                    nav.classList.remove('active');
                    backdrop.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }
});

