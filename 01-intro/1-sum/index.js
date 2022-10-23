/**
 * mysum: Sum of two numbers
 *
 * @param {number} m first number
 * @param {number} n second number
 * @returns {number}
 */
export default function mysum (a, b) { 
    if (Number(a)===a && Number(b)===b) {
        return a+b;
    }
    else {
        return NaN;//"Ошибка. Проверьте параметры";
    }
}