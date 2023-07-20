var darkModeToggle = document.getElementById('darkModeToggle');

var status = false;

darkModeToggle.addEventListener('change', () => {
    checkToggle()
});

function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById('component').innerHTML = content;
        })
        .catch(error => {
            console.log('Error fetching content:', error);
        });
    setTimeout(checkToggle, 200)
}


function checkToggle() {
    const imageElement = document.querySelector('.dark-mode-img');
    const bottomCard = document.querySelectorAll(".card-bottom")
    const cardTitle = document.querySelectorAll(".card-details-title")
    const cardDescription = document.querySelectorAll(".card-details-description")
    const header1 = document.querySelector(".page__title")
    const header2 = document.querySelector(".page__description")
    const tag = document.querySelectorAll(".tech-tag")
    const footerNav = document.querySelectorAll(".href1")
    const cards = document.querySelectorAll(".card-inner")
    const jobTitle = document.querySelectorAll(".job-title")
    const jobPos = document.querySelectorAll(".job-position")
    const jobPlace = document.querySelectorAll(".job-place")
    const jobDesc = document.querySelectorAll(".job-desc")
    const aboutTitle = document.querySelectorAll(".about-title")
    const aboutText = document.querySelectorAll(".about-text")
    // Darkmode active
    if (darkModeToggle.checked) {
        // Add the dark-mode class to the body element
        document.body.classList.add('dark-mode');
        // Change dark-mode icon to white
        imageElement.src = 'img/light_mode_icon.png';
        // For each card, change these properties
        bottomCard.forEach((card) => {
            card.style.backgroundColor = '#2d2d2d';
            card.style.color = "white"
        })
        cardTitle.forEach((card) => {
            card.style.color = "white"
        })
        cardDescription.forEach((card) => {
            card.style.color = "white"
        })
        tag.forEach((t) => {
            t.style.color = "white"
            t.style.textShadow = "0px 0px 4px rgba(0, 0, 0, 0.6)";
        })
        footerNav.forEach((nav) => {
            nav.style.color = "whitesmoke"
        })
        cards.forEach((c) => {
            addHoverEffect(c)
        })

        jobTitle.forEach((title) => {
            title.style.color = "whitesmoke"
        })

        jobPos.forEach((pos) => {
            pos.style.color = "#f5f5f5ba"
        })

        jobPlace.forEach((pos) => {
            pos.style.color = "#f5f5f5ba"
        })

        jobDesc.forEach((pos) => {
            pos.style.color = "rgb(180, 180, 180, 0.85)"
        })

        aboutTitle.forEach((t) => {
            t.style.color = "#f5f5f5ba"
        })

        aboutText.forEach((t) => {
            t.style.color = "rgb(180, 180, 180, 0.85)"
        })

        // change color title
        header1.classList.add("white1")
        header2.classList.add("white2")

    } else {

        // Remove the dark-mode class from the body element
        document.body.classList.remove('dark-mode');
        // Change dark-mode icon to black
        imageElement.src = 'img/dark_mode_icon.png';
        // For each card, change these properties
        bottomCard.forEach((card) => {
            card.style.backgroundColor = '#fff';
        })
        cardTitle.forEach((card) => {
            card.style.color = "#333"
        })
        cardDescription.forEach((card) => {
            card.style.color = "#333"
        })
        tag.forEach((t) => {
            t.style.color = "rgba(0, 0, 0, 0.596)"
            t.style.textShadow = "none";
        })
        // change color title
        header1.classList.remove("white1")
        header2.classList.remove("white2")
        footerNav.forEach((nav) => {
            nav.style.color = "black"
        })

        jobTitle.forEach((title) => {
            title.style.color = "black"
        })

        jobPos.forEach((pos) => {
            pos.style.color = "black"
        })

        jobPlace.forEach((pos) => {
            pos.style.color = "black"
        })

        jobDesc.forEach((pos) => {
            pos.style.color = "rgba(0, 0, 0, 0.705)"
        })

        aboutTitle.forEach((t) => {
            t.style.color = "black"
        })

        aboutText.forEach((t) => {
            t.style.color = "black"
        })
    }
}

function addHoverEffect(card) {
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0px 0px 15px 2px rgba(255, 255, 255, 0.3)';
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = 'none';
    });
  }

checkToggle()
loadPage("projects.html")