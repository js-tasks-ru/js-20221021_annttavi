/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */

export const pick = (obj, ...fields) => {
    let arr_out = {};
    if (Array.isArray(fields) && fields.length>0) {
        
        fields.forEach(element => {
            if (obj[element]) {
                arr_out[element] =obj[element];    
            }
        });
    }
    else { 
        if (obj[fields]) {
            arr_out[fields] =obj[fields];
        }
    }
    return arr_out;
}




