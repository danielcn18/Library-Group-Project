function readMoreReadLess(){
    console.log("TEST")
    if(document.getElementsByClassName("bkd")){
        let maxWordCount = 100;
        let books = document.getElementsByClassName("bkd"); // book description id
        console.log("TEST TOO");
        for(let i = 0; i < books.length; i++){
            if(books[i].innerHTML.length > maxWordCount){
                let part1 = books[i].innerHTML.substring(0, maxWordCount);
                let part2 = books[i].innerHTML.substring(maxWordCount+1);
                let dots = document.createElement('span');
                dots.appendChild(document.createTextNode("..."));
                dots.setAttribute('class', 'dots');
                let more = document.createElement('span');
                more.innerHTML += (part2); // error w/ more (view elements with inspect
                more.setAttribute('class', 'more');
                let newString = part1 + dots + more;
                /* books[i].innerHTML = newString;  */ // replaces code (will do after code is fixed & has no more bugs)
            }
        }
        console.log("TEST FOUR")
    }
}

// splice(), concat(), length(), substring()