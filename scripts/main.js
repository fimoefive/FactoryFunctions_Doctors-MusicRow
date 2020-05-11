//  First Factory Function "Doctor Information"

const doctor = function (name = "", specialty = "", address = "") {
    return {
        "Doctor's name": name,
        "Specialty": specialty,
        "address": address,
    }
};
const radiology = doctor("Dr. Heath", "Radiologist", "1800 Creekwood lane")
console.log(radiology);


// Second Factory Function "BowWowKennels Array"

const BowWowKennels = [];

const pet = function (name = "name", petBreed = "Breed") {
    return {
        "Species": "animal",
        "name": name,
        "Breed": petBreed,
    }
};
const petCat = pet("Sawyer", "Trash Kitty");
console.log(petCat);

const petDog = pet("Henry", "Yellow Lab");
console.log(petDog);

const petBird = pet("Polly", "Parrot");
console.log(petBird);

BowWowKennels.push(petBird, petDog, petCat);
console.log(BowWowKennels);

// const petList = BowWowKennels(petCat[0], petDog[1], petBird[2]);

// Exercise Three Music Row

const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];


const createArtist = (artistName, age, genre) => {
    return {
        artistName: artistName,
        age: age,
        genre: genre
    }
}

const createCountryArtist = (artistName, age) => {
    return createArtist(artistName, age, "Country")
}
const createRapArtist = (artistName, age) => {
    return createArtist(artistName, age, "Rap")
}
const createFunkArtist = (artistName, age) => {
    return createArtist(artistName, age, "Funk")
}
const createPopArtist = (artistName, age) => {
    return createArtist(artistName, age, "Pop")
}
const createBluegrassArtist = (artistName, age) => {
    return createArtist(artistName, age, "Bluegrass")
}

chattenRecords.push(createCountryArtist("Bruce Atikins", 23));
chattenRecords.push(createCountryArtist("Avilee Dallas", 19)); 
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson", 23));
console.log(chattenRecords);

jumpStopRecords.push(createRapArtist("Dusta Grimes", 21));
jumpStopRecords.push(createRapArtist("Loyonce Branis", 27));
jumpStopRecords.push(createFunkArtist("Dre Funkz", 25));
console.log(jumpStopRecords);

polarRecords.push(createPopArtist("Jensen Brown", 20));
polarRecords.push(createPopArtist("Austin Kinkaid", 22));
console.log(polarRecords);
