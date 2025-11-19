export default class Box {
    constructor(el, maskEl) {
        this.el = el;
        this.maskEl = maskEl;
        this.mainEl = el.querySelector('#main');
        this.scale = 100;
        this.translateY = 0;
    }
    setScale(value) {
        this.scale = value / 100;
        this.setTransform();
    }
    setTranslateY(value) {
        this.translateY = -value;
        this.setTransform();
    }
    setTransform() {
        const transform = `scale(${this.scale}) translateY(${this.translateY}%)`;
        this.mainEl.style.transform = transform;
    }
    setMaskTransparency(value) {
        const text = `.bg::after {background:rgba(0,0,0,${value / 100})}`;
        this.maskEl.innerText = text;
    }
}
