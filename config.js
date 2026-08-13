// ============================================================
// PremIQ19 — shared config
// Fill these in once you've created your Supabase project.
// Settings → API in your Supabase dashboard.
// The "anon public" key is safe to expose in front-end code —
// it's designed for this. Never put your service_role key here.
// ============================================================

const SUPABASE_URL = 'https://dmguapurebngkkltrjoj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZ3VhcHVyZWJuZ2trbHRyam9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMjgwMzQsImV4cCI6MjEwMTgwNDAzNH0.PcZgnhsVO66sx8wgKrwDyRl_UZazgbwtGmwGSTNnzvM';

// Simple gate for admin.html — not real security (see schema.sql notes),
// just enough to stop a random friend clicking around in the admin panel.
// Change this to whatever you like.
const ADMIN_PASSWORD = 'flinty2026';

const SLOTS = [
  { id: '1st',   label: '1ST',        mult: 1.5  },
  { id: '2nd',   label: '2ND',        mult: 1.75 },
  { id: '3-6',   label: '3RD – 6TH',  mult: 2    },
  { id: '7-12',  label: '7TH – 12TH', mult: 2.25 },
  { id: '13-18', label: '13TH – 18TH',mult: 2.5  },
  { id: '19',    label: '19TH',       mult: 3    },
  { id: '20',    label: '20TH',       mult: 5    },
];
const WRONG_SLOT_FLAT_SCORE = 50;

const TEAMS = [
  { tag:'ARS', name:'Arsenal' },        { tag:'MCI', name:'Manchester City' },
  { tag:'MUN', name:'Manchester United' },{ tag:'AVL', name:'Aston Villa' },
  { tag:'LIV', name:'Liverpool' },      { tag:'BOU', name:'Bournemouth' },
  { tag:'SUN', name:'Sunderland' },     { tag:'BHA', name:'Brighton & Hove Albion' },
  { tag:'BRE', name:'Brentford' },      { tag:'CHE', name:'Chelsea' },
  { tag:'FUL', name:'Fulham' },         { tag:'NEW', name:'Newcastle United' },
  { tag:'EVE', name:'Everton' },        { tag:'LEE', name:'Leeds United' },
  { tag:'CRY', name:'Crystal Palace' }, { tag:'NFO', name:'Nottingham Forest' },
  { tag:'TOT', name:'Tottenham Hotspur' },{ tag:'COV', name:'Coventry City' },
  { tag:'IPS', name:'Ipswich Town' },   { tag:'HUL', name:'Hull City' },
];

function teamByTag(tag){ return TEAMS.find(t => t.tag === tag); }
function slotById(id){ return SLOTS.find(s => s.id === id); }

// Base score for one team: (wins × 3) + (goals for × 2)
function baseScore(stats){
  if(!stats) return 0;
  return (stats.wins * 3) + (stats.goals_for * 2);
}

// Score for a single pick, given the team's current/final stats and slot.
function pickScore(pick, stats){
  const base = baseScore(stats);
  const slot = slotById(pick.slot);
  if(!stats || !stats.finishing_slot){
    // Season/phase not finished yet — show provisional base score only.
    return { points: base, status: 'provisional', base };
  }
  if(stats.finishing_slot === pick.slot){
    return { points: base * slot.mult, status: 'correct', base };
  }
  return { points: WRONG_SLOT_FLAT_SCORE, status: 'wrong', base };
}

// Blackjack scoring: every selected player must have scored at least
// 1 goal, or the whole entry is worth 0. Otherwise, the combined total
// maps to a fixed tier — 22+ (bust) is also 0.
const BLACKJACK_TIER_POINTS = { 16:50, 17:100, 18:150, 19:200, 20:250, 21:400 };
function scoreBlackjack(cards){
  if(!cards || cards.length===0) return { points:0, total:0, valid:false, bust:false };
  const allScored = cards.every(c => (c.actual_goals||0) >= 1);
  const total = cards.reduce((sum,c)=>sum+(c.actual_goals||0), 0);
  if(!allScored) return { points:0, total, valid:false, bust:false };
  if(total > 21) return { points:0, total, valid:true, bust:true };
  return { points: BLACKJACK_TIER_POINTS[total] || 0, total, valid:true, bust:false };
}
