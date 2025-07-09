
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
const searchInput = document.querySelector('.search-form input');
const post = document.querySelectorAll('.post');
const noResultsMessage = document.createElement('div'); 
noResultsMessage.textContent = "Không tìm thấy kết quả phù hợp."; 
noResultsMessage.style.display = 'none'; 
document.querySelector('.posts-container').appendChild(noResultsMessage); 

searchInput.addEventListener('keyup', function() {
    const query = searchInput.value.toLowerCase(); 
    let found = false; 

    posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();

        if (title.includes(query) || excerpt.includes(query)) {
            post.style.display = 'block';
            found = true; 
        } else {
            post.style.display = 'none'; 
        }
    });

  
    noResultsMessage.style.display = found ? 'none' : 'block';
});
window.onscroll = function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});