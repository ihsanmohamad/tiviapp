import { useState, useEffect } from 'react'

import ShowsList from '../components/ShowsList'

import axios from 'axios'

const Home = () => {

    const shows =[
        {
            id: 1,
            name: "One Piece",
            rating: 9,
            genres: ["Action", "Adventure", "Anime"]
        },
        {
            id: 2,
            name: "Naruto",
            rating: 8,
            genres: ["Action", "Adventure", "Anime"]
        },
        {
            id: 3,
            name: "Hunter x Hunter",
            rating: 9,
            genres: ["Action", "Adventure", "Anime"]
        },
        {
            id: 4,
            name: "Beyblade",
            rating: 5,
            genres: ["Action", "Adventure", "Anime","Adventure", "Anime"]
        }
    ]

    // const [shows , setShows] = useState([])

    // useEffect (() => {
    // const getShows = async () => {
        
    //     const showsFromServer = await fetchShows()
        
    //     setShows(showsFromServer)
    // }
    // getShows()
    // },  [])
    
    // const fetchShows = async () => {
    //     const res = await axios.get(`http://api.tvmaze.com/shows`)
    //     console.log(Object.entries(res.data))
    //     return Object.entries(res)
    // }

    
    return (
        <div className="container mt-16">

        <h3 className="text-yellow-600 font-semibold text-base font-roboto tracking-wider">Popular Shows</h3>

        <div className="w-full my-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            { shows.length > 0 ?
                shows.map((show) => <ShowsList key={show.id} show={show}/>) : <p className="text-white w-full text-center">Nothing to show</p>}
        </div>

        <h3 className="text-yellow-600 font-semibold text-base font-roboto tracking-wider">Upcoming Shows</h3>
        <div className="w-full my-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            { shows.length > 0 ?
                shows.map((show) => <ShowsList key={show.id} show={show}/>) : <p className="text-white w-full text-center">Nothing to show</p>}
        </div>
        </div>
    )
}

export default Home
