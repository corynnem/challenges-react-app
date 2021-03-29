import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#e33e42' ,
        padding: '3%',
        borderColor: 'transparent',
        fontWeight: 'bold',
        color: 'white',
        textShadow: 'blurRadius'
    }
}))


const Remainder = (props) => {
    const classes = useStyles();

    const [clicked, setClicked] = useState(false)

    const handleCorrect1 = (e) => {
        
        let button = document.getElementById('handleCorrectRemainder')
        let newFunc = document.createElement('p')
        let gutsOfFunc = document.createElement('p')
        let lastLine = document.createElement('p')
        let funcCall = document.createElement('p')

        if(clicked === true){
         button.innerText = ''
         newFunc.innerText = 'function addition(a, b){'
         gutsOfFunc.innerText = 'return a % b'
         lastLine.innerText = '} addition(3, 4)'
         funcCall.innerText = '--> output: 7'

         newFunc.appendChild(gutsOfFunc)
         gutsOfFunc.appendChild(lastLine)
         lastLine.appendChild(funcCall)
         button.appendChild(newFunc)
        } else {
            button.innerText = 'Reveal Answer'
        }

    }


    return(
        <div>
            <h4>Challenge 1</h4>
            <p>Write a function that accepts two parameters, and returns the remainder of the two parameters </p>
            <button id="handleCorrectRemainder" className={classes.button} onClick={(e) => {setClicked(!clicked); setTimeout(() => handleCorrect1(e), 500)}}>Reveal Answer</button>
        </div>
    )
}

export default Remainder