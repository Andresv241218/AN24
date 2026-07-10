/*=====================================================
            CONFIGURACIÓN GENERAL
======================================================*/

const whatsappNumber = "51998879649";


const plans = {

    START: {

        name: "Plan START",

        price: "S/ 399"

    },

    BUSINESS: {

        name: "Plan BUSINESS",

        price: "S/ 799"

    },

    ELITE: {

        name: "Plan ELITE",

        price: "S/ 1,299"

    }

};


/*=====================================================
        BOTONES "ELEGIR PLAN"
======================================================*/

const quoteButtons = document.querySelectorAll(".quote-btn");

quoteButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedPlan = button.dataset.plan;

        const plan = plans[selectedPlan];

        if (!plan) return;

        const message =
`Hola AN24 👋

Estoy interesado en el ${plan.name}.

Precio:
${plan.price}

Me gustaría recibir más información sobre:

• Tiempo de desarrollo
• Forma de pago
• Requisitos para iniciar
• Disponibilidad

Quedo atento.

Muchas gracias.`;

        const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

});


/*=====================================================
            FORMULARIO DE CONTACTO
======================================================*/

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.querySelector("#name").value.trim();

        const email = document.querySelector("#email").value.trim();

        const phone = document.querySelector("#phone").value.trim();

        const company = document.querySelector("#company").value.trim();

        const plan = document.querySelector("#plan").value;

        const message = document.querySelector("#message").value.trim();

        if (
            name === "" ||
            phone === "" ||
            email === "" ||
            message === "" 
        ) {

            alert("Por favor completa todos los campos obligatorios.");

            return;

        }

const whatsappMessage =

`Hola AN24 👋

Estoy interesado en solicitar una cotización.

━━━━━━━━━━━━━━━━━━━━━━

👤 Nombre:
${name}

📱 Celular:
${phone}

📧 Correo:
${email || "No especifica"}

🏬 Empresa:
${company || "No especifica"}

💼 Plan de interés:
${plan || "No especifica"}

📃 Descripción del proyecto:

${message}

━━━━━━━━━━━━━━━━━━━━━━

Quedo atento a su respuesta.

Muchas gracias.`;

        const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, "_blank");

        contactForm.reset();

    });

}

/*=====================================================
        BOTÓN FLOTANTE WHATSAPP
======================================================*/

const floatingWhatsapp =
document.querySelector(".floating-whatsapp");

floatingWhatsapp?.addEventListener("click",()=>{

    const message =
`Hola AN24 👋

Me gustaría recibir información sobre sus servicios de desarrollo web.`;

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

});

