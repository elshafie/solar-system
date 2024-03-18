
const solar = document.getElementById("solar");
const sun = document.getElementById('sun')
const mercury = document.getElementById("mercury")
const venus = document.getElementById("venus")
const earth = document.getElementById("earth");
const mars = document.getElementById("mars")
const jupiter = document.getElementById("jupiter")
const saturn = document.getElementById("saturn")
const uranus = document.getElementById("uranus")
const neptune = document.getElementById("neptune")


const planets = document.getElementsByClassName('planet')


solar.addEventListener("click", () => {
  Array.from(planets).forEach((card) => {
    if (card.id === `solar-card`) {
      card.style.display = "flex";
      document.title = 'Solar System'
    } else {
      card.style.display = "none";
    }
  });
});


sun.addEventListener( 'click', ()=> {
  Array.from(planets).forEach(card => {
    if(card.id === `sun-card`){
      card.style.display = "flex";
      document.title = "The Sun";

    } else{
      card.style.display = 'none'
    }
  })
})

mercury.addEventListener("click", () => {
  Array.from(planets).forEach((card) => {
    if (card.id === `mercury-card`) {
      card.style.display = "flex";
      document.title = "Mercury";

    } else {
      card.style.display = "none";
    }
  });
});

venus.addEventListener("click", () => {
  Array.from(planets).forEach((card) => {
    if (card.id === `venus-card`) {
      card.style.display = "flex";
      document.title = "Venus";
    } else {
      card.style.display = "none";
    }
  });
});

earth.addEventListener("click", () => {
  Array.from(planets).forEach((card) => {
    if (card.id === `earth-card`) {
      card.style.display = "flex";
      document.title = "Earth";
    } else {
      card.style.display = "none";
    }
  });
});

mars.addEventListener("click", () => {
  Array.from(planets).forEach((card) => {
    if (card.id === `mars-card`) {
      card.style.display = "flex";
      document.title = "Mars";
    } else {
      card.style.display = "none";
    }
  });
});

jupiter.addEventListener("click", () => {
  Array.from(planets).forEach((card) => {
    if (card.id === `jupiter-card`) {
      card.style.display = "flex";
      document.title = "Jupiter";
    } else {
      card.style.display = "none";
    }
  });
});

saturn.addEventListener("click", () => {
  Array.from(planets).forEach((card) => {
    if (card.id === `saturn-card`) {
      card.style.display = "flex";
      document.title = "Saturn";
    } else {
      card.style.display = "none";
    }
  });
});

uranus.addEventListener("click", () => {
  Array.from(planets).forEach((card) => {
    if (card.id === `uranus-card`) {
      card.style.display = "flex";
      document.title = "Uranus";
    } else {
      card.style.display = "none";
    }
  });
});


neptune.addEventListener("click", () => {
  Array.from(planets).forEach((card) => {
    if (card.id === `neptune-card`) {
      card.style.display = "flex";
      document.title = "Neptune";
    } else {
      card.style.display = "none";
    }
  });
});

