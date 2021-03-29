import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Add from './SimpleJS/Add'
import Remainder from './SimpleJS/Remainder'
import PosNum from './SimpleJS/PosNum'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color:' white',
        backgroundColor: '#54565a'
    },
}))



const Challenges = () => {
    const classes = useStyles();

   
    return (
<div>
  
          <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item s={5}>
                    <Paper className={classes.paper}>
                        <Add/>
                    </Paper>
                </Grid>
                <Grid item s={5}>
                    <Paper className={classes.paper}>
                         <Remainder/>
                    </Paper>
                </Grid>
                <Grid item s={5}>
                    <Paper className={classes.paper}>
                        <PosNum/>
                    </Paper>
                </Grid>
                <Grid item s={5}>
                    <Paper className={classes.paper}>
                        
                    </Paper>
                </Grid>
                <Grid item s={5}>
                    <Paper className={classes.paper}>
                        
                    </Paper>
                </Grid>
            </Grid>
        </div>

</div>
)

}


export default Challenges;