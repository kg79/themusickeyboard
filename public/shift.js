
//right shift
function shift() {

    let startingPoint;
    let array = [];
    for (let i = 0; i < keyCodes.length; i++) {
        if (keyCodes[i].symb == startAt.value || keyCodes[i].symb.toLowerCase() == startAt.value) {
            startingPoint = i;
        }
    }

    for (let i = startingPoint; i < 30 - startingPoint; i++) {
        if (typeof eval(fractions[i].textContent) == 'number') {
            array.push(fractions[i].textContent);
        }
    }

    fractions[startingPoint].textContent = `0/0`;
    decimals[startingPoint].textContent = '0.0';
    values[startingPoint].textContent = '0';


let count = 0;
    for (let i = startingPoint+1; i <= array.length+startingPoint; i++) {
        fractions[i].innerText = array[count];
        decimals[i].innerText = eval(array[count]);
        values[i].innerText = stdPitch.value* eval(array[count]);
        count++;
    }
}



function leftShift() {
    

    let startingPoint;

    for (let i = 0; i < keyCodes.length; i++) {
        if (keyCodes[i].symb.toLowerCase() == leftStartAt.value.toLowerCase()) {
            startingPoint = i;
        }
    }

    let leftSide = [];

    for (let i = startingPoint; i >= 0; i--) {
            leftSide.push(fractions[i].textContent)
    }


    fractions[startingPoint].textContent = `0/0`;
    decimals[startingPoint].textContent = '0.0';
    values[startingPoint].textContent = '0';


    let count = 0;
    for (let i = startingPoint-1; i >= 0; i--) {
        fractions[i].innerText = leftSide[count];
        decimals[i].innerText = eval(leftSide[count]);
        values[i].innerText = stdPitch.value* eval(leftSide[count]);
        count++;
    }

}

