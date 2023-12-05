// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = 'nn2PwuhPLik8hF5NwmWXC4Wrsjebs9T4';

const url = `${BASE_URL}?q=tech&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    const articleUrl = article.web_url;
    document.getElementById('article-link').href = articleUrl;

    const author = article.byline.original;
    document.getElementById('article-author').innerText = `Author: ${author}`;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  })
  .catch(function(error) {
    console.error('Error fetching data:', error);
  });
