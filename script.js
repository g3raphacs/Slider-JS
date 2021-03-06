const carousel = document.querySelector('.carousel');
const pictures = carousel.querySelectorAll('ul>li');
let chrono = null;

if (pictures.length > 1){
    loadCarousel();
}

function loadCarousel(){
    pictures[0].classList.add('active');
    const areaButton = document.createElement('div');
    areaButton.classList.add('area_button');

    for(let i = 0 ; i < pictures.length ; i++){
        const cursor = document.createElement('a');
        cursor.classList.add('cursor');
        if(i===0){
            cursor.classList.add('active');
        }
        cursor.setAttribute('href','#');
        cursor.addEventListener('click',function(e){
            e.preventDefault();
            clearTimeout(chrono);
            const cursors = carousel.querySelectorAll('div > a');
            const index = [].indexOf.call(cursors,this);
            play(index);
        });
        areaButton.appendChild(cursor);
    }
    carousel.appendChild(areaButton);
    chrono = setTimeout( 'play();' , 3000);
}


function play(index = -1){
    const currentPicture = carousel.querySelector('ul > li.active');
    const currentIndex = [].indexOf.call(pictures,currentPicture);

    if(index===-1){
        index = ( currentIndex === (pictures.length-1))? 0 : currentIndex +1 ;
    }

    if(index !== currentIndex){
        currentPicture.classList.remove('active');
        pictures[index].classList.add('active')
        const cursors = carousel.querySelectorAll('div > a');
        cursors[currentIndex].classList.remove('active');
        cursors[index].classList.add('active');
        chrono = setTimeout( 'play();' , 3000);
    }
}