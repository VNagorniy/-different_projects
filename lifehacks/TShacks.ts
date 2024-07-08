// Советы
// 1. Если путей много, то в tsconfig.json прописать в Linting "baseUrl": "./src" и "paths": ["components/*"]

// ---------------------------------------------------------------------------
// пример проверки кода
// type User = {
//   isAuthed: boolean;
//   roles: string[];
// };

// function checkAdmin(user: User): boolean {
//   if (!user.isAuthed) {
//     console.log('He авторизован');
//     return false;
//   }
//   if (!user.roles.includes('admin')) {
//     console.log('He админ');
//     return false;
//   }
//   return true;
// }

// checkAdmin({
//   isAuthed: true,
//   roles: ['user'],
// });
// ---------------------------------------------------------------------------

// export type библиотеки ReturnType и Awaited (конвертирует Promise в обычный тип)

// import { type } from 'os';
// import {Telegraf} from 'telegraf';

// const bot = new Telegraf(
// "token'
// );

// type Message = Awaited<ReturnType<typeof bot.telegram.sendMessage>>
// async function getMessage () {
//     const res = await bot.telegram.sendMessage(1,'Сообщение')
// }
// ---------------------------------------------------------------------------

// ОПЕРАТОР satisfies (указывает что переменная должна удовлетворять проверке типа)

// type MyError = {
//   code: string | number;
//   message: string;
// };

// const error = {
//   code: 404,
//   message: 'Ошибка',
// } satisfies MyError;

// if (error.code < 400) {
// }
// ---------------------------------------------------------------------------

// GENERICS (пример типизация переворачивания массива)

// const num = [1, 2, 3];

// const str = ['a', 'b', 'c'];
// function revert<T>(a: T[]) {
//   return [...a].reverse();
// }

// revert(num);
// revert(str);

// ---------------------------------------------------------------------------

// TYPE (сужение типов)

// type DB_ID = number | undefined;
// function generate(id: DB_ID) {
//   if (!id) {
//     return 1;
//   }
//   return id + 1;
// }

// }
// ---------------------------------

// ---------------------------------------------------------------------------

// КОРТЕЖИ (типизация)

// type GetUsersResponse = [users: User[], usersCount: number];

// async function getUsersAndCount(): Promise<GetUsersResponse> {
//   const data = await db.getUsers();
//   const count = await db.getCount();
//   return [data, count];
// }
// async function run() {
//   const [users, count] = await getUsersAndCount();
// }

// ---------------------------------------------------------------------------

// function wait(ms) {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// let pause = promisify(setTimeout);
// async function run() {
//   console.log('Start');
//   await wait(2000);
//   console.log('End');
// }
// run();

// ---------------------------------------------------------------------------

// CONDITION types и infer(позволяет вывести тип из массива и передать его в аргумент condition) - позволяет получить тип массива

// const arr = [1, 2, 3];

// type ArrayElementType<T> = T extends (infer E)[] ? E : never;

// type e = ArrayElementType<typeof arr>;

// ---------------------------------------------------------------------------

// as CONST
// заморозка свойства объекта

// const MY_VAL = {
//   new: 1,
//   start: 2,
//   end: 3,
// } as const;

// ---------------------------------
// альтернатива Literal Types через as const

// type Res = { mark: ReviewMark };
// const reviewMarkMap = {
//   bad: 1,
//   normal: 2,
//   good: 3,
// } as const;

// type ReviewMark = (typeof reviewMarkMap)[keyof typeof reviewMarkMap];
