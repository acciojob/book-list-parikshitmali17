//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function () {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  if (title === '' || author === '' || isbn === '') return;

  const tableBody = document.getElementById('book-list');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  tableBody.appendChild(row);

  // Clear form
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
});

// Event delegation to handle delete
document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
});
