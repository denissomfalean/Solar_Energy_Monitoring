// for 3 days Data with 7 hours per day
//[[{hour:12, consumption:7},{}, ...], ...]
function generateHourlyDataFor3Days() {
  return generateMultipleDaysHourlyData(3);
}

//for 7 days
//[{day:"Monday",consumption:12}, ...]
function generateWeeklyData() {
  let week = [];
  for (i = 0; i < 7; i++) {
    let weekDay = {
      day: getWeekDay(i),
      consumption: randomIntFromInterval(0, 20),
    };
    week.push(weekDay);
  }
  return week;
}

//for month Data
//[{day:1, consumption:11}, ...]
function generateMontlyData() {
  let monthData = [];
  for (i = 0; i < 31; i++) {
    let dayData = {
      day: i + 1,
      consumption: randomIntFromInterval(0, 20),
    };
    monthData.push(dayData);
  }
  return monthData;
}

//for year data
//[{month:"January", consumption:11}, ...]
function generateYearlyData() {
  let yearData = [];
  for (i = 0; i < 12; i++) {
    let monthData = {
      month: getMonth(i),
      consumption: randomIntFromInterval(0, 20),
    };
    yearData.push(monthData);
  }
  return yearData;
}

function getMonth(index) {
  let month;
  switch (index) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
  }
  return month;
}

function getWeekDay(index) {
  let day;
  switch (index) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return day;
}

//generate datas for a given number of days
function generateMultipleDaysHourlyData(days) {
  let datas = [];
  for (i = 0; i < days; i++) {
    datas.push(generateDailyData(7));
  }
  return datas;
}

//generate data for a day in a guen number of hours
function generateDailyData(hours) {
  let data = [];
  for (i = 0; i < hours; i++) {
    let dailyData = {
      hour: i + 12,
      consumption: randomIntFromInterval(0, 20),
    };
    data.push(dailyData);
  }
  return data;
}

// min and max included
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
