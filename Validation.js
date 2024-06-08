// var reg =/[a-z]/ig;

// var reg2 = newRegExp(/[a-z]/,'i');


         //----------Telephone----------//

// const inputs = document.querySelectorAll('input');

// const patterns = {
//     telephone:/^\d{11}$/
// };


        //----------Matching UserName----------//

const patterns = {
    telephone:/^\d{11}$/,
    username:/^[a-z\d]{5,12}$/i,
    password:/^[a-z\d]$/,
    slug:/^[a-z\d-]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};        

//Validation function

function validate(field,regex) {
    if(regex.test(field.value)) { 
        field.className ='valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
  input.addEventListener('keyup',(e) => {
//    console.log(e.target.attributes.name.value);
      validation(e.target.patterns[e.target.attributes.name.value])
  });
});