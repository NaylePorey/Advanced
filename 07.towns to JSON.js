function townToJSON(arr){
    const final = [];


    for(let i = 1; i < arr.length; i++){
        let [, town, latitude, longitude] = arr[i].split('|');

        final.push({
            Town: town.trim(),
            Latitude: JSON.parse(Number(latitude).toFixed(2)),
           Longitude: JSON.parse(Number(longitude).toFixed(2))
            
        })
    }

    console.log(JSON.stringify(final));

}