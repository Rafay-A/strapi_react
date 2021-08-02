import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Itemcard from './ItemCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [info, setInfo] = useState([
    { 
      name: 'Hello',
      desc: 'Hello',
      link: '/download (2).jpg',
      lastUpdated: '4th April 2021',
      moreInfo: 'Hello'
  },
  { 
    name: 'Hello',
    desc: 'Hello',
    link: '/download (2).jpg',
    lastUpdated: '4th April 2021',
    moreInfo: 'Hello'
},
{ 
    name: 'Hello',
    desc: 'Hello',
    link: '/download (2).jpg',
    lastUpdated: '4th April 2021',
    moreInfo: 'Hello'
},
{ 
    name: 'Hello',
    desc: 'Hello',
    link: '/download (2).jpg',
    lastUpdated: '4th April 2021',
    moreInfo: 'Hello'
},
{ 
    name: 'Hello',
    desc: 'Hello',
    link: '/download (2).jpg',
    lastUpdated: '4th April 2021',
    moreInfo: 'Hello'
},
{ 
    name: 'Hello',
    desc: 'Hello',
    link: '/download (2).jpg',
    lastUpdated: '4th April 2021',
    moreInfo: 'Hello'
},
]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Itemcard attr={info[0]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[1]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[2]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[3]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[4]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[5]}></Itemcard>
        </Grid>
      </Grid>
    </div>
  );
}