// $("#mmm").text("khairul");
// $('#lll').html('<b> <u>ffoiyfuiaytfuaydgtfv8at</u></b>');
// $("#mmm").append(" kairul");
// $("#mmm").prepend("islam ");
// $('.aaa').append('kairul');

// let testBefore = $("<h1></h1>").html("ami");
// $('#lll').before(testBefore);
// let testAfter = $('<h2></h2>').html('kairul');
// $('.ll').after(testAfter);

// $("a").attr("href", "https://developerkhairul.com");

// document.querySelector(".tik").classList.add("style")

// $('.tik').css({'color':'green','font-size':'50px','font-style':'italic'});
// $('.tik').addClass('style');

// document.querySelector("button").addEventListener("click",function(){
//     document.querySelector("h1").innerHTML = "wow ami js pari";
//     document.querySelector("h1").classList.add("style")
// })
// $("button").click(function () { 
// //    $('h1').text('ami j query pari');
//    $("h1").toggleClass("test_style")
// });
// $("button").click(function () { 
//     $("h1").toggleClass("test_style")
// });
//  let allButtons = document.querySelectorAll(".mybutton").length;
//  for (i = 0; i < allButtons; i++){
//     document.querySelectorAll(".mybutton") [i].addEventListener("click",function(){
//         let mas = this.innerHTML;
//         document.querySelector('h1').innerHTML = mas + " ami"
//     })
//  }

// $('.mybutton').on('click',function () { 
//     let tex = this.innerHTML;
//     $('h1').text(tex + ' me'); 
// });

$(".button").click(function () {
   let password1 = $("#pass1").val();
   let password2 = $("#pass2").val();
   if (password1 != "" && password2 != "") {
       if (password1 == password2) {
         //   alert("Login successful");
           $(".formm").text("login successful");
           $(".fform").addClass("style");
       }
        else {
           $(".formm").text("password miss match");
           $(".formm").addClass("style");
         //   alert("Password miss match");
       }
   } 
   else if((password1 != "" || password2 != "") ){
      $(".formm").text("another option empty please fill it");
      $(".formm").addClass("style");
      // alert("one option fill it")
   }
   else {
      //  alert("Please enter passwords");
       $(".fform").text(" No password here Please enter password");
       $("formm").addClass("style");
   }
})
