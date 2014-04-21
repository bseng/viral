
$("#contact_form").submit(function(event){
  event.preventDefault();
  var form = $(this);
  var name = $(this).find("input[name='name']").val();
  var phone = $(this).find("input[name='phone']").val();
  var email = $(this).find("input[name='email']").val();
  var bookdate = $(this).find("input[name='date']").val();
  var booktime = $(this).find("input[name='time']").val();
  var message = $(this).find("input[name='message']").val();

  $.post("scripts/process.php", {name: name, phone: phone, email: email, bookdate: bookdate, booktime: booktime, question: message})
  .done( function(data) {

        //clear
    //all
    //fields
    $('#contact_form').trigger("reset");
    $('#contact_form > a.btn').val("Sent");
  });

});

