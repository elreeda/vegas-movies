import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  addToFavorite,
  addToWatchList,
  removeFromFavorite,
  removeFromWatchList
} from 'actions'

import {
  StyleBase,
  Poster,
  Details,
  FavoriteBtn,
  AddToWL,
  Footer,
  Stars
} from './style'

const MovieCard = ({
  addToFavorite,
  addToWatchList,
  removeFromFavorite,
  removeFromWatchList,
  movie,
  isFavorite,
  isInWatchList
}) => {
  const onAddToFavorite = e => {
    e.preventDefault()
    return isFavorite ? removeFromFavorite(movie) : addToFavorite(movie)
  }

  const onAddToWatchList = e => {
    e.preventDefault()
    return isInWatchList ? removeFromWatchList(movie) : addToWatchList(movie)
  }

  return (
    <StyleBase>
      <Link to={`/movie/${movie.id}`}>
        <Poster img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}>
          <div>
            <AddToWL isInWatchList={isInWatchList} onClick={onAddToWatchList}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 299.998 299.998"
              >
                <path d="M149.997 0C67.157 0 .001 67.158.001 149.995s67.156 150.003 149.995 150.003 150-67.163 150-150.003S232.836 0 149.997 0zm10.358 168.337c-.008.394-.067.788-.122 1.183-.039.296-.057.599-.124.89-.067.303-.182.602-.28.905-.117.366-.226.731-.379 1.076-.029.06-.039.124-.065.184-.226.482-.488.934-.775 1.362-.018.026-.042.052-.06.078-.327.48-.7.916-1.092 1.325-.109.112-.22.213-.335.319-.345.329-.708.63-1.094.905-.119.086-.233.176-.358.259-.495.324-1.014.609-1.554.843-.117.052-.239.083-.358.13a10.425 10.425 0 0 1-1.909.542c-.612.112-1.232.189-1.86.189-.127 0-.257-.039-.384-.044-.602-.023-1.198-.07-1.771-.192-.179-.039-.355-.117-.534-.166a10.53 10.53 0 0 1-1.554-.529c-.057-.029-.117-.034-.174-.06l-57.515-27.129c-5.182-2.443-7.402-8.626-4.959-13.808 2.443-5.179 8.626-7.402 13.808-4.959l42.716 20.144V62.249c0-5.729 4.645-10.374 10.374-10.374s10.374 4.645 10.374 10.374V168.15h.002c0 .062-.018.124-.018.187z" />
              </svg>
            </AddToWL>
            <FavoriteBtn isFavorite={isFavorite} onClick={onAddToFavorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 51.997 51.997"
              >
                <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477z" />
              </svg>
            </FavoriteBtn>
          </div>
          <Footer>
            <Stars value={movie.vote_average * 10} />
            <span>{movie.vote_average}</span>
          </Footer>
        </Poster>
      </Link>
      <Details>
        <h3>{movie.original_title}</h3>
        <span>{movie.release_date}</span>
      </Details>
    </StyleBase>
  )
}

const mapStateToProps = ({ favorites, watchList }, props) => {
  return {
    isFavorite: !!favorites.find(x => x.id === props.movie.id),
    isInWatchList: !!watchList.find(x => x.id === props.movie.id)
  }
}

const mapDispatchToProps = {
  addToFavorite,
  addToWatchList,
  removeFromFavorite,
  removeFromWatchList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard)
