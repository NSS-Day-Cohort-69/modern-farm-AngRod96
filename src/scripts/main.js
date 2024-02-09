console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'


const yearlyPlan = createPlan() 
console.log(yearlyPlan)
plantSeeds(yearlyPlan)

const harvestedPlants = usePlants()
console.log(harvestedPlants)

const harvestedField = harvestPlants(harvestedPlants)


const parentHTML = document.querySelector(`#container`)

const theCatalogHTML = catalog(harvestedField)

parentHTML.innerHTML = theCatalogHTML