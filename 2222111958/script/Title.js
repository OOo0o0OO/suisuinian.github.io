export default class Title {
    constructor(el) {
        this.el = el;
        this.text = ((new Date()).getFullYear() + 1).toString();
        this.render();
    }
    setText(value) {
        this.text = value;
        this.render();
    }
    render() {
        this.el.innerText = this.text;
    }
}
