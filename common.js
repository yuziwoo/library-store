window.addEventListener("resize", () => {
  // Resize Error Solution
  _dcode_resize();
})

window.addEventListener("DOMContentLoaded", () => {
  if (document.body.offsetWidth < 1360) {
    document.body.classList.add("ver_mob");
  } else {
    document.body.classList.add("ver_pc");
  }
})