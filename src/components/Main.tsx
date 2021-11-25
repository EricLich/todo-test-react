import React, { useState } from 'react'

function Main() {

    const [counter, setCounter] = useState(0)

    const handleClick = ():void => {
        setCounter(counter + 1)
    }


    return (
        <main className="container w-160 self-center bg-green-400 justify-center text-center">
            <h2>{ counter }</h2>
            <button onClick={handleClick} >Increase Count</button>

            
        </main>
    )
}

export default Main
