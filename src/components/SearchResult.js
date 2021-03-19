import { useHistory } from 'react-router-dom'

const SearchResult = ({ show }) => {

  let history = useHistory();
    
  const goTo = () =>{
      history.push("/shows/1")
  }

    return (
        <div>
            { show && 
              <div onClick={goTo} className="cursor-pointer h-full rounded-md text-left px-4 py-2 bg-gray-700 w-full justify-end border-t-2 border-gray-900">
                <div className="flex items-center flex-wrap">
                  <img alt="testimonial" className="inline-block object-cover object-center w-9 h-16  bg-gray-100 rounded" src="https://static.tvmaze.com/uploads/images/original_untouched/128/320242.jpg" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-lg text-gray-100 ">{show.name}</span>
                    <p className="flex flex-row text-sm text-gray-100"> {show.rating}<svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill='#FFFF00'>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg></p>
                  </span>
                  { 
                    show.genres.map((genre) =><p className="pr-2 text-white text-xs md:text-sm">{genre}</p>) }
                </div>
              </div>
            }
      </div>
    )
}



export default SearchResult
