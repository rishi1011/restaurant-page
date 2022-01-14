function createMenu() {
    const main = document.createElement('main');
    main.id = 'menu';

    let menuContent = document.createElement('div');
    menuContent.classList.add('menu', 'content');

    const images = [
        'images/beef-burger.jpg',
        'images/chicken-burger.jpg',
        'images/desert.jpg',
        'images/fries.jpg',
        'images/lasagne.jpg',
        'images/spaghetti.jpg',
        'images/veggie-burger.jpg'
    ];

    const dishes = [
        'Beef burger',
        'Chicken Burger',
        'Desert',
        'Fries',
        'Lasagne',
        'Spaghetti',
        'Vegan Burger'
    ];

    for (let i = 0; i < 6; i++){
        let div = document.createElement('div');
        div.classList.add('item');

        let img = document.createElement('img');
        let p = document.createElement('p');

        img.src = images[i];
        p.textContent = dishes[i];

        div.appendChild(img);
        div.appendChild(p);
        menuContent.appendChild(div);
    }

    main.appendChild(menuContent);

    document.body.appendChild(main);
}

export default createMenu;