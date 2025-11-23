const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//should return 2

const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//should return 1

const array3 = [2, 3, 4, 5];
//should return undefined

function firstRecurringCharacter(arr) {
    let items = {};

    for (let i = 0; i < arr.length; i ++) {
        if (!items[arr[i]])
            items[arr[i]] = true;
        else
            return arr[i];
    }

    return undefined;
}

console.log(firstRecurringCharacter(array1));
console.log(firstRecurringCharacter(array2));
console.log(firstRecurringCharacter(array3));