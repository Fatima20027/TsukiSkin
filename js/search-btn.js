document.getElementById('search-button').addEventListener('click' ,function() {
  const query = document.getElementById('search-input').value.trim();
  if (query !== '') {
      fetch(`/api/search?query=${encodeURIComponent(query)}`)
          .then(response => response.json())
          .then(data => displayResults(data))
          .catch(error => console.error('Error:', error));
  }


});

function displayResults(results) {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No products found.</p>';
      return;
  }

  results.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';

      productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <p>${product.description}</p>
      `;
      resultsContainer.appendChild(productDiv);
  });
}
