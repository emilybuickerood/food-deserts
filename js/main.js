document.getElementById('loc-select').addEventListener('change', function() {
  var locSelected = document.getElementById('loc-select').value;
  console.log("You live in " + locSelected);
  var locHTML = ''
  var locIMG = ''

  if (locSelected === "Choose"){
    document.getElementById('loc-output').innerHTML = ''
  }else if (locSelected === "Camden, NJ") {
    document.getElementById('loc-output').innerHTML = 'You are in Camden, and it\'s a food desert'
  }else if (locSelected === "The Sahara"){
    document.getElementById('loc-output').innerHTML = 'You are in the Sahara, and it\'s a food desert'
  }else if (locSelected === "Margaritaville"){
    document.getElementById('loc-output').innerHTML = 'You are in Margaritaville, and it\'s NOT a food desert because you probably have limes or lemons'
  }else if (locSelected === "Greensgrow Farms"){
    document.getElementById('loc-output').innerHTML = 'You are in Greensgrow Farms, and it\'s NOT a food desert'
  }else if (locSelected === "PostApocalypse"){
    document.getElementById('loc-output').innerHTML = 'You are in a post-apocalyptic world devastated by nuclear explosions, and it\'s a food desert, but don\'t worry, you will die of cancer before starvation'
  }
})
