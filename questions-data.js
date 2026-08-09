// ============================================================
// PremIQ19 — questions-data.js
// The 19 questions live here as code (not database rows) since
// each one has different input types and scoring rules. Only the
// eventual CORRECT ANSWER is stored in Supabase (questions table).
// ============================================================

// Each team's first 19 Premier League opponents for 2026/27, in order.
const FIXTURES = {
  ARS: [['COV','H'],['AVL','A'],['CHE','H'],['SUN','A'],['BHA','A'],['LEE','H'],['NFO','A'],['EVE','H'],['LIV','A'],['HUL','H'],['NEW','A'],['MCI','H'],['BRE','A'],['TOT','A'],['BOU','H'],['MUN','H'],['CRY','A'],['FUL','A'],['IPS','H']],
  MCI: [['BOU','H'],['CRY','A'],['COV','H'],['MUN','A'],['SUN','H'],['LIV','A'],['IPS','H'],['AVL','A'],['BHA','H'],['NFO','A'],['FUL','H'],['ARS','A'],['LEE','H'],['BRE','A'],['CHE','H'],['HUL','H'],['NEW','A'],['EVE','A'],['TOT','H']],
  MUN: [['HUL','A'],['IPS','H'],['EVE','A'],['MCI','H'],['FUL','A'],['TOT','H'],['LEE','A'],['BOU','A'],['CHE','H'],['AVL','H'],['LIV','A'],['BRE','H'],['NEW','A'],['COV','H'],['CRY','A'],['ARS','A'],['NFO','H'],['SUN','H'],['BHA','A']],
  AVL: [['BHA','A'],['ARS','H'],['HUL','A'],['NFO','H'],['TOT','A'],['BRE','H'],['NEW','A'],['MCI','A'],['FUL','H'],['MUN','A'],['SUN','H'],['IPS','A'],['EVE','H'],['CRY','H'],['COV','A'],['CHE','H'],['LEE','H'],['LIV','H'],['BOU','A']],
  LIV: [['NEW','A'],['NFO','H'],['IPS','A'],['FUL','H'],['BOU','A'],['MCI','H'],['BRE','A'],['BHA','H'],['ARS','H'],['CRY','A'],['MUN','H'],['EVE','A'],['SUN','H'],['CHE','A'],['LEE','H'],['TOT','A'],['HUL','A'],['AVL','A'],['COV','H']],
  BOU: [['MCI','A'],['EVE','H'],['NEW','A'],['BRE','H'],['LIV','H'],['CHE','A'],['SUN','H'],['MUN','A'],['LEE','H'],['IPS','A'],['NFO','H'],['FUL','A'],['BHA','H'],['HUL','H'],['ARS','A'],['COV','H'],['TOT','A'],['CRY','A'],['AVL','H']],
  SUN: [['IPS','A'],['FUL','H'],['BRE','A'],['ARS','H'],['MCI','A'],['BHA','H'],['BOU','A'],['LEE','H'],['COV','A'],['CHE','H'],['AVL','A'],['TOT','H'],['LIV','A'],['NEW','A'],['NFO','H'],['CRY','H'],['EVE','A'],['MUN','A'],['HUL','H']],
  BHA: [['AVL','H'],['CHE','A'],['LEE','H'],['COV','A'],['ARS','H'],['SUN','A'],['CRY','H'],['LIV','A'],['MCI','A'],['BRE','H'],['HUL','A'],['NEW','H'],['BOU','A'],['NFO','A'],['EVE','H'],['IPS','H'],['FUL','A'],['TOT','A'],['MUN','H']],
  BRE: [['TOT','H'],['LEE','A'],['SUN','H'],['BOU','A'],['CHE','H'],['AVL','A'],['LIV','H'],['HUL','A'],['NFO','H'],['BHA','A'],['EVE','H'],['MUN','A'],['ARS','H'],['MCI','H'],['FUL','A'],['NEW','H'],['IPS','A'],['COV','A'],['CRY','H']],
  CHE: [['FUL','A'],['BHA','H'],['ARS','A'],['HUL','H'],['BRE','A'],['BOU','H'],['EVE','A'],['TOT','H'],['MUN','H'],['SUN','A'],['LEE','H'],['NFO','A'],['CRY','H'],['LIV','H'],['MCI','A'],['AVL','H'],['COV','A'],['IPS','A'],['NEW','H']],
  FUL: [['CHE','H'],['SUN','A'],['CRY','H'],['LIV','A'],['MUN','H'],['IPS','A'],['HUL','H'],['COV','A'],['AVL','A'],['NEW','H'],['MCI','A'],['BOU','H'],['TOT','A'],['EVE','A'],['BRE','H'],['LEE','A'],['BHA','H'],['ARS','H'],['NFO','A']],
  NEW: [['LIV','H'],['TOT','A'],['BOU','H'],['LEE','A'],['HUL','H'],['COV','A'],['AVL','H'],['CRY','A'],['EVE','H'],['FUL','A'],['ARS','H'],['BHA','A'],['MUN','H'],['SUN','H'],['IPS','A'],['BRE','A'],['MCI','H'],['NFO','H'],['CHE','A']],
  EVE: [['CRY','H'],['BOU','A'],['MUN','H'],['TOT','A'],['IPS','H'],['HUL','A'],['CHE','H'],['ARS','A'],['NEW','A'],['COV','H'],['BRE','A'],['LIV','H'],['AVL','A'],['FUL','H'],['BHA','A'],['NFO','A'],['SUN','H'],['MCI','H'],['LEE','A']],
  LEE: [['NFO','A'],['BRE','H'],['BHA','A'],['NEW','H'],['CRY','H'],['ARS','A'],['MUN','H'],['SUN','A'],['BOU','A'],['TOT','H'],['CHE','A'],['COV','H'],['MCI','A'],['IPS','H'],['LIV','A'],['FUL','H'],['AVL','A'],['HUL','A'],['EVE','H']],
  CRY: [['EVE','A'],['MCI','H'],['FUL','A'],['IPS','H'],['LEE','A'],['NFO','H'],['BHA','A'],['NEW','H'],['TOT','A'],['LIV','H'],['COV','A'],['HUL','H'],['CHE','A'],['AVL','A'],['MUN','H'],['SUN','A'],['ARS','H'],['BOU','H'],['BRE','A']],
  NFO: [['LEE','H'],['LIV','A'],['TOT','H'],['AVL','A'],['COV','H'],['CRY','A'],['ARS','H'],['IPS','A'],['BRE','A'],['MCI','H'],['BOU','A'],['CHE','H'],['HUL','A'],['BHA','H'],['SUN','A'],['EVE','H'],['MUN','A'],['NEW','A'],['FUL','H']],
  TOT: [['BRE','A'],['NEW','H'],['NFO','A'],['EVE','H'],['AVL','H'],['MUN','A'],['COV','H'],['CHE','A'],['CRY','H'],['LEE','A'],['IPS','H'],['SUN','A'],['FUL','H'],['ARS','H'],['HUL','A'],['LIV','A'],['BOU','H'],['BHA','H'],['MCI','A']],
  COV: [['ARS','A'],['HUL','H'],['MCI','A'],['BHA','H'],['NFO','A'],['NEW','H'],['TOT','A'],['FUL','H'],['SUN','H'],['EVE','A'],['CRY','H'],['LEE','A'],['IPS','H'],['MUN','A'],['AVL','H'],['BOU','A'],['CHE','H'],['BRE','H'],['LIV','A']],
  IPS: [['SUN','H'],['MUN','A'],['LIV','H'],['CRY','A'],['EVE','A'],['FUL','H'],['MCI','A'],['NFO','H'],['HUL','A'],['BOU','H'],['TOT','A'],['AVL','H'],['COV','A'],['LEE','A'],['NEW','H'],['BHA','A'],['BRE','H'],['CHE','H'],['ARS','A']],
  HUL: [['MUN','H'],['COV','A'],['AVL','H'],['CHE','A'],['NEW','A'],['EVE','H'],['FUL','A'],['BRE','H'],['IPS','H'],['ARS','A'],['BHA','H'],['CRY','A'],['NFO','H'],['BOU','A'],['TOT','H'],['MCI','A'],['LIV','H'],['LEE','H'],['SUN','A']],
};

