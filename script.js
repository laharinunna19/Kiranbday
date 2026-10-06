const openBtn = document.getElementById("openBtn");

const finalBtn = document.getElementById("finalBtn");

const finalMessage =
  document.getElementById("finalMessage");


// Opening button
openBtn.addEventListener("click", () => {

  document
    .querySelector(".birthday")
    .scrollIntoView({
      behavior: "smooth"
    });

});


// Final surprise button
finalBtn.addEventListener("click", () => {

  finalMessage.classList.add("show");

  finalMessage.setAttribute(
    "aria-hidden",
    "false"
  );

  finalBtn.style.display = "none";

  setTimeout(() => {

    finalMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }, 100);

});


// Scroll animations
const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach((section) => {

    if (!section.classList.contains("active")) {

      observer.observe(section);

    }

  });


// Floating hearts and stars
const petals =
  document.querySelector(".petals");


for (let i = 0; i < 18; i++) {

  const item =
    document.createElement("span");

  item.textContent =
    i % 3 === 0
      ? "♡"
      : "✦";

  item.style.left =
    `${Math.random() * 100}%`;

  item.style.animationDelay =
    `${Math.random() * 8}s`;

  item.style.animationDuration =
    `${7 + Math.random() * 8}s`;

  petals.appendChild(item);

}
