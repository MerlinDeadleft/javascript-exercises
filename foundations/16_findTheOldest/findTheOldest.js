const findTheOldest = function(arr) {
    const agesMap = arr.map(item => ({
        person: item, age: ("yearOfDeath" in item ? item.yearOfDeath : new Date().getFullYear()) - item.yearOfBirth
    }));
    agesMap.sort((a, b) => b.age - a.age);


    return agesMap[0].person;
};

// Do not edit below this line
module.exports = findTheOldest;
