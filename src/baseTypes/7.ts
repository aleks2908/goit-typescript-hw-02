/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const isWeekend = (weekday: Weekdays): boolean => {
  return weekday === Weekdays.Sunday || weekday === Weekdays.Saturday;
};

// console.log(isWeekend(Weekdays.Friday));
// console.log(isWeekend(Weekdays.Sunday));
