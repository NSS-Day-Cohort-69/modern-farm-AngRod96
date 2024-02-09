import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
//const asparagusseed = createAsparagus()

export const plantSeeds = (plan) => {
    for (const plans of plan ) { // iterating through the plan array 
        for (const seed of plans ) { //going inside nested array
            if (seed === "Asparagus") {         // if the seed string is equal to the asparagus seed
                addPlant(createAsparagus())  
        }   //the createAsparagus function is invoked creating a object. that object is passed as an argument for the addPlant function 
            if (seed === "Corn") {
                addPlant (createCorn())
            }
            if (seed === "Potato") {
                addPlant(createPotato())
            }
            if (seed === "Soybean") {
                addPlant(createSoybean()) 
            }
            if (seed === "Sunflower") {
                addPlant(createSunflower())
            }
            if ( seed === "Wheat") {
                addPlant(createWheat())
            }
        }
    }
}