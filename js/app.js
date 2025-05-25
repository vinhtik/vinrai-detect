document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener("mousemove", (event) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        document.querySelectorAll(".parallax").forEach((element) => {
            const speed = element.getAttribute("data-speed");
            element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
        })
    })


    const closeIcon = document.getElementById('closeIcon');

    const sideBar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-icon');
    const closeButton = document.querySelector('.close-icon');

    menuButton.addEventListener("click", function(){
        sideBar.classList.remove('close-sidebar')
        sideBar.classList.add('open-sidebar')
    })

    closeButton.addEventListener("click", function(){
        sideBar.classList.remove('open-sidebar')
        sideBar.classList.add('close-sidebar')
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                sideBar.classList.remove('open-sidebar');
            }
        });
    }) 
    
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        document.querySelectorAll(".answer").forEach((el) => {
            if (el !== answer) el.classList.remove("open");
        });
        document.querySelectorAll(".question").forEach((q) => {
            if (q !== question) q.classList.remove("active");
        });

        answer.classList.toggle("open");
        question.classList.toggle("active");
        });
    });
});

