/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => {
        if(a[1] === b[1]) return 0;
        return (a[1] > b[1] ? -1: 1);
    })
    
    let truckSpace = truckSize;
    let totalUnits = 0;
    
    for(let i = 0; i < boxTypes.length; i++) {
        const curBox = boxTypes[i]
        let numBoxes = Math.min(curBox[0], truckSpace)
        let units = curBox[1]
        truckSpace -= numBoxes;
        totalUnits += numBoxes * units;
    }
    return totalUnits;
};
