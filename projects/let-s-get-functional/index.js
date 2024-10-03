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
    var output = []
    var tagMap = {};
   customers.forEach(function(customer){
    customer.tags.forEach(function(tag) {
        tagMap[tag] = (tagMap[tag] || 0) + 1
    });
   });
   var tagPairs = Object.entries(tagMap);
    tagPairs.sort((a, b) => a[1] - b[1]);
   return tagPairs.slice(0, 3).map(([tag]) => tag)
//    return output
};

var genderCount = function(array) {

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
