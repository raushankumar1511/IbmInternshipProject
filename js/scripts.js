const apiKey = '953c6068fcb54770af23626574f78867';
const apiUrl = `https://newsapi.org/v2/everything?q=sustainable development goals&apiKey=${apiKey}`;


async function fetchNews() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles;
}

async function displayNews() {
    const newsContainer = document.getElementById('news-container');
    const articles = await fetchNews();
    
    articles.forEach(article => {
        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');
        
        const img = document.createElement('img');
        img.src = article.urlToImage || null;  // Placeholder image if none is available
        img.alt = article.title;
        
        const title = document.createElement('h3');
        title.textContent = article.title;
        
        const description = document.createElement('p');
        description.textContent = article.description;
        
        const readMore = document.createElement('a');
        readMore.href = article.url;
        readMore.textContent = 'Read more';
        readMore.target = '_blank';
        
        newsArticle.appendChild(img);
        newsArticle.appendChild(title);
        newsArticle.appendChild(description);
        newsArticle.appendChild(readMore);
        if(article.urlToImage != null && img.src != null){
        newsContainer.appendChild(newsArticle);
        }
    });
}

document.addEventListener('DOMContentLoaded', displayNews);

document.getElementById('to-top-btn').addEventListener('click', function() {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth',
        
    });
});