// Use insert() function to insert the number in textview.
function insert(num) 
{
document.app.inputs.value = document.app.inputs.value + num;
}

// Use equal() function to return the result based on passed values.
function equal()
{
var exp = document.app.inputs.value;
if(exp)
{
document.app.inputs.value = eval(exp)
}
}

