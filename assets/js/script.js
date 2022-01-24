(() => {
    var btn1 = document.getElementById("btn1")
    var btn2 = document.getElementById("btn2")
    var btn3 = document.getElementById("btn3")
    var btn4 = document.getElementById("btn4")
    var arrayColor = ["red", "yellow", "blue", "green", "white", "orange"]
    var mastermind = []
    var arrayPlayer = [];
    var arrayStyleColor = ["background-color: red","background-color: yellow","background-color: blue","background-color: green","background-color: white","background-color: orange",]
    var i1 = 0;
    var i2 = 0;
    var i3 = 0;
    var i4 = 0;
    // var divButton = document.getElementById("button")
    // var ltAlSub = document.getElementById("ltAlSub")
    // console.log(ltAlSub)
    for (let x = 0; x < 4; x++) {
        mastermind.push(arrayColor[Math.floor(Math.random()*arrayColor.length)]);
    }

    var div; //= document.createElement("div")
    var z = 0
    function createColor(){
        div = document.createElement("div")
        var before = document.getElementById('wordFind')
        div.setAttribute("class", "remenber")
        div.setAttribute("id", "div"+z)
        //var span = `<span id="span${i}">_ </span>`
        for (let i = 1; i < 5; i++) {
            div.innerHTML += `<span class="span" style="background-color: ${arrayPlayer[i-1]}"id="span${i}"></span>`
        }
        document.getElementById("container").insertBefore(div, before)
        z++
    }
    
    document.getElementById("btn1").addEventListener("click", ()=> {
        if (i1 == 6) {
            i1 = 0;
        }
        btn1.setAttribute("style", arrayStyleColor[i1])
        i1++
    });
    
    document.getElementById("btn2").addEventListener("click", ()=> {
        if (i2 == 6) {
            i2 = 0;
        }
        btn2.setAttribute("style", arrayStyleColor[i2])
        i2++
    });
    
    document.getElementById("btn3").addEventListener("click", ()=> {
        if (i3 == 6) {
            i3 = 0;
        }
        btn3.setAttribute("style", arrayStyleColor[i3])
        i3++
    });
    
    document.getElementById("btn4").addEventListener("click", ()=> {
        if (i4 == 6) {
            i4 = 0;
        }
        btn4.setAttribute("style", arrayStyleColor[i4])
        i4++
    });

    var tryLeft = 12;
    var win = false

    document.getElementById("check").addEventListener("click", ()=> {
        if (win) {
            return 
        }
        tryLeft--

        console.log("master :"+mastermind)

        var coppyMastermind = [...mastermind];
        arrayPlayer = [];
        arrayPlayer.push(btn1.style.backgroundColor);
        arrayPlayer.push(btn2.style.backgroundColor);
        arrayPlayer.push(btn3.style.backgroundColor);
        arrayPlayer.push(btn4.style.backgroundColor);
        createColor()
        var copyArrayPlayer = [...arrayPlayer]
        if (JSON.stringify(arrayPlayer) == JSON.stringify(mastermind)) {
            alert("You're all good!")
            tryLeft = 0
        }else{
            var countCorrectPlace = 0
            var countCorrectNotPlace = 0
            var i = 0
            while (i < 4) {
                if (arrayPlayer[i] == mastermind[i]) {
                    countCorrectPlace++
                }
                i++
            }
            //console.log("player :"+arrayPlayer)

            var v = coppyMastermind.length-1
            while (v >= 0) {
                if (copyArrayPlayer[v] == coppyMastermind[v]) {
                    copyArrayPlayer.splice(v, 1)
                    coppyMastermind.splice(v, 1)
                    // console.log(copyArrayPlayer)
                    // console.log(coppyMastermind)
                }
                v--
            }
            for (let w = (copyArrayPlayer.length-1); w >= 0; w--) {
                var color = copyArrayPlayer[w]
                if (coppyMastermind.includes(color)) {
                        countCorrectNotPlace++
                        copyArrayPlayer.splice(w, 1)
                        coppyMastermind.splice(coppyMastermind.indexOf(color), 1)
                //         console.log("copy master : "+coppyMastermind)
                //         console.log("copy player : "+copyArrayPlayer)
                //         console.log(color)
                //         console.log(coppyMastermind.indexOf(color))
                //         console.log(w)
                //         console.log(copyArrayPlayer.length-1)
                //         console.log(copyArrayPlayer.length)
                }
            }
            div.innerHTML += `<span>You have ${countCorrectPlace} color at the correct place & ${countCorrectNotPlace} not at the correct place & ${tryLeft} try left</span>`
        }

        if (tryLeft == 0) {
            win = true 
        }
    });
    
})();