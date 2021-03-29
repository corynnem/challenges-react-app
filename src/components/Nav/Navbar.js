import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppsIcon from '@material-ui/icons/Apps';
import FolderIcon from '@material-ui/icons/Folder';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';






const useStyles = makeStyles((theme) => ({
    root: {
        width: 400,
    },
    nav: {
        position: 'sticky'
        
    },
    icon: {
    //   float: 'center',
    }
}));





const Navbar = (props) => {


    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    console.log(props)

    
    return (
        <div className={classes.nav}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                <Link to="/challenges">
                    <BottomNavigationAction href="/challenges" className={classes.icon} label="Challenges" icon={<AssessmentIcon fontSize="small"/>} />
                </Link> 
                <Link to='/tutorials'>
                    <BottomNavigationAction href="/tutorials" className={classes.icon} label="Tutorials" icon={<AppsIcon  fontSize="small"/>} />
                </Link>
                <Link to='/feedback'>
                     <BottomNavigationAction href="/feedback"  className={classes.icon} label="Feedback" icon={<ChatBubbleOutlineIcon fontSize="small"/>} />
                </Link>  
                <Link to='/'>
                     <BottomNavigationAction href="/" className={classes.icon} label="Instructions" icon={<FolderIcon fontSize="small"/>} />
                </Link> 
                </BottomNavigation>
        </div>
    );
}

export default Navbar