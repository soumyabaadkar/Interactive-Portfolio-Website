
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

document.querySelectorAll('.hover-img img').forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;

  if(hoverSrc) {
    img.addEventListener('mouseover', () => {
      img.src = hoverSrc;
    });
    img.addEventListener('mouseout', () => {
      img.src = originalSrc;
    });
  }
});

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  icon.className = isDarkMode ? "bi bi-moon-fill" : "bi bi-sun-fill";

  // Save user preference
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Load theme preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    icon.className = "bi bi-moon-fill";
  } else {
    body.classList.add("light-mode"); // ✅ Add this line
    icon.className = "bi bi-sun-fill";
  }
});

function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

