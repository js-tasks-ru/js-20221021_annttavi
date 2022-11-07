/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
 export function sortStrings(arr, param = 'asc') {
  function compare(a,b){
    //return a.localeCompare(b, ['ru','en'], {caseFirst:'upper'}); //тоже работает
    return Intl.Collator(['ru','en'],{ caseFirst: 'upper' }).compare(a, b);
   }
     return [...arr].sort(
       function compareFn(p1, p2){
          if (param==="asc") {
             return compare(p1, p2);
           }
         if (param==="desc") {
           return compare(p2, p1);
         }
         else {
           return NaN
         }
         }
     );
   }  
