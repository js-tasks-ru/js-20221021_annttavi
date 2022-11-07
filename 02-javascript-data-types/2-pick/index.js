/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

export const pick = (obj, ...fields) => {
    let arr_out = {};
    for (let v of fields) {
        if (obj[v]) {
            arr_out[v] =obj[v];    
        } 
    }
    return arr_out;
}




