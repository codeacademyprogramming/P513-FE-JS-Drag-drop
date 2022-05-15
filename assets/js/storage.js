// if (!localStorage.getItem("firstname")) {
//   const firstname = prompt("please enter your firstname");
//   if (firstname) {
//     localStorage.setItem("firstname", firstname);
//   }
// }

// window.onunload = () => {
//   const areYouSure = confirm("Are you sure you want to leave?, really?");
// };

// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   const areYouSure = confirm("Are you sure you want to leave?, really?");
// });

// setTimeout(() => {
//   const areYouSure = confirm(
//     "are you sure you want to reset your data, brother?"
//   );
//   if (areYouSure) localStorage.removeItem("firstname");
// }, 5000);

const favoriteIds = [34, 45, 23];

localStorage.setItem("favorites", JSON.stringify(favoriteIds));

const favorites = JSON.parse(localStorage.getItem("favorites")); // string  - favoriteIds
