// import { useEffect, useState, useMemo } from 'react'

import logo from '../logo.svg';


import { BrowserRouter as Router , Route, Switch, Link } from 'react-router-dom'

import SearchResult from './SearchResult'

import Favorites from '../views/Favorites'
import Home from '../views/Home'
import Shows from '../views/Shows'
import ShowDetail from '../views/ShowDetail'

// import axios from 'axios'

const Header = () => {
    // const [shows, setShows] = useState([])
    // const [filteredShows, setFilteredShows] = useState([])
    // const [text, setText] = useState("");

    // const fetchSearch = async (text) =>{
    //     const res = await axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${text}`)
    //     return res?.data
    // }

    

   

    const shows2 = [
        {
        id: 1,
        name: "One Piece",
        genres: ["Anime", "Adventure", "Action"],
        rating: 9
        },
        {
        id: 2,
        name: "Dragon Ball",
        genres: ["Anime", "Adventure", "Action"],
        rating: 9
        },
        {
        id: 3,
        name: "Naruto",
        genres: ["Anime", "Adventure", "Action"],
        rating: 8
        },
    ]

    return (
    <Router>
            <div className="w-full bg-gray-900 py-3 border-indigo-700 border-t-8" >
                <div className="container relative w-11/12 mx-auto sm:w-11/12 md:w-8/12">
                    <div className="flex items-center justify-between ">
                        <Link to="/"><img src={logo} className="w-16 h-16" alt="thumbnail of show"/></Link>
                        <div className="md:w-96">
                    
                            <div className="relative text-gray-500 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </span>
                            <input type="search"  className="w-full py-2 text-sm pr-2  rounded-md pl-10 outline-none bg-gray-700 text-gray-100" placeholder="Search..." autoComplete="off" />
                            {/* <input onChange={($event) => setFilteredShows($event.target.value)} type="search"  className="w-full py-2 text-sm pr-2  rounded-md pl-10 outline-none bg-gray-700 text-gray-100" placeholder="Search..." autoComplete="off" /> */}
                            <div className="absolute z-20 w-full bg-gray-800">
                            {shows2.length > 0 && shows2.map((show)=> <SearchResult key={show.id} show={show} />)}
                            </div>
                            </div>
                        </div>
                    
                        <div className="hidden md:flex space-x-2 text-white font-semibold tracking-normal ">
                            <Link to="/shows"><p className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm cursor-pointer">Shows</p></Link>
                            {/* <Link to="/favorites"><p className="hover:bg-gray-800 px-3 py-2 rounded-md text-sm cursor-pointer">Favorites</p></Link> */}
                            <p className="bg-indigo-700 hover:bg-indigo-600 px-3 py-2 rounded-md text-sm cursor-pointer">Login</p>
                        </div>
                        <svg className="block md:hidden h-6 w-6 cursor-pointer text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
                    </div>
                </div>
            </div>
        
        <div className="container w-11/12 mx-auto sm:w-11/12 md:w-8/12">
            <Switch>
                <Route path="/" exact >
                    <Home />
                </Route>
                <Route path="/shows/:id">
                    <ShowDetail />
                </Route>
                <Route path="/shows">
                    <Shows />
                </Route>
                
                <Route path="/favorites">
                    <Favorites />
                </Route>
                
            </Switch>
        </div>

    </Router>
    )
}

export default Header
