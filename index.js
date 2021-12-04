const body = document.getElementById('body');
const greeting = document.getElementById('greeting');
const christmasBtn = document.getElementById('christmas');
const snowBtn = document.getElementById('snow');

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
function ChristmasTheme() {
  christmasBtn.addEventListener('click', function () {
    body.className = 'christmas';
    greeting.innerHTML = 'Merry Christmas 🎅';
  });
}
ChristmasTheme();

function snowTheme() {
  snowBtn.addEventListener('click', function () {
    body.className = 'snow';
    greeting.innerHTML = 'Frosty the Snowman ☃️';
  });
}
snowTheme();
