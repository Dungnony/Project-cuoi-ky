document.addEventListener("DOMContentLoaded", function () {

  function searchPosts() {
    const searchQuery = document.querySelector('.search-form input').value.toLowerCase();
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
      const title = post.querySelector('h2 a').textContent.toLowerCase();
      const description = post.querySelector('p').textContent.toLowerCase();
      post.style.display = (title.includes(searchQuery) || description.includes(searchQuery)) ? 'block' : 'none';
    });
  }

  document.querySelector('.search-form button').addEventListener('click', function (e) {
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

  function applyTheme(isDark) {
    const action = isDark ? 'add' : 'remove';
    body.classList[action]('dark-mode');
    hero.classList[action]('dark-mode');
    navbar.classList[action]('dark-mode');
    sidebar.classList[action]('dark-mode');
    posts.forEach(post => post.classList[action]('dark-mode'));
    themeToggleButton.innerText = isDark ? '🌙' : '☀️';
  }

  applyTheme(savedTheme === 'dark');

  themeToggleButton.addEventListener('click', () => {
    const isDarkNow = !body.classList.contains('dark-mode');
    applyTheme(isDarkNow);
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
  });


  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  const protectedLinks = document.querySelectorAll(
    '.post-link, .tag-link, .nav-links a:not([href*="login.html"])'
  );
  protectedLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      if (localStorage.getItem("isLoggedIn") !== "true") {
        e.preventDefault();
        alert("⚠ Bạn cần đăng nhập để truy cập nội dung này!");
        window.location.href = "../html/login.html";
      }
    });
  });

  const loginLink = document.getElementById("Login");
  const logoutLink = document.getElementById("Logout");
  const logoutBtn = document.getElementById("logoutBtn");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (loginLink) loginLink.style.display = isLoggedIn ? "none" : "inline-block";
  if (logoutLink) logoutLink.style.display = isLoggedIn ? "inline-block" : "none";


  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("isLoggedIn");
      alert("Đã đăng xuất!");
      window.location.href = "../index.html"; 
    });
  }
});
