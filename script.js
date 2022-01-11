$(document).ready(function () {
  let Normal_btn = document.querySelectorAll('#Normal_btn');
  let initial_value = "";

  //////////parcor num btns 
  for (i = 0; i < Normal_btn.length; i++) { 
    $(Normal_btn[i]).on("click", function() {
      i= this.innerText
      calc(i);
    });

  }
  
  function calc(i) {
    //let t = $(Normal_btn[i]).text();
    initial_value += i;
    $('#history').text(initial_value);
   // $('#result').text(eval(initial_value));
    $.ajax({
      type: "POST",
      url: "calc.php",
      data:{res: initial_value},
      success: OnSuccess
  });

  function OnSuccess(result) {
    console.log(result);
    if($.isNumeric( result)){
    $('#result').text(result);
    }
}

  }














  
  ////delete one digit
  $('#delete_single_num').on('click', () => {
    initial_value = initial_value.substring(0, initial_value.length - 1);
    $('#history').text(initial_value);
    $('#result').text(eval(initial_value));
  })
  ////clear 
  $('#clear').on('click', () => {
    $('#history').text("");
    initial_value = "";
    $('#result').text("0");
  });
 ///dark mode
  let dark_mode_status = false;
  $('.dark_mode_btn').on('click', () => {
    $('body').toggleClass("dark_mode_active");

    if (dark_mode_status == false) {
      this.innerHTML = '<i class="fa fa-sun-o" aria-hidden="true"></i>';
      dark_mode_status = true;
    } else {
      this.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
      dark_mode_status = false;
    }

  });
});