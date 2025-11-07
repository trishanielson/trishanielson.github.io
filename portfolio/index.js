// const greeting = document.getElementById("greeting");
// greeting.style.textAlign = "center"
// greeting.style.marginTop = "50px"
// const username = window.prompt("What's your name?", "Jane")
// greeting.textContent = "Welcome to my website, " + username + "!"

const toggle = document.createElement("button");
toggle.textContent = "🌙";
toggle.className = "theme-toggle";
document.body.prepend(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});


let count = 0;
document.querySelector(".download-btn").addEventListener("click", () => {
  count++;
  alert(`Your resume has been downloaded ${count} times!`);
});

// 🌞 Personalized Greeting
const greetingEl = document.getElementById("greeting");
const hour = new Date().getHours();
let greetingText = "";

if (hour < 12) greetingText = "Good morning ☀️";
else if (hour < 18) greetingText = "Good afternoon 🌸";
else greetingText = "Good evening 🌙";

greetingEl.textContent = greetingText;

// ✨ Fade-In Sections on Scroll
const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => {
  observer.observe(section);
});
// 🌸 Animated Skill Bars on Scroll
const skillFills = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const percent = fill.getAttribute("data-percent");
      fill.style.width = percent + "%";
      skillObserver.unobserve(fill); // ensures animation runs only once
    }
  });
}, { threshold: 0.4 });

skillFills.forEach(fill => {
  skillObserver.observe(fill);
});

// 💌 Animated Send Message Button
const sendButton = document.querySelector(".send-btn");
if (sendButton) {
  sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    sendButton.textContent = "Sending...";
    sendButton.classList.add("sending");

    setTimeout(() => {
      sendButton.textContent = "Message Sent ✓";
      sendButton.classList.remove("sending");
      sendButton.classList.add("sent");
    }, 2000);
  });
}
