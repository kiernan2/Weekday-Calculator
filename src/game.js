export default function Game() {

};

Game.prototype.calculateWeekday = function(year, month, day) {
  const a = ((1 + 5 * ((year - 1) % 4) + 4 * ((year - 1) % 100) + 6 * ((year - 1) % 400)) % 7);
  const b = this.monthConverter(month);
  console.log(a, b)
  const c = (a + b + day) % 7;
  switch (c) {
  case (0):
    return "Monday";
  case (1):
    return "Tuesday";
  case (2):
    return "Wednesday";
  case (3):
    return "Thursday";
  case (4):
    return "Friday";
  case (5):
    return "Saturday";
  case (6):
    return "Sunday";
  };
};

Game.prototype.monthConverter = function(month) {
  switch (month) {
  case (1):
    return 0;
  case (2):
    return 3;
  case (3):
    return 3;
  case (4):
    return 6;
  case (5):
    return 1;
  case (6):
    return 4;
  case (7):
    return 6;
  case (8):
    return 2;
  case (9):
    return 5;
  case (10):
    return 0;
  case (11):
    return 3;
  case (12):
    return 5;
  }
}

/* Game.prototype.leapYear = function(year, month) {
  if (month < 3) {
    return 0;
  } else if ((year % 4) !== 0) {
    return 0;
  } else if ((year % 100) !== 0) {
    return 1;
  } else if ((year % 400) !== 0) {
    return 0;
  } else {
    return 1;
  }
} */