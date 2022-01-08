// Opening Side navigation
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
}

// Closing Side navigation
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}


// function normalFontSize() {
//   var x = document.getElementsByClassName("card-body");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.fontSize = "18px";
//   }
// }

// function increaseFontSize20() {
//   var x = document.getElementsByClassName("card-body");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.fontSize =  "20px";
//   }
// }

// function increaseFontSize30() {
//   var x = document.getElementsByClassName("card-body");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.fontSize = "30px";
//   }
// }

// function increaseFontSize35() {
//   var x = document.getElementsByClassName("card-body");
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.fontSize = "35px";
//   }
// }

$(document).ready(function() {
  $('#decreaseFont').click(function() {
      $('.card-body').css("font-size", function() {
          return parseInt($(this).css('font-size')) - 5 + 'px';
      });
  });
});

$(document).ready(function() {
  $('#increaseFont').click(function() {
      $('.card-body').css("font-size", function() {
          return parseInt($(this).css('font-size')) + 5 + 'px';
      });
  });
});