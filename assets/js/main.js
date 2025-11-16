const uls = document.querySelectorAll("ul");

uls.forEach((ul) => {
  const resetClass = ul.parentNode.getAttribute("class");
  const lis = ul.querySelectorAll("li");

  lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const target = e.currentTarget;

      if (
        target.classList.contains("active") ||
        target.classList.contains("follow")
      ) {
        return;
      }

      // Update footer/tabbar class dynamically
      // ul.parentNode.setAttribute(
      //   "class",
      //   `${resetClass} ${target.getAttribute("data-where")}-style`
      // );

      // Remove old active
      lis.forEach((item) => clearClass(item, "active"));

      // Add new active
      setClass(target, "active");

      // Show the correct day
      const day = target.getAttribute("data-day");
      if (day) showSection(day);
    });
  });
});

function clearClass(node, className) {
  node.classList.remove(className);
}

function setClass(node, className) {
  node.classList.add(className);
}

// Create table row for an exercise
const createExerciseRow = (exercise) => `
  <tr>
    <td class="exercise-name">${exercise.exercise}</td>
    <td class="exercise-detail">${exercise.detail}</td>
  </tr>
`;

// Render general warm-up
function renderGeneral() {
  return `
    <h2>General Warm-Up</h2>
    <table class="exercise-table">
      <thead><tr><th>Exercise</th><th>Reps/Details</th></tr></thead>
      <tbody>${globalDailyWarmUp.map(createExerciseRow).join("")}</tbody>
    </table>
  `;
}

// Render a specific day
function renderDay(dayKey, type = "specificWarmUp") {
  const day = workoutData[dayKey];
  const data = day[type];
  return `
    <h2>${day.name}</h2>
    <div class="tab-nav">
      <button class="tab-button ${type === "specificWarmUp" ? "active" : ""}" 
              onclick="showDayTab('${dayKey}','specificWarmUp',this)">Warm-Up</button>
      <button class="tab-button ${type === "mainExercises" ? "active" : ""}" 
              onclick="showDayTab('${dayKey}','mainExercises',this)">Exercises</button>
    </div>
    <table class="exercise-table">
      <thead><tr><th>Exercise</th><th>Reps/Details</th></tr></thead>
      <tbody>${data.map(createExerciseRow).join("")}</tbody>
    </table>
  `;
}

// Show section in main display
function showSection(section) {
  const display = document.getElementById("workout-display");
  if (section === "general") display.innerHTML = renderGeneral();
  else display.innerHTML = renderDay(section, "specificWarmUp");

  // Highlight bottom nav buttons
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.trim() === section);
  });

  // Highlight footer icons
  document.querySelectorAll(".tabbar li").forEach((li) => {
    li.classList.toggle("active", li.getAttribute("data-day") === section);
  });
}

// Switch warm-up/exercises tab
function showDayTab(dayKey, type, btn) {
  const display = document.getElementById("workout-display");
  display.innerHTML = renderDay(dayKey, type);
}

// Auto-detect today
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().getDay();
  const dayMap = {
    0: "general",
    1: "Day 1",
    2: "Day 2",
    3: "Day 3",
    4: "Day 4",
    5: "Day 5",
    6: "Day 6",
  };
  showSection(dayMap[today] || "general");
});
