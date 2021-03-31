import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 10,
    },
    paper: {
        float: 'left',
        display: 'block',
        marginLeft: '10vw',
        width: '80vw',              
        color:' white',
        backgroundColor: '#54565a'
    },
}))



const Tutorials = (props) => {
    const classes = useStyles();

    const tutorials = [
        {
            name: 'html css js small fetch app',
            link: 'https://www.youtube.com/watch?v=vmpAK2h0UeQ',
            photoLink: 'https://www.youtube.com/embed/vmpAK2h0UeQ',
            copyright: ' tommykelly100',
            badge: 'gold'
        },
        {
            name: 'Rock Paper Scissors App',
            link: 'https://www.youtube.com/watch?v=jaVNP3nIAv0',
            photoLink: 'https://www.youtube.com/embed/jaVNP3nIAv0',
            copyright: 'freeCodeCamp.org',
            badge: 'gold'
        },
        {
            name: 'Build a Recipe App With React',
            link: 'https://www.youtube.com/watch?v=U9T6YkEDkMo',
            photoLink: 'https://www.youtube.com/embed/U9T6YkEDkMo',
            copyright: 'Dev Ed',
            badge: 'blue'
        },
        {
            name: 'Learn React JS in 5 minutes',
            link: 'https://www.youtube.com/watch?v=MRIMT0xPXFI',
            photoLink: 'https://www.youtube.com/embed/MRIMT0xPXFI',
            copyright: 'Aaron Jack',
            badge: 'blue'
        },
        {
            name: 'Build a Weather App in React JS',
            link: 'https://www.youtube.com/watch?v=GuA0_Z1llYU',
            photoLink: 'https://www.youtube.com/embed/GuA0_Z1llYU',
            copyright: 'Tyler Potts',
            badge: 'blue'
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: '',
            badge: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: '',
            badge: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: '',
            badge: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: '',
            badge: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: '',
            badge: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: '',
            badge: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: '',
            badge: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: '',
            badge: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: '',
            badge: ''
        }
    ] 

    return (
    <div>
        <h1>Tutorials</h1>
    { tutorials.map((tutorial) => {
        console.log(tutorial);
    return <div className={classes.root}>
          { tutorial.name === "" ? "" : <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                    <img src={tutorial.badge === "" ? "" : tutorial.badge === 'gold' ? props.gold: tutorial.badge === 'blue' ? props.blue: tutorial.badge} style={{float: 'left', height: '7vh'}}/>
                        <iframe src={tutorial.photoLink} height='300vh' width="300vw"></iframe>
                    <div style={{backgroundColor: "#e33e42"}}>
                        <a href={tutorial.link} style={{textDecoration: 'none', color: "white"}}>
                        <h1 style={{padding: '5%'}}>{tutorial.name}</h1></a>
                        <h5>Video made by:{tutorial.copyright}</h5>
                       
                    </div>
                    </Paper>
                </Grid>
            </Grid> }
        </div>
    })
    }
</div>
    )
}


export default Tutorials;