/*
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas 
except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

*/

function list(names){
    let ans = "";
    for (let i=0; i < names.length; i++) {
      const name = names[i].name;
      ans += name;
      if ( i < names.length-2) {
        ans += ", "
      } else if (i === names.length-2) {
        ans += " & "
      }
    }
    return ans;
  }
  