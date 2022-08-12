// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
//IS ADMIN
function isAdmin(user){
    if(user.userRole === 'ADMIN'){
        return true;
    } else {
        return false;
    }
}

    let user1 = {
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
    }
    let user2 = {
        firstName: 'Ian',
    lastName: 'Rogers', 
    userRole: 'USER_MANAGER'
    }
    let user3 = {
        firstName: 'Jeff',
    lastName: 'Wilson', 
    userRole: 'ADMIN'
    }

console.log(isAdmin(user1));
console.log(isAdmin(user2));
console.log(isAdmin(user3));

// GET EMAIL
function getEmail(user){
let email = user.firstName.toLowerCase() + "." + user.lastName.toLowerCase() + "@codeimmersives.com";
    return email;
}
const anthony = {
    firstName: 'Anthony',
    lastName: 'DeRosa'
}
const brian = {
    firstName: 'Brian',
    lastName: 'Carela'
}
console.log(getEmail(anthony));
console.log(getEmail(brian));

// GET PLAYLIST

function getPlaylistLength(playlist) {
    return playlist.songs.length;
}
const playlist1 = {
    name: 'hits',
    songs: ['The Distance', 'Ruby Tuesday', 'Old Town Road (remix)']
}
const playlist2 = {
    name: 'empty playlist',
    songs: []
}
const playlist3 = {
    name: 'my jams',
    songs: ['Vienna', 'Hey Ya!']
}
console.log(getPlaylistLength(playlist1));
console.log(getPlaylistLength(playlist2));
console.log(getPlaylistLength(playlist3));

// get hardest homework

function getHardestHomework(score){
    if(score.length === 0){
        return '';
    }

    let lowest = score[0].averageScore;
    let lowestName = score[0].name;

    
 
    
    for( let i = 0; i < score.length; i++){

        if(score[i].averageScore < lowest){
            lowest = score[i].averageScore;
            lowestName = score[i].name;
        }
    }

    return lowestName;
}
let work1 = [
    
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 1 }

]
let work2 =
[
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
]
let work3 = [];

    console.log("test");
    console.log(getHardestHomework(work1));
    console.log(getHardestHomework(work2));
    console.log(getHardestHomework(work3));

    //CREATE PHONEBOOK
 

 function createPhonebook(namesArr, NumbersArr){
    if(namesArr.length === 0){
        return {};
    }
    let phonebook = {};
 
     
    //let arr3 = 
    //let arr4 = 

    for(i = 0; i < namesArr.length; i++){
      phonebook[namesArr[i]] = NumbersArr[i]
    }
    return phonebook
    
}
    let phonebook1 = createPhonebook(['Jimothy', 'Maria', 'Karl'],['123-456-7890', '000-000-0000', '999-888-7766']);

    //let arr2 = createPhonebook(['Melissa', 'Andre'],['206-111-2233', '321-123-2424']);

    console.log(phonebook1);
    

 







// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};