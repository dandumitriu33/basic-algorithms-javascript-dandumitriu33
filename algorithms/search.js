/**
 * Implement these two search algorithms.
 */

/**
 * Search for the number in the sorted list with the linear search algorithm
 * and return the index of the element.
 *
 * Optional: print out how many comparision was needed to find the number
 *
 * @param {number} number The number to search for
 * @param {array} list Ascending list of numbers
 * @returns {number|null} Index of the element or null
 */
function linear_search(number, list) {
    let index = 0;
    for (let i = 0; i < list.length; i++) {
        if (number == list[i]) {
            console.log('comparisons: ', index+1);
            return index;
        } else {
        index = index + 1;
        }
    }

    return null;
}

/**
 * Search for the number in the sorted list with the binary search algorithm
 * and return the index of the element.
 *
 * Optional: print out how many comparision was needed to find the number
 *
 * @param {number} number The number to search for
 * @param {array} list Ascending list of numbers
 * @returns {number|null} Index of the element or null
 */
function binary_search(number, list) {
    let count = 0;
    let list2 = list.slice(0);
    let index = 0;
    let mid = 0;
    while (list.length > 1) {
        count += 1;
        mid = Math.floor(list.length/2);
        index = list2.indexOf(list[mid]);
        if (list[mid] < number) {
            list = list.slice(mid);
        } else if (list[mid] > number) {
            list = list.slice(0, mid);
        } else {
            console.log('comparisons: ', count);
            return index;
        }
    }
    if (list[0] === number) {
        index = list2.indexOf(list[0]);
        return index;
    } else {
        return null;
    }
}

function print_result(search, index) {
    let result = search + ' search ';

    if (index === null) {
        result += 'did not find it.'
    } else {
        result += `found it on index ${index}.`
    }

    console.log(result);
}


function main() {
    let numbers = [3, 6, 8, 11, 18, 23, 24, 33, 36, 45, 46, 51, 56, 60, 69, 72, 83, 90, 93, 97];
    let searched_number = Number(prompt('What is the number you are looking for? (0-100)'));

    print_result('Linear', linear_search(searched_number, numbers));
    print_result('Binary', binary_search(searched_number, numbers));
}

main();

