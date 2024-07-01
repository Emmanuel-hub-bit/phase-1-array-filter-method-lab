// Code your solution here
function findMatching(drivers, name) {
    // Convert the input name to lowercase for case insensitivity
    const lowerCaseName = name.toLowerCase();
    
    // Use filter() to create a new array with names that match
    return drivers.filter(driver => driver.toLowerCase() === lowerCaseName);
}

function fuzzyMatch(drivers, letters) {
    // Use filter() to create a new array with names that start with 'letters'
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    // Use filter() to create a new array with objects whose 'name' matches
    return drivers.filter(driver => driver.name === name);
}
