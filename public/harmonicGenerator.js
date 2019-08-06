
let descendingPool = [];

//ascending harmonics
function harmonicsGenerator() {
    if (ascending === true) {
        //generate harmonics
        let numerator = 2, denominator = 1;
        ascendingPool.push({'fractions':'1/1','decimals':1/1});
        for (let i = 0; i < range.value; i++) {
            if (numerator > denominator) {
                    ascendingPool.push({'fractions':`${numerator}/${denominator}`,'decimals':numerator/denominator});
                denominator++;
            }
            if (denominator === numerator) {
                denominator = 1;
                numerator++;
            }
        }
        // //bubble sort
        let sideA, sideB;
        for (let i = 0; i < ascendingPool.length; i++) {
            for (let j = 1; j < ascendingPool.length; j++) {
                if (ascendingPool[j].decimals < ascendingPool[j-1].decimals) {
                    sideA = ascendingPool[j].decimals;
                    sideB = ascendingPool[j].fractions;
                    ascendingPool[j].decimals = ascendingPool[j-1].decimals;
                    ascendingPool[j].fractions = ascendingPool[j-1].fractions;
                    ascendingPool[j-1].decimals = sideA;
                    ascendingPool[j-1].fractions = sideB;
                }
            }
        }
        //trim
        for (let i = 1; i < ascendingPool.length; i++) {
            if (ascendingPool[i].decimals === ascendingPool[i-1].decimals) {
                while (ascendingPool[i].decimals === ascendingPool[i-1].decimals) {
                    ascendingPool.splice(i, 1);
                }
            }
        }
        //remove existing
        while (harmonics.length) {
            for (let i = 0; i < harmonics.length; i++) {
                harmonics[i].parentElement.removeChild(harmonics[i])
            }
        }
        
        //create elements and render
        let decimalNode, decimalText, fractionNode, fractionText;
        
        for (let i = 0; i < range.value; i++) {
        
            decimalNode = document.createElement(`section`);
            decimalNode.setAttribute('class', 'harmonics')
            decimalText = document.createTextNode(`${ascendingPool[i].decimals.toPrecision(5).replace(/0+$/, '')}`);
            decimalNode.appendChild(decimalText);
            stairsInside.appendChild(decimalNode);
        
            fractionNode = document.createElement(`section`);
            fractionNode.setAttribute('class', 'harmonics')
            fractionText = document.createTextNode(`${ascendingPool[i].fractions}`);
            fractionNode.appendChild(fractionText);
            stairsInside.appendChild(fractionNode);
        }
    } 
    if (descending === true) {
        
       
        //generate descendingHarmonics
        let numerator = 1, denominator = 2;

        descendingPool.push({'fractions':'1/1','decimals':1/1});
        for (let i = 0; i < range.value; i++) {
            if (numerator < denominator) {
                descendingPool.push({'fractions':`${numerator}/${denominator}`,'decimals':numerator/denominator});
                numerator++;
            }
            if (denominator === numerator) {
                numerator = 1;
                denominator++;
            }
        }
        // // //bubble sort
        let sideA, sideB;
        for (let i = 0; i < descendingPool.length; i++) {
            for (let j = 1; j < descendingPool.length; j++) {
                if (descendingPool[j].decimals > descendingPool[j-1].decimals) {
                    sideA = descendingPool[j].decimals;
                    sideB = descendingPool[j].fractions;
                    descendingPool[j].decimals = descendingPool[j-1].decimals;
                    descendingPool[j].fractions = descendingPool[j-1].fractions;
                    descendingPool[j-1].decimals = sideA;
                    descendingPool[j-1].fractions = sideB;
                }
            }
        }
        // //trim
        for (let i = 1; i < descendingPool.length; i++) {
            if (descendingPool[i].decimals === descendingPool[i-1].decimals) {
                while (descendingPool[i].decimals === descendingPool[i-1].decimals) {
                    descendingPool.splice(i, 1);
                }
            }
        }
        // clear existing if any
        while (descendingHarmonics.length) {
            for (let i = 0; i < descendingHarmonics.length; i++) {
                descendingHarmonics[i].parentElement.removeChild(descendingHarmonics[i])
            }
        }
        
        
        let decimalNode, decimalText, fractionNode, fractionText;
        
        
        for (let i = 0; i < range.value; i++) {
        
            decimalNode = document.createElement(`section`);
            decimalNode.setAttribute('class', 'descendingHarmonics')
            decimalText = document.createTextNode(`${descendingPool[i].decimals.toPrecision(5).replace(/0+$/, '')}`);
            decimalNode.appendChild(decimalText);
            stairsInside.appendChild(decimalNode);
        
            fractionNode = document.createElement(`section`);
            fractionNode.setAttribute('class', 'descendingHarmonics')
            fractionText = document.createTextNode(`${descendingPool[i].fractions}`);
            fractionNode.appendChild(fractionText);
            stairsInside.appendChild(fractionNode);
        }
        
    }


    

    }


