class BurgerMenu {
    constructor() {
        this.menu = document.getElementsByClassName('menu-list')[0];
        this.openButton = document.getElementsByClassName('burger-icon')[0];
        this.closeButton = document.getElementsByClassName('menu-exit')[0];
        this.events();
    }

    events() {
        this.openButton.addEventListener("click", this.openMenu.bind(this));
        this.closeButton.addEventListener("click", this.closeMenu.bind(this));
    }

    openMenu() {
        this.menu.style.display = 'block';
        this.closeButton.style.display = 'block';
        this.openButton.style.display = 'none';
    }

    closeMenu() {
        this.menu.style.display = 'none';
        this.closeButton.style.display = 'none';
        this.openButton.style.display = 'block';
    }
}

activate = () => {
    let burgerMenu = new BurgerMenu();
}
