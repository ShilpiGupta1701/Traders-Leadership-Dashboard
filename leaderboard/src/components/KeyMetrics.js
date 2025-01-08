import React from 'react';
import Grid from '@mui/material/Grid2';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import VerifiedIcon from '@mui/icons-material/Verified';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 15px',
    borderRadius: '10px',
    border: `1px solid ${theme.palette.primary.main}`,
    padding: '10px',
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
  },
  cardContent: {
    textAlign: 'center',

  },
  avatar: {
    marginRight: '16px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const KeyMetrics = ({ longestStreak, maxTrades, highestAlerts, highestXscore}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justifyContent="center">
      {/* Longest Streak */}
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <Card className={classes.card}>
          <Avatar sx={{width: 60, height: 60, backgroundColor: 'secondary.main', }} className={classes.avatar}>{longestStreak ? longestStreak.Name.charAt(0) : ''}</Avatar>
          <CardContent className={classes.cardContent}>
            {/* <Typography variant="body2">Longest Streak</Typography> */}
            <Typography variant="h6">
              Longest Streak{' '}
              {longestStreak && longestStreak.isVerified && (
                <VerifiedIcon sx={{ fontSize: 16, marginLeft: 1, color: 'green' }} />
              )}
            </Typography>
            <Typography  sx={{fontWeight:'bold', Color: 'secondary.main', }} variant="h6">{longestStreak ? longestStreak.Name : 'No data'}</Typography>
            <Typography variant="body2">Streak: {longestStreak ? longestStreak.Streaks : 'N/A'}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Maximum Trades */}
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <Card className={classes.card}>
          <Avatar sx={{width: 60, height: 60, backgroundColor: 'secondary.main', }} className={classes.avatar}>{maxTrades ? maxTrades.Name.charAt(0) : ''}</Avatar>
          <CardContent className={classes.cardContent}>
            <Typography variant="body2">Max Trades</Typography>
            <Typography   sx={{fontWeight:'bold', Color: 'secondary.main', }}variant="h6">{maxTrades ? maxTrades.Name : 'No data'}</Typography>
            <Typography variant="body2">Trades: {maxTrades ? maxTrades.Trades : 'N/A'}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Highest Alerts */}
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <Card className={classes.card}>
          <Avatar sx={{width: 60, height: 60, backgroundColor: 'secondary.main', }}  className={classes.avatar}>{highestAlerts ? highestAlerts.Name.charAt(0) : ''}</Avatar>
          <CardContent className={classes.cardContent}>
            <Typography variant="body2">Highest Alerts</Typography>
            <Typography sx={{fontWeight:'bold', Color: 'secondary.main', }} variant="h6">{highestAlerts ? highestAlerts.Name : 'No data'}</Typography>
            <Typography variant="body2">Alerts: {highestAlerts ? highestAlerts.Alerts : 'N/A'}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* highest xscore  */}
      <Grid item xs={12} sm={4} className={classes.gridItem}>
        <Card className={classes.card}>
          <Avatar sx={{width: 60, height: 60, backgroundColor: 'secondary.main', }}  className={classes.avatar}>{highestXscore ? highestXscore.Name.charAt(0) : ''}</Avatar>
          <CardContent className={classes.cardContent}>
            <Typography variant="body2">Highest Xscore</Typography>
            <Typography  sx={{fontWeight:'bold', Color: 'secondary.main', }} variant="h6">{highestXscore? highestXscore.Name : 'No data'}</Typography>
            <Typography variant="body2">Alerts: {highestXscore ? highestXscore.Xscore: 'N/A'}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default KeyMetrics;
