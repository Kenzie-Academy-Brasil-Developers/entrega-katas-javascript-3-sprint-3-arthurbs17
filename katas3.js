const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(n){

    let divNova = document.createElement("div");

    let kata = document.createTextNode(n);
    
    divNova.appendChild (kata);

    let destination = document.getElementById("katas");

    destination.appendChild(divNova);
}

function kata1() {
    // implemente o código do kata 1 aqui
    let arrayKata = [];
    for (let i = 1; i <= 25; i++){
        arrayKata.push(i)
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata2() {
    // implemente o código do kata 2 aqui
    let arrayKata = [];
    for (let i = 25; i >= 1; i--){
        arrayKata.push(i)
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata3() {
    // implemente o código do kata 3 aqui
    let arrayKata = [];
    for (let i = -1; i >= -25; i--){
        arrayKata.push(i)
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata4() {
    // implemente o código do kata 4 aqui
    let arrayKata = [];
    for (let i = -25; i <= -1; i++){
        arrayKata.push(i)
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata5() {
    // implemente o código do kata 5 aqui
    let arrayKata = [];
    for (let i = -25; i <= 25; i++){
        if (i % 2 !== 0){
            arrayKata.push(i)
        }
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata6() {
    // implemente o código do kata 6 aqui
    let arrayKata = [];
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0){
            arrayKata.push(i)
        }
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata7() {
    // implemente o código do kata 7 aqui
    let arrayKata = [];
    for (let i = 1; i <= 100; i++){
        if (i % 7 === 0){
            arrayKata.push(i)
        }
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata8() {
    // implemente o código do kata 8 aqui
    let arrayKata = [];
    for (let i = 100; i >= 1; i--){
        if (i % 7 === 0 || i % 3 === 0){
            arrayKata.push(i)
        }
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata9() {
    // implemente o código do kata 9 aqui
    let arrayKata = [];
    for (let i = 1; i <= 100; i++){
        if (i % 5 === 0 && i % 2 !== 0){
            arrayKata.push(i)
        }
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata10() {
    // implemente o código do kata 10 aqui
    resultKata = sampleArray.join(", ")
    
    showResults(resultKata);
}

function kata11() {
    // implemente o código do kata 11 aqui
    let arrayKata = [];
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 === 0){
            arrayKata.push(sampleArray[i])
        }
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata12() {
    // implemente o código do kata 12 aqui
    let arrayKata = [];
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 !== 0){
            arrayKata.push(sampleArray[i])
        }
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata13() {
    // implemente o código do kata 13 aqui
    let arrayKata = [];
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 8 === 0){
            arrayKata.push(sampleArray[i])
        }
    }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata14() {
    // implemente o código do kata 14 aqui
    let arrayKata = [];

    for (let i = 0; i < sampleArray.length; i++){
        arrayKata.push(sampleArray[i]**2)
        }

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata15() {
    // implemente o código do kata 15 aqui
    let arrayKata = [];
    let sumValor = 0

    for (let i = 1; i <= 20; i++){
        sumValor += i
    }
    
    arrayKata.push(sumValor)

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata16() {
    // implemente o código do kata 16 aqui
    let arrayKata = [];
    let sumValor = 0

    for (let i = 0; i < sampleArray.length; i++){
        sumValor += sampleArray[i]
    }
    
    arrayKata.push(sumValor)

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata17() {
    // implemente o código do kata 17 aqui
    let arrayKata = [];
    let minValor = sampleArray[0]

    for (let i = 0; i < sampleArray.length; i++){
        
        if (sampleArray[i] <= minValor){
            minValor = sampleArray[i]
        }
    }
    
    arrayKata.push(minValor)

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

function kata18() {
    // implemente o código do kata 18 aqui
    let arrayKata = [];
    let maxValor = sampleArray[0]

    for (let i = 0; i < sampleArray.length; i++){
        
        if (sampleArray[i] >= maxValor){
            maxValor = sampleArray[i]
        }
    }
    
    arrayKata.push(maxValor)

    resultKata = arrayKata.join(", ");

    showResults(resultKata);
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

 function showBox(n){

    let divNova = document.createElement("div");

    let ulBox = document.createElement("ul");

    divNova.appendChild(ulBox);

    for (let i = 0; i < n.length; i++){
        let liBox = document.createElement("li");
        ulBox.appendChild(liBox);
    }

    let destination = document.getElementById("box");

    destination.appendChild(divNova);
}

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    let boxes = []
    for (let i = 1; i <= 20; i++){
        boxes.push(i)
    }

    showBox(boxes)
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
    let boxes = document.querySelectorAll('#box > div > ul > li:nth-child(n)');
    let boxArrays = [...boxes];
    let boxSizes = [];
    let firstSize = 100

    for (let i = 0; i < boxArrays.length; i++){
        firstSize += 5
        boxSizes.push(firstSize);
    }

    for (let i = 0; i < boxArrays.length; i++){
        boxArrays[i].style.width = boxSizes[i].toString()+'px'
    }
    
    showBox(boxArrays)
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    let boxes = document.querySelectorAll('#box > div > ul > li:nth-child(n)');
    let boxArrays = [...boxes];
    let boxSizes = [];
    let firstSize = 100

    for (let i = 0; i < boxArrays.length; i++){
        firstSize += 5
        boxSizes.push(firstSize);
    }

    for (let i = 0; i < boxArrays.length; i++){
        boxArrays[i].style.width = sampleArray[i].toString()+'px'
    }

    showBox(boxArrays)
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}

kata1();
kata2();
kata3();
kata4();
kata5();
kata6();
kata7();
kata8();
kata9();
kata10();
kata11();
kata12();
kata13();
kata14();
kata15();
kata16();
kata17();
kata18();

kataBonus1();
kataBonus2();
kataBonus3();