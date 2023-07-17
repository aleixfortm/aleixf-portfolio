const darkModeToggle = document.getElementById('darkModeToggle');
const imageElement = document.querySelector('.dark-mode-img');
const bottomCard = document.querySelectorAll(".card-bottom")
const cardTitle = document.querySelectorAll(".card-details-title")
const cardDescription = document.querySelectorAll(".card-details-description")
const header1 = document.querySelector(".page__title")
const header2 = document.querySelector(".page__description")
const tag = document.querySelectorAll(".tech-tag")
const footerNav = document.querySelectorAll(".href1")


darkModeToggle.addEventListener('change', () => {
    // Check if the checkbox is checked (activated)
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
            nav.style.color = "whitesmoke"
        })

    }
});


