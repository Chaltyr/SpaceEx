// setInterval(function(){randomTransform(document.querySelector("#box"))}, 1000);

// // set a random css transform on the (el)ement
// function randomTransform(el) {
//   var trans = "matrix3d("+Math.random()+", -"+Math.random()+", "+Math.random()+", 0, "+Math.random()+", "+Math.random()+", "+Math.random()+", 0, -"+Math.random()+", 0, "+Math.random()+", 0, 0, 0, 0, 1)";

//   // clear transform
//   el.style.transform = "";
//   el.style.webkitTransform = "";
//   el.style.MozTransform = "";
//   el.style.msTransform = "";
//   el.style.OTransform = "";
  
//   // set random transform
//   el.style.webkitTransform = trans;
//   el.style.MozTransform = trans;
//   el.style.msTransform = trans;
//   el.style.OTransform = trans;
//   el.style.transform = trans;
// }

// function randomTranslate(el){
//     var translate = "matrix3d("+Math.random()+", -"+Math.random()+", "+Math.random()+", 0, "+Math.random()+", "+Math.random()+", "+Math.random()+", 0, -"+Math.random()+", 0, "+Math.random()+", 0, 0, 0, 0, 1)";

//     // clear transform
//     el.style.translate = "";
//     el.style.webkitTranslate = "";
//     el.style.MozTranslate = "";
//     el.style.msTranslate = "";
//     el.style.OTranslate = "";
    
//     // set random transform
//     el.style.webkitTranslate = translate;
//     el.style.MozTranslate = translate;
//     el.style.msTranslate = translate;
//     el.style.OTranslate = translate;
//     el.style.translate = translate;
// }