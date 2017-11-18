document.getElementById('loc-select').addEventListener('change', function() {
  var locSelected = document.getElementById('loc-select').value;
  console.log("You live in " + locSelected);
  var locIMG = '<img src="../img/' + locSelected + '.jpg">';
  var locHTML = ''


  if (locSelected === "Choose"){
    locHTML = ''
  }else if (locSelected === "Camden") {
    locHTML = '<p>You are in Camden, and it\'s a food desert</p>'
  }else if (locSelected === "Sahara"){
    locHTML = '<p>You are in the Sahara, and it\'s a food desert</p>'
  }else if (locSelected === "Margaritaville"){
    locHTML = '<p>You are in Margaritaville, and it\'s NOT a food desert because you probably have limes or lemons</p>'
  }else if (locSelected === "banner"){
    locHTML = '<p>You are in Greensgrow Farms, and it\'s NOT a food desert</p>'
  }else if (locSelected === "Apocalypse"){
    locHTML = '<p>You are in a post-apocalyptic world devastated by nuclear explosions, and it\'s a food desert, but don\'t worry, you will die of cancer before starvation</p>'
  }

  document.getElementById('loc-output').innerHTML = locHTML + locIMG
})
