import React from 'react'

 export const SerachTitle = ({filtredmovies}) => {
  



	return (
    
		<div >
    <input
				type="texte"
				onChange={(event) => filtredmovies(event.target.value)}
				placeholder='Type movie...'
			/>
		</div>

 
	);
};
export const SearchRate = ({Rate,setRate}) => {
  
	const stars = (a) => {
		let arrayOfStars = [];
		for (let i = 1; i <= 10; i++) {
		  if (i <= a) {
			arrayOfStars.push(
			  <span
				key={i}
				style={{ color: "red", fontSize: "40px" }}
				onClick={() => setRate(i)}
			  >
				{" "}
				★{''}
			  </span>
			);
		  } else {
			arrayOfStars.push(
			  <span
				key={i}
				style={{ color: "white", fontSize: "30px" }}
				onClick={() => setRate(i)}
			  >
				{" "}
				★{""} 
			  </span>
			 
			);
		  }
		}
		return arrayOfStars;
	  };
	  return <div>{stars(Rate)}</div>;
};


