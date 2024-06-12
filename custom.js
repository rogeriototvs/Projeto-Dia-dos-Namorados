function mostraMensagem() {
    const secretMessage = document.getElementById('secretMessage');
    if (secretMessage.classList.contains('hidden')) {
        secretMessage.classList.remove('hidden');
        secretMessage.style.display = 'block';
    } else {
        secretMessage.classList.add('hidden');
        secretMessage.style.display = 'none';
    }
    chuvaDeCoracoes();
    chuvaDeFotos();
}

function chuvaDeCoracoes() {
    const heartContainer = document.getElementById('heartContainer');
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 999999);
    }
}

function chuvaDeFotos() {
    const photoContainer = document.getElementById('photoContainer');
    const photoUrls = [
        'images/foto1.jpg',
        'images/foto2.jpg',
        'images/foto3.jpg',
        'images/foto4.jpg',
        'images/foto5.jpg',
        'images/foto6.jpg',
        'images/foto7.jpg',
        'images/foto8.jpg'
        
    ];

    photoUrls.forEach((url, index) => {
        setTimeout(() => {
            const photo = document.createElement('img');
            photo.src = url;
            photo.classList.add('photo');
            photo.style.top = `${Math.random() * 100}vh`;
            photo.style.left = `${Math.random() * 100}vw`;
            photoContainer.appendChild(photo);
            setTimeout(() => {
                photo.remove();
            }, 5000); 
        }, index * 2000); 
    });
}
