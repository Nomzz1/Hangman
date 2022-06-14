let wordlist = ['VISION', 'LOITERER', 'OBSERVATORY', 'CENTURY', 'ATLANTIS', 'KILOGRAM', 'NEUTRON', 'STOWAWAY', 'PSYCHOLOGIST', 'EXPONENTIAL', 'ARISTOCRAT', 'EUREKA', 'PARODY', 'CARTOGRAPHY', 'FIGMENT', 'PHILOSOPHER', 'TINTING', 'OVERTURE', 'OPAQUE', 'EVERGLADES', 'IRONIC', 'ZERO', 'LANDFILL', 'IMPLODE', 'TSAR', 'ARMADA', 'CRISP', 'STOCKHOLDER', 'INQUISITION', 'MOOCH', 'GALLOP', 'ARCHAEOLOGIST', 'BLACKSMITH', 'ADDENDUM', 'UPGRADE', 'HANG', 'TEN', 'ACRE', 'TWANG', 'MINE', 'CAR', 'PROTESTANT', 'BRUNETTE', 'STOUT', 'QUARANTINE', 'TUTOR', 'POSITIVE', 'CHAMPION', 'PASTRY', 'TOURNAMENT', 'RAINWATER', 'RANDOM', 'LYRICS', 'ICE', 'FISHING', 'CLUE', 'FLUTTER', 'SLUMP', 'LIGAMENT', 'FLOTSAM', 'SIESTA', 'POMP','SCEPTIC', 'BINOCULARS', 'KANGAROO', 'KAYAK', 'YACHT', 'BLUEPRINT', 'PINEAPPLE', 'WRISTWATCH', 'ARREST', 'LADYBUG', 'SELECTION', 'CRY', 'LEWD', 'DAMAGING', 'SHORT', 'LITTLE', 'WORM', 'CONFUSE', 'TOYS', 'PHOBIC', 'RECEPTIVE', 'HABITUAL', 'CLAP', 'REGRET', 'DAUGHTER', 'PROPERTY', 'PEEP', 'CANVAS', 'FEARLESS', 'PLOUGH', 'SPOTTED', 'GHOST', 'WORD', 'ADVICE', 'BOAST', 'PSYCHEDELIC', 'BOARD', 'UGLY', 'KNOWLEDGEABLE', 'HISTORY', 'YEAR', 'EQUABLE', 'SUGGEST', 'BENT', 'HELP', 'NATURAL', 'JEALOUS', 'STRETCH', 'BORE', 'FILE', 'GREASY', 'BELLS', 'VIVACIOUS', 'SPOON', 'GOVERNMENT', 'DESCRIPTIVE', 'KICK', 'REPLACE', 'BOMB', 'PLANT', 'TIRED', 'BELIEF', 'SWEET', 'SORDID', 'BLESS', 'PUNCH', 'LOWLY', 'SPROUT', 'FAINT', 'LIGHTEN', 'SPONGE', 'IGNORE', 'ATTRACT', 'DAPPER', 'MONEY', 'LYING', 'MILKY', 'GROTESQUE', 'GLAMOROUS', 'MACHINE', 'DOLLS', 'WITTY', 'WARY', 'ACID', 'SUPERFICIAL', 'GUILTLESS', 'INNOCENT', 'CROWN', 'COLLAR', 'CUP', 'SPOOKY', 'LUNCHROOM', 'TRY', 'MAKESHIFT', 'COLOUR', 'FEEBLE', 'SATISFY', 'FINGER', 'MELLOW', 'PHYSICAL', 'MILK', 'ADMIT', 'DEAD', 'SMELLY', 'MELTED', 'RIDDLE', 'IMPERFECT', 'RIVER', 'CARD', 'BERRY', 'CURVY', 'COIL', 'USE', 'FILL', 'THAW', 'LEGS', 'CHEER', 'DEFEATED', 'THREAD', 'FIXED', 'SPIKY', 'CROWDED', 'SMELL', 'BORED', 'HOLE', 'OUTGOING', 'SKIP', 'OCEANIC', 'RESPECT', 'SUBSTANTIAL', 'ABSORBED', 'REWARD', 'JAR', 'NOTICE', 'CARELESS', 'BED', 'OBSCENE', 'OFFER', 'SHOP', 'TACIT', 'TREES', 'STEAM', 'TOP', 'UNUSUAL', 'WING', 'SPOTLESS', 'TIRE', 'GREASE', 'MUDDLED', 'BETTER', 'DYSFUNCTIONAL', 'MEETING', 'FORCE', 'IRRITATING', 'DRUNK', 'TABOO', 'HATE', 'CAPTION', 'SAND', 'CHANNEL', 'BOW', 'LAZY', 'VASE', 'SWIM', 'NORMAL', 'LEVEL', 'SOLID', 'FARM', 'SUBSTANCE', 'IRRITATE', 'HARSH', 'METAL', 'ANGLE', 'TEENY', 'PAINT', 'DAMAGE', 'BLACK', 'PROFUSE', 'LOAF', 'SHINY', 'SHOCKING', 'TRICK', 'BILLOWY', 'JOIN', 'DAY', 'MATERIALISTIC', 'CONSCIOUS', 'HALLOWED', 'SHUT', 'UNIQUE', 'CHASE', 'DETAILED', 'ENERGETIC', 'DISTINCT', 'RAIN', 'LARGE', 'DEVELOP', 'HONEY', 'SCARCE', 'TIGER', 'SORT', 'TREE', 'COMMAND', 'COMMITTEE', 'SUIT', 'THROAT', 'BARE', 'BUZZ'];
let word = wordlist[Math.floor(Math.random() * wordlist.length)];
let guesses = [];
let numberOfGuesses = -1
let A = "A",B = "B",C = "C",D = "D",E = "E",F = "F",G = "G",H = "H",I = "I",J = "J",K = "K",L = "L",M = "M",N = "N",O = "O",P = "P",Q = "Q",R = "R",S = "S",T = "T",U = "U",V = "V",W = "W",X = "X",Y = "Y",Z = "Z";
function guess(id){
    document.getElementById(id).remove()
    guesses.push(id);
    let bigword = "";
    let correct = 0;
    for (let i = 0, len = word.length; i < len; i++){
        if (guesses.includes(word[i])){
            bigword += word[i] + " ";
            correct += 1;
        } else {
            bigword += "_ ";
        }
    };
    if (word.includes(id) == false){
        numberOfGuesses += 1
    } else if (id == "/"){
        numberOfGuesses += 1
    };
    document.getElementById("Word").innerHTML = bigword;
    switch(numberOfGuesses){
        case 0:
            break;
        case 1:
            document.getElementById("img").src = "images/1.png";
            break;
        case 2:
            document.getElementById("img").src = "images/2.png";
            break;
        case 3:
            document.getElementById("img").src = "images/3.png";
            break;
        case 4:
            document.getElementById("img").src = "images/4.png";
            break;
        case 5:
            document.getElementById("img").src = "images/5.png";
            break;
        case 6:
            document.getElementById("img").src = "images/6.png";
            break;
        case 7:
            document.getElementById("img").src = "images/7.png";
            break;
        case 8:
            document.getElementById("img").src = "images/8.png";
            break;
        case 9:
            document.getElementById("img").src = "images/9.png";
            document.getElementById("win message").innerHTML = "You Lose!\nThe word was "+word;
            document.getElementById("buttonWidth").remove();
            const resetButton = document.createElement("button");
            resetButton.setAttribute("onclick","window.location.reload()");
            resetButton.setAttribute("style","border-radius:10px");
            resetButton.innerHTML = "Reset Game.";
            document.getElementById("resetbutton").appendChild(resetButton);
            break;
    };
    if (correct == word.length){
        document.getElementById("win message").innerHTML = "You Win!";
        document.getElementById("buttonWidth").remove();
        const resetButton = document.createElement("button");
        resetButton.setAttribute("onclick","window.location.reload()");
        resetButton.setAttribute("style","border-radius:10px");
        resetButton.innerHTML = "Reset Game.";
        document.getElementById("resetbutton").appendChild(resetButton);
    };
    console.log(numberOfGuesses)
};
function ownWord(){
    word = prompt("Enter your own word below.\nPut it in all caps and use slashes as space.\nE.g. THIS/IS/MY/OWN/WORD");
    if(word == ""||word === null){
        document.getElementById("buttonWidth").remove();
        const resetButton = document.createElement("button");
        resetButton.setAttribute("onclick","window.location.reload()");
        resetButton.setAttribute("style","border-radius:10px");
        resetButton.innerHTML = "Reset Game.";
        document.getElementById("resetbutton").appendChild(resetButton);
    };
    document.getElementById("wordChoice").remove();
    document.getElementById("buttonWidth").style.display = "block";
    guess("/");
};
function randomWord(){
    document.getElementById("wordChoice").remove();
    document.getElementById("buttonWidth").style.display = "block";
    guess("/");
};
window.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
        case 65:
            guess(A);
            break;
        case 66:
            guess(B);
            break;
        case 67:
            guess(C);
            break;
        case 68:
            guess(D);
            break;
        case 69:
            guess(E);
            break;
        case 70:
            guess(F);
            break;
        case 71:
            guess(G);
            break;
        case 72:
            guess(H);
            break;
        case 73:
            guess(I);
            break;
        case 74:
            guess(J);
            break;
        case 75:
            guess(K);
            break;
        case 76:
            guess(L);
            break;
        case 77:
            guess(M);
            break;
        case 78:
            guess(N);
            break;
        case 79:
            guess(O);
            break;
        case 80:
            guess(P);
            break;
        case 81:
            guess(Q);
            break;
        case 82:
            guess(R);
            break;
        case 83:
            guess(S);
            break;
        case 84:
            guess(T);
            break;
        case 85:
            guess(U);
            break;
        case 86:
            guess(V);
            break;
        case 87:
            guess(W);
            break;
        case 88:
            guess(X);
            break;
        case 89:
            guess(Y);
            break;
        case 90:
            guess(Z);
            break;
    }
});