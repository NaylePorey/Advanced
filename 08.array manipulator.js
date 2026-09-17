function arrayManipulator(nums, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'add') {
            let index = Number(tokens.shift());
            let el = Number(tokens.shift());
            nums.splice(index, 0, el);

        } else if (action === 'addMany') {
            let index = Number(tokens.shift());
            // Превръщаме останалите стрингове в числа
            let els = tokens.map(Number);
            nums.splice(index, 0, ...els);

        } else if (action === 'contains') {
            let el = Number(tokens.shift());
            console.log(nums.indexOf(el));

        } else if (action === 'remove') {
            let index = Number(tokens.shift());
            nums.splice(index, 1);

        } else if (action === 'shift') {
            let rotations = Number(tokens.shift());
            for (let i = 0; i < rotations; i++) {
                let firstEl = nums.shift();
                nums.push(firstEl);
            }

        } else if (action === 'sumPairs') {
            let pairSums = [];
            for (let i = 0; i < nums.length; i += 2) {
                let currentNum = nums[i];
                let nextNum = nums[i + 1];

                
                if (nextNum !== undefined) {
                    pairSums.push(currentNum + nextNum);
                } else {
                    pairSums.push(currentNum);
                }
            }  
            nums = pairSums;

        } else if (action === 'print') {
            console.log(`[ ${nums.join(', ')} ]`);
            break; 
        }
    }
}

arrayManipulator(,["add 1 8", "contains 1", "contains 3", "print"]
);