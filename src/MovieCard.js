import React, { Component } from "react";
import Rating from "./Rating";
import Rate from "./FilterByRating";
import Loading from "./Loading";

const movie = [
  {
    title: "Shawshank Redemption",
    date: "1994",
    url: "https://www.imdb.com/title/tt0111161/",
    img:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "5",
    id: "1"
  },
  {
    title: "The Dark Knight Rises",
    date: "2012",
    url: "https://www.imdb.com/title/tt1345836/?ref_=nv_sr_1",
    img:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "5",
    id: "2"
  },
  {
    title: "The Dark Knight",
    date: "2008",
    url: "https://www.imdb.com/title/tt0468569/?ref_=nv_sr_1",
    img:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "5",
    id: "3"
  },
  {
    title: "Shooter",
    date: "2007",
    url: "https://www.imdb.com/title/tt0822854/?ref_=fn_al_tt_2",
    img:
      "https://m.media-amazon.com/images/M/MV5BMGRjMzY0OGItNDc4YS00OGNlLWI3MGYtZjRkNjdiNWUyNDY4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "3",
    id: "4"
  },
  {
    title: "The Revenant",
    date: "2016",
    url: "https://www.imdb.com/title/tt1663202/?ref_=nv_sr_1",
    img:
      "https://m.media-amazon.com/images/M/MV5BY2FmODc2N2QtYmY3MS00YTMwLWI2NGYtZWRmYWVkNjFjZmI0XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "4",
    id: "5"
  },
  {
    title: "Darkest Hour",
    date: "2017",
    url: "https://www.imdb.com/title/tt4555426/?ref_=nv_sr_6",
    img:
      "https://superclub.videotron.com/media/catalog/product/cache/image/500x711/e9c3970ab036de70892d86c6d221abfe/d/a/darkest_hour_dvd_2d_non-confirm_.png",
    rating: "4",
    id: "6"
  },
  {
    title: "Inception",
    date: "2010",
    url: "https://www.imdb.com/title/tt1375666/",
    img:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "4",
    id: "7"
  },
  {
    title: "The Wolf Of Wall street",
    date: "2013",
    url: "https://www.imdb.com/title/tt0993846/?ref_=nv_sr_1",
    img:
      "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    rating: "5",
    id: "8"
  }
];

const MovieCard = props => {
  const movies = props.movie;

  return (
    <div className="movie-card">
      <a href={movies.url}>
        <img src={movies.img} alt="" />
      </a>
      <div className="detail">
        <span id="movie-title" key={movie.id}>
          {movies.title}
        </span>
        <span id="release-date" key={movie.id}>
          {movies.date}
        </span>
      </div>
      <Rating rate={movies.rating} />
    </div>
  );
};

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchMovie: "",
      newMovie: movie,
      rating: 0
    };
  }

  AddMovie = m => {
    m.preventDefault();

    this.setState({
      newMovie: [
        ...this.state.newMovie,
        {
          title: m.target.title.value,
          date: m.target.date.value,
          url: m.target.url.value,
          img: m.target.img.value,
          rating: m.target.rating.value
        }
      ]
    });
  };

  Search = elm => {
    this.setState({
      searchMovie: elm.target.value
    });
  };
  render() {
    return (
      <div className="MovieContainer">
        <form>
          <input
            placeholder="Search for a movie ..."
            value={this.state.searchMovie}
            onChange={this.Search}
            className="SearchBar"
          />
          <div className="min-rate">
            <h2>Minimum Rating </h2>
            <h3>
              <Rate
                getRating={rate => {
                  this.setState({
                    rating: rate
                  });
                }}
              />
            </h3>
          </div>
        </form>
        <div className="MovieCard">
          {this.state.newMovie
            .filter(
              el =>
                el.title
                  .toLowerCase()
                  .indexOf(this.state.searchMovie.toLowerCase()) !== -1 &&
                this.state.rating - 1 < el.rating
            )
            .map((card, index) => (
              <MovieCard movie={card} key={index} />
            ))}

          <div className="movie-card">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-toggle="modal"
              data-target="#myModal"
              id="addbtn"
            >
              <i className="fa fa-plus" />
            </button>

            <div
              className="modal fade"
              id="myModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 className="modal-title" id="myModalLabel">
                      Add new movie
                    </h4>
                  </div>
                  <div className="modal-body">
                    <form className="f" onSubmit={this.AddMovie}>
                      <div className="add-form">
                        <div className="form-group">
                          <label>Title :</label>
                          <input
                            type="text"
                            id="title"
                            size="30"
                            placeholder="Enter the movie title"
                          />
                        </div>
                        <div className="form-group">
                          <label>Date :</label>
                          <input
                            type="text"
                            id="date"
                            size="30"
                            placeholder="Enter the release date"
                          />
                        </div>
                        <div className="form-group">
                          <label>IMDB url :</label>
                          <input
                            type="text"
                            id="url"
                            size="30"
                            placeholder="Enter the IMDB link"
                          />
                        </div>
                        <div className="form-group">
                          <label>Poster :</label>
                          <input
                            type="text"
                            size="30"
                            id="img"
                            placeholder="Enter the poster link"
                          />
                        </div>
                        <div className="form-group">
                          <label>Rating</label>
                          <input
                            type="text"
                            id="rating"
                            size="30"
                            placeholder="Enter the movie rating"
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-default"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" className="btn btn-primary">
                            Add
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading(Movie);
