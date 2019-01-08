var kids = prompt('how many kids do you have?');
console.log('number of kids: ', kids);

var books = prompt('how many books do you have?');
console.log('number of books ', books);

if (kids === '3' || books === '4') {
    alert('way too many kids');
} 

if (parseInt(kids) === 3 && parseInt(books) === 4) {
    alert('get more books')
} else {
    alert('bloop')
}