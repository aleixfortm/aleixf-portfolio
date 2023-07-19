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