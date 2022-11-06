function createdGame (player1, hour, player2){
  return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
     </li>
  `
}

let delay = -0.4;
function createdCard (date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="cards" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =    
        createdCard(
         "24/11",
         "quinta",
         createdGame("brazil", "16:00", "serbia")
        )+
        createdCard(
         "28/11",
         "segunda",
          createdGame("switzerland", "13:00", "brazil") +
            createdGame("portugal", "16:00", "uruguay")
        )+
        createdCard(
          "02/12",
          "sexta",
          createdGame("south korea", "12:00", "portugal")
       )
         

