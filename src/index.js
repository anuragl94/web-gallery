window.addEventListener('beforeinstallprompt', (event) => {
  event.prompt();
  console.log(event.userChoice);
})

window.addEventListener('appinstalled', e => {
  console.log(e);
})