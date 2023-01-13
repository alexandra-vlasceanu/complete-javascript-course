function dayNumberToName1(day) {
  if (day == 0) console.log('Luni');
  else if (day == 1) console.log('Marti');
  else if (day == 2) console.log('Miercuri');
  else if (day == 3) console.log('Joi');
  else if (day == 4) console.log('Vineri');
  else if (day == 5) console.log('Sambata');
  else if (day == 6) console.log('Duminica');
  else console.log('NO.');
}

dayNumberToName1(0);
dayNumberToName1(4);

function dayNumberToName2(day) {
  if (day == 0) return 'Luni';
  else if (day == 1) return 'Marti';
  else if (day == 2) return 'Miercuri';
  else if (day == 3) return 'Joi';
  else if (day == 4) return 'Vineri';
  else if (day == 5) return 'Sambata';
  else if (day == 6) return 'Duminica';
  else return 'NO.';
}
console.log(dayNumberToName2(6));
console.log(dayNumberToName2(2));

function dayNumberToName3(day) {
  if (day == 0) return 'Luni';
  if (day == 1) return 'Marti';
  if (day == 2) return 'Miercuri';
  if (day == 3) return 'Joi';
  if (day == 4) return 'Vineri';
  if (day == 5) return 'Sambata';
  if (day == 6) return 'Duminica';
  return 'NO.';
}

const weekdays = [
  'Luni',
  'Marti',
  'Miercuri',
  'Joi',
  'Vineri',
  'Sambata',
  'Duminica',
];

function dayNumberToName4(day) {
  if (day >= 0 && day <= 6) return weekdays[day];

  return 'NO.';
}
console.log(dayNumberToName4(3));
console.log(dayNumberToName4(9));

function dayNumberToName4(day) {
  if (day < 0) return 'NO.';

  if (day > 6) return 'NO.';

  return weekdays[day];
}

const dayNumberToNameMap = {
  0: 'Luni',
  1: 'Marti',
  2: 'Miercuri',
  3: 'Joi',
  4: 'Vineri',
  5: 'Sambata',
  6: 'Duminica',
};

function dayNumberToName5(day) {
  if (day < 0 || day > 6) return 'NO.';
  return dayNumberToNameMap[day];
}

console.log(weekdays);

for (let i = 0; i < 7; i = i + 1) {
  let x = dayNumberToName5(i);
  console.log(x);
}

for (let i = 0; i < 7; i++) {
  let y = weekdays[i];
  console.log(y);
}
for (let i = 0; i < 7; i += 1) {
  console.log(dayNumberToNameMap[i]);
}
console.log('ceva');
for (let i of weekdays) {
  console.log(i);
}

for (let i of Object.values(dayNumberToNameMap)) {
  console.log(i);
}
