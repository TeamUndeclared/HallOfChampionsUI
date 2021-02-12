import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import './About.scss';


const useStyles = makeStyles({
  cardRoot: {
    maxWidth: 300,
    width: 200,
  },
  gridRoot: {
    flexGrow: 1,
    paddingLeft: 300,
    paddingRight: 300,
    width: '100%',
    justifyItems: 'stretch',
    
  },
  root: {
    heigth: 10,
    
  },
  media: {
    height: 150,
  },
});

function About(props) {
  const classes = useStyles();

  return (
    <Paper id="appAbout" className={classes.gridRoot}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignitems="stretch"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography paragraph={true} align='center' component="h2" className="aboutTitle">
            About Us
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image=""
                title="Matt Ravenmore"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Matt Ravenmoore
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
          
                Greetings, my name is Matt Ravenmoore. I am a software designer with a background in theater, art, metal fabrication and design. That is to say i am an innovative and creative thinker and will find unique way of approaching a problem. I strive to learn 3- 5 new things every day, with an emphasis on skills both physical and mental
               
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href='https://www.linkedin.com/in/matt-ravenmoore/'  size="medium" >
                Linked In
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image=""
                title="Jeremy Penning"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jeremy Penning
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">

                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica

                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href='https://www.linkedin.com/in/jeremy-penning/'  size="medium" >
                Linked In
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image=""
                title="Ricardo Barcenas"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ricardo Barcenas
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                
                  text goes here

                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href='https://www.linkedin.com/in/ricardo-barcenas/'  size="medium" >
                Linked In
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image=""
                title="Garrett Cintron"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Garrett Cintron
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                
                  text goes here

                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href='https://www.linkedin.com/in/garrett-cintron/'  size="medium" >
                Linked In
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default About;