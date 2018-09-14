'use strict';

var userName = prompt('Welcome to my site, what\'s your name?');

var mountains = prompt('Does Aaron like to climb mountains?');

if(mountains === 'yes' || mountains === 'ya'){
    alert('Nice job, I love climbing mountains');
} else if(mountains === 'no'){
    alert('no way, I love them!');
} else {
    alert('Come on, answer Yes or No');
}