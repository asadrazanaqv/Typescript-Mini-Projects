const current_users = ["Afnan", "Meshaim", "Rafay", "Sajid", "Ali"];
const new_users = ["usr1", "usr2", "usr3", "usr4", "usr5"];

for (const new_user of new_users) {
  if (current_users.includes(new_user.toLowerCase())) {
    console.log(`${new_user} will need to enter a new username.`);
  } else {
    console.log(`${new_user} is available.`);
  }
}
