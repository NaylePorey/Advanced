function magicCards(input){
    let originalDeck = input[0].split(':');

    let newDeck = [];

    for (let currentLine of input.slice(1)) {
        if (currentLine === 'Ready') {
            break; 
        }

        let tokens = currentLine.split(' ');
        let command = tokens[0];

        if (command === 'Add') {
            let cardName = tokens[1];
            if (originalDeck.includes(cardName)) {
                newDeck.push(cardName);
            } else {
                console.log('Card not found.');
            }
        }else if (command === 'Insert') {
            let cardName = tokens[1];
            let index = Number(tokens[2]);
            
            if (originalDeck.includes(cardName) && index >= 0 && index <= newDeck.length) {
                newDeck.splice(index,0, cardName);
            } else {
                console.log('Error!');
            }
        }else if (command === 'Remove') {
            let cardName = tokens[1];
            let indexInNew = newDeck.indexOf(cardName);
            
            if (indexInNew !== -1) {
                newDeck.splice(indexInNew, 1);
            } else {
                console.log('Card not found.');
            }
        }else if (command === 'Swap') {
            let card1 = tokens[1];
            let card2 = tokens[2];
            
            let index1 = newDeck.indexOf(card1);
            let index2 = newDeck.indexOf(card2);
            
            [newDeck[index1], newDeck[index2]] = [newDeck[index2], newDeck[index1]];
        }else if (command === 'Shuffle') {
            newDeck.reverse();
        }
    }

   
    console.log(newDeck.join(' '));
}

magicCards(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
"Add UndergroundSea",
"Add Timetwister",
"Remove Wrath",
"Add CopyArtifact",
"Shuffle deck",
"Ready"]);



