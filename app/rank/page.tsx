import { useState, useEffect } from 'react';
import axios from 'axios';
import LeagueListDTO from '@/types/LeagueListDTO';
import LeagueItemDTO from '@/types/LeagueItemDTO';
import * as dotenv from 'dotenv';

async function getChallenger() {
  try {
    dotenv.config();
    const apiKey = process.env.DEVELOPMENT_API_KEY;
    const response = await fetch(
      `https://kr.api.riotgames.com/tft/league/v1/challenger?api_key=${apiKey}`,
    );
    const data: LeagueListDTO = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return {
      leagueId: '',
      entries: [],
      tier: '',
      name: '',
      queue: '',
    };
  }
}

export default async function Rank() {
  const data: LeagueListDTO = await getChallenger();
  const sortedLeagueItems: LeagueItemDTO[] = data.entries.sort(
    (a, b) => b.leaguePoints - a.leaguePoints,
  );

  return (
    <div>
      <h1>랭킹</h1>
      {sortedLeagueItems.map((entry: LeagueItemDTO, index: number) => (
        <div key={entry.summonerId} style={{ display: 'flex' }}>
          <div style={{ width: 100 }}>{index + 1}</div>
          <div style={{ width: 200 }}>{entry.summonerName}</div>
          <div style={{ width: 200 }}>Challengerd</div>
          <div style={{ width: 200 }}>{entry.leaguePoints} LP</div>
          <div style={{ width: 100 }}>{entry.wins}</div>
          <div style={{ width: 100 }}>
            {((entry.wins / (entry.wins + entry.losses)) * 100).toFixed(2)}
          </div>
          <div style={{ width: 100 }}>{entry.wins + entry.losses}</div>
        </div>
      ))}
    </div>
  );
}
