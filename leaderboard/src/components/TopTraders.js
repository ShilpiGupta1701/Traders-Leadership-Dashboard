import React from 'react';
import Grid from '@mui/material/Grid2';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const TopTraders = ({ traders }) => {
  const ranks = ['1st', '2nd', '3rd'];

  return (
    <Grid container spacing={4} justifyContent="center">
      {traders.map((trader, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{height: 250 ,width: 300,  textAlign: 'center', padding: 2, borderRadius: 1, backgroundColor: 'rgb(233, 190, 247)', boxShadow: 3 , borderColor: 'secondary.main'}}>
            <CardContent>
              <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'primary.main' }}>{ranks[index]} Rank</Typography>
              <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                <Avatar sx={{ margin: '10', width: 70, height: 70, backgroundColor: 'primary.main', }}>{trader.Name.charAt(0)}</Avatar>
                <Box mt={2}>
                  <Typography variant="h6">{trader.Name}</Typography>
                  <Typography variant="body2" color="secondary.main">
                    {trader['Trading Style']}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Alerts: {trader.Alerts}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Trades: {trader.Trades}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Avg Gain: {trader['Avg Gain']}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopTraders;

