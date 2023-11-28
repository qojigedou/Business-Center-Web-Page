class appearOnScroll {
  #observer = null;
  #elements = null;
  #startingClass = "";
  #edgeThresholdClass = false;

  constructor(elementsName, startingClass, edgeThresholdClass=null) {
    this.#elements = document.querySelectorAll(`.${elementsName}`);
    this.#startingClass = startingClass;
    this.#edgeThresholdClass = edgeThresholdClass;
    this.#makeElementsHidden();
    this.#createObserver();
    this.#addObserverToElements();
  }

  #createObserver() {
    this.#observer = new IntersectionObserver((e) => this.#observerCallback(e),
      { threshold: 0.4 },
    );
  }

  #observerCallback(entries) {
    for(let i = 0; i < entries.length; i++){
      const entry = entries[i]
      if (entry.isIntersecting) {
        if(i == 0){
          setTimeout(()=>entry.target.classList.add("show", entry.isIntersecting), 1000)
        }
        else{
          entry.target.classList.toggle("show", entry.isIntersecting);
          
          console.log(entry.target)
        }
        
      }
    }
    
  }

  #addObserverToElements() {
    for (const element of this.#elements) {
        this.#observer.observe(element);
    }
  }

  #makeElementsHidden() {
    this.#elements.forEach((element) => {
      element.classList.add(this.#startingClass);
    });
  }
}

export default appearOnScroll;
