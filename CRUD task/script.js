let articles = [];

// Show form to add article
function showForm() {
  document.getElementById('formTitle').innerHTML = 'Add Article';
  document.getElementById('articleForm').style.display = 'block';
}

// Show form to edit article
function showEditForm(index) {
  document.getElementById('formTitle').innerHTML = 'Edit Article';
  document.getElementById('articleIndex').value = index;
  document.getElementById('title').value = articles[index].title;
  document.getElementById('author').value = articles[index].author;
  document.getElementById('content').value = articles[index].content;
  document.getElementById('articleForm').style.display = 'block';
}

// Hide form to add/edit article
function hideForm() {
  document.getElementById('addArticleForm').reset();
  document.getElementById('articleIndex').value = '';
  document.getElementById('articleForm').style.display = 'none';
}

// Add article to list
function addArticle(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const content = document.getElementById('content').value;
  const index = document.getElementById('articleIndex').value;
  if (index === '') {
    const newArticle = {title, author, content};
    articles.push(newArticle);
  } else {
    articles[index].title = title;
    articles[index].author = author;
    articles[index].content = content;
  }
  renderArticles();
  hideForm();
}

// Remove article from list
function removeArticle(index) {
  articles.splice(index, 1);
  renderArticles();
}

// Render articles in table
function renderArticles() {
  const articleTableBody = document.getElementById('articleTableBody');
  articleTableBody.innerHTML = '';
  articles.forEach((article, index) => {
    const articleRow = `
      <tr>
        <td>${article.title}</td>
        <td>${article.author}</td>
        <td>${article.content}</td>
        <td>
          <button onclick="showEditForm(${index})">Edit</button>
          <button onclick="removeArticle(${index})">Delete</button>
        </td>
      </tr>
    `;
    articleTableBody.innerHTML += articleRow;
  });
}

// Initialize page
function init() {
  renderArticles();
  const addArticleForm = document.getElementById('addArticleForm');
  addArticleForm.addEventListener('submit', addArticle);
}

init();
