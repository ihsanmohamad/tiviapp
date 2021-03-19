
const ShowDetail = ({show}) => {


    return (
        <div className="px-10 my-4 py-6 bg-gray-800 rounded-lg shadow-md">
                <div className="flex flex-wrap space-y-4">
                  <img alt="testimonial" className="inline-block object-cover object-center w-56  bg-gray-100 rounded" src="https://static.tvmaze.com/uploads/images/original_untouched/128/320242.jpg" /> <span className="flex flex-col flex-grow pl-4">
                    <span className="font-bold text-4xl text-gray-100 ">One Piece</span>
                    <p className="flex flex-row text-lg text-gray-100 mt-4"> 9<svg className="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" fill='#FFFF00'>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg></p>
                  </span>

                </div>
                
        </div>
    )
}

export default ShowDetail
