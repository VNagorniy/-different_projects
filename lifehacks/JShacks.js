// МЕТОД Promise.allSettled

// async function get() {
//   const users = await getUser();
//   const cars = await getCars();
// }
// эквивалентен;
// async function get() {
//   const [usersResult, carsResult] = await Promise.allSettled([
//     getUser(),
//     getCars()
//   ]);
//   // userResult будет содержать свойства
//   usersResult.status

// }
// ---------------------------------------------------------------------------

// МЕТОД toSorted ES2023 (не мутирует массив как метод sort)
// const a = [5, 6, 3, 1];
// const res = a.toSorted();
// const resSort = a.sort();
// console.log(a);
// console.log(res);
// console.log(resSort);
// ---------------------------------------------------------------------------

// МАССИВ. Трюки с массивом (превратить в объект/ оставить уникальные значения(не работает если внутри есть объект/ создать массив определенной длины)
// const user = ['Vova', 'Ira', 'Vova', 'Igor'];

// const res = { ...user };
// const res = [...new Set(user)];
// console.log(res);
// const user = new Array(5).fill('значение')
// console.log(user);
// ---------------------------------------------------------------------------

// Упрощение кода (оператор нулевого слияния (??)/ деструктуризация параметров объекта (name, surname)
// let res = getUser();
// if (!res) {
//     res = 'Петя';
// }
// эквивалетно
// let res = getUser() ?? 'Петя'
// console. log (res);

// function getFullName({ name, surname }) {
//   return name + '' + surname;
// }
// const user1 = {
//   name: 'Вася',
//   surname: 'Васильев',
// };
// console.log(getFullName(user1));

// ---------------------------------------------------------------------------

// REST и SPREAD

// const a = [1, 2, 3];
// const user = {
//   name: 'Вася',
//   age: 35,
//   city: 'London',
// };
// rest оператора
// const [b, ...c] = a;
// const { name, ...o } = user;
// spread оператор
// const newA = [...a];
// const newUser = { ...a };

// ---------------------------------------------------------------------------

// FETCH

// Правильность написания (оборачивать в try/catch; добавлять условия проверки)

async function getData() {
  try {
    const res = await fetch('http://api-url');
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data;
  } catch (e) {
    return null;
  }
}

//---------------------------

// await имеет смысл при оборачивании ошибки

// async function getUser(id) {
//   try {
//     if (!id) {
//       return null;
//     }
//     return db.get(id);
//   } catch (e) {}
// }
// async function init() {
//   const user = await getUser(1);
// }
// init();

// ---------------------------------------------------------------------------

// CONSOLE
// (group, groupCollapsed, table, groupEnd)

const users = [
  {
    name: 'Вася',
    age: 24,
  },
  {
    name: 'Петя',
    age: 34,
  },
];

console.group('Пользователи');
console.table(users);
console.groupEnd();

// console.count('название функции') / console.countReset('название функции') / console.time(), console.timeLog()

// ---------------------------------------------------------------------------

// MAP
// пример оптимизации

function getDayNum(day) {
  const dayMap = new Map([['понедельник', 1], ['вторник', 2], I[('среда', 3)]]);
  return dayMap.get(day);
}

//---------------------------

// сравнение map и objects

// Ключ - строка, символ
const sym = Symbol('d');
const obj = {
  key: 1,
  sym: 4,
};
// Итерация по ключам
for (const el in obj) {
}
// Ключ - объект, массив...
const arr = [1, 2];
const map = new Map();
map.set(arr, 2);
// Удобная итерация
for (const [key, value] of map) {
}
