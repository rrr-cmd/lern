// const numberOfFilmsTwo = prompt("Один из просмотренных фильмов?", ""),
//   numberOfFilmsThee = prompt("На сколько оценивате его?", ""),
//   numberOfFilmsTwo_1 = prompt("Один из просмотренных фильмов?", ""),
//   numberOfFilmsThee_1 = prompt("На сколько оценивате его?", "");

// personalMovieDB.movies[numberOfFilmsTwo] = numberOfFilmsThee;

// personalMovieDB.movies[numberOfFilmsTwo_1] = numberOfFilmsThee_1;

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilm() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из просмотренных фильмов?", ""),
      b = prompt("На сколько оценивате его?", "");
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilm();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("вы посмотрели мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
// } else {
//   console.log("no");
// }
