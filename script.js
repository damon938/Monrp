let players = [];

window.onload = function() {
  Tabletop.init({
    key: "13WGIqcbx2NvkrEQ2m0ceYFaTkEiuHjYvIbK0YWDx53E", 
    simpleSheet: true,
    callback: function(data, tabletop) {
      players = data;
      console.log("Données Google Sheet chargées :", players);
    }
  });
};

function getPlayerData() {
  const playerId = document.getElementById('playerId').value.trim();
  const player = players.find(p => p.ID === playerId);

  if(player) {
    
    let imageDefinitive = "	https://files.catbox.moe/81xavw.jpg	"; // Remplace par ton image

    document.getElementById('carteJoueur').innerHTML = `
      <img src="${imageDefinitive}" alt="Avatar">
      <h2>${player.Nom}</h2>
      <p><strong>Race :</strong> ${player.Race}</p>
      <p><strong>Classe :</strong> ${player.Classe}</p>
      <p><strong>💖 PV :</strong> ${player.PV}</p>
      <p><strong>⚔️ Force :</strong> ${player.Force} | <strong>💨 Vitesse :</strong> ${player.Vitesse} | <strong>✨ Magie :</strong> ${player.Magie}</p>
      <p><strong>🛡️ Endurance :</strong> ${player.Endurance} | <strong>🧠 Intelligence :</strong> ${player.Intelligence}</p>
      <p><strong>💰 Argent :</strong> ${player.Argent}</p>
      <p><strong>🎒 Inventaire :</strong> ${player.Inventaire}</p>
      <p><strong>🏆 Victoires :</strong> ${player.Victoires} | <strong>❌ Défaites :</strong> ${player.Defaites}</p>
      <p><strong>🗺️ Quêtes :</strong> ${player.Quetes}</p>
    `;
  } else {
    document.getElementById('carteJoueur').innerHTML = "ID invalide !";
  }
}
