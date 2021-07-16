window.addEventListener('load', () => {
  const users = document.querySelector(".users");
  const usercount = document.querySelector(".users-count");

  fetch('https://cape.yourfriend.lv/api/v1/users/view')
    .then(response => response.json())
    .then(data => {
      users.innerHTML = data.join(", ");
      usercount.innerHTML = data.length;
    });


  const cosmetics = document.querySelector(".cosmetics");
  const cosmeticcount = document.querySelector(".cosmetics-count");

  fetch('https://cape.yourfriend.lv/api/v1/cosmetics/view')
    .then(response => response.json())
    .then(data => {
      cosmetics.innerHTML = data.join(", ");
      cosmeticcount.innerHTML = data.length;
    });
  })