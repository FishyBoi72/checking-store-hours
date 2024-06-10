// Function to check store status
function checkStoreStatus(isWeekend, isHoliday, currentTime) {
    if (isWeekend || isHoliday) {
        return "The store is closed";
    } else {
        if (currentTime >= 8 && currentTime <= 18) {
            return "The store is open for business";
        } else {
            return "The store is closed";
        }
    }
}

// Test scenarios

// Saturday, Dec 4th at 1:00 pm
let isWeekend = true;
let isHoliday = false;
let currentTime = 13;
console.log(`Saturday, Dec 4th at 1:00 pm: ${checkStoreStatus(isWeekend, isHoliday, currentTime)}`); // "The store is closed"

// Monday, Jan 17th, at 4:00 pm (MLK day)
isWeekend = false;
isHoliday = true;
currentTime = 16;
console.log(`Monday, Jan 17th at 4:00 pm (MLK day): ${checkStoreStatus(isWeekend, isHoliday, currentTime)}`); // "The store is closed"

// Wednesday, Feb 2nd, at 10:30 am
isWeekend = false;
isHoliday = false;
currentTime = 10;
console.log(`Wednesday, Feb 2nd at 10:30 am: ${checkStoreStatus(isWeekend, isHoliday, currentTime)}`); // "The store is open for business"

// Thursday, Feb 17th, at 5:05 pm
isWeekend = false;
isHoliday = false;
currentTime = 17;
console.log(`Thursday, Feb 17th at 5:05 pm: ${checkStoreStatus(isWeekend, isHoliday, currentTime)}`); // "The store is open for business"

// Friday, Feb 18th, at 9:00 pm
isWeekend = false;
isHoliday = false;
currentTime = 21;
console.log(`Friday, Feb 18th at 9:00 pm: ${checkStoreStatus(isWeekend, isHoliday, currentTime)}`); // "The store is closed"
