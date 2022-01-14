function createContact() {
    let main = document.createElement('main');
    main.id = 'contact';

    let address = document.createElement('p');
    address.classList.add('address');
    address.textContent = '15, Race course street, Coimbatore - 45';
    
    let phone = document.createElement('p');
    phone.classList.add('phone');
    phone.textContent = 'Phone: 1234567890';

    let feedback = document.createElement('p');
    feedback.classList.add('feedback');
    feedback.innerHTML = "Feedback: <a href='#'>here</a>";

    main.appendChild(address);
    main.appendChild(phone);
    main.appendChild(feedback);

    document.body.appendChild(main);
}

export default createContact;