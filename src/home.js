function createHome() {
    let main = document.createElement('main');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let p = document.createElement('p');

    main.id = 'home';

    div.classList.add('home', 'content');
    img.src = 'images/mae-mu-I7A_pHLcQK8-unsplash.jpg';
    p.classList.add('description');

    p.innerHTML = 'Satisfy your hunger...<br>To live a full life, you have to fill your stomach first.';

    console.log(main, div, img, p);

    div.appendChild(img);
    main.appendChild(div);
    main.appendChild(p);

    document.body.appendChild(main);
}

export default createHome;