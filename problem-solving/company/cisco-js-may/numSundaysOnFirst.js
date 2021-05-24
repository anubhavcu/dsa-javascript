/**
 * A leap year is an year in which the minth of Feb has 29 days ......
 *
 *.....
 * ! program to find how many Sundays fell on the first of the month for a given year which is greater than or equal to 1900.
 *
 * * Similar to this (slightly modified)=> https://www.mathblog.dk/project-euler-19/
 *
 *
 * * basically use case of JS date object
 * we have to count for a given year, how many months were there when 1st was Sunday(i.e 0 for js)
 *
 */
function numSundaysOnFirst(year) {
  let res = 0;
  for (let month = 1; month <= 12; month++) {
    let date = new Date(`${year}-${month}-1`).getDay();
    if (date === 0) {
      res += 1;
    }
  }
  return res;
}

// * getDay() returns the day number for the particular date (sunday is 0 and so on... )
// ! check date formats in JS - https://www.w3schools.com/js/js_date_formats.asp