// type reference:
//  'multi3'      — pick 3 opponents from a slot-linked team's fixture list, tiered points
//  'single1'     — pick 1 opponent from a slot-linked team's fixture list, flat points
//  'yesno'       — Yes/No, flat points (or asymmetric via yesPoints/noPoints)
//  'twochoice'   — pick between two named options, flat points (or asymmetric via aPoints/bPoints), optional void
//  'text'        — free text name entry, matched case-insensitively against a list of accepted answers
//  'teamselect'  — pick any of the 20 clubs
//  'numeric-tiered'  — numeric guess, closest = full points, next-nearest = half tier
//  'numeric-single'  — numeric guess, closest (incl. exact) = full points

const QUESTIONS = [
  { id:1, type:'multi3', points:{p0:0,p1:20,p2:40,p3:100}, slotLink:'1st',
    label: teamName => `Question 1: The team you have picked in Slot 1st is: "${teamName}" — now select 3 of their 19 opponents who they must beat by 2 or more goals.`,
    pointsText: '0 (0/3), 20 (1/3), 40 (2/3), 100 (3/3) points available' },
  { id:2, type:'single1', points:25, slotLink:'20',
    label: teamName => `Question 2: The team you have picked in Slot 20th is: "${teamName}" — now select 1 of their 19 opponents who they must simply beat.`,
    pointsText: '25 points if correct' },
  { id:3, type:'numeric-tiered', points:{closest:100, nextNearest:50}, unit:'seconds',
    label: 'Question 3: Quickest goal (in seconds) across the first 190 matches (first-time fixtures only).',
    hint: 'Matheus Fernandes found the net in 30 seconds last season.',
    pointsText: '100 points for closest, 50 points for next nearest' },
  { id:4, type:'numeric-single', points:30, unit:'draws',
    label: 'Question 4: How many 0-0 draws will there be across the first 190 matches (first-time fixtures only)?',
    hint: 'Across major European leagues, around 1 in 20 games ends up as 0-0. That could mean roughly 10 of these 190 matches finish goalless. However, last season there had already been 17 0-0s in the Prem by mid-January!',
    pointsText: '30 points for exact or nearest' },
  { id:5, type:'numeric-single', points:25, unit:'managers',
    label: 'Question 5: How many managers will no longer be in post by the culmination of first fixtures played (early January)?',
    hint: 'Last season 6 managers were sacked in the first half of the season (up to 6 January): Nuno, Potter, Postecoglou, Pereira, Maresca, Amorim. A further 5 were sacked in the second half: Frank, Dyche, Tudor, Rosenior, Parker.',
    pointsText: '25 points for exact or nearest' },
  { id:6, type:'yesno', points:25,
    label: 'Question 6: Manager of the Month last season went to 5 different managers across Aug, Sep, Oct, Nov and Dec. Will the same thing happen again?',
    hint: '2025: 5 different managers. 2024: 4 different managers. 2023: 3 different managers. 2022: 3 different managers.',
    pointsText: '25 points' },
  { id:7, type:'twochoice', points:25, optionA:'Newcastle United', optionB:'Sunderland', void:true,
    label: 'Question 7: Newcastle or Sunderland to win more of their 19 first-time fixtures? (Void if tied.)',
    pointsText: '25 points' },
  { id:8, type:'yesno', points:25,
    label: "Question 8: Will Haaland score a hat-trick in Man City's 19 first-time fixtures?",
    hint: "He didn't score one at all in the 25/26 Premier League season.",
    pointsText: '25 points' },
  { id:9, type:'text', points:50,
    label: 'Question 9: Name any player other than Haaland to score a hat-trick in their 19 first-time fixtures.',
    hint: 'Last season\u2019s hat-trick scorers (all season): Eze, Mateta, Schade, Thiago, Palmer, Jo\u00e3o Pedro, Gibbs-White.',
    pointsText: '50 points' },
  { id:10, type:'yesno', points:25,
    label: "Question 10: Will the Premier League's highest goal scorer have scored more than the whole 20th-placed team, as of the 19 first-time fixtures?",
    hint: 'Last season (whole season) Haaland scored 27 and Wolves scored 27.',
    pointsText: '25 points' },
  { id:11, type:'yesno', yesPoints:100, noPoints:25,
    label: 'Question 11: Will any goalkeeper register an assist across the 19 first-time fixtures?',
    hint: '4 goalkeepers registered an assist during the whole 25/26 Premier League season.',
    pointsText: 'No = 25 points, Yes = 100 points' },
  { id:12, type:'yesno', points:25,
    label: 'Question 12: Will any goalkeeper keep 8 clean sheets in their 19 first-time fixtures?',
    hint: 'David Raya kept 19 clean sheets across the whole 38 games last season.',
    pointsText: '25 points' },
  { id:13, type:'yesno', points:25,
    label: 'Question 13: Will any team rack up 4 red cards (players only) during their 19 first-time fixtures?',
    hint: 'The most red cards last season (whole season) was Chelsea with 8.',
    pointsText: '25 points' },
  { id:14, type:'twochoice', points:25, optionA:'Declan Rice', optionB:'Bruno Guimar\u00e3es', void:true,
    label: 'Question 14: Who will score first this season, Declan Rice or Bruno Guimar\u00e3es? (Void if neither scores in the first 19 matches.)',
    hint: 'For the whole of 25/26, Bruno G scored 9 for Newcastle (including 2 penalties). Rice scored 4.',
    pointsText: '25 points' },
  { id:15, type:'yesno', points:25,
    label: "Question 15: Will Bruno Fernandes reach 8+ assists across Man United's 19 first-time fixtures?",
    hint: 'Bruno had a record 21 assists across the whole 25/26 season.',
    pointsText: '25 points' },
  { id:16, type:'teamselect', points:50,
    label: 'Question 16: Pick any team to win 5 games in a row within their 19 first-time fixtures.',
    hint: 'Last season\u2019s longest streaks: Aston Villa 8, Manchester City 6, Arsenal 5, Liverpool 5.',
    pointsText: '50 points' },
  { id:17, type:'yesno', points:25,
    label: 'Question 17: Chelsea boys! Will Cole Palmer AND Morgan Rogers both score 4+ goals in their first 19 first-time fixtures?',
    hint: 'Both scored 10 goals each across the whole 25/26 season.',
    pointsText: '25 points' },
  { id:18, type:'yesno', points:25,
    label: 'Question 18: Will Bournemouth be in 11th place or better after their 19 first-time fixtures?',
    hint: 'Bournemouth finished the 25/26 season in 6th.',
    pointsText: '25 points' },
  { id:19, type:'twochoice', optionA:'Outside the box', optionB:'Inside the box', aPoints:50, bPoints:25, void:true,
    label: "Question 19: Will Harry Wilson's first Premier League goal for Leeds come from inside or outside the box? (First 19 fixtures. Void if he doesn't score at all.)",
    pointsText: 'Outside the box = 50 points, Inside the box = 25 points' },
];

function questionById(id){ return QUESTIONS.find(q => q.id === id); }

// Scores ONE player's answer to ONE question, given the question's
// correct_answer (from Supabase) — used by leaderboard.html.
// For numeric types, pass `allAnswers` (every player's raw guesses for
// that question) since "closest" is relative across the whole group.
function scoreAnswer(q, playerAnswer, correctAnswer, allAnswers){
  if(correctAnswer == null) return { points: 0, resolved: false };
  if(correctAnswer.void) return { points: 0, resolved: true, void: true };

  if(q.type === 'multi3'){
    const picked = playerAnswer || [];
    const actualBeaten = correctAnswer.opponents || [];
    const count = picked.filter(t => actualBeaten.includes(t)).length;
    const pts = count>=3 ? q.points.p3 : count===2 ? q.points.p2 : count===1 ? q.points.p1 : q.points.p0;
    return { points: pts, resolved: true };
  }
  if(q.type === 'single1'){
    const picked = (playerAnswer||[])[0];
    const actualBeaten = correctAnswer.opponents || [];
    return { points: actualBeaten.includes(picked) ? q.points : 0, resolved: true };
  }
  if(q.type === 'yesno'){
    const correct = correctAnswer.value;
    const isRight = playerAnswer === correct;
    if(!isRight) return { points: 0, resolved: true };
    const pts = q.yesPoints != null ? (correct==='yes' ? q.yesPoints : q.noPoints) : q.points;
    return { points: pts, resolved: true };
  }
  if(q.type === 'twochoice'){
    const correct = correctAnswer.value;
    const isRight = playerAnswer === correct;
    if(!isRight) return { points: 0, resolved: true };
    const pts = q.aPoints != null ? (correct===q.optionA ? q.aPoints : q.bPoints) : q.points;
    return { points: pts, resolved: true };
  }
  if(q.type === 'text'){
    const accepted = (correctAnswer.acceptedNames||[]).map(n=>n.toLowerCase().trim());
    const isRight = accepted.includes((playerAnswer||'').toLowerCase().trim());
    return { points: isRight ? q.points : 0, resolved: true };
  }
  if(q.type === 'teamselect'){
    const valid = correctAnswer.validTeams || [];
    return { points: valid.includes(playerAnswer) ? q.points : 0, resolved: true };
  }
  if(q.type === 'numeric-single'){
    if(correctAnswer.actualValue == null || !allAnswers) return { points: 0, resolved: false };
    const target = correctAnswer.actualValue;
    const diffs = allAnswers.filter(a => a.value!=null).map(a => ({ id:a.playerId, diff: Math.abs(a.value-target) }));
    if(diffs.length===0) return { points: 0, resolved: true };
    const minDiff = Math.min(...diffs.map(d=>d.diff));
    const mine = diffs.find(d => d.id === playerAnswer.playerId);
    if(!mine) return { points: 0, resolved: true };
    return { points: mine.diff === minDiff ? q.points : 0, resolved: true };
  }
  if(q.type === 'numeric-tiered'){
    if(correctAnswer.actualValue == null || !allAnswers) return { points: 0, resolved: false };
    const target = correctAnswer.actualValue;
    const diffs = allAnswers.filter(a => a.value!=null).map(a => ({ id:a.playerId, diff: Math.abs(a.value-target) }));
    if(diffs.length===0) return { points: 0, resolved: true };
    const sorted = [...new Set(diffs.map(d=>d.diff))].sort((a,b)=>a-b);
    const mine = diffs.find(d => d.id === playerAnswer.playerId);
    if(!mine) return { points: 0, resolved: true };
    if(mine.diff === sorted[0]) return { points: q.points.closest, resolved: true };
    if(sorted[1]!=null && mine.diff === sorted[1]) return { points: q.points.nextNearest, resolved: true };
    return { points: 0, resolved: true };
  }
  return { points: 0, resolved: false };
}

// Monthly Super Sunday scoring — 25 for correct Result, 50 for exact Scoreline.
function scoreH2H(prediction, fixture){
  if(!fixture || fixture.result == null) return { points: 0, resolved: false };
  let pts = 0;
  if(prediction.result === fixture.result) pts += 25;
  if(prediction.score_a === fixture.score_a && prediction.score_b === fixture.score_b) pts += 50;
  return { points: pts, resolved: true };
}
