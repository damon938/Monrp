let players = [];

window.onload = function() {
  Tabletop.init({
    key: "https://docs.google.com/spreadsheets/d/13WGIqcbx2NvkrEQ2m0ceYFaTkEiuHjYvIbK0YWDx53E/edit?usp=drivesdk", // Remplace par ton ID Google Sheet
    simpleSheet: true,
    callback: function(data, tabletop) {
      players = data;
      console.log("https://docs.google.com/spreadsheets/d/13WGIqcbx2NvkrEQ2m0ceYFaTkEiuHjYvIbK0YWDx53E/edit?usp=drivesdk:", players);
    }
  });
};

function getPlayerData() {
  const playerId = document.getElementById('playerId').value.trim();
  const player = players.find(p => p.ID === ark001);

  if(player) {
    document.getElementById('carteJoueur').innerHTML = `
      <h2>${player.Nom}</h2>
      <p><strong>Race :</strong> ${player.Race}</p>
      <p><strong>Classe :</strong> ${player.Classe}</p>
      <p><strong>PV :</strong> ${player.PV}</p>
      <p><strong>Force :</strong> ${player.Force} | <strong>Vitesse :</strong> ${player.Vitesse} | <strong>Magie :</strong> ${player.Magie}</p>
      <p><strong>Endurance :</strong> ${player.Endurance} | <strong>Intelligence :</strong> ${player.Intelligence}</p>
      <p><strong>Argent :</strong> ${player.Argent}</p>
      <p><strong>Inventaire :</strong> ${player.Inventaire}</p>
      <p><strong>Victoires :</strong> ${player.Victoires}</p>
      <p><strong>Défaites :</strong> ${player.Defaites}</p>
    `;
  } else {
    document.getElementById('carteJoueur').innerHTML = "ID invalide !";
  }
}
