import React from 'react';




const Instructions = () => {


    let th = {
        // height: '10vh',
        marginLeft: '1em'
    }
    const td = {
        height: '10vh',
        marginLeft: '1em'
    }
    let left = {
        float: 'left',
        marginLeft: '10%'
    }

    return(
        <div>
            <h1 >Instructions</h1>
            <p style={left}>Here you will find an assortment of challenges, and tutorials varying in difficulty.</p>
            <br></br>
            <br></br>
            <br></br>
            <p style={left}> They will be marked as such: </p>
            <table style={{margin: '10%'}}>
                <tr>
                    <th><h4 style={th}>Gold Badge</h4></th>
                    <th><h4 style={th}>Blue Badge</h4></th>
                    <th><h4 style={th}>Red Badge</h4></th>
                </tr>
                <tr>
                    <td><img style={td} src="https://elevenfifty.org/wp-content/uploads/2020/03/badges-webdev_gold.png"/></td>
                    <td><img style={td} src="https://elevenfifty.org/wp-content/uploads/2020/03/badges-webdev_blue.png"/></td>
                    <td><img style={td} src="https://elevenfifty.org/wp-content/uploads/2020/03/badges-webdev_red.png"/></td>
                </tr>
            </table>

        </div>
    )
}

export default Instructions