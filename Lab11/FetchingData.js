var list = document.getElementById("list");
var seperatror = "______________________________";

function usersData() {
  fetch("https://dummyjson.com/users")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      for (var count = 0; count < data.users.length; count++) {
        var userMail = `<li>${data.users[count].email}</li>`;
        var userImage = `<li>${data.users[count].image}</li>`;
        list.insertAdjacentHTML("beforeend", userMail);
        list.insertAdjacentHTML("beforeend", userImage);
        list.insertAdjacentHTML("beforeend", seperatror);
      }
    })
    .catch((err) => console.log(err));
}
