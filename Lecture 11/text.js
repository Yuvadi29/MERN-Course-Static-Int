// Make a database of object 
// Make an array containing dataId's

// using promises if the data is present in the db resolve it else reject it
// use asynnc await


const db = {
    1: 'data 1',
    2: 'data 2',
    4: 'data 4'
}
const arr = [1, 2, 3, 4]
function getData(id) {
    return new Promise((resolve, reject) => {
        if (db[id]) {
            resolve(`Data found ${id}`)
        }
        else {
            reject(`Not found ${id}`)
        }
    })
}

async function fetchData() {
    for (let i of arr) {
        try {
            let result = await getData(i)
            console.log(result)
        }
        catch (error) {
            console.log(error)
        }
    }
}
fetchData()