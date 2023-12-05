const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContainer = document.getElementById('books-container');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  const apiKey = 'nn2PwuhPLik8hF5NwmWXC4Wrsjebs9T4';

  // Construct the URL with the provided parameters
  const apiUrl = `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${apiKey}&list=hardcover-fiction&published_date=${year}-${month}-${date}`;

  // Fetch data from the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const topBooks = data.results.slice(0, 5);
      displayBooks(topBooks);
    })
    .catch(error => console.error('Error fetching data:', error));
});

function displayBooks(books) {
  // Clear previous content in the books container
  booksContainer.innerHTML = '';

  // Create HTML elements for each book and append them to the container
  books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.className = 'book';

    
    const title = book.book_details[0].title || 'Title not available';
    const author = book.book_details[0].author || 'Author not available';

    bookElement.innerHTML = `<h3>${title}</h3><p>${author}</p>`;
    booksContainer.appendChild(bookElement);
  });
}
