import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    maxWidth: "flex",
    
  },
  media: {
    height: 500,
  },

});

const CardList = [{image: './assets/thomas.jpg', title: 'tom'},
{image: './assets/matunick.jpg', title: 'tom'},
{image: './assets/PicTomGolf.jpg', title: 'tom'},
{image: './assets/TomTav.jpg', title: 'tom'},
{image: './assets/TomDavid.jpg', title: 'tom'},];
export default function MediaCard() {
  const classes = useStyles();
  return ( CardList.map((card)=>
    <Grid item  alignContent="center" xs={12} md={4} xl={2} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.image}
          title={card.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            A Recent Memory
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Tom, Amparo, and I at The Federal in Agawam
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
  ));
}