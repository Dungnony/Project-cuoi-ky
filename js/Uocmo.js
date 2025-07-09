const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const posts = document.querySelectorAll('.post');
const sidebar = document.querySelector('.sidebar');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  hero.classList.add('dark-mode');
  navbar.classList.add('dark-mode');
  posts.forEach(post => post.classList.add('dark-mode'));
  sidebar?.classList.add('dark-mode'); 
  themeToggleButton.innerText = '🌙';
} else {
  themeToggleButton.innerText = '☀️';
}

themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  hero.classList.toggle('dark-mode');
  navbar.classList.toggle('dark-mode');
  posts.forEach(post => post.classList.toggle('dark-mode'));
  sidebar?.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeToggleButton.innerText = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleButton.innerText = '☀️';
    localStorage.setItem('theme', 'light');
  }
});
  const alertBox = document.getElementById('customAlert');
  const inputField = document.getElementById('inputField');
  const submitButton = document.getElementById('submitButton');
  alertBox.style.display = 'none';
  submitButton.addEventListener('click', function () {
    const value = inputField.value.trim();
    if (value.length > 0) {
      inputField.value = '';        
      alertBox.style.display = 'block';  
      setTimeout(() => {
        alertBox.style.display = 'none'; 
      }, 1000);
    }
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 3000);
  }
  );

window.onscroll = function() {
  const btn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
document.getElementById("scrollToTopBtn").onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const searchForm = document.querySelector('.search-form');
const searchInput = searchForm.querySelector('input[name="query"]');
const centerText = document.querySelector('.center-text');
const originalContent = centerText.innerHTML;

searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const keyword = searchInput.value.trim().toLowerCase();
  if (!keyword) {
    centerText.innerHTML = originalContent;
    return;
  }
  const paragraphs = Array.from(centerText.querySelectorAll('p'));
  const filtered = paragraphs.filter(p => p.textContent.toLowerCase().includes(keyword));
  if (filtered.length > 0) {
    centerText.innerHTML = filtered.map(p => `<p>${p.textContent}</p>`).join('');
  } else {
    centerText.innerHTML = '<p>Không tìm thấy kết quả phù hợp.</p>';
  }
});
