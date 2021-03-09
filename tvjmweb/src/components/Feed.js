import { Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useState, useRef } from 'react';
import Timeline from './Timeline';
import NewCard from './Cards';
import Grid from '@material-ui/core/Grid';


function Feed({cards}) {
    const [feed, setFeed] = useState({
        id:null,
        value:''
    });

    return (<Grid container> {cards.map((card, index) => (
        <Grid Item xs={6} md={4} key={index} >
            <div key={card.id}>
            <Card  cards={card} >
        <CardActionArea>
          <CardMedia/>
          <CardContent>
            <Typography  gutterBottom variant="h5" component="h2">
             {card.title}
            </Typography>
            <Typography  variant="body2" color="textSecondary" component="p">
             With {card.author} on {card.date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button  size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
            </div>
        </Grid >
    ))
}</Grid>)
}
export default Feed;