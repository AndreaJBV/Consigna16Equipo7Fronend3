import React, { useEffect, useState } from 'react'

const RandomApi2 = () => {

    const [coin, setCoin] = useState([{}])
    const [cambiarCoin, setCambiarCoin] = useState(0)

    const url = 'https://api.coinlore.net/api/coin/markets/?id=90'

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
            setCoin(data)
        }
        fetchData()
    }, [])
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '500px', justifyContent: 'space-around'}}>
        
            <h1>Change the coin</h1>
            <h3>Name: {coin[cambiarCoin].name}</h3>
            <h3>Price: {coin[cambiarCoin].price}</h3>
            <button onClick={() => setCambiarCoin(Math.floor(Math.random()*10))}>Cambiar de coin</button>
        </div>
    )
}



export default RandomApi2