// Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined

var weeekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]
function dayOfWeek(num){
    return weekday[num-1]
}
NEXT USES 
LESS MEMORY

// -------------

var getDay = function (dayNum){
    switch(dayNum){
      case 1: 
        return 'Monday';
      case 2: 
        return 'Tuesday';
      case 3: 
        return 'Wednesday';
      case 4: 
        return 'Thursday';
      case 5: 
        return 'Friday';
      case 6: 
        return 'Saturday';
      case 7: 
        return 'Sunday';
      default: 
        return undefined;
    }
  }