
const players = [
  {
    id: "ARK001",
    nom: "Arken Dravos",
    race: "Démon",
    classe: "Guerrier",
    pv: 20,
    force: 18,
    vitesse: 12,
    magie: 6,
    endurance: 15,
    intelligence: 10,
    argent: 523,
    Victoire : 0,
    défaite: 0,
    inventaire: ["Épée des Ténèbres x1", "Potion de soin x5"]
  },
  {
    id: "ARK002",
    nom: "Lyra Moon",
    race: "Vampire",
    classe: "Nécromancien",
    pv: 100,
    force: 12,
    vitesse: 14,
    magie: 20,
    endurance: 12,
    intelligence: 18,
    argent: 1200,
    inventaire: ["Grimoire interdit x1", "Cape de nuit x1"]
  }
];

function getPlayerData() {
  const playerId = document.getElementById('playerId').value.trim();
  const player = players.find(p => p.id === playerId);

  if(player) {
    document.getElementById('carteJoueur').innerHTML = `
      <h2>${player.nom}</h2>
      <p><strong>Race :</strong> ${player.race}</p>
      <p><strong>Classe :</strong> ${player.classe}</p>
      <p><strong>PV :</strong> ${player.pv}</p>
      <p><strong>Force :</strong> ${player.force} | <strong>Vitesse :</strong> ${player.vitesse} | <strong>Magie :</strong> ${player.magie}</p>
      <p><strong>Endurance :</strong> ${player.endurance} | <strong>Intelligence :</strong> ${player.intelligence}</p>
      <p><strong>Argent :</strong> ${player.argent}</p>
      <p><strong>Inventaire :</strong> ${player.inventaire.join(", ")}</p>
    `;
  } else {
    document.getElementById('carteJoueur').innerHTML = "ID invalide !";
  }
}
