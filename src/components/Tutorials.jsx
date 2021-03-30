import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 10,
        // backgroundColor: '#e33e42'
    },
    paper: {
        // padding: theme.spacing(2),
        // textAlign: 'center',
        // color: theme.palette.text.secondary
        float: 'left',
        display: 'block',
        marginLeft: '10vw',
        width: '80vw',              
        
    }
}))



const Tutorials = () => {
    const classes = useStyles();

    const tutorials = [
        {
            name: 'html css js small fetch app',
            link: 'https://www.youtube.com/watch?v=vmpAK2h0UeQ',
            photoLink: 'https://www.youtube.com/embed/vmpAK2h0UeQ',
            copyright: ' tommykelly100'
        },
        {
            name: 'Rock Paper Scissors App',
            link: 'https://www.youtube.com/watch?v=jaVNP3nIAv0',
            photoLink: 'https://www.youtube.com/embed/jaVNP3nIAv0',
            copyright: 'freeCodeCamp.org'
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/vmpAK2h0UeQ',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: '',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        },
        {
            name: '',
            link: 'https://www.youtube.com/watch?v=',
            photoLink: 'https://www.youtube.com/embed/',
            copyright: ''
        }
    ] 

    return (
    <div>
        <h1>Tutorials</h1>
    { tutorials.map((tutorial) => {
        console.log(tutorial);
    return <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <iframe src={tutorial.photoLink} height='300vh' width="300vw"></iframe>
                        <a href={tutorial.link}>
                        <h1 style={{padding: '10%'}}>{tutorial.name}</h1></a>
                        <h5>Video made by:{tutorial.copyright}</h5>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    })
    }
</div>
    )
}


export default Tutorials;