console.log('🔥 Date and time Api...');
//1 January 1970 UTC

// let todaysdate = new Date();
// console.log(todaysdate); //2021-06-15T20:30:52.022Z

// // india is 5hr 30min ahead of greenwich mean time ans if we add 5hr 30min we get indian time

// console.log(todaysdate.toLocaleString()); //6/16/2021, 2:05:51 AM

// console.log(todaysdate.toString()); //Wed Jun 16 2021 02:07:59 GMT+0530 (India Standard Time)

// console.log(Date.now());//it return numeric value corresponding to the current time-the number of milliseconds elapsed since January 1 1970 00:00:00 UTC
// new Date(year, month, day, hour, minute, second,millisecond);
// var d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d); //2018-12-24T05:03:30.000Z
// console.log(d.toLocaleString());
//12/24/2018, 10:33:30 AM
//month is must
// console.log(new Date(2021));
//1970-01-01T00:00:02.021Z
// so month is must
// console.log(new Date(2021, 5).toLocaleString());
// 6/1/2021, 12:00:00 AM

// var d = new Date('October 13, 2021 11:13:00 ');
// // console.log(d);2021-10-13T05:43:00.000Z
// console.log(d.toLocaleString());
//10/13/2021, 11:13:00 AM

//millisecond
// console.log(Date.now()); //1623791292950
// var d = new Date(1623791292950);
// console.log(d.toLocaleString()); //6/16/2021, 2:38:12 AM
