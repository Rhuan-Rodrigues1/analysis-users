const { superUsersService } = require('./superUsersService')


function removeDuplicate(list) {
    return [...new Set(list)]
}


exports.topCountriesService = () => {
    const data = superUsersService() || [];
    const array =  data.reduce((acc, item) => {
        if(item.country) {
            acc.push(item.country)
        }
        return acc
    }, [])
    
    const countriesExist = removeDuplicate(array)
    
    const countrysCount = {}

    for(let i = 0; i < countriesExist.length; i++) {
        const countOccurrence = global._globalUtils.occurrenceArray(array, countriesExist[i])
        countrysCount[countriesExist[i]] = countOccurrence
    }

    let entries = Object.entries(countrysCount)

    entries.sort((a, b) => b[1] - a[1]);

    entries = Object.fromEntries(entries)

    return entries
}
