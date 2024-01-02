var vowels = ["a", "A", "e", "E", "w", "W", "I", "i", "Y", "y"];
another_attempt = true;
while (another_attempt) {
  var string = prompt("Enter a Word: ");

  var i = 0;
  for (var char of string) {
    for (var vowel of vowels) {
      if (char == vowel) {
        i++;
        console.log(`${i}`);
      }
    }
  }
  alert(`Your Word has ${i} Vowels`);
  another_attempt = confirm("Do you want to try again?");
}

document.write("That was The Second Problem");
