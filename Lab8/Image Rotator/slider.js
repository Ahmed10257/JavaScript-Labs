var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("prev")[0];
var images = document.getElementsByClassName("image");
// Applying an initial Styling
images[0].style.width = "30%";
images[0].style.borderStyle = "solid";
images[0].style.borderRadius = "15px";
images[0].style.borderWidth = "3px";
// Assigning the Next Button Event
next.addEventListener("click", nextImage);
var imageIndex = 0;
//the Next Image Function for Next Button
function nextImage() {
  // Stopping the automatic rotating
  clearInterval(timeOutId);
  let i = imageIndex;
  let j = i + 1;
  if (i == 2) j = 0;
  if (i == 3) {
    i = 0;
    j = i + 1;
  }
  images[j].style.width = "30%";
  images[j].style.borderStyle = "solid";
  images[j].style.borderWidth = "3px";
  images[j].style.borderRadius = "15px";

  images[i].style.width = "20%";
  images[i].style.borderStyle = " ";
  images[i].style.borderRadius = " ";
  images[i].style.borderWidth = " ";

  i++;

  imageIndex = i;
  // Continue the automatic Rotator
  timeOutId = setInterval(nextImage, 1000);
}

// Assigning the Previous Button Event
prev.addEventListener("click", prevImage);
// the Previous Image function for Prev Button
function prevImage() {
  // Stopping the automatic rotating
  clearInterval(timeOutId);
  let i = imageIndex;
  let j = i - 1;
  if (j == -1) j = 2;
  if (i == -1) {
    i = 2;
    j = 1;
  }
  console.log(i, j);
  images[j].style.width = "30%";
  images[j].style.borderStyle = "solid";
  images[j].style.borderWidth = "3px";
  images[j].style.borderRadius = "15px";

  images[i].style.width = "20%";
  images[i].style.borderStyle = " ";
  images[i].style.borderWidth = " ";
  images[i].style.borderRadius = " ";

  i--;

  imageIndex = i;
  // Continue the automatic Rotator
  timeOutId = setInterval(nextImage, 1000);
}
// The Automatic Slider Action
var timeOutId = setInterval(nextImage, 1000);
