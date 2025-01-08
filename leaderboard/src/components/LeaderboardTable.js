import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Typography, Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    serial:{
        fontWeight: 'bold',
        fontSize: '0.45 rem',
        color: theme.palette.primary.dark
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
  }));

export const MuiTable = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://sheetdb.io/api/v1/5724a6h7t3pv9")
            .then(resp => resp.json())
            .then(resp => setData(resp));
    }, []);

    return (
        <TableContainer component={Paper}  className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Rank</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Trophies</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Streaks</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Alerts</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Trades</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Avg Gain</TableCell>
                        <TableCell className={classes.tableHeaderCell}>X score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Typography  className={classes.serial} variant="body2" style={{ marginRight: 10 }}>{index + 1}</Typography>
                                    <Avatar className={classes.avatar} style={{ marginRight: 10 }}>{row.Name.charAt(0)}</Avatar>
                                    <div>
                                        <Typography className={classes.name} variant="body1">{row.Name}</Typography>
                                        <Typography color="textSecondary" variant="body2">{row['Trading Style']}</Typography>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>{row.Rank}</TableCell>
                            <TableCell>{row.Trophies}</TableCell>
                            <TableCell>{row.Streaks}</TableCell>
                            <TableCell>{row.Alerts}</TableCell>
                            <TableCell>{row.Trades}</TableCell>
                            <TableCell>{row['Avg Gain']}</TableCell>
                            <TableCell>{row.Xscore}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};



