function initializeEventListeners() {
  const tiles = document.querySelectorAll(".wrapper .members .tile");
  
  tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      tiles.forEach((tile) => {
        tile.classList.remove("active");
      })
      tile.classList.add("active");
    });
  });
}

function initialize() {
  initializeEventListeners();
}

// Start it up
initialize();

