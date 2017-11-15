document.getElementById('loc-select').addEventListener('change', function() {
  var locSelected = document.getElementById('loc-select').value;
  console.log("You live in " + locSelected);
  var locIMG = '<img src="img/' + locSelected + '.png">';
  var locHTML = ''


  if (locSelected === "Choose"){
    locHTML = ''
  }else if (locSelected === "Camden, NJ") {
    locHTML = 'You are in Camden, and it\'s a food desert'
  }else if (locSelected === "The Sahara"){
    locHTML = 'You are in the Sahara, and it\'s a food desert'
  }else if (locSelected === "Margaritaville"){
    locHTML = 'You are in Margaritaville, and it\'s NOT a food desert because you probably have limes or lemons'
  }else if (locSelected === "Greensgrow Farms"){
    locHTML = 'You are in Greensgrow Farms, and it\'s NOT a food desert'
  }else if (locSelected === "PostApocalypse"){
    locHTML = 'You are in a post-apocalyptic world devastated by nuclear explosions, and it\'s a food desert, but don\'t worry, you will die of cancer before starvation'
  }

  document.getElementById('loc-output').innerHTML = locHTML + locIMG
})
