let easyDate = require('easy-date')
let execSync = require('child_process').execSync

// git commands
let addFile = "git add buffer"
let modifyFile = 'echo ltt >> buffer'
let commitAtDate = 'git commit -m "working..." --date='

// the shape to draw
let shape = [
  '-**-**-',
  '*--*--*',
  '*-----*',
  '-*---*-',
  '--*-*-',
  '---*---'
]

// start is the date of the upperleft corner
let start = 'feb 1, 2016'

let refDate = new Date(start)

shape.forEach((row, y) => {
  row.split('').forEach((value, x) => {
    if (value === '*') {
      var date = (x*7).days().since(refDate)
      date =  y.days().since(date)
      addCommit(date)
    }
  })
})


function addCommit(date) {
  console.log('adding date:', date)

  execSync(modifyFile)
  execSync(addFile)
  execSync(commitAtDate + '"' + date + '"')
}