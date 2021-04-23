npm install date-fns
import { compareAsc, format } from "date-fns";

const stPattysDay = new Date('2020/03/17');
const formattedDate1 = format(stPattysDay, 'MM/dd/yyyy');
const formattedDate2 = format(stPattysDay, 'MMMM dd, yyyy');

console.log(formattedDate1);
// => "03/17/2020"

console.log(formattedDate2);
// => "March 17, 2020"

<!-- adding year -->

const stPattysDay = new Date('2020/03/17');
const stPattysDayNextYear = addYears(stPattysDay, 1);
const formattedDate = format(stPattysDayNextYear, 'MMMM dd, yyyy');

console.log(formattedDate)

<!-- Local dates -->

const stPattysDay = new Date('2020/03/17');
const formattedDate = format(stPattysDay, 'MMMM dd, yyyy', { locale: russianLocale });

console.log(formattedDate);

<!-- The ability to calculate the differences between 2 dates is important for a date manipulation library. date-fns provides several functions for calculating this.

For example, we can calculate the days from January 1st to Christmas (as well as “business days”!): -->

const format = require('date-fns/format');
const addYears = require('date-fns/addYears');
const differenceInDays = require('date-fns/differenceInDays');
const differenceInBusinessDays = require('date-fns/differenceInBusinessDays')

const startDate = new Date('2020/01/01');
const endDate = new Date('2020/12/24');
const daysBetween = differenceInDays(endDate, startDate);
const workdaysBetween = differenceInBusinessDays(endDate, startDate);

console.log(daysBetween);
// => 358

console.log(workdaysBetween);
