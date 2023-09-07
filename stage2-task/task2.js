// 2. Build a script that processes a list of data items sequentially, applying a function to each item with one second delay per item. Hint: use `async.mapSeries`

// Given an array of items, your script should process the data sequentially, for example; given `const numbers = [1,3,5,6,3], your scr should process each number and multiply it by 2 after 1 second delay for each item in the array.

// This project will help you understand how to use the "async" library for control flow when dealing with tasks that need to be executed one after another.

const async = require('async')

const num = [1, 2, 3, 4, 5, 6, 7]

function processItem(item, callback) {
  setTimeout(() => {
    console.log(`Processed item: ${item}`)
    callback(null, item * 2)
  }, 1000)
}

async.mapSeries(num, processItem, (error, results) => {
  if (error) {
    console.log('Error:', error)
  } else {
    console.log('All items processed succesfully')
    console.log('Results:', results)
  }
})