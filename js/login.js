document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
function showNotification(message, type = "success") {
  let bar = document.getElementById("notification-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "notification-bar";
    document.body.appendChild(bar);
  }
  bar.textContent = message;
  bar.className = "show " + type;
  setTimeout(() => {
    bar.classList.remove("show", type);
  }, 3000);
}
document.addEventListener("DOMContentLoaded", function () {
  const cont = document.querySelector(".cont");
  const signUpBtn = document.querySelector(".img-btn .m-up");
  const signInBtn = document.querySelector(".img-btn .m-in");


  signUpBtn.addEventListener("click", function () {
    cont.classList.add("s-signup");
  });


  signInBtn.addEventListener("click", function () {
    cont.classList.remove("s-signup");
  });


  document.querySelector(".sign-up .submit").addEventListener("click", function () {
    const name = document.querySelector(".sign-up input[type='text']").value.trim();
    const email = document.querySelector(".sign-up input[type='email']").value.trim();
    const password = document.querySelectorAll(".sign-up input[type='password']")[0].value;
    const confirmPassword = document.querySelectorAll(".sign-up input[type='password']")[1].value;

    if (!name || !email || !password || !confirmPassword) {
      showNotification("Vui lòng điền đầy đủ thông tin.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showNotification("Mật khẩu không khớp.", "error");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    showNotification("Đăng ký thành công! Vui lòng đăng nhập.", "success");
    cont.classList.remove("s-signup");
  });

 
  document.querySelector(".sign-in .submit").addEventListener("click", function () {
    const email = document.querySelector(".sign-in input[name='email']").value.trim();
    const password = document.querySelector(".sign-in input[name='password']").value;

    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData || email !== userData.email || password !== userData.password) {
      showNotification("Email hoặc mật khẩu sai!", "error");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    showNotification("Đăng nhập thành công!", "success");

    setTimeout(() => {
      window.location.href = "../index.html"; 
    }, 1000);
  });
});
