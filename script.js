

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//  console.log(  "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude);
// }
//  getLocation() 
//   var x = "Version info: " + navigator.appVersion;
// console.log(x);
//var x = location.pathname;
var x = "Port: " + location.port
console.log(x)
// var button = document.querySelector('.but-start');
// var img = document.querySelector(".img");

// var speedInt = 1500;
// var goMyelem = 0;
// function gamefunction(){
//     //console.log(speedInt)
//     var startInt = setInterval(startgams,speedInt)
//     // console.log(speedInt)
//      function startgams(){  
// 	 if(goMyelem<=675){
// 	 	goMyelem = goMyelem+1;
// 	 	img.style.left = goMyelem+"px";
// 	 }
// 	 if (goMyelem==675) {
	 	
// 	 	 alert("game over");
// 	      return window.location.reload();
//         }
// 	} //--------startgams()
//      img.addEventListener("click",function(){
//   	var randTop = Math.floor(Math.random() * 410) + 10;
//         img.style.top = randTop+"px";
//         img.style.left = 0+"px";
//   	    goMyelem = 0;
//   	  if (speedInt>470) {
//          speedInt=speedInt - 5;
//   	  }else if(speedInt<471){
//                speedInt=speedInt - 0.01;
//   	  }
  	
//   	    //console.log(speedInt)
//   	    clearInterval(startInt);
//                     gamefunction();
//      })//--img click
   
 
//    }//---gamefunction()
//    //---
//    button.addEventListener('click', function() {
//    	        img.style.opacity = 1;
//             gamefunction();

//            // img.classList.add("show");
//   })



