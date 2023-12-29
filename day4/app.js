const key = 'd357ab90';
const api = `https://www.omdbapi.com/?i=tt3896198&apikey=${key}&t=`;



let movieData;
function searchMovie(){
    let movieName = document.getElementById('searchBox').value;
    console.log(movieName);
    let search = api.concat(movieName);
    fetch(search).then(function(data){
       return data.json();
    }).then(function(data){
        document.getElementById('movieTitle').innerText=data.Title;
        document.getElementById('Description').innerText=data.Plot;
        document.getElementById('Genre').innerText=data.Genre;
        document.getElementById('Actors').innerText=data.Actors;
        document.getElementById('Director').innerText=data.Director;
        document.getElementById('Writer').innerText=data.Writer;
        document.getElementById('Collection').innerText=data.BoxOffice;
        document.getElementById('Rating').innerText=data.imdbRating;
        document.getElementById('Poster').src=data.Poster;
    })
}
