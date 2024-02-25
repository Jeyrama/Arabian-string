/*
You must create a method that can convert a string from any format into PascalCase. 
This must support symbols too.
Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)
  "example name" --> "ExampleName"
  "your-NaMe-here" --> "YourNameHere"
  "testing ABC" --> "TestingAbc"
*/


// Solution

function camelize(str) {
  return str.match(/[a-z0-9]+/gi).map(function(s) {
    return s[0].toUpperCase() + s.substr(1).toLowerCase()
  }).join('')
}

// or