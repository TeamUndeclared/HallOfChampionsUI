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
import garrett from "../../Assets/images/garrett.jpg"
import ricardo from "../../Assets/images/ricardo.jpg"
import jeremy from "../../Assets/images/jeremy.jpg"
import matt from "../../Assets/images/matt.jpg"
import './About.scss';


const useStyles = makeStyles({
  media: {
    height: 300,
  },
});
function About(props) {
  const classes = useStyles();
  return (
    <Paper id="appAbout" className="About">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignitems="stretch"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography align='center' variant="h3">
            About Us
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={matt}
                title="Matt Ravenmore"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Matt Ravenmoore
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Greetings, my name is Matt Ravenmoore. I am a software designer with a background in theater, art, metal fabrication and design. That is to say i am an innovative and creative thinker and will find unique way of approaching a problem. I strive to learn 3- 5 new things every day, with an emphasis on skills both physical and mental.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href='https://www.linkedin.com/in/matt-ravenmoore/'
                color="primary" variant="contained" size="medium" >
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
                image={jeremy}
                title="Jeremy Penning"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jeremy Penning
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                My name is Jeremy Penning currently living in Seattle, Washington. I've loved technology of all forms for as long as I can remember. I've been building, tearing apart and programming computers since 4th grade. I got into web design 4 years later and landed my first job at 15.<br /><br />Since then I've created websites and web applications for everybody from long-shot rural political candidates to international corporations. Most recently I created a web application for company that provides e-learning service to over 100,000 users in the US and around the world.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href='https://www.github.com/pixeljava/'
                color="primary" variant="contained" size="medium" >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={ricardo}
                title="Ricardo Barcenas"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ricardo Barcenas
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                The "I'm obnoxious" fish from Finding Nemo is my spirit animal. I am so clever that sometimes I don’t understand a single word of what I am saying.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href='https://www.linkedin.com/in/ricardo-barcenas/'
              color="primary" variant="contained" size="medium" >
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
                image={garrett}
                title="Garrett Cintron"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Garrett Cintron
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Hi, my name is Garrett Cintron and I am a software engineer. I have a background working in the healthcare industry as a nurse's assistant. I enjoy hiking, going to the gym, and cooking.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button href='https://www.linkedin.com/in/garrett-cintron/'
                color="primary" variant="contained" size="medium" >
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