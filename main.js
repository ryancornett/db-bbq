

// Begin slider code

// $('.slider').each(function() {
//     var $this = $(this);
//     var $group = $this.find('.slide_group');
//     var $slides = $this.find('.slide');
//     var bulletArray = [];
//     var currentIndex = 0;
//     var timeout;
    
//     function move(newIndex) {
//       var animateLeft, slideLeft;
      
//       advance();
      
//       if ($group.is(':animated') || currentIndex === newIndex) {
//         return;
//       }
      
//       bulletArray[currentIndex].removeClass('active');
//       bulletArray[newIndex].addClass('active');
      
//       if (newIndex > currentIndex) {
//         slideLeft = '100%';
//         animateLeft = '-100%';
//       } else {
//         slideLeft = '-100%';
//         animateLeft = '100%';
//       }
      
//       $slides.eq(newIndex).css({
//         display: 'block',
//         left: slideLeft
//       });
//       $group.animate({
//         left: animateLeft
//       }, function() {
//         $slides.eq(currentIndex).css({
//           display: 'none'
//         });
//         $slides.eq(newIndex).css({
//           left: 0
//         });
//         $group.css({
//           left: 0
//         });
//         currentIndex = newIndex;
//       });
//     }
    
//     function advance() {
//       clearTimeout(timeout);
//       timeout = setTimeout(function() {
//         if (currentIndex < ($slides.length - 1)) {
//           move(currentIndex + 1);
//         } else {
//           move(0);
//         }
//       }, 4000);
//     }
    
//     $('.next_btn').on('click', function() {
//       if (currentIndex < ($slides.length - 1)) {
//         move(currentIndex + 1);
//       } else {
//         move(0);
//       }
//     });
    
//     $('.previous_btn').on('click', function() {
//       if (currentIndex !== 0) {
//         move(currentIndex - 1);
//       } else {
//         move(3);
//       }
//     });
    
//     $.each($slides, function(index) {
//       var $button = $('<a class="slide_btn">&bull;</a>');
      
//       if (index === currentIndex) {
//         $button.addClass('active');
//       }
//       $button.on('click', function() {
//         move(index);
//       }).appendTo('.slide_buttons');
//       bulletArray.push($button);
//     });
    
//     advance();
//   });

  // End slider code
  
  const date = new Date();
  let currentDate = "date";
  var minutes = date.getMinutes();

  if (date.getHours() > 12 && minutes < 10) {
      var pm = date.getHours();
      pm = pm - 12;
      currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${pm}:0${date.getMinutes()} PM`;
  } else if (date.getHours() > 12 && minutes > 9) {
      var pm = date.getHours();
      pm = pm - 12;
      currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${pm}:${date.getMinutes()} PM`;
  } else if (date.getHours() < 13 && minutes < 10) {
      currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${date.getHours()}:0${date.getMinutes()} AM`;
  }
  else {
      currentDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2)} ${date.getHours()}:${date.getMinutes()} AM`;
  }
  document.getElementById("date-time").innerHTML = currentDate;
  
  const footerDate = new Date();
  document.getElementById("current-year").innerHTML = footerDate.getFullYear();