// ============================================================
// PremIQ19 — squads-data.js
// Player rosters (name + position) per club, used to power the
// Blackjack card dropdown and the Q9 hat-trick dropdown.
//
// IMPORTANT CAVEAT: this list is built from general knowledge and
// has NOT been individually verified against confirmed 2026/27
// squads — transfers happen constantly right up to deadline day,
// so treat this as a solid starting point, not a guaranteed-accurate
// roster. Ask Claude to do a proper research pass (like the fixture
// checks) to verify/refresh this before relying on it for real.
// ============================================================

const SQUADS = {
  ARS: [
    {name:'David Raya', pos:'GK'}, {name:'William Saliba', pos:'DEF'}, {name:'Gabriel Magalhães', pos:'DEF'},
    {name:'Jurriën Timber', pos:'DEF'}, {name:'Riccardo Calafiori', pos:'DEF'}, {name:'Ben White', pos:'DEF'},
    {name:'Myles Lewis-Skelly', pos:'DEF'}, {name:'Declan Rice', pos:'MID'}, {name:'Martin Ødegaard', pos:'MID'},
    {name:'Mikel Merino', pos:'MID'}, {name:'Bukayo Saka', pos:'FWD'}, {name:'Gabriel Martinelli', pos:'FWD'},
    {name:'Kai Havertz', pos:'FWD'}, {name:'Gabriel Jesus', pos:'FWD'}, {name:'Leandro Trossard', pos:'FWD'},
  ],
  MCI: [
    {name:'Ederson', pos:'GK'}, {name:'Rúben Dias', pos:'DEF'}, {name:'Joško Gvardiol', pos:'DEF'},
    {name:'Nathan Aké', pos:'DEF'}, {name:'Kyle Walker', pos:'DEF'}, {name:'Rodri', pos:'MID'},
    {name:'Kevin De Bruyne', pos:'MID'}, {name:'Bernardo Silva', pos:'MID'}, {name:'Phil Foden', pos:'MID'},
    {name:'Erling Haaland', pos:'FWD'}, {name:'Jack Grealish', pos:'FWD'}, {name:'Jérémy Doku', pos:'FWD'},
    {name:'Savinho', pos:'FWD'},
  ],
  MUN: [
    {name:'André Onana', pos:'GK'}, {name:'Lisandro Martínez', pos:'DEF'}, {name:'Matthijs de Ligt', pos:'DEF'},
    {name:'Noussair Mazraoui', pos:'DEF'}, {name:'Diogo Dalot', pos:'DEF'}, {name:'Bruno Fernandes', pos:'MID'},
    {name:'Kobbie Mainoo', pos:'MID'}, {name:'Casemiro', pos:'MID'}, {name:'Manuel Ugarte', pos:'MID'},
    {name:'Marcus Rashford', pos:'FWD'}, {name:'Rasmus Højlund', pos:'FWD'}, {name:'Alejandro Garnacho', pos:'FWD'},
    {name:'Joshua Zirkzee', pos:'FWD'},
  ],
  AVL: [
    {name:'Emiliano Martínez', pos:'GK'}, {name:'Ezri Konsa', pos:'DEF'}, {name:'Pau Torres', pos:'DEF'},
    {name:'Lucas Digne', pos:'DEF'}, {name:'Matty Cash', pos:'DEF'}, {name:'Youri Tielemans', pos:'MID'},
    {name:'Boubacar Kamara', pos:'MID'}, {name:'John McGinn', pos:'MID'}, {name:'Morgan Rogers', pos:'MID'},
    {name:'Ollie Watkins', pos:'FWD'}, {name:'Leon Bailey', pos:'FWD'}, {name:'Jhon Durán', pos:'FWD'},
  ],
  LIV: [
    {name:'Alisson', pos:'GK'}, {name:'Virgil van Dijk', pos:'DEF'}, {name:'Ibrahima Konaté', pos:'DEF'},
    {name:'Trent Alexander-Arnold', pos:'DEF'}, {name:'Andrew Robertson', pos:'DEF'}, {name:'Alexis Mac Allister', pos:'MID'},
    {name:'Ryan Gravenberch', pos:'MID'}, {name:'Dominik Szoboszlai', pos:'MID'}, {name:'Mohamed Salah', pos:'FWD'},
    {name:'Darwin Núñez', pos:'FWD'}, {name:'Luis Díaz', pos:'FWD'}, {name:'Cody Gakpo', pos:'FWD'},
  ],
  BOU: [
    {name:'Neto', pos:'GK'}, {name:'Illia Zabarnyi', pos:'DEF'}, {name:'Marcos Senesi', pos:'DEF'},
    {name:'Adam Smith', pos:'DEF'}, {name:'Milos Kerkez', pos:'DEF'}, {name:'Ryan Christie', pos:'MID'},
    {name:'Lewis Cook', pos:'MID'}, {name:'David Brooks', pos:'MID'}, {name:'Justin Kluivert', pos:'FWD'},
    {name:'Dominic Solanke', pos:'FWD'}, {name:'Antoine Semenyo', pos:'FWD'},
  ],
  SUN: [
    {name:'Anthony Patterson', pos:'GK'}, {name:'Dan Ballard', pos:'DEF'}, {name:'Luke O\u2019Nien', pos:'DEF'},
    {name:'Trai Hume', pos:'DEF'}, {name:'Dennis Cirkin', pos:'DEF'}, {name:'Dan Neil', pos:'MID'},
    {name:'Chris Rigg', pos:'MID'}, {name:'Patrick Roberts', pos:'MID'}, {name:'Wilson Isidor', pos:'FWD'},
    {name:'Eliezer Mayenda', pos:'FWD'},
  ],
  BHA: [
    {name:'Bart Verbruggen', pos:'GK'}, {name:'Lewis Dunk', pos:'DEF'}, {name:'Jan Paul van Hecke', pos:'DEF'},
    {name:'Pervis Estupiñán', pos:'DEF'}, {name:'Tariq Lamptey', pos:'DEF'}, {name:'Carlos Baleba', pos:'MID'},
    {name:'Billy Gilmour', pos:'MID'}, {name:'James Milner', pos:'MID'}, {name:'Kaoru Mitoma', pos:'FWD'},
    {name:'Danny Welbeck', pos:'FWD'}, {name:'João Pedro', pos:'FWD'},
  ],
  BRE: [
    {name:'Mark Flekken', pos:'GK'}, {name:'Nathan Collins', pos:'DEF'}, {name:'Ethan Pinnock', pos:'DEF'},
    {name:'Rico Henry', pos:'DEF'}, {name:'Aaron Hickey', pos:'DEF'}, {name:'Christian Nørgaard', pos:'MID'},
    {name:'Mikkel Damsgaard', pos:'MID'}, {name:'Yoane Wissa', pos:'FWD'}, {name:'Bryan Mbeumo', pos:'FWD'},
    {name:'Kevin Schade', pos:'FWD'},
  ],
  CHE: [
    {name:'Robert Sánchez', pos:'GK'}, {name:'Levi Colwill', pos:'DEF'}, {name:'Wesley Fofana', pos:'DEF'},
    {name:'Reece James', pos:'DEF'}, {name:'Marc Cucurella', pos:'DEF'}, {name:'Moisés Caicedo', pos:'MID'},
    {name:'Enzo Fernández', pos:'MID'}, {name:'Cole Palmer', pos:'MID'}, {name:'Nicolas Jackson', pos:'FWD'},
    {name:'Christopher Nkunku', pos:'FWD'}, {name:'Pedro Neto', pos:'FWD'},
  ],
  FUL: [
    {name:'Bernd Leno', pos:'GK'}, {name:'Calvin Bassey', pos:'DEF'}, {name:'Joachim Andersen', pos:'DEF'},
    {name:'Antonee Robinson', pos:'DEF'}, {name:'Kenny Tete', pos:'DEF'}, {name:'João Palhinha', pos:'MID'},
    {name:'Sander Berge', pos:'MID'}, {name:'Andreas Pereira', pos:'MID'}, {name:'Emile Smith Rowe', pos:'FWD'},
    {name:'Raúl Jiménez', pos:'FWD'}, {name:'Rodrigo Muniz', pos:'FWD'},
  ],
  NEW: [
    {name:'Nick Pope', pos:'GK'}, {name:'Sven Botman', pos:'DEF'}, {name:'Fabian Schär', pos:'DEF'},
    {name:'Kieran Trippier', pos:'DEF'}, {name:'Tino Livramento', pos:'DEF'}, {name:'Bruno Guimarães', pos:'MID'},
    {name:'Sandro Tonali', pos:'MID'}, {name:'Joelinton', pos:'MID'}, {name:'Anthony Gordon', pos:'FWD'},
    {name:'Alexander Isak', pos:'FWD'}, {name:'Harvey Barnes', pos:'FWD'},
  ],
  EVE: [
    {name:'Jordan Pickford', pos:'GK'}, {name:'James Tarkowski', pos:'DEF'}, {name:'Jarrad Branthwaite', pos:'DEF'},
    {name:'Vitaliy Mykolenko', pos:'DEF'}, {name:'Nathan Patterson', pos:'DEF'}, {name:'Idrissa Gueye', pos:'MID'},
    {name:'Abdoulaye Doucouré', pos:'MID'}, {name:'James Garner', pos:'MID'}, {name:'Dwight McNeil', pos:'FWD'},
    {name:'Dominic Calvert-Lewin', pos:'FWD'}, {name:'Iliman Ndiaye', pos:'FWD'},
  ],
  LEE: [
    {name:'Illan Meslier', pos:'GK'}, {name:'Pascal Struijk', pos:'DEF'}, {name:'Joe Rodon', pos:'DEF'},
    {name:'Ethan Ampadu', pos:'DEF'}, {name:'Jayden Bogle', pos:'DEF'}, {name:'Ilia Gruev', pos:'MID'},
    {name:'Brenden Aaronson', pos:'MID'}, {name:'Daniel James', pos:'FWD'}, {name:'Joel Piroe', pos:'FWD'},
    {name:'Harry Wilson', pos:'FWD'},
  ],
  CRY: [
    {name:'Dean Henderson', pos:'GK'}, {name:'Marc Guéhi', pos:'DEF'}, {name:'Maxence Lacroix', pos:'DEF'},
    {name:'Tyrick Mitchell', pos:'DEF'}, {name:'Daniel Muñoz', pos:'DEF'}, {name:'Adam Wharton', pos:'MID'},
    {name:'Cheick Doucouré', pos:'MID'}, {name:'Eberechi Eze', pos:'MID'}, {name:'Jean-Philippe Mateta', pos:'FWD'},
    {name:'Ismaïla Sarr', pos:'FWD'},
  ],
  NFO: [
    {name:'Matz Sels', pos:'GK'}, {name:'Murillo', pos:'DEF'}, {name:'Nikola Milenković', pos:'DEF'},
    {name:'Ola Aina', pos:'DEF'}, {name:'Neco Williams', pos:'DEF'}, {name:'Morgan Gibbs-White', pos:'MID'},
    {name:'Ibrahim Sangaré', pos:'MID'}, {name:'Elliot Anderson', pos:'MID'}, {name:'Chris Wood', pos:'FWD'},
    {name:'Callum Hudson-Odoi', pos:'FWD'},
  ],
  TOT: [
    {name:'Guglielmo Vicario', pos:'GK'}, {name:'Cristian Romero', pos:'DEF'}, {name:'Micky van de Ven', pos:'DEF'},
    {name:'Destiny Udogie', pos:'DEF'}, {name:'Pedro Porro', pos:'DEF'}, {name:'Yves Bissouma', pos:'MID'},
    {name:'Rodrigo Bentancur', pos:'MID'}, {name:'James Maddison', pos:'MID'}, {name:'Son Heung-min', pos:'FWD'},
    {name:'Dominic Solanke', pos:'FWD'}, {name:'Brennan Johnson', pos:'FWD'},
  ],
  COV: [
    {name:'Ben Wilson', pos:'GK'}, {name:'Bobby Thomas', pos:'DEF'}, {name:'Luis Binks', pos:'DEF'},
    {name:'Jake Bidwell', pos:'DEF'}, {name:'Milan van Ewijk', pos:'DEF'}, {name:'Ben Sheaf', pos:'MID'},
    {name:'Josh Eccles', pos:'MID'}, {name:'Ellis Simms', pos:'FWD'}, {name:'Haji Wright', pos:'FWD'},
  ],
  IPS: [
    {name:'Arijanet Muric', pos:'GK'}, {name:'Cameron Burgess', pos:'DEF'}, {name:'Axel Tuanzebe', pos:'DEF'},
    {name:'Leif Davis', pos:'DEF'}, {name:'Jaden Philogene', pos:'MID'}, {name:'Massimo Luongo', pos:'MID'},
    {name:'Sammie Szmodics', pos:'FWD'}, {name:'Liam Delap', pos:'FWD'},
  ],
  HUL: [
    {name:'Ivor Pandur', pos:'GK'}, {name:'Jacob Greaves', pos:'DEF'}, {name:'Alfie Jones', pos:'DEF'},
    {name:'Lewie Coyle', pos:'DEF'}, {name:'Regan Slater', pos:'MID'}, {name:'Jean Michaël Seri', pos:'MID'},
    {name:'Fábio Carvalho', pos:'MID'}, {name:'Liam Delap', pos:'FWD'},
  ],
};

function allSquadPlayers(){
  const list = [];
  Object.entries(SQUADS).forEach(([tag, players]) => {
    players.forEach(p => list.push({ ...p, team: tag }));
  });
  return list;
}
