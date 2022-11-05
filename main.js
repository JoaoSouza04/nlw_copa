function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = 0
function createCard(date, day, games) {
  // delay = delay + 0.3
  //a variable was made to increase the delay of the cards, but i didn't want to use it, because a delay was already made in css file.
  //the variable "delay" will always be "0".
  return `
  <div class="card" style="animation-delay: ${delay}s;">
    <h2>${date}<span>${day}</span></h2>
    <ul>
    ${games}        
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguai", "10:00", "south-korea") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguai") +
      createGame("cameroon", "07:00", "serbia") +
      createGame("south-korea", "10:00", "ghana")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south-korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguai") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  )
