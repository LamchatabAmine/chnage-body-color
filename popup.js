document.addEventListener("DOMContentLoaded", function () {
  const changeColorButton = document.getElementById("changeColorButton");

  changeColorButton.addEventListener("click", () => {
    chrome.scripting.executeScript({
      target: { tabId: chrome.tabs.id },
      function: changeBodyColor,
    });
  });

  function changeBodyColor() {
    document.body.style.backgroundColor = getRandomColor();
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
