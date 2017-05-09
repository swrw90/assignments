var music = {
    genre: "hip-hop",
    era: [
        {
            genre: "hip-hop",
            artist: "tupac",
            albums: ["all eyes on me", "2pacalypse"]
        },
        {
            genre: "hip-hop",
            artist: "Jurassic Five",
            albums: ["jurassic five", "quality control"]
        },
        {
            genre: "hip-hop",
            artist: "big",
            albums: ["ready to die", "life after death", "notorious"]
        },
        {
            genre: "hip-hop",
            artist: "pharcyde",
            albums: ["bizarre ride II", "labcabincalifornia"]
        }]
};
var genre = [];
for (var i = 0; i < music.era.length; i++) {
    var genre = music.era[i].genre;
}
var artists = [];
for (var i = 0; i < music.era.length; i++) {
    var artist = music.era[i].artist;
    artists.push(artist);
}
var albums = [];
for (var j = 0; j < music.era.length; j++) {
    var albums = music.era[j].albums;
    albums.push(albums);
}

console.log("90's Music: " + genre);
console.log("90's Hip-Hop Artists: " + artists);
console.log("Artists Albums: " + albums);
//console.log("Artists of the 90's: " + music.era[0].artist);
music.era[1].albums.push("power in numbers");
