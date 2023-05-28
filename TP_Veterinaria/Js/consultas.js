function actualizarNoticias() {
    fetch("https://newsapi.org/v2/everything?q=perro&q=gato&apiKey=2698b8fe404b4d7aab1560996b458268")
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            for (let i = 0; i < articles.length && i < 3; i++) {
                const article = articles[i];
                const card = document.getElementById(`card${i + 1}`);

                if (card) { // Verificar si se encontró el elemento con el ID correspondiente
                    const image = card.querySelector('.card-imagen');
                    image.src = article.urlToImage;

                    const title = card.querySelector('.card-titulo');
                    title.textContent = article.title;

                    const description = card.querySelector('.card-descripcion');
                    description.textContent = article.description;

                    const link = card.querySelector('.card-link');
                    link.href = article.url;
                }
            }
        })
        .catch(error => {
            console.error('Ha ocurrido un error:', error);
        });
}

// Actualizar las noticias cada 1 hora
setInterval(actualizarNoticias, 3600000);
actualizarNoticias();
