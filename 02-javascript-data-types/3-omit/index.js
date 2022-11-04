/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    console.log(fields.length);
    let obj_keys=Object.keys(obj);
    let arr_out ={};
    for (let v of obj_keys) {
        if (!(fields.includes(v))) {
            arr_out[v]=obj[v];
        }
    }
    return arr_out;
}