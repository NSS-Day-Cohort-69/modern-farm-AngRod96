export const catalog = (harvestPlants) => {
    let HTMLString = ''
    for (const harvestedPlant of harvestPlants) {
        HTMLString += `<section class="plant"${harvestedPlant.type}</section>`
    }
    return HTMLString
}