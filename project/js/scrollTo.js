class ScrollTo {
    #scrollButton = null;
    #position = 0;
    constructor(className, scrollDestination) {
        this.#scrollButton = document.querySelector(`.${className}`);
        const destinationElement = document.querySelector(`.${scrollDestination}`);
        this.#position = destinationElement.getBoundingClientRect().top;
        this.#scrollButton.addEventListener("click", this.#scroll.bind(this))
    }

    #scroll() {
        window.scrollTo({top: this.#position, behavior: 'smooth'});
    }
}

export default ScrollTo;