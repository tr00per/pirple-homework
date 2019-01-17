/*******************************************************************************
 * Homework Assignment #1: Data Types
 * Student: Artur Czajka
 * Described song: Chcę zatrzymać ten czas - Kasia Kowalska
 ******************************************************************************/

// Who is performing the song
var artist = "Kasia Kowalska"
var title = {
    "pl" : "Chcę zatrzymać ten czas",
    // Translation for purpose of viewers (unofficial)
    "en" : "I want to keep this time"
}
var genre = "Pop"
var year = 1999
// Approximate duration, taken from YouTube
var durationSeconds = 185
// I only know this song, because parts of it were used in the Coca-Cola commercial...
var popularUse = {
    "where" : "Coca-Cola commercial",
    "active" : false
}
// ...and same is true for "other versions" ;)
// In these lyrics are different, but they are kept in a similar mood, plus
// most of the melody is similar and they were all used in Coca-Cola commercials
var otherVersions = [
    {
        "artist" : "Robin Beck",
        "title" : "First Time",
        "year" : 1987,
        "relation" : "original"
    },
    {
        "artist" : "Margaret",
        // EN: The Taste of Joy
        "title" : "Smak Radości",
        "year" : 2015,
        "relation" : "remake"
    }
]

console.log(artist)
console.log(title)
console.log(genre)
console.log(year)
console.log(durationSeconds)
console.log(popularUse)
console.log(otherVersions)
