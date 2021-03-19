import ShowsList from '../components/ShowsList'

const Shows = () => {

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
        },
        {
            id: 5,
            name: "One Piece",
            rating: 9,
            genres: ["Action", "Adventure", "Anime"]
        },
        {
            id: 6,
            name: "Naruto",
            rating: 8,
            genres: ["Action", "Adventure", "Anime"]
        },
        {
            id: 7,
            name: "Hunter x Hunter",
            rating: 9,
            genres: ["Action", "Adventure", "Anime"]
        },
        {
            id: 8,
            name: "Beyblade",
            rating: 5,
            genres: ["Action", "Adventure", "Anime","Adventure", "Anime"]
        },
        {
            id: 9,
            name: "One Piece",
            rating: 9,
            genres: ["Action", "Adventure", "Anime"]
        },
        {
            id: 10,
            name: "Naruto",
            rating: 8,
            genres: ["Action", "Adventure", "Anime"]
        },
        {
            id: 11,
            name: "Hunter x Hunter",
            rating: 9,
            genres: ["Action", "Adventure", "Anime"]
        },
        {
            id: 12,
            name: "Beyblade",
            rating: 5,
            genres: ["Action", "Adventure", "Anime","Adventure", "Anime"]
        },
    ]


    return (
        <div>
            <div className="w-full my-10 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            { shows.length > 0 ?
                shows.map((show) => <ShowsList key={show.id} show={show}/>) : <p className="text-white w-full text-center">Nothing to show</p>}
        </div>
        </div>
    )
}

export default Shows
