


// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navItems = document.querySelectorAll('.nav-item');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
            if (window.innerWidth <= 900) {
                mobileMenu.classList.remove('active');
                menuBtn.querySelector('i').classList.add('fa-bars');
                menuBtn.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    renderBusinessUnits();
});

 
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider-wrapper');

  sliders.forEach((sliderWrapper) => {
    const carousel = sliderWrapper.querySelector('.cards-container');
    const cards = carousel.querySelectorAll('.card');
    const dotsContainer = sliderWrapper.querySelector('.dotsContainer');
    const prevBtn = sliderWrapper.querySelector('.prevBtn');
    const nextBtn = sliderWrapper.querySelector('.nextBtn');
    
    let currentIndex = 0;

    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateActiveDot(index) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function scrollToCard(index) {
      if (index < 0 || index >= cards.length) return;
      currentIndex = index;
      const card = cards[index];
      carousel.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth'
      });
      updateActiveDot(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        scrollToCard(currentIndex + 1);
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      }
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        scrollToCard(parseInt(dot.dataset.index));
      });
    });

    carousel.addEventListener('scroll', () => {
      const scrollLeft = carousel.scrollLeft;
      let newIndex = 0;
      cards.forEach((card, index) => {
        if (scrollLeft >= card.offsetLeft - card.offsetWidth / 2) {
          newIndex = index;
        }
      });
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateActiveDot(currentIndex);
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider-wrapper');

  sliders.forEach((sliderWrapper) => {
    const carousel = sliderWrapper.querySelector('.cards-container');
    const cards = carousel.querySelectorAll('.card2');
    const dotsContainer = sliderWrapper.querySelector('.dotsContainer');
    const prevBtn = sliderWrapper.querySelector('.prevBtn');
    const nextBtn = sliderWrapper.querySelector('.nextBtn');
    
    let currentIndex = 0;

    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateActiveDot(index) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function scrollToCard(index) {
      if (index < 0 || index >= cards.length) return;
      currentIndex = index;
      const card2 = cards[index];
      carousel.scrollTo({
        left: card2.offsetLeft,
        behavior: 'smooth'
      });
      updateActiveDot(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        scrollToCard(currentIndex + 1);
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      }
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        scrollToCard(parseInt(dot.dataset.index));
      });
    });

    carousel.addEventListener('scroll', () => {
      const scrollLeft = carousel.scrollLeft;
      let newIndex = 0;
      cards.forEach((card2, index) => {
        if (scrollLeft >= card2.offsetLeft - card2.offsetWidth / 2) {
          newIndex = index;
        }
      });
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateActiveDot(currentIndex);
      }
    });
  });
});

const buttons = document.querySelectorAll('#moduleButtons button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });


    
  (() => {
    const modules = [
      {
        name: "Front Office",
        img: "img/front-office.png",
        heading: "The Front Office Module",
        description: "The front office module helps streamline the reception activities management. Its sub modules include the following: has appointment bookings, Call Logs, visitors, complains, lab walk-in management.",
        tags: ["Appointments", "Call Logs", "Visitor Log", "Patient Registration", "Visit Queue Mgt", "Walk-in Lab"]
      },
      {
        name: "Billings & Payments",
        img: "img/billing.jpeg",
        heading: "The Billings & Payments Module",
        description: " Billing Modules which include payments, charges, deposits, debtors management.",
        tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Clinic",
        img: "img/front-office.png",
        heading: "The Clinic Module",
        description: "Clinic modules which include OPD, IPD, Operation Theatre, Eye, Dental, Ante Natal, Dialysis, Immunization,Dental, Orthopedic Clinic management. ",
        tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Lab & Imaging",
        img: "img/billing.jpeg",
        heading: "The Lab & Imaging Module",
        description: "Lab module which include order tracking, sample, lab consumable tracking, result approval, equipment integration management (HL7 2.3x). Imaging module which include order tracking, lab consumable tracking, result approval, equipment integration management (DICOM). ",
        tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Pharmacy",
        img: "img/front-office.png",
        heading: "The Pharmacy Module",
        description: "Pharmacy module which include item request, walk in patient managemt, prescription, generic medicine, brand medicine, inventory, bills.",
       tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Admin",
        img: "img/billing.jpeg",
        heading: "The Admin Module",
        description: "Admin module which include HR, report, payrol, leaves, deduction and extra pay management. ",
       tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Medical Records",
        img: "img/front-office.png",
        heading: "The Medical Records Module",
        description: "Records module which include patient, diseases, births, deaths management. ",
        tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Account & Finance",
        img: "img/billing.jpeg",
        heading: "The Account & Finance Module",
        description: "Finance module which include finance module which include incomes, expenses, pay request, loans managemnt.",
        tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Inventory",
        img: "img/front-office.png",
        heading: "Inventory",
        description: "Inventory modules which include suppliers, requisition,  instore items. ",
        tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Ambulance",
        img: "img/billing.jpeg",
        heading: "The Ambulance Module",
        description: "Ambulance module which includes trips management, vehicle & driver, service log management. ",
        tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Marketing",
        img: "img/front-office.png",
        heading: "Marketing",
        description: "marketing moduels which includes referrers, sms, prospects and follow up. ",
        tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Shop",
        img: "img/billing.jpeg",
        heading: "The Shop Module",
        description: "Shop module which includes point of sales, shop item sales tracking and analytics management. Also CliniquePlus EMR has CliniquePlus CareConnect. Its system dedicated to facilities with multiple centers with a local server synced occationational with remote server so facilty does not have to depend on internet for operation and data can also accessed from anywhere in the world.",
        tags: ["-----", "-----", "-----", "------", "-----"]
      },
      {
        name: "Patient Portal",
        img: "img/front-office.png",
        heading: "The Patient Portal Module",
        description: "It also have patient portal where patient can access their medical history and data",
        tags: ["-----", "-----", "-----", "------", "-----"]
      }
    ];

    const moduleButtons = document.querySelectorAll('#moduleButtons button');
    const imageCard = document.querySelectorAll('.card-right')[0];
    const descCard = document.querySelectorAll('.card-right')[1];

    moduleButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        moduleButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');

        const module = modules[index];

        // Update Image
        const imgTag = imageCard.querySelector('img');
        imgTag.src = module.img;
        imgTag.alt = module.name;

        // Update Text
        descCard.querySelector('h3').textContent = module.heading;
        descCard.querySelector('p').textContent = module.description;

        // Update Tags
        const tagsContainer = descCard.querySelector('.tags');
        tagsContainer.innerHTML = "";
        module.tags.forEach(tag => {
          const span = document.createElement('span');
          span.textContent = tag;
          tagsContainer.appendChild(span);
        });
      });
    });
  })();

