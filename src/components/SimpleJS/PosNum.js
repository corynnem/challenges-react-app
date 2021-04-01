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


const PosNum = (props) => {
    const classes = useStyles();

    const [clicked, setClicked] = useState(false)

    const timeoutFunc = () => {
        setClicked(!clicked);
        setTimeout(() => handleCorrect1())
    }

    const handleCorrect1 = (e) => {
        
        let button = document.getElementById('handleCorrectPosNum')
        let declaration = document.createElement('p')
        let if1 = document.createElement('p')
        let if2 = document.createElement('p')
        let if3 = document.createElement('p')
        let if4 = document.createElement('p')
        let if5 = document.createElement('p')
        let if6 = document.createElement('p')
        let if7 = document.createElement('p')
        let lastLine = document.createElement('p')
        let funcCall = document.createElement('p')

        if(clicked === true){
         button.innerText = ''
         declaration.innerText = 'let posNum = 34'
         if1.innerText = 'if(posNum > 0){'
         if2.innerText = "console.log('number is greater than zero')"
         if3.innerText = "} else if (posNum < 0){"
         if4.innerText = "console.log('number is less than zero')"
         if5.innerText = "} else if(posNum === 0){"
         if6.innerText = "console.log('zerooooooooo')"
         if7.innerText = "} else {"
         lastLine.innerText = "}"
         funcCall.innerText = '--> output: number is greater than zero'

         declaration.appendChild(if1)
         if1.appendChild(if2)
         if2.appendChild(if3)
         if3.appendChild(if4)
         if4.appendChild(if5)
         if5.appendChild(if6)
         if6.appendChild(lastLine)
         lastLine.appendChild(funcCall)
         button.appendChild(declaration)
        } else {
            button.innerText = 'Reveal Answer'
        }

    }


    return(
        <div>
            <h4>Challenge 1</h4>
            <p>Write an expression to check if a number is greater than, less than, or equal to zero. Then return a string stating if the number is greater than, less than, or equal to zero. </p>
            <button id="handleCorrectPosNum" className={classes.button} onClick={(e) => timeoutFunc(e)}>Reveal Answer</button>
        </div>
    )
}

export default PosNum