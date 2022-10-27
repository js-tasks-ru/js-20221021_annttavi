/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
 function doSort_asc (a, b) {
    return Intl.Collator(['en','ru'],{ caseFirst: 'upper'}).compare(a, b);
  }
function doSort_desc (a, b) {
    return Intl.Collator(['ru','en'],{ caseFirst: 'lower' }).compare(b, a);
  }

export function sortStrings(arr, param = 'asc') {
    let arr_out = arr.slice();
    if (param==="asc")  arr_out.sort(doSort_asc)
    else  if (param==="desc")  arr_out.sort(doSort_desc);
    return arr_out;
}

