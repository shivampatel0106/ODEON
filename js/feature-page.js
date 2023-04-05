window.addEventListener('load', showSeating);

var pageVal = localStorage.getItem("movieData");

document.querySelector('.featured-page').classList.add(pageVal);

let dataObject;

switch (pageVal) {

    case 'wallE':
        dataObject = {
            image: "assets/wallE.jpg",
            movieTitle: "Wall-E",
            rating: "PG13",
            hd: "HD",
            genre: "Comedy, Sci-Fi",
            starRating: "NA",
            release: "2023",
            duration: "128min",
            movieDesc: "In the distant future, a small waste-collecting robot inadvertently embarks on a spacejourney that will ultimately decide the fate of mankind."
        };
        break;

    case 'theAdamProject':
        dataObject = {
            image: "assets/adamproject.png",
            movieTitle: "The Adam Project",
            rating: "PG13",
            hd: "4K",
            genre: "Comedy, Sci-Fi",
            starRating: "8.5",
            release: "2023",
            duration: "137min",
            movieDesc: "Time-travelling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future after unintentionally crash landing in 2022."
        };
        break;

    case 'batman':
        dataObject = {
            image: "assets/batman.png",
            movieTitle: "The Batman",
            rating: "R",
            hd: "HD",
            genre: "Dark, Fantasy",
            starRating: "10",
            release: "2023",
            duration: "160min",
            movieDesc: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis."
        };
        break;

    case 'drStrange':
        dataObject = {
            image: "assets/drstrange.png",
            movieTitle: "Doctor Strange in the Multiverse of Madness",
            rating: "PG13",
            hd: "HD",
            genre: "Fantasy, Sci-Fi",
            starRating: "8.9",
            release: "2023",
            duration: "120min",
            movieDesc: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse."
        };
        break;
    
    case 'mi7':
        dataObject = {
            image: "assets/mi7.jpg",
            movieTitle: "Mission : Impossible - Dead Reckoning",
            rating: "PG13",
            hd: "4K",
            genre: "Thriller/Action",
            starRating: "N/A",
            release: "2024",
            duration: "160min",
            movieDesc: "Seventh entry in the long-running Mission: Impossible series."
        };
        break;

    case 'johnwick4':
        dataObject = {
            image: "assets/JW4.PNG",
            movieTitle: "John Wick Chapter 4",
            rating: "PG13",
            hd: "HD",
            genre: "Thriller",
            starRating: "N/A",
            release: "2023",
            duration: "140min",
            movieDesc: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
        };
        break;
}


// localStorage.setItem('movieDataObj',dataObject);

document.querySelector('body.featured-page main').innerHTML =
    `
    <img src="${dataObject.image}" alt="">
    <div class="movie-details">
        <h1 class="movie-title">${dataObject.movieTitle}</h1>
        <div>
            <span class="rating">${dataObject.rating}</span>
            <span class="hd">${dataObject.hd}</span>
            <span class="genre">${dataObject.genre}</span>
        </div>
        <div>
            <span class="rating-star">${dataObject.starRating}</span>
            <span class="release">${dataObject.release}</span>
            <span class="duration">${dataObject.duration}</span>
        </div>
        <p class="movie-desc">${dataObject.movieDesc}</p><br>
         
    </div>
`
{/* <a href="" href="" id="get-tickets">Get tickets</a> */}
var movieObj;
//adding seating
function showSeating() {
    for (let i = 0; i < 12; i++) {

        const val = Math.random();
        const check = val > 0.5 ? 'true' : 'false';
        var date;

        if (i % 4 == 0) {
            document.querySelector("#shows .morning").innerHTML +=
                `
        <span>
            <a href="seat_preview.html" class="showClick" data-showTimeVal=${i} data-time="11:00 am" disabled=${check}>
                11:00 am
            </a>
        </span>            
        `
        } else if (i % 4 == 1) {
            document.querySelector("#shows .afternoon").innerHTML +=
                `
        <span>
            <a href="seat_preview.html" class="showClick" data-showTimeVal=${i} data-time="3:00 pm" disabled=${check}>
                3:00 pm
            </a>
        </span>            
        `
        } else if (i % 4 == 2) {
            document.querySelector("#shows .evening").innerHTML +=
                `
        <span>
            <a href="seat_preview.html" class="showClick" data-showTimeVal=${i} data-time="7:00 pm" disabled=${check}>
                7:00 pm
            </a>
        </span>            
        `
        } else if (i % 4 == 3) {
            document.querySelector("#shows .night").innerHTML +=
                `
        <span>
            <a href="seat_preview.html" class="showClick" data-showTimeVal=${i} data-time="11:00 pm" disabled=${check}>
                11:00 pm
            </a>
        </span>            
        `
        }
    }
}

const shows = document.querySelectorAll('.showClick');
var showDate;
let dataToPay;
for (i = 0; i < shows.length; i++) {
    let showTime = shows[i].getAttribute('data-showTimeVal');
    if (showTime <= 7) {
        showDate = 'Friday';
    } else if (showTime >= 4 && showTime <= 7) {
        showDate = 'Saturday';
    } else if (showTime >= 8 && showTime <= 11) {
        showDate = 'Sunday';
    }

    let time = shows[i].getAttribute('data-time');


    shows[i].addEventListener('click', function data(e) {
        dataToPay = {
            time: e.getAttribute('data-time'),
            showDate: showDate
        }
    })
}



