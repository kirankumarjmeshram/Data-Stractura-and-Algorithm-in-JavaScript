const HOME_TEAM_WON = 1;
function tournamentWinner(competitions, results) {
 let currentBestTeam = '';
  const scores ={[currentBestTeam]:0};

  for(let idx =0; idx < competitions.length; idx++){
    const result = results[idx];
    const [homeTeam, awayTeam] =competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam,3,scores);

    if(scores[winningTeam] > scores[currentBestTeam]){
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}
function updateScores(team, points, scores){
if (!(team in scores)){
  scores[team] = 0;
} 
   scores[team] += points;
}