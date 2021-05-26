import React from 'react'

import MovieCard from "./MovieCard";


const MovieList = ({movies,serachTitle,srate}) => {

    return (
        <div>
            <section>
	<div className="container">
			<div className="mx-auto">
				<div className="col-lg-12">				
					<h1 className="display-2 heading-big heading-big-square text-center">Best Movies Lists</h1>										
				</div>
		</div>
        
	</div>
	
	<div className="container">

			<div className="mx-auto">
				<div className="col-lg-12">
					<div className="text-center my-3">
						<h6 className="text-center my-5">CHOOSE YOUR BEST MOVIES</h6>						
						<div className="card-deck no-gutters">
    < div >
    { movies.filter( movie =>{ return movie.Titl.toLowerCase().includes(serachTitle.toLowerCase()) &&
            movie.Rate >= srate })
.map(({ Titl, Description, Poster, Rate, Year }, i) => (
        <MovieCard key={i} Titl={Titl} Description={Description} Poster={Poster} Rate={Rate} Year={Year} />
      ))}
    
          
       
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>




 

						
	</section>
        </div>
    )
}

export default MovieList

