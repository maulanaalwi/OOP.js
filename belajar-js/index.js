const animeList = [

  {
    title: "Demon Slayer",
    rating: 8.4,
    year: 2019,
    genre: "Action, Fantasy"
  },

  {
    title: "Naruto",
    rating: 7.9,
    year: 2002,
    genre: "Action, Adventure"
  },

  {
    title: "One Piece",
    rating: 8.8,
    year: 1999,
    genre: "Action, Adventure"
  },

  {
    title: "My Hero Academia",
    rating: 7.6,
    year: 2016,
    genre: "Action, Superhero"
  },

  {
    title: "Fullmetal Alchemist: Brotherhood",
    rating: 9.5,
    year: 2009,
    genre: "Action, Adventure, Fantasy"
  },

  {
    title: "Death Note",
    rating: 8.9,
    year: 2006,
    genre: "Thriller, Supernatural"
  },

  {
    title: "Jujutsu Kaisen",
    rating: 8.2,
    year: 2020,
    genre: "Action, Supernatural"
  },

  {
    title: "Attack on Titan",
    rating: 9.3,
    year: 2013,
    genre: "Action, Drama"
  },

  {
    title: "Sword Art Online",
    rating: 6.9,
    year: 2012,
    genre: "Fantasy, Adventure"
  },

  {
    title: "Tokyo Revengers",
    rating: 7.3,
    year: 2021,
    genre: "Action, Drama"
  },

  {
    title: "Ex-Arm",
    rating: 3.2,
    year: 2021,
    genre: "Sci-Fi, Action"
  },

  {
    title: "Pupa",
    rating: 4.7,
    year: 2014,
    genre: "Horror"
  },

  {
    title: "Mars of Destruction",
    rating: 2.9,
    year: 2005,
    genre: "Sci-Fi"
  },

  {
    title: "Vampire Holmes",
    rating: 3.5,
    year: 2015,
    genre: "Mystery, Comedy"
  },
  
  {
    title: "Skelter Heaven",
    rating: 2.1,
    year: 2004,
    genre: "Mecha, Sci-Fi"
  },

  {
    title: "Eiken",
    rating: 4.3,
    year: 2003,
    genre: "Ecchi, Comedy"
  },

  {
    title: "Abunai Sisters: Koko & Mika",
    rating: 3.8,
    year: 2009,
    genre: "Comedy"
  },
  
  {
    title: "Chargeman Ken!",
    rating: 5.0,
    year: 1974,
    genre: "Sci-Fi, Action"
  },

  {
    title: "Bikini Warriors",
    rating: 6.2,
    year: 2015,
    genre: "Ecchi, Comedy, Fantasy"
  },

  {
    title: "Big Order",
    rating: 5.5,
    year: 2016,
    genre: "Action, Supernatural"
  }

];

function listAnime() {
  animeList.forEach(movie => {
    console.log(movie);
    
  })
};

function godAnime(searchTitle) {
  const animeBagus = animeList.filter(movie => movie.rating > 8.0);
  animeBagus.sort((a, b) => b.rating - a.rating);
  const searchAnime = animeBagus.find(movie => movie.title === searchTitle);

  if (searchAnime) {
    console.log(`Pencarian Ditemukan`);
    console.log(`Nama Anime: ${searchAnime.title} - ${searchAnime.rating}/10 - Years: ${searchAnime.year}`);
  } else{
    console.log(`Pencarian Anime ${searchTitle} Tidak Ditemukan`);
    
  }

  return animeBagus;
};

function minAnime(searchWibu) {
  const animeBapuk = animeList.filter(movie => movie.rating < 8.0);
  animeBapuk.sort((a, b) => b.rating - a.rating);
  const searchMovie = animeBapuk.find(movie => movie.title === searchWibu);

  if (searchMovie) {
    console.log(`Pencarian Ditemukan`);
    console.log(`Nama Anime: ${searchMovie.title} - ${searchMovie.rating}/10 - Years: ${searchMovie.year}`);
  } else {
    console.log(`Pencarian Anime ${searchWibu} Tidak Ditemukan`);
  }

  return animeBapuk;

};

function genre(genreType) {
  const genreTitle = animeList.filter(genre => genre.genre.includes(genreType));
  const judulAnime = animeList.find(movie => movie.title === genreType)

  return genreTitle;
};


const user = {
  name: 'John Doe',
  email: 'johndoe@.com',
};

const userBaru = {...user, id: 123, password: 'Password'};

const peserta = ['Maulana', 'Pastor', 'Alex', 'John Doe', 'Cici', 'Fadil', 'Felix', 'Maddiosn'];
const pemenang = (gold, silver, bronze, ...sisa) => {
  console.log(`Medali Emas Diraih Oleh ${gold}`);
  console.log(`Medali Silver Diraih Oleh ${silver}`);
  console.log(`Medali Bronze Diraih Oleh ${bronze}`);
  console.log(`Peserta Lainnya: ${sisa}`);
  
  
}


const weabo = animeList.map(({ title, rating, year, genre }) => {
    return (`${title} Rate: ${rating}/10 (${year}) - Genre: ${genre}`);
  
});




// function converColor(r, g, b) {
//   const color = {};

//   color.r = r;
//   color.g = g;
//   color.b = b;

//   color.rgb = function() {
//       return `rgb(${this.r}, ${this.g}, ${this.b})`;
//   }

//   color.hex = function() {
//       const { r, g, b } = this;
//       return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }

//   return color;
// };