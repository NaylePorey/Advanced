function books(input){
     let genres = input[0].split(' | ');
    let inputIndex = 1;
    let currentLine = input[inputIndex++];

    while (currentLine !== 'Stop!'){
        let tokens = currentLine.split(' ');
        let command = tokens[0];

        if (command === 'Join') {
            let genre = tokens[1];
            let index = genres.indexOf(genre);
            
            if (index === -1) { 
                genres.push(genre);
            }
        }else if (command === 'Drop') {
            let genre = tokens[1];
            let index = genres.indexOf(genre); 
            
            if (index !== -1){
                genres.splice(index, 1); 
            }
        }else if (command === 'Replace'){
            let oldGenre = tokens[1];
            let newGenre = tokens[2];
            
            let oldIndex = genres.indexOf(oldGenre); 
            let newIndex = genres.indexOf(newGenre);

            if (oldIndex !== -1 && newIndex === -1){
                genres[oldIndex] = newGenre;
            }
        }else if (command === 'Prefer'){
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]);

            if (index1 >= 0 && index1 < genres.length && index2 >= 0 && index2 < genres.length) {
                [genres[index1], genres[index2]] = [genres[index2], genres[index1]];
            }
        }

        currentLine = input[inputIndex++];
    }

    console.log(genres.join(' '));
}

books(["Romance | Fiction | Horror | Mystery",
"Drop Romance",
"Join Fantasy",
"Prefer 1 2",
"Stop!"]);
