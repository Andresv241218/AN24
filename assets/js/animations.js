/*=====================================================
            ANIMACIÓN AL HACER SCROLL
======================================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/*=====================================================
            TARJETAS CON RETARDO
======================================================*/

const cards = document.querySelectorAll(

    ".service-card, .plan-card, .portfolio-card, .process-card"

);

cards.forEach((card,index)=>{

    card.style.transitionDelay=`${index * 0.12}s`;

    observer.observe(card);

});


/*=====================================================
            HERO
======================================================*/

window.addEventListener("load",()=>{

    const heroTitle=document.querySelector(".hero-title");

    const heroDescription=document.querySelector(".hero-description");

    const heroButtons=document.querySelector(".hero-buttons");

    const heroImage=document.querySelector(".hero-image");

    setTimeout(()=>{

        heroTitle?.classList.add("show");

    },200);

    setTimeout(()=>{

        heroDescription?.classList.add("show");

    },450);

    setTimeout(()=>{

        heroButtons?.classList.add("show");

    },700);

    setTimeout(()=>{

        heroImage?.classList.add("show");

    },900);

});


/*=====================================================
            EFECTO BOTONES
======================================================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});


/*=====================================================
        CONTADORES (PARA FUTURO)
======================================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=+counter.dataset.target;

            let current=0;

            const increment=target/120;

            const update=()=>{

                current+=increment;

                if(current<target){

                    counter.innerText=Math.ceil(current);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText=target;

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});
