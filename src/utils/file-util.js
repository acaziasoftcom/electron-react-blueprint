var { remote } = require('electron')
var filesys = remote.require('fs')

export function write (data) {
  filesys.writeFile('test.txt', '\uFEFF' + 'trương còi bách khoa', 'utf-8', function (err) {
    console.log(err)
  })
}
