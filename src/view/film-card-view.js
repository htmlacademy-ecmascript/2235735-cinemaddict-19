import AbstractView from '../framework/view/abstract-view.js';
import { humanizeFilmReleaseDateToYear, getTimeFromMins } from '../utils/film';

const createFilmCardTemplate = (film)=>{
  const {comments, filmInfo} = film;
  return (
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${filmInfo.title}</h3>
        <p class="film-card__rating">${filmInfo.total_rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${humanizeFilmReleaseDateToYear(filmInfo.release.date)}</span>
          <span class="film-card__duration">${getTimeFromMins(filmInfo.duration)}</span>
          <span class="film-card__genre">${filmInfo.genre}</span>
        </p>
        <img src="${filmInfo.poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${filmInfo.description}</p>
        <span class="film-card__comments">${comments.length} comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>
      `
  );
};

export default class FilmCardView extends AbstractView {
  #film = null;
  #handleFilmClick = null;

  constructor ({film, onFilmClick}){
    super();
    this.#film = film;
    this.#handleFilmClick = onFilmClick;

    this.element.querySelector('.film-card__link')
      .addEventListener('click', this.#filmClickHandler);
  }

  get template() {
    return createFilmCardTemplate(this.#film);
  }

  #filmClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilmClick();
  };
}
