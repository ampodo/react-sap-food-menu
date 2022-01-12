import {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getMealById} from '../api';
import {Preloader} from '../components/Preloader'

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const {id} = useParams();
    const {goBack} = useHistory();

    useEffect(() => {
       getMealById(id).then((data) => setRecipe(data.meals[0]));
     
     }, [id]);
       
    return (
       <>
         
           {!recipe.idMeal ? (
               <Preloader /> 
           ) : (
                <div className='recipe'>
                    <img className="recipe" style={{marginTop:'1em'}}  src={recipe.strMealThumb}  alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                   {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                   <p>{recipe.strInstructions}</p>
                </div>
           )}
         <button className='btn' onClick={goBack}>
           Go Back
           </button>
    </>

    );
}

export {Recipe};
