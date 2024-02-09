const allPlants = []

export const addPlant = (seed) => {         //array.isArray checks if the passed value is an array
    if (Array.isArray(seed) === true )  // all seeds are getting evaluated 
        for ( const corn of seed ) {  //seeds an array of two corn object, after runs itll be an individual object
            allPlants.push(corn)
        }
    else { allPlants.push(seed)}
    }


export const usePlants = () => {
    return allPlants
}