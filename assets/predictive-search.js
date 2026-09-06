class PredictiveSearch extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[type="search"]');
    this.resultsMount = this.querySelector('[data-predictive-search-mount]');
    this.endpoint = this.getAttribute('data-predictive-search-url');
    this.abortController = null;

    this.input.addEventListener(
      'input',
      this.debounce((event) => {
        this.onChange(event);
      }, 300).bind(this)
    );
    this.input.addEventListener('focus', () => {
      if (this.input.value.trim().length > 0 && this.resultsMount.innerHTML) {
        this.open();
      }
    });
    document.addEventListener('click', (event) => {
      if (!this.contains(event.target)) this.close();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.close();
    });
  }

  onChange() {
    const searchTerm = this.input.value.trim();
    if (!searchTerm.length) {
      this.close();
      return;
    }
    this.getSearchResults(searchTerm);
  }

  getSearchResults(searchTerm) {
    if (this.abortController) this.abortController.abort();
    this.abortController = new AbortController();

    const url = `${this.endpoint}?q=${encodeURIComponent(searchTerm)}&section_id=predictive-search`;

    fetch(url, { signal: this.abortController.signal })
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.text();
      })
      .then((text) => {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const section = doc.querySelector('#shopify-section-predictive-search');
        this.resultsMount.innerHTML = section ? section.innerHTML : '';
        this.open();
      })
      .catch((error) => {
        if (error.name !== 'AbortError') this.close();
      });
  }

  open() {
    this.resultsMount.hidden = false;
    this.input.setAttribute('aria-expanded', 'true');
  }

  close() {
    this.resultsMount.hidden = true;
    this.input.setAttribute('aria-expanded', 'false');
  }

  debounce(fn, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), wait);
    };
  }
}

customElements.define('predictive-search', PredictiveSearch);
