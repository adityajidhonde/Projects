function updateMap(){
    fetch("/data.json")
    .then(response => response.json())
    
}

updateMap();