document.getElementById("see-more-btn").addEventListener("click", function() {
  // Get all hidden content elements
  const hiddenContent = document.querySelectorAll('.content.hidden');

  
  // Toggle visibility for each hidden content
  hiddenContent.forEach(item => {
    item.style.display = item.style.display === "none" || item.style.display === "" ? "block" : "none";
  });
  
  // Optionally, change button text after clicking
  this.textContent = this.textContent === "See More" ? "See Less" : "See More";
});
