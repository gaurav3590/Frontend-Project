navigator.getBattery().then(function (battery) {
  function updateBatteryStatus() {
    var level = Math.floor(battery.level * 100);
    document.querySelector('.battery-level').style.width = level + '%';
    document.querySelector('.battery-percentage').textContent = level + '%';
  }
  updateBatteryStatus();
  battery.addEventListener('levelchange', updateBatteryStatus);
});
