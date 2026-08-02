console.log("JS connected");

const bars = document.querySelectorAll(".bar");
const chartSection = document.querySelector(".blank");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            bars.forEach(bar => {
                bar.style.height = bar.dataset.height;
            });
            observer.unobserve(chartSection);
        }
    });
}, {
    threshold: 0.4
});

observer.observe(chartSection);

window.addEventListener("scroll", () => {
    const title = document.querySelector(".title");

    if (window.scrollY > window.innerHeight * 0.8) {
        title.style.opacity = "0";
    } else {
        title.style.opacity = "1";
    }
});

window.addEventListener("scroll", () => {
    const title = document.querySelector(".subtitle");

    if (window.scrollY > window.innerHeight * 0.8) {
        title.style.opacity = "0";
    } else {
        title.style.opacity = "1";
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeTexts = document.querySelectorAll(".main-intro, .sub-intro");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else if (scrollY <= fadeEnd) {
    line1.style.opacity = (scrollY - fadeStart) / (fadeEnd - fadeStart);
      } else if (scrollY <= fadeEnd + 200) {
    line1.style.opacity = 1 - (scrollY - fadeEnd) / 200;
      } else {
    line1.style.opacity = 0;
  }
    });
  }, { threshold: 0.3 });

  fadeTexts.forEach(el => observer.observe(el));
});



document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function () {
        const answer = this.nextElementSibling;

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

const questions = document.querySelectorAll(".faq-question");

console.log(questions);