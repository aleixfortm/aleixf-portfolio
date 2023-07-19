function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(content => {
            document.getElementById('component').innerHTML = content;
        })
        .catch(error => {
            console.log('Error fetching content:', error);
        });
}

function hideComp1() {
    const elementToHide = document.getElementsByClassName('main-column');
    elementToHide.style.display = 'none';
}

function showComp1() {
    const elementToHide = document.getElementById('main-column');
    elementToHide.style.display = 'block'; // Change 'block' to the appropriate display value if needed (e.g., 'inline')
}