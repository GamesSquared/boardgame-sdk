class GameComponent extends HTMLElement {
    constructor() {
        super();

        const templateElement = document.createElement('template');
        templateElement.innerHTML = `
        <slot></slot>
        `;

        const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(templateElement.content.cloneNode(true));
    }
}
window.customElements.define('boardgame-component', GameComponent);