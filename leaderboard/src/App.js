import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { MuiTable } from './components/LeaderboardTable';
import TopTraders from './components/TopTraders';
import KeyMetrics from './components/KeyMetrics';

const theme = createTheme({
  direction: 'ltr',
});

function App() {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/5724a6h7t3pv9")
      .then(resp => resp.json())
      .then(resp => {
        if (Array.isArray(resp)) {
          setData(resp);
        } else {
          console.error('Unexpected response format:', resp);
          setData([]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setData([]);
      });
  }, []);

  const longestStreak = data.slice().sort((a, b) => b.Streaks - a.Streaks)[0];
  const maxTrades = data.slice().sort((a, b) => b.Trades - a.Trades)[0];
  const highestAlerts = data.slice().sort((a, b) => b.Alerts - a.Alerts)[0];
  const highestXscore = data.slice().sort((a, b) => b.Xscore - a.Xscore)[0];

  return (
    <div className="App">
      {data.length > 0 ? (
        <TopTraders traders={data.slice(0, 3)} />
      ) : (
        <p>Loading top traders...</p>
      )}

      <KeyMetrics 
       longestStreak={longestStreak}
       maxTrades={maxTrades}
       highestAlerts={highestAlerts}
       highestXscore={highestXscore}
        />

      <ThemeProvider theme={theme}>
        <MuiTable data={data} />
      </ThemeProvider>

    </div>
  );
}

export default App;
