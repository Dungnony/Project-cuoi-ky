function searchPosts() {
    const searchQuery = document.querySelector('.search-form input').value.toLowerCase();
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const titleElement = post.querySelector('h2 a') || post.querySelector('h2');
        const title = titleElement ? titleElement.textContent.toLowerCase() : '';
        const descriptionElement = post.querySelector('p');
        const description = descriptionElement ? descriptionElement.textContent.toLowerCase() : '';
        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            post.style.display = '';
        } else {
            post.style.display = 'none';
        }
    });
}
document.querySelector('.search-form button').addEventListener('click', function(e) {
    e.preventDefault();
    searchPosts();
});
document.querySelector('.search-form input').addEventListener('input', searchPosts);
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const posts = document.querySelectorAll('.post');
const sidebar = document.querySelector('.sidebar');
const savedTheme = localStorage.getItem('theme');

if (themeToggleButton) {
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    hero.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    posts.forEach(post => post.classList.add('dark-mode'));
    sidebar.classList.add('dark-mode');
    themeToggleButton.innerText = '🌙';
  } else {
    themeToggleButton.innerText = '☀️';
  }

  themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    hero.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    posts.forEach(post => post.classList.toggle('dark-mode'));
    sidebar.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      themeToggleButton.innerText = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleButton.innerText = '☀️';
      localStorage.setItem('theme', 'light');
    }
  });
}
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

