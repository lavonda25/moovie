import React, { useState } from "react";

import MovieList from "./composant/liste";
import Filter from "./composant/filter";
import AddMovie from "./composant/add";


 const  defaultMovies = [
     {
    id: 1,
    title: "Prison Break",
    description: "Drame",
    posterURL: "https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg",
    rating: 5,
  },
  {
    id: 2,
    title: "The Shadow's Edge",
    description: "Aventure",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/7/79/TheShadowsEdgePoster.jpg",
    rating: 4,
  },
  {
    id: 3,
    title: "Interstellar",
    description: "Science Fiction",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgawhVRFFi74OjZMszG5LkqwlJirzBtbx8fguYHdbhyeEnLMngKyvzqKdtKKo7syMHp6hh8AN-Gr9MREqMx5SRU7ZRGSQS2zeNGE69g&s=10",
    rating: 8,
  },
  {
    id: 4,
    title: "Joker",
    description: "Drama",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEaxJ_37lIqV5SY8_07pkcsGssThoQg9vfXOUdJjXfhlK5tLbDfxKmu38r9ULSI_MBf9N2o5Z4b0_sh5gCoZLnnIO3-li9pm9tOyVHQA&s=10",
    rating: 8,
  },
  {
    id: 5,
    title: "Avatar",
    description: "Fantasy",
    posterURL: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
    rating: 7,
  },
  {
    id: 6,
    title: "Titanic",
    description: "Romance",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QQoEcT0gZtVP4EwmGhj-k1FYZ7u_-QHCv6Fi8JtoRXhv4nuafaAduJjVRoSXj1LJFI6yfq_W0NCV_8qHb_ULk5gOAvB3uBluXvsmets&s=10",
    rating: 7,
  },
  {
    id: 7,
    title: "The Batman",
    description: "Action",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzE-o7fMtV-3iR_enX6zMtpQocrtGBf_fBX63SNeQzfLKKjQxf8JOn8mgbKjlSuktF-X_84RrUcfYSwsxBY_fsK7fScEjJtqbQjdtMtw&s=10",
    rating: 8,
  },
  {
    id: 8,
    title: "Spider-Man",
    description: "Action",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHJGM3hAP6S-rB26DV8v9Vr58RkbnAwBGDsUZucviY26UEJsEF2zjZWIl189eNxzFYRDf7Jsd7D16qGlVikJ8RX6e4-owKIiW_JcDCfA&s=10",
    rating: 8,
  },
  {
    id: 9,
    title: "Frozen",
    description: "Animation",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEwxva-qPL3eYsj9oHOk71Nz5J4Nk0S-qqatgeVwWxdvHwNrANf9SFSdsNFgou8YOni0R2MFQ-PJfiXTtqJgrJE3q1u1WHdw7rgmmGQ&s=10",
    rating: 7,
  },
  {
    id: 10,
    title: "Fast & Furious",
    description: "Action",
    posterURL: "https://fr.web.img3.acsta.net/c_310_420/pictures/23/05/10/10/55/5129031.jpg",
    rating: 6,
  },
  ];

function App() {
  const [movies, setMovies] = useState(defaultMovies);
  const [favorites, setFavorites] = useState([]);

  // ❤️ toggle favorite
  const toggleFavorite = (movie) => {
    const exists = favorites.find((m) => m.id === movie.id);

    if (exists) {
      setFavorites(favorites.filter((m) => m.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };


  const [rate, setRate] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

const [title, setTitle] = useState("");

const filteredMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(title.toLowerCase())
);
const titleStyle = {
   fontFamily: "Monoton, sans-serif",
  fontWeight: "400",
  fontStyle: "normal",
  fontSize: "4rem",
  background: "linear-gradient(45deg, #E50914, #E52B12)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

    const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    background: "#111",
  };
  const deleteMovie = (id) => {
  setMovies(movies.filter((movie) => movie.id !== id));
};

  return (
    
  
    <div>
     
      <div style={containerStyle}>
        <h1 style={titleStyle}>Movie</h1>
        <Filter setTitle={setTitle}  />
        
      </div>
    



     <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}


export default App;
