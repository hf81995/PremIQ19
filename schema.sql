-- ============================================================
-- PremIQ19 — Supabase schema (v2)
-- Run this once in your Supabase project's SQL editor.
-- If you already ran the old version, run this whole file again —
-- it drops and recreates the questions/answers tables to fit the
-- real 19-question structure.
-- ============================================================

-- Players: one row per entrant. Re-submitting with the same name
-- overwrites their previous picks (simple "just a name" flow, no login).
create table if not exists players (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Slot picks: each player has exactly 7 rows, one per slot.
create table if not exists picks (
  id uuid primary key default gen_random_uuid(),
  player_id uuid references players(id) on delete cascade,
  slot text not null check (slot in ('1st','2nd','3-6','7-12','13-18','19','20')),
  team_tag text not null,
  created_at timestamptz default now(),
  unique (player_id, slot)
);

-- Questions: fixed set of 19, defined in questions-data.js (shared by
-- every page). This table only stores the RESULT once known — the
-- question text, type, and options live in code, not the database.
drop table if exists answers cascade;
drop table if exists questions cascade;

create table questions (
  id integer primary key,              -- 1 through 19, matches questions-data.js
  correct_answer jsonb,                -- shape depends on question type — filled in via admin.html once known
  resolved boolean not null default false,
  updated_at timestamptz default now()
);

-- Answers: each player's response to each question, as flexible JSON
-- (shape depends on the question type — array of opponent tags, a
-- yes/no string, a number, free text, etc.)
create table answers (
  id uuid primary key default gen_random_uuid(),
  player_id uuid references players(id) on delete cascade,
  question_id integer references questions(id) on delete cascade,
  answer jsonb not null,
  created_at timestamptz default now(),
  unique (player_id, question_id)
);

-- Team stats cache: wins & goals-for from each team's first 19
-- unique-opponent matches, refreshed by the admin "Refresh Results" button.
create table if not exists team_stats (
  team_tag text primary key,
  team_name text not null,
  matches_played integer not null default 0,
  wins integer not null default 0,
  draws integer not null default 0,
  losses integer not null default 0,
  goals_for integer not null default 0,
  goals_against integer not null default 0,
  finishing_slot text,               -- '1st','2nd','3-6','7-12','13-18','19','20' — set once MW19 completes
  updated_at timestamptz default now()
);

-- Match results: raw scorelines you enter yourself, matchweek by matchweek.
-- Team stats are recalculated from these every time you save a matchweek.
create table if not exists match_results (
  id uuid primary key default gen_random_uuid(),
  matchweek integer not null,
  home_tag text not null,
  away_tag text not null,
  home_score integer,
  away_score integer,
  updated_at timestamptz default now(),
  unique (matchweek, home_tag, away_tag)
);

-- Fixture alerts: written by the daily automated check when a fixture's
-- pairing, venue, or matchweek assignment doesn't match what's expected.
-- admin.html shows these as a banner until you dismiss them.
create table if not exists fixture_alerts (
  id uuid primary key default gen_random_uuid(),
  matchweek integer,
  description text not null,
  detected_at timestamptz default now(),
  resolved boolean not null default false
);

-- Monthly Super Sunday: one head-to-head fixture per month, set by the
-- organiser closer to the time. teamA/teamB null = not announced yet.
-- result/scoreA/scoreB null = not played yet.
create table if not exists h2h_fixtures (
  month text primary key check (month in ('August','September','October','November','December')),
  team_a text,
  team_b text,
  result text check (result in ('A','D','B')),
  score_a integer,
  score_b integer,
  updated_at timestamptz default now()
);

-- Each player's Result + Scoreline prediction for that month's fixture.
create table if not exists h2h_predictions (
  id uuid primary key default gen_random_uuid(),
  player_id uuid references players(id) on delete cascade,
  month text references h2h_fixtures(month) on delete cascade,
  result text not null check (result in ('A','D','B')),
  score_a integer not null,
  score_b integer not null,
  created_at timestamptz default now(),
  unique (player_id, month)
);

-- Blackjack: for each player's Slot 1st team pick, they name 4 players
-- from that club and predict how many goals each scores across the
-- club's 19 first-time fixtures — aiming for a combined total as close
-- to 19 as possible without going over. Scoring rules to be finalised.
create table if not exists blackjack_picks (
  id uuid primary key default gen_random_uuid(),
  player_id uuid references players(id) on delete cascade,
  card_index integer not null check (card_index between 1 and 4),
  player_name text not null,
  predicted_goals integer not null,
  created_at timestamptz default now(),
  unique (player_id, card_index)
);
alter table blackjack_picks enable row level security;
create policy "public read blackjack_picks" on blackjack_picks for select using (true);
create policy "public write blackjack_picks" on blackjack_picks for insert with check (true);
create policy "public update blackjack_picks" on blackjack_picks for update using (true);
create policy "public delete blackjack_picks" on blackjack_picks for delete using (true);

create table if not exists settings (
  key text primary key,
  value text
);

insert into settings (key, value) values ('last_results_refresh', null)
  on conflict (key) do nothing;
insert into settings (key, value) values ('game_locked', 'false')
  on conflict (key) do nothing;

-- ============================================================
-- Row Level Security — everything open to the public anon key,
-- same trade-off as the World Cup project: admin.html is protected
-- by a simple password check, not real database security. Fine for
-- a casual friends game; don't use this pattern for anything sensitive.
-- ============================================================

alter table players enable row level security;
alter table picks enable row level security;
alter table answers enable row level security;
alter table questions enable row level security;
alter table team_stats enable row level security;
alter table match_results enable row level security;
alter table fixture_alerts enable row level security;
alter table h2h_fixtures enable row level security;
alter table h2h_predictions enable row level security;
alter table settings enable row level security;

create policy "public read players" on players for select using (true);
create policy "public upsert players" on players for insert with check (true);
create policy "public update own player" on players for update using (true);

create policy "public read picks" on picks for select using (true);
create policy "public write picks" on picks for insert with check (true);
create policy "public update picks" on picks for update using (true);
create policy "public delete picks" on picks for delete using (true);

create policy "public read answers" on answers for select using (true);
create policy "public write answers" on answers for insert with check (true);
create policy "public update answers" on answers for update using (true);
create policy "public delete answers" on answers for delete using (true);

create policy "public read questions" on questions for select using (true);
create policy "public write questions" on questions for insert with check (true);
create policy "public update questions" on questions for update using (true);

create policy "public read team_stats" on team_stats for select using (true);
create policy "public write team_stats" on team_stats for insert with check (true);
create policy "public update team_stats" on team_stats for update using (true);

create policy "public read match_results" on match_results for select using (true);
create policy "public write match_results" on match_results for insert with check (true);
create policy "public update match_results" on match_results for update using (true);

create policy "public read fixture_alerts" on fixture_alerts for select using (true);
create policy "public write fixture_alerts" on fixture_alerts for insert with check (true);
create policy "public update fixture_alerts" on fixture_alerts for update using (true);

create policy "public read h2h_fixtures" on h2h_fixtures for select using (true);
create policy "public write h2h_fixtures" on h2h_fixtures for insert with check (true);
create policy "public update h2h_fixtures" on h2h_fixtures for update using (true);

create policy "public read h2h_predictions" on h2h_predictions for select using (true);
create policy "public write h2h_predictions" on h2h_predictions for insert with check (true);
create policy "public update h2h_predictions" on h2h_predictions for update using (true);
create policy "public delete h2h_predictions" on h2h_predictions for delete using (true);

create policy "public read settings" on settings for select using (true);
create policy "public write settings" on settings for insert with check (true);
create policy "public update settings" on settings for update using (true);

-- ============================================================
-- Seed data: the 19 question rows (empty results, filled in later)
-- and the 5 Super Sunday months (fixtures added by the organiser
-- closer to the time).
-- ============================================================

insert into questions (id) select generate_series(1, 19)
  on conflict (id) do nothing;

insert into h2h_fixtures (month, team_a, team_b) values
  ('August', null, null),
  ('September', null, null),
  ('October', null, null),
  ('November', null, null),
  ('December', null, null)
on conflict (month) do nothing;
