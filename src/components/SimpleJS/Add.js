import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#e33e42' ,
        padding: '3%',
        borderColor: 'transparent',
        fontWeight: 'bold',
        color: 'white'
    }
}))



const Add = () => {
    const classes = useStyles()
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        setTimeout(() => handleCorrect1(), 500)
    }, clicked)

    const handleCorrect1 = (e) => {
        
        let button = document.getElementById('handleCorrect')
        let newFunc = document.createElement('p')
        let gutsOfFunc = document.createElement('p')
        let lastLine = document.createElement('p')
        let funcCall = document.createElement('p')

        if(clicked === true){
         button.innerText = ''
         newFunc.innerText = 'function remainder(a, b){'
         gutsOfFunc.innerText = 'return a % b'
         lastLine.innerText = '} remainder(7, 3)'
         funcCall.innerText = '--> output: 1'

         newFunc.appendChild(gutsOfFunc)
         gutsOfFunc.appendChild(lastLine)
         lastLine.appendChild(funcCall)
         button.appendChild(newFunc)
         console.log('end of handle1 if')
        } else {
            button.innerText = 'Reveal Answer'
        }

    }

    
    return(
        <div >
            <h4>Challenge 1</h4>
            <p>Write a function that accepts two parameters, and adds those two parameters </p>
            <button id="handleCorrect" className={classes.button} onClick={(e) => setClicked(!clicked) }>Reveal Answer</button>
        </div>
    )
}

export default Add