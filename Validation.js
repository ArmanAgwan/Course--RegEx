// var reg =/[a-z]/ig;

// var reg2 = newRegExp(/[a-z]/,'i');


         //----------Telephone----------//

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone:/^\d{11}$/
};

//Validation function

function validate(field,regex) {
    if(regex.text(field.value)) { 
        field.className ='valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
  input.addEventListener('keyup',(e) => {
   console.log(e.target.attributes.name.value);
  });
});