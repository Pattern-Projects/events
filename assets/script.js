
document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById("toggle-view");
  const eventList = document.getElementById("event-list");
  const savedView = localStorage.getItem("viewMode");

  if (savedView === "list") {
    eventList.classList.add("event-list-view");
  }

  toggleBtn.addEventListener("click", function() {
    eventList.classList.toggle("event-list-view");
    const mode = eventList.classList.contains("event-list-view") ? "list" : "cards";
    localStorage.setItem("viewMode", mode);
  });
});
