import { createElement } from '../render.js';

function createFilterTemplate() {
  return (
    `<p>130 291 movies inside</p>
    `
  );
}

export default class FilmCountView {
  getTemplate() {
    return createFilterTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
