function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
  }
  
  function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
  }
  
  function filter(array, predicate) {
  var acc = [];
  each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
  });
  return acc;
  }
  
  function MakeGov(name,temperature,location,distance,images) {
      return {
      name:name ,
      temperature:temperature,
      location:location,
      distance:distance,
      images:images,
    //   getNextImages,
    //   sortbyTemperature,
    //   sortbyDistance,
    
    }
    }
  
    var gover1 =MakeGov("Hammamet",32,"Cap Bon",40,["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxFF4cmTla_Nci3U-K4FVJjpuncLXpouv2A&usqp=CAU",
    ["https://a.cdn-hotels.com/gdcs/production146/d1430/e1a0723c-a2f6-491f-b099-8fb1bee294b2.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    "https://a.cdn-hotels.com/gdcs/production8/d260/d0f5c4a9-820e-4a7e-9cea-18cbbf0adc82.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
  "https://a.cdn-hotels.com/gdcs/production199/d1976/a073366a-43a5-4707-8321-488349ce7c9e.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"]])
  
    var gover2 =MakeGov("Jerba",37,"Cap Bon",20,["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Lu_GSu0sLT99fwWXqY7rtvmhyl-jF8tbrL0h849rSN6ClO0Ik6p0R6yNIQVEgvfbOnI&usqp=CAU",
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrEEw66QC-ao39kxZhas0scM9B8jpSpuk0Q&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmwTO-r6DDeq_KWfe6HgV2XXj56UFqkMen4FiIm_IzXA8KFaTa_nfJdEb67u9Eyc-NXk&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXzQVM-SIAXV1Nr-r7pzGwOa1PMIdKw-WU_uYa4nVh8btNkAFWbSrzT3AfvcDmr-Kzg8&usqp=CAU"]])
  
  
    var gover3 =MakeGov("Soussa",36,"Cap Bon",60,["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLOtkvAPhARuM1ZYIjyNftNqST17DEXYEPw&usqp=CAU",
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe35sv6e5TcksZcrRX7E_apSDJSblhQgBorw&usqp=CAU",
    "https://a.cdn-hotels.com/gdcs/production8/d260/d0f5c4a9-820e-4a7e-9cea-18cbbf0adc82.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsqzJoc71IwyjSRT-3eLI8aHDKuXgnMCWSg&usqp=CAU"]])
  
   
  
  
    $('body').css("background-color","#1d2023")
    $("title").text("Hotely Booking")
    $(".first").text("Come To Tunisia")
    $(".first").css({"text-align":"center","font-size":"50px","margin": "5px","color":"white"})

    
    $(".second").css({"text-align":"center","font-size":"20px","margin": "10px","color":"white"})
   
    $(".second").append(`<div class="sorting"> 
    <select id="filterdistance" onchange="setHighestDistance()">
     <option value="">Km</option>
     <option value="">Miles</option> </select>
     `)


     

    $(".second").append(`
    <button onclick="sortbyTemperature()"> Sort by Temperture</button>
    <button class="but" onclick= sortbyDistance()> Sort by Distance</button>
    `) 
    
    
    $(".third").append(`<form action="#">
    <label for="quantity">  Set Maximum Distance </label>
    <input type="number" id="quantity" name="quantity" min="-40" max="100">
    <button  onclick= setHighestDistance()> submit</button>
  `)

  $(".third").append(`<form action="#">
    <label for="quantity">  Set Maximum Temperature </label>
    <input type="number" id="quantity" name="quantity" min="-40" max="100">
    <button onclick= setHighestTemperature()> submit</button>
  `)
  $(".third").css({"text-align":"center","font-size":"20px","color":"white","display":"flex","position":"relative"
,"justify-content":"space-around"})

  
  function getNextImages() {
  $('#img').attr('src',list[0][0].images)
  $('#img').attr('src',list[1][0].images)
  $('#img').attr('src',list[2][0].images)
  }
  
  
  var list=[gover1,gover2,gover3]
  
  $(".class1").html("<img id='img1'  class='ham' src = " + list[0].images[0]  + "/>")
  $(".class2").html("<img id='img2' class='jer' src = " + list[1].images[0]  + "/>")
  $(".class3").html("<img id='img3' class='sus' src = " + list[2].images[0]  + "/>")
  
  
  
  $(".class1").append("<img class='img11' class='ham' src = " + list[0].images[1][0]+ "/>"  )
  $(".class1").append("<img class='img11' class='ham' src = " + list[0].images[1][1]+ "/>"  )
  $(".class1").append("<img class='img11' class='ham' src = " + list[0].images[1][2]+ "/>"  )
  
  $(".class2").append("<img class='img22' class='jer' src = " + list[1].images[1][0]+ "/>"  )
  $(".class2").append("<img class='img22' class='jer' src = " + list[1].images[1][1]+ "/>"  )
  $(".class2").append("<img class='img22' class='jer' src = " + list[1].images[1][2]+ "/>"  )
  $(".class3").append("<img class='img33' class='sus' src = " + list[2].images[1][0]+ "/>"  )
  $(".class3").append("<img class='img33' class='sus' src = " + list[2].images[1][1]+ "/>"  )
  $(".class3").append("<img class='img33' class='sus' src = " + list[2].images[1][2]+ "/>"  )
  
  
  
  $(".class1").append(`<div>
  <h2>  Government :  ${list[0].name}  </h2> 
  <h2>  Temperature :  ${list[0].temperature}  </h2> 
  <h2>  Location :   ${list[0].location}  </h2>   
  <h2>  Distance :  ${list[0].distance}  </h2> 
  <button class="bottom" onclick="document.location='page3.html'">Visit Hammamet</button> </div>
  `)  
  
  
  $(".class2").append(`<div>
  <h2>  Government :  ${list[1].name}  </h2> 
  <h2>  Temperature :  ${list[1].temperature}  </h2> 
  <h2>  Location :   ${list[1].location}  </h2>   
  <h2>  Distance :  ${list[1].distance}  </h2>
  <button class="bottom" onclick="document.location='page4.html'">Visit Djerba</button> </div>
   
  `)  
  $(".class3").append(`<div>
  <h2>  Government :  ${list[2].name}  </h2> 
  <h2>  Temperature :  ${list[2].temperature}  </h2> 
  <h2>  Location :   ${list[2].location}  </h2>   
  <h2>  Distance :  ${list[2].distance}  </h2> 
  <button class="bottom" onclick="document.location='page5.html'">Visit Sousse</button> </div>
  `)  
  

  $('h2').css({"font-size":"20px","width":"240px","color":"white"})
  
  
  
  
  $(".img11").css({"width":"300px","height":"200px"})
  $(".img22").css({"width":"300px","height":"200px"})
  $(".img33").css({"width":"300px","height":"200px"})
  

  // function trial () {
    
  //   alert("clicked")
  // }



function convertKmToMiles(){
  
  alert("clicked")
return map(list,function(element) {
  return element.distance /1.609
})
}

  
  function convertKmToMiles(){
    
    alert("clicked")
  return map(list,function(element) {
    return element.distance /1.609
  })
  }
  
//   convertKmToMiles()
  
  function convertMilesToKm(){
    alert("clicked")
    // return map(list,function(element) {
    //   return element.distance * 1.609
    // })
    }
    
    // convertMilesToKm()
  
  
  
    function setHighestDistance(){
    
      alert("clicked")
      $(".hs").empty()
      
    return filter (list,function(element){
        return element.distance < number
      })
    }

    function setHighestDistance(){
      alert("clicked")
      $(".hs").empty()
      
    each (list,function (element){
      $(".hs").append(`
      ${element.distance} 
      `)
    })
    }


   
  
    // setHighestDistance(20)
  
    function setHighestTemperature(){
      alert("clicked")
    //   return filter (list,function(element){
    //     return element.distance < number
    //   })
    }
  
  
  
    // setHighestTemperature
  
  $("#img1").click(function(){
    $(".img11").toggleClass("active");
  })
  $("#img2").click(function(){
    $(".img22").toggleClass("active");
  })
  $("#img3").click(function(){
    $(".img33").toggleClass("active");
  })
  
  
  
  
  var list=[gover1,gover2,gover3]
  
  function sortbyDistance(){
   alert("clicked")
    console.log("sortbyDistance clicked")
    //   list.sort(function(a,b){
    //     return  a.distance - b.distance
    //   })
  
  }
  
    
  function sortbyTemperature () {
    alert("clicked")
   console.log("sortbyTemperature clicked")
    // list.sort(function(a,b){
    // return  a.temperature - b.temperature
    // } ) 
   }
  
  
  
  