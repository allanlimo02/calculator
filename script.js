$(document).ready(function() {
   $('form#add').submit(function(event){
       var fno=parseInt( $('#add1').val());
       var sno=parseInt($('#add2').val());

       var add=fno+sno;
       $('p#output').append(add)
       event.preventDefault()
   })
})