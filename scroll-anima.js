export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.CheckDistance = this.CheckDistance.bind(this);
  }
  //pega a distancia de cada item em relação ao topo do site
  GetDistance() {
    this.distance = [...this.sections].map(section => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }
  //verifica a distancia de cada objeto em relacao em cada obejto do site
  CheckDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.GetDistance();
      this.CheckDistance();
      window.addEventListener('scroll', this.CheckDistance);
    }
    return this;
  }
  //remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.CheckDistance);
  }
}

  