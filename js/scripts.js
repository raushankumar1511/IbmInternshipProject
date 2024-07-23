
    
        document.addEventListener("DOMContentLoaded", function() {
            fetchNews();
        });
        
        function fetchNews() {
            const apiKey = '953c6068fcb54770af23626574f78867';  // Replace with your actual News API key
            const apiUrl = `https://newsapi.org/v2/everything?q=sustainable+development+goals&apiKey=${apiKey}`;
        
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const articles = data.articles;
                    let newsContainer = document.getElementById('news-container');
                    newsContainer.innerHTML = '';
        
                    articles.forEach(article => {
                        let articleElement = document.createElement('div');
                        articleElement.classList.add('news-article');
                        articleElement.innerHTML = `
                            <h3>${article.title}</h3>
                            <p>${article.description}</p>
                            <a href="${article.url}" target="_blank">Read more</a>
                        `;
                        newsContainer.appendChild(articleElement);
                    });
                })
                .catch(error => {
                    console.error('Error fetching news:', error);
                });
        }
        
    