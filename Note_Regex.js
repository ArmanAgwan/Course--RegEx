
//      //-----Regular Expression-----//

// /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/  


//                //--------- Meta Characters----------//

//  -\d    Match any digit character(same as [0-9])

//  -\w    match any word character (a-z, A-Z, 0-9 and _'s)

//  -\s    match a white character (spaces, tabs, etc)

//  -\t    match a tab character onplay

//  d -- matches the literals character, 'd'

//  /d -- matches any digit character


 /* []      //single character
[abc123]000  // All Match   //a000 b000 c000 1000
[^a]000  // not matched a000  //    b000 c000 1000
(?<![a-zA-Z])000    ------ 000 a000 000 a000 000a //Negetive Lookbehind
[0-1]*  //secuence match
[0-9]{11}  //match only 11 numbers
[a-z]{4,8} // match 4 to 8 word length match
[a-z]{4,} // match 4 to Infinity word lenght match */



//----------Special Character----------//

//  '+'  The One-or-more quantifier
 
//  '\'  The escape character

//  '[]' The character set

//  '[^]' The negate symbol in a character set

//  '?'  The zero-or-one quantifier( makes a preceding char optional )

//  '.'  Any character whatsover ( except the newline character)
 
//  '*' The 0 or more quantifier ( a bit like +) 
