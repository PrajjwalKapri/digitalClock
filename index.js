// Selecting the hours, minutes, seconds, and ampm.
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

// A function to update hours, minutes, seconds, and ampm.
function updatetime() {


  // Creating a new Date instance.
  const now = new Date();

  // Fetching the required date components.
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampmValue = "AM";

  // Updating greet function.
  const greet = document.getElementById("greet");
  if (h >= 0 && h <= 3) {
    greet.textContent = "It's Still midnight, I hope you are having sweet dreams...";
  } else if (h >= 4 && h <= 6) {
    greet.textContent = "Today's gonna be a good day for you! So wake up now...";
  } else if (h >= 5 && h < 11) {
    greet.textContent = "Good Morning! I hope you are feeling energetic today.";
  } else if (h >= 12 && h <= 15) {
    greet.textContent = "It's noon already, have you completed your morning tasks?";
  }
   else if (h >= 16 && h <= 19) {
    greet.textContent = "What a nice evening. Isn't it?";
  } else if (h >= 20 && h < 22) {
    greet.textContent = "It's night. Have had yor dinner? ";
  } else {
    greet.textContent = "Let's call it a day!";
  }


  // Updating ampmValue.
  if (h > 12) {
    h -= 12;
    ampmValue = "PM";
    ampm.textContent = ampmValue;
  }

  // Changing the text content of h, m, s.
  hours.textContent = String(h).padStart(2, "0");
  minutes.textContent = String(m).padStart(2, "0");
  seconds.textContent = String(s).padStart(2, "0");

}

// This setInterval calls the updatetime function every 1 second.
setInterval(() => {
  updatetime();
}, 1000);
