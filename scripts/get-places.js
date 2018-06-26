var images = [
    "https://site.universalorlando.com/military/Images/16-17373-VB16_tcm55-59261.jpg",
    "https://orlandoinformer.com/wp-content/uploads/2017/11/20171117-_DSC2645.jpg",
    "https://c1.staticflickr.com/6/5153/14538826251_32dea7f9d7_b.jpg",
    "https://exp.cdn-hotels.com/hotels/11000000/10990000/10980400/10980371/5869dbac_z.jpg",
    "https://travel.usnews.com/static-travel/images/destinations/18/venice_beach.jpg",
    "https://www.aquaviewmotel.com/wp-content/uploads/2017/01/Panama-City-Beach-at-night.jpg",
    "http://www.id8propertysolutions.com/wp-content/uploads/2017/08/Savannah-Overhead-View.jpg"
  ];
  
  var placesIveBeen = [
    "Universal Orland Resort",
    "Hogwarts Castle, Hogsmeade",
    "Diagon Alley",
    "Hollywood, California",
    "Venice Beach",
    "Panama City Beach, Florida",
    "Savannah, Georgia"
  ];
  
  var placesOutput = "";
  var namesOutput = "";
  // for(var i = 0; i < images.length; i++){
  //   placesOutput += `<img src="${images[i]}">`
  // }
  // var populatePlaces = function(){
  
  // }
  $("#see-places").click(function(){
    for(var i = 0; i < images.length; i++){
       //  placesOutput += `<img src="${images[i]}">`;
       //  namesOutput = `<p>${placesIveBeen[i]}</p>`;
       // cardOutput = (placesOutput += namesOutput)
      $("#output-places").append(`<div class="card-places"><img class="places-img" src="${images[i]}"><p id="places-p">${placesIveBeen[i]}</p></div>`);
  
  }
    $("#see-places").hide()
  })
  
  var entertainmentImages = [
    "https://c1.staticflickr.com/9/8356/8327376280_313fa47d3d_b.jpg",
    "https://c1.staticflickr.com/1/316/18679295525_f39cc1bc70_z.jpg",
    "https://www.laprensagrafica.com/__export/1511963732823/sites/prensagrafica/img/2017/11/29/avengers.jpg",
    "https://c1.staticflickr.com/5/4458/37595052762_ca93342246_b.jpg",
    "http://static.adweek.com/adweek.com-prod/wp-content/uploads/2017/12/star-wars-the-last-jedi-final-hed-2017.jpg",
    "http://digitalspyuk.cdnds.net/16/37/980x490/landscape-1473684589-disney-pixar.jpg",
    "https://c1.staticflickr.com/6/5585/14401114021_384ca81c45_b.jpg"
  ]
  
  var entertainmentNames = [
    "Harry Potter",
    "Game of Thrones",
    "Marvel Cinematic Universe",
    "Stranger Things",
    "Star Wars",
    "Disney Pixar",
    "Sherlock"
  ]
  
  $("#see-interests").click(function(){
    for(var i = 0; i < entertainmentImages.length; i++){
       //  placesOutput += `<img src="${images[i]}">`;
       //  namesOutput = `<p>${placesIveBeen[i]}</p>`;
       // cardOutput = (placesOutput += namesOutput)
      $("#output-interests").append(`<div class="card-interests"><img class="interests-img" src="${entertainmentImages[i]}"><p id="interests-p">${entertainmentNames[i]}</p></div>`);
  
  }
    $("#see-interests").hide()
  })