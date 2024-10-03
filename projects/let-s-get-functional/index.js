// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/***
 I : array of customer objects
 O : number of male customers
 */


var maleCount = function(array) {
    let males = [];
     _.filter(array, function(current, index, array){
         if (current.gender === 'male') {
         males.push(current)
         }
        })
        return males.length;
};


var femaleCount = function(array) {
    let females = [];
    _.filter(array, function(current, index, array){
        if (current.gender === 'female') {
            females.push(current)
        }
    })
    return females.length
};

// O : oldest customer's name
var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(accumulator, current){
        // accumulator = {adele mullin} | current = {olga newton}
        if (current.age > accumulator.age) {
            return current;
        }
        return accumulator
    });
    return oldest.name;
}; 

// invoke _.reduce()
    // outputl=;
    // if (undefined === undefined)
        // output = {Adele Mullin}
        // for loop
            // i = 1
                // output = func({adele mullin}, {olga newton})

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(accumulator, current){
        if (current.age < accumulator.age) {
            return current;
        }
        return accumulator
    })
    return youngest.name
};

var averageBalance = function(customers) {
    let sum = _.reduce(customers, function(sum, current){
        var no$ = current.balance.replace('$', '')
        var noCom = no$.replace(',', '')
        var num = Number(noCom)
        return sum += num;
    }, 0)
    let avg = sum / customers.length;
    return avg
};


var firstLetterCount = function(array, letter) {
    let count = [];
    _.filter(array, function(current, index, array) {
        if (current.name.charAt(0).toUpperCase() === letter || current.name.charAt(0).toLowerCase() === letter){
            count.push(current)
        }
        return count
    });
    return count.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let count = [];
    _.filter(array, function(current, index, array) {
        if (current.name === customer) {
            for (const element of current.friends) {
                if (element.name.charAt(0).toUpperCase() === letter || element.name.charAt(0).toLowerCase() === letter) {
                    count.push(element.name)
                }
            }
        }
        return count;
    })
    return count.length
};

var friendsCount = function(array, name) {
    let count = [];
    _.filter(array, function(current, index, array) {
        for (const element of current.friends) {
            if (element.name === name) {
                count.push(current.name);
            }
        }
        return count
    })
    return count

};

var topThreeTags = function(customers) {
// take in customers array and return new aray with the top three tags 
    // create frequency map for the tags
    // create New Object's New Key:Value pairs with properties from Input Array
    var tagMap = {};

    // Iterate thru customers Array to access Objects and invoke function to name the Objects 'customer'
    customers.forEach(function(customer){
    // Iterate thru each 'customer' Object to access the Array contained in it's 'tags' property and invoke function to name each element in the array 'tag'
    customer.tags.forEach(function(tag) {
        // invoking above function creates tagMap's properties counting the tags //
            //initilize a new property in tagMap for each 'tag' element 
            // assign 'tag' value as the key's name
            // assign tag frequency as the key value 
            // each iteration will update existing key:value pairs and create new ones upon unique tags
        tagMap[tag] = (tagMap[tag] || 0) + 1
        // so key : value is tag : frequency count
        //  || OR operator has left-to-right associativity
            // here we're using it it to provide a default value for the defined variable
        // returns map Object {tag : count, tag : count}
    });
   });
    // return new array with 
        //Object.entries(object) returns 2 dimensional array, where each inner represents a key-value pair from the object
    // tags sorted by frequency in descending order 
        // sort takes a compare function as an argument, and this function is used to determine the sorting order of the elements
            // params: a, b - represent any two elements from the array
            // returns negative, 0, or positive value to determine sort order
                                                //params.   // b minus a
                                           // a - b for ascending, b - a for descending 
    const sortedTags = Object.entries(tagMap).sort((a, b) => b[1] - a[1])
    // return array with top three tags 
        // method chainging :slice the first three elements from the sorted array
        // method chaining :map 2 dimensional array to 1 dimensional array containing only the key names ('tags')
    return sortedTags.slice(0, 3).map(([tag]) => tag)
};

// create summary of genders from 'customers' array
// output: object {gender: count, male: 2, female: 3, nb: 5}
// use .reduce
var genderCount = function(customers) {
    // create new Object to contain our gender summary
    var genMap = {};

    // iterate 'customers' array to access nested objects and invoke function to initialize each object with the name 'customer'
    customers.forEach(function(customer){
        // access the 'gender' property from every 'customer' object
        // invoking function creates new key: value pairs for the new object genMap
        // initialize new property for each unique gender
        // assign key name as the value at customer.gener
        // assign key value as the amount of customers with that gender
            // updated upon each iteration of an object
        genMap[customer.gender] = (genMap[customer.gender] || 0) + 1
    });
    // return gender summary
    return genMap

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
