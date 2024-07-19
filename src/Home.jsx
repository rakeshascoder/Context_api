import React, { useContext } from 'react'
import { storeData } from './Store/Data'
const Home = () => {
    const data = useContext(storeData)
    return (
        <div>
            <h1>my name is {data}</h1>

        </div>
    )
}

export default Home
