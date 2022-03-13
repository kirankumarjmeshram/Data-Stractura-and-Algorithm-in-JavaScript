const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace("The","Hello"))//Hello quick brown fox jumps over the lazy dog. If the dog reacted, was it reallylazy?

const regex = /quick brown/i;
console.log(p.replace(regex, 'ferret')); //The ferret fox jumps over the lazy dog. If the dog reacted, was it really lazy?