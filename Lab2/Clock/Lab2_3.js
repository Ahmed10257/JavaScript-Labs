var clock = Number(prompt("Enter a Clock (0 ~ 24):"));
while (clock > 24) {
  alert("Not valid Clock");
  clock = Number(prompt("Re-Enter a Clock (0 ~ 24):"));
}

switch (clock) {
  case 0:
    document.write(`it's 12 AM `);
    break;
  case 12:
    document.write(`it's ${clock} PM `);
    break;
  case 24:
    document.write(`it's 12 AM `);
    break;
  default:
    if (clock < 12) {
      document.write(`it's ${clock} AM `);
    } else {
      clock = clock - 12;
      document.write(`it's ${clock} PM `);
    }
    break;
}
