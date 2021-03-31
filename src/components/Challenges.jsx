import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Add from './SimpleJS/Add'
import Remainder from './SimpleJS/Remainder'
import PosNum from './SimpleJS/PosNum'

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
    }
}))



const Challenges = (props) => {
    const classes = useStyles();
let Components = [{
    component: <Remainder/>,
    badge: 'gold'
},{
    component: <Add/>,
    badge: 'gold'
},{
    component: <PosNum/>,
    badge: 'gold'
}]

   
    return (
<div>
{ Components.map((Component) => {
        console.log(Component);
    return <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <img style={{float: 'left', height: '7vh'}} src={Component.badge === 'gold' ? props.gold: Component.badge === 'blue' ? props.blue : props.red}/>
                    {Component.component}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    })
    }
</div>
)

}


export default Challenges;