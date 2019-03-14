/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["shot clock", "dancing with a stranger","live a lil","middle child"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["http://wave891.fm/img/hotspot/478.jpg","http://d2lubch9d26anb.cloudfront.net/cdn/farfuture/ie74H7S01Bfj1o39YsR_O_MFrDoczv0DKIVjUMojDKc/mtime:1546896639/sites/default/files/dancingwithastranger.jpg", "https://i.scdn.co/image/716ee8a2c9b3822bb9ff0e81578a15667cffd7f6","https://m.media-amazon.com/images/I/81Nm5T+zQEL._SS500_.jpg"];
var artists = ["Ella mai","Sam Smith featuring Normani","Madeintyo & UnoTheActivist","J.Cole"];
var lengths = ["3:22","3:00","4:00","4:00"];
var links = ["https://www.youtube.com/watch?v=T4kAYIC5Xzo", "https://www.youtube.com/watch?v=av5JD1dfj_c", "https://www.youtube.com/watch?v=_JhGNbI2bfk","https://www.youtube.com/watch?v=oe9869VVMPk"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        $("#songs").append("<p>" + music + "</p>");
    });
}

images_links.forEach(function(music) {
    $("#images").append("<img src=" + picture +  ">");
});

artists.forEach(function(singer){
    $("artists").append("<p>" + singer +"</p>");
});

songLengths.forEach(function(time){
    $("#lengths").append("<p"+ time + "</p>");
});

links.forEach(function(video){
    $("#links").append("<a herf=\"" + video +"\">" + "click here </a>");
});




function emptySongInfo(){
    $("#songs").empty();
    $("#artists").empty();
    $("#images").empty();
    $("#links").empty();
    $("#lengths").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
var song =  $("song").val();
console.log(song);
songs.push(song);

var artist =$("artist").val();
artists.push(artist);

var image =$("#image").val();
images_links.push(image);

var link =$("#link").val();
links.push(link);

var length =$("#length").val();
songLengths.push(length);


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});






displaySongInfo();
