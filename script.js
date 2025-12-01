function openTG() {
  window.location.href = "https://t.me/+_PzFoPA1DmM1NjIy";
}

function copyLink() {
  const url = "https://t.me/+_PzFoPA1DmM1NjIy"; // правильная ссылка
  navigator.clipboard.writeText(url).then(() => {
    alert('Ссылка скопирована! Вставьте в браузер и откройте.');
  }).catch(() => {
    alert('Не удалось скопировать ссылку. Попробуйте вручную.');
  });
}
