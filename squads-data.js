// ============================================================
// PremIQ19 — squads-data.js
// Player rosters (name + position + 2025/26 PL goals scored) per
// club, used to power the Blackjack card dropdown and the Q9
// hat-trick dropdown.
//
// STATUS AS OF 9 AUGUST 2026: only these 7 clubs (Man Utd, Man City,
// Arsenal, Liverpool, Chelsea, Tottenham, Aston Villa) are populated,
// using squad lists and 25/26 goal tallies supplied directly by the
// organiser. The other 13 clubs have been deliberately left empty
// rather than kept as unverified guesses — the Blackjack/Q9 dropdowns
// will simply show no players for those clubs until real data is
// added the same way.
//
// goals: null means either a new signing with no 25/26 PL goals for
// this club, or genuinely unknown — check against the source if it matters.
// ============================================================

const SQUADS = {
  MUN: [
    {name:'Tom Heaton', pos:'GK', goals:0}, {name:'Senne Lammens', pos:'GK', goals:0},
    {name:'Dermot Mee', pos:'GK', goals:null}, {name:'Karl Darlow', pos:'GK', goals:null},
    {name:'Diogo Dalot', pos:'DEF', goals:0}, {name:'Noussair Mazraoui', pos:'DEF', goals:0},
    {name:'Matthijs de Ligt', pos:'DEF', goals:1}, {name:'Harry Maguire', pos:'DEF', goals:1},
    {name:'Lisandro Martínez', pos:'DEF', goals:0}, {name:'Leny Yoro', pos:'DEF', goals:0},
    {name:'Luke Shaw', pos:'DEF', goals:1}, {name:'Patrick Dorgu', pos:'DEF', goals:1},
    {name:'Ayden Heaven', pos:'DEF', goals:0}, {name:'Diego León', pos:'DEF', goals:null},
    {name:'Godwill Kukonki', pos:'DEF', goals:null}, {name:'Harry Amass', pos:'DEF', goals:null},
    {name:'Bruno Fernandes', pos:'MID', goals:8}, {name:'Mason Mount', pos:'MID', goals:2},
    {name:'Manuel Ugarte', pos:'MID', goals:0}, {name:'Kobbie Mainoo', pos:'MID', goals:1},
    {name:'Jack Fletcher', pos:'MID', goals:null}, {name:'Tyler Fletcher', pos:'MID', goals:null},
    {name:'Jack Moorhouse', pos:'MID', goals:null}, {name:'Jim Thwaites', pos:'MID', goals:null},
    {name:'Andrey Santos', pos:'MID', goals:null}, {name:'Youri Tielemans', pos:'MID', goals:0},
    {name:'Matheus Cunha', pos:'MID', goals:9}, {name:'Amad Diallo', pos:'FWD', goals:6},
    {name:'Bryan Mbeumo', pos:'FWD', goals:11}, {name:'Benjamin Šeško', pos:'FWD', goals:11},
    {name:'Joshua Zirkzee', pos:'FWD', goals:4}, {name:'Chido Obi', pos:'FWD', goals:1},
    {name:'Marcus Rashford', pos:'FWD', goals:null}, {name:'Tynan Thompson', pos:'FWD', goals:null},
    {name:'Shea Lacey', pos:'FWD', goals:null}, {name:'Bendito Mantato', pos:'FWD', goals:null},
  ],
  MCI: [
    {name:'Gianluigi Donnarumma', pos:'GK', goals:0}, {name:'Marcus Bettinelli', pos:'GK', goals:0},
    {name:'Rúben Dias', pos:'DEF', goals:0}, {name:'Marc Guéhi', pos:'DEF', goals:null},
    {name:'Joško Gvardiol', pos:'DEF', goals:1}, {name:'Abdukodir Khusanov', pos:'DEF', goals:0},
    {name:'Vitor Reis', pos:'DEF', goals:0}, {name:'Juma Bah', pos:'DEF', goals:null},
    {name:'Max Alleyne', pos:'DEF', goals:null}, {name:'Rico Lewis', pos:'DEF', goals:0},
    {name:'Rayan Aït-Nouri', pos:'DEF', goals:1}, {name:'Josh Wilson-Esbrand', pos:'DEF', goals:null},
    {name:'Matheus Nunes', pos:'DEF', goals:1}, {name:'Nico O\u2019Reilly', pos:'MID', goals:3},
    {name:'Rodri', pos:'MID', goals:0}, {name:'Tijjani Reijnders', pos:'MID', goals:6},
    {name:'Mateo Kovačić', pos:'MID', goals:0}, {name:'Nico González', pos:'MID', goals:1},
    {name:'Elliot Anderson', pos:'MID', goals:null}, {name:'Kalvin Phillips', pos:'MID', goals:null},
    {name:'Rayan Cherki', pos:'MID', goals:6}, {name:'Phil Foden', pos:'MID', goals:7},
    {name:'Claudio Echeverri', pos:'MID', goals:null}, {name:'Jérémy Doku', pos:'FWD', goals:5},
    {name:'Savinho', pos:'FWD', goals:0}, {name:'Oscar Bobb', pos:'FWD', goals:0},
    {name:'Jeremy Monga', pos:'FWD', goals:null}, {name:'Omar Marmoush', pos:'FWD', goals:6},
    {name:'Erling Haaland', pos:'FWD', goals:27}, {name:'Antoine Semenyo', pos:'FWD', goals:6},
  ],
  ARS: [
    {name:'David Raya', pos:'GK', goals:0}, {name:'Kepa Arrizabalaga', pos:'GK', goals:0},
    {name:'Illan Meslier', pos:'GK', goals:null}, {name:'Ben White', pos:'DEF', goals:0},
    {name:'Jurriën Timber', pos:'DEF', goals:2}, {name:'William Saliba', pos:'DEF', goals:1},
    {name:'Gabriel Magalhães', pos:'DEF', goals:3}, {name:'Cristhian Mosquera', pos:'DEF', goals:0},
    {name:'Piero Hincapié', pos:'DEF', goals:null}, {name:'Riccardo Calafiori', pos:'DEF', goals:0},
    {name:'Myles Lewis-Skelly', pos:'DEF', goals:2}, {name:'Declan Rice', pos:'MID', goals:4},
    {name:'Martin Ødegaard', pos:'MID', goals:3}, {name:'Martin Zubimendi', pos:'MID', goals:5},
    {name:'Mikel Merino', pos:'MID', goals:4}, {name:'Bruno Guimarães', pos:'MID', goals:null},
    {name:'Eberechi Eze', pos:'MID', goals:6}, {name:'Ethan Nwaneri', pos:'MID', goals:3},
    {name:'Max Dowman', pos:'MID', goals:2}, {name:'Fabio Vieira', pos:'MID', goals:null},
    {name:'Bukayo Saka', pos:'FWD', goals:6}, {name:'Gabriel Martinelli', pos:'FWD', goals:1},
    {name:'Noni Madueke', pos:'FWD', goals:2}, {name:'Christos Tzolis', pos:'FWD', goals:null},
    {name:'Gabriel Jesus', pos:'FWD', goals:4}, {name:'Kai Havertz', pos:'FWD', goals:4},
    {name:'Viktor Gyökeres', pos:'FWD', goals:11}, {name:'Reiss Nelson', pos:'FWD', goals:0},
  ],
  LIV: [
    {name:'Alisson Becker', pos:'GK', goals:0}, {name:'Giorgi Mamardashvili', pos:'GK', goals:0},
    {name:'Freddie Woodman', pos:'GK', goals:0}, {name:'Harvey Davies', pos:'GK', goals:0},
    {name:'Vítězslav Jaroš', pos:'GK', goals:0}, {name:'Joe Gomez', pos:'DEF', goals:0},
    {name:'Virgil van Dijk', pos:'DEF', goals:4}, {name:'Jérémy Jacquet', pos:'DEF', goals:null},
    {name:'Giovanni Leoni', pos:'DEF', goals:null}, {name:'Miloš Kerkez', pos:'DEF', goals:2},
    {name:'Conor Bradley', pos:'DEF', goals:0}, {name:'Jeremie Frimpong', pos:'DEF', goals:0},
    {name:'Calvin Ramsay', pos:'DEF', goals:0}, {name:'Wellity Lucky', pos:'DEF', goals:0},
    {name:'Carter Pinnington', pos:'DEF', goals:null}, {name:'Talla Ndiaye', pos:'DEF', goals:null},
    {name:'Wataru Endo', pos:'MID', goals:0}, {name:'Florian Wirtz', pos:'MID', goals:5},
    {name:'Dominik Szoboszlai', pos:'MID', goals:6}, {name:'Alexis Mac Allister', pos:'MID', goals:2},
    {name:'Curtis Jones', pos:'MID', goals:0}, {name:'Ryan Gravenberch', pos:'MID', goals:5},
    {name:'Trey Nyoni', pos:'MID', goals:0}, {name:'Stefan Bajčetić', pos:'MID', goals:0},
    {name:'James McConnell', pos:'MID', goals:0}, {name:'Harvey Elliott', pos:'MID', goals:0},
    {name:'Kieran Morrison', pos:'MID', goals:null}, {name:'Alexander Isak', pos:'FWD', goals:3},
    {name:'Hugo Ekitiké', pos:'FWD', goals:11}, {name:'Cody Gakpo', pos:'FWD', goals:7},
    {name:'Federico Chiesa', pos:'FWD', goals:2}, {name:'Rio Ngumoha', pos:'FWD', goals:2},
    {name:'Jayden Danns', pos:'FWD', goals:0}, {name:'Victor Muñoz', pos:'FWD', goals:null},
  ],
  CHE: [
    {name:'Robert Sánchez', pos:'GK', goals:0}, {name:'Filip Jørgensen', pos:'GK', goals:0},
    {name:'Teddy Sharman-Lowe', pos:'GK', goals:0}, {name:'Mike Penders', pos:'GK', goals:0},
    {name:'Gaga Slonina', pos:'GK', goals:0}, {name:'Axel Disasi', pos:'DEF', goals:0},
    {name:'Maxence Lacroix', pos:'DEF', goals:null}, {name:'Tosin Adarabioyo', pos:'DEF', goals:0},
    {name:'Benoît Badiashile', pos:'DEF', goals:0}, {name:'Levi Colwill', pos:'DEF', goals:0},
    {name:'Mamadou Sarr', pos:'DEF', goals:0}, {name:'Jorrel Hato', pos:'DEF', goals:0},
    {name:'Reece James', pos:'DEF', goals:2}, {name:'Malo Gusto', pos:'DEF', goals:2},
    {name:'Wesley Fofana', pos:'DEF', goals:0}, {name:'Aaron Anselmino', pos:'DEF', goals:0},
    {name:'Josh Acheampong', pos:'DEF', goals:1}, {name:'Ishé Samuels-Smith', pos:'DEF', goals:null},
    {name:'Marco Palestra', pos:'DEF', goals:null}, {name:'Valentin Barco', pos:'DEF', goals:null},
    {name:'Enzo Fernández', pos:'MID', goals:10}, {name:'Cole Palmer', pos:'MID', goals:10},
    {name:'Moisés Caicedo', pos:'MID', goals:3}, {name:'Roméo Lavia', pos:'MID', goals:0},
    {name:'Dário Essugo', pos:'MID', goals:0}, {name:'Morgan Rogers', pos:'MID', goals:10},
    {name:'Jordan Henderson', pos:'MID', goals:null}, {name:'Geovany Quenda', pos:'FWD', goals:null},
    {name:'Jamie Gittens', pos:'FWD', goals:0}, {name:'Pedro Neto', pos:'FWD', goals:5},
    {name:'Estêvão', pos:'FWD', goals:2}, {name:'Emmanuel Emegha', pos:'FWD', goals:null},
    {name:'Danny Welbeck', pos:'FWD', goals:7}, {name:'Liam Delap', pos:'FWD', goals:1},
    {name:'Nicolas Jackson', pos:'FWD', goals:0}, {name:'João Pedro', pos:'FWD', goals:15},
    {name:'Marc Guiu', pos:'FWD', goals:0}, {name:'David Datro Fofana', pos:'FWD', goals:null},
  ],
  TOT: [
    {name:'Guglielmo Vicario', pos:'GK', goals:0}, {name:'Antonín Kinský', pos:'GK', goals:0},
    {name:'Brandon Austin', pos:'GK', goals:0}, {name:'Luca Gunter', pos:'GK', goals:0},
    {name:'Martin Dúbravka', pos:'GK', goals:null}, {name:'Andy Robertson', pos:'DEF', goals:0},
    {name:'Destiny Udogie', pos:'DEF', goals:0}, {name:'Ben Davies', pos:'DEF', goals:0},
    {name:'Micky van de Ven', pos:'DEF', goals:4}, {name:'Cristian Romero', pos:'DEF', goals:2},
    {name:'Kevin Danso', pos:'DEF', goals:0}, {name:'Jan Paul van Hecke', pos:'DEF', goals:null},
    {name:'Marcos Senesi', pos:'DEF', goals:null}, {name:'Pedro Porro', pos:'DEF', goals:1},
    {name:'Djed Spence', pos:'DEF', goals:0}, {name:'Souza', pos:'DEF', goals:null},
    {name:'João Palhinha', pos:'MID', goals:5}, {name:'Sandro Tonali', pos:'MID', goals:null},
    {name:'Mateus Fernandes', pos:'MID', goals:null}, {name:'Xavi Simons', pos:'MID', goals:0},
    {name:'Conor Gallagher', pos:'MID', goals:null}, {name:'James Maddison', pos:'MID', goals:2},
    {name:'Archie Gray', pos:'MID', goals:0}, {name:'Lucas Bergvall', pos:'MID', goals:2},
    {name:'Pape Matar Sarr', pos:'MID', goals:3}, {name:'Rodrigo Bentancur', pos:'MID', goals:1},
    {name:'Mohammed Kudus', pos:'FWD', goals:3}, {name:'Dejan Kulusevski', pos:'FWD', goals:2},
    {name:'Richarlison', pos:'FWD', goals:11}, {name:'Dominic Solanke', pos:'FWD', goals:6},
    {name:'Mathys Tel', pos:'FWD', goals:2}, {name:'Wilson Odobert', pos:'FWD', goals:1},
    {name:'Mikey Moore', pos:'FWD', goals:null}, {name:'Manor Solomon', pos:'FWD', goals:null},
  ],
  AVL: [
    {name:'Emiliano Martínez', pos:'GK', goals:0}, {name:'Marco Bizot', pos:'GK', goals:null},
    {name:'Robin Olsen', pos:'GK', goals:0}, {name:'Matty Cash', pos:'DEF', goals:3},
    {name:'Ezri Konsa', pos:'DEF', goals:0}, {name:'Pau Torres', pos:'DEF', goals:1},
    {name:'Victor Lindelöf', pos:'DEF', goals:0}, {name:'Ian Maatsen', pos:'DEF', goals:1},
    {name:'Andrés García', pos:'DEF', goals:0}, {name:'Kosta Nedeljković', pos:'DEF', goals:null},
    {name:'Boubacar Kamara', pos:'MID', goals:0}, {name:'John McGinn', pos:'MID', goals:2},
    {name:'Amadou Onana', pos:'MID', goals:2}, {name:'Ross Barkley', pos:'MID', goals:3},
    {name:'Jacob Ramsey', pos:'MID', goals:2}, {name:'Emi Buendía', pos:'MID', goals:1},
    {name:'João Gomes', pos:'MID', goals:null}, {name:'Johan Manzambi', pos:'MID', goals:null},
    {name:'Samuel Iling-Junior', pos:'MID', goals:null}, {name:'Evann Guessand', pos:'FWD', goals:null},
    {name:'Alysson', pos:'FWD', goals:0}, {name:'Alejandro Garnacho', pos:'FWD', goals:null},
    {name:'Ollie Watkins', pos:'FWD', goals:16}, {name:'Tammy Abraham', pos:'FWD', goals:4},
    {name:'Zépiqueno Redmond', pos:'FWD', goals:null},
  ],
};

function allSquadPlayers(){
  const list = [];
  Object.entries(SQUADS).forEach(([tag, players]) => {
    players.forEach(p => list.push({ ...p, team: tag }));
  });
  return list;
}
