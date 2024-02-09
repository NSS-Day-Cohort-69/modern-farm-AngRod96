export const harvestPlants = (harvestReady) => {
    let harvestPlants = []
    for (const plant of harvestReady) {
        if (plant.type === "Corn") {
            for(let i = 0; i < plant.output / 2; i++) { //for loop is iterating as many times as the value of output property and then dividing it by 2 
            harvestPlants.push(plant) //pushes plant object into harvestPlants array
            }
        }
        else {
            for(let i = 0; i < plant.output; i++) { // for loop is itertaing as many times as the value of the output property
            harvestPlants.push(plant) //plant object will be pushed into the array
            }
        }
    }
  return harvestPlants  //returnns an array
}