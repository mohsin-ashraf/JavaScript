let re = /hello/;//Case Sensitive
re = /hello/i;//Case Insentitive
// Metachractors Symbols
re = /^h/i;//String which starts with h/H
re = /e$/i;//Must matches the end
re = /^hello$/i;//Must begin and must end with h and o respectively keeping case insensitive.
re = /^h.llo/i;//"." symbol matches anything in the string.
re = /h*llo/i;//"*" symbol matches any charactor one or more times
re = /gre?a?y/i;//"?" symbol makes the charactor optional it can be present or it cannot be there at all
re = /gre?a?\y/i;//"\" Escaped Charactor
re = /gr[ae]y/i// Must be an "e" or "a" Same as above but with a better syntax.
re = /[GF]r[ae]y/i// Either "G" or "F" as in the above case
re = /[^GF]r[ae]y/i// Must not start with either "G" or "F"
/**
 * if "^" is inside the [] then it will match anything not begining with "G" or "F"
 * else "^" is outside the [] then it will match anything begining with "G" or "F"
 */
re = /[A-Z]r[ae]y/;//Beignning with any upper case charator since we are not including case insensitive flag
re = /[0-9]r[ae]y/;//It will match any digit which occurs at the begining of the string
re = /[0-9]{1,2}r[ae]y/;//It will match any digit which occurs at the begining of the string curly braces shows the minimum and maximum number of occurances of the instances placed in square brackets just before them.
/**
 * if you put the curly braces like this {x,} it will match at least "x" charactors and at most "infinite" charactors 
 * else if you put them like this {0,y} it will match at most "y" charactors and at least 0 charactors.
 */
re = /G{0,5}rey?/i;
// () are used for Grouping
re = /([0-9]x){3}/;//Matches digit+x for three times

// Shorthand charactor classes
re = /\w/; //It is a word charactor - alphanumeric or an _
re = /\w+/; //It is one or more word charactor - alphanumeric or an _
re = /\W+/; //It is inverse (compliment) of \w+ same for \w => \W
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more time digit
re = /\D/;// Oposit of the \d same for \d+ => \D+
re = /\s/;//Match white space charactor
re = /\S/;//Match non white space charactor
re = /Hell\b/i;// Word boundary it will match "Hell" with the boundary that is nothing comes after "Hell" but it does include white spaces "Hell o white spaces" will match "Hell[any alphanumeric]" will not match





let string;
// string = "Hello";
string = 'Grey?';
string = '3x3x3x';
string = "Hello, welcome to the Hell";

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}


reTest(re, string);