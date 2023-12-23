let term="";
const updateTerm =()=>{
  term = document.getElementById("searchTerm").value;
  
  if(!term || term === ""){
    alert("Search anay lihog");
  }else {
    const url = `https://itunes.apple.com/search?term=${term}`;
    const songContainer = document.getElementById("songs");
    while (songContainer.firstChild) {
      songContainer.removeChild(songContainer.firstChild);
    }
fetch(url)
.then((Response) => Response.json())
.then((data)=>{
  //console.log(data.results);
  const artists = data.results;
  return artists.map(results => {
    const article = document.createElement('article'), 
    artists = document.createElement("p"), 
    song = document.createElement("h4"), 
    img = document.createElement("img"), 
    audio = document.createElement("audio"), 
    audioSound = document.createElement("source")
    
    artists.innerHTML = results.artistName;
    song.innerHTML = results.trackName;
    img.src = results.artworkUrl100;
    audioSound.src = results.previewUrl;
    audio.controls = true;
    
    article.appendChild(img);
    article.appendChild(artists);
    article.appendChild(song);
    article.appendChild(audio);
    audio.appendChild(audioSound);
    
    songContainer.appendChild(article);
  })
})
.catch(error=>console.log("Request Failed:", error))
  }
}