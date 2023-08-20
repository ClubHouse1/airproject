// Dados do banco de nomes (pode ser uma lista maior)
const namesDatabase = [
    "ALICE PATTEL  //  Patel,Alice   // number : 0000000 ",
    "ALEX SMITH   //   Smith,Alex   //   number:111111",
    "AMANDA JOHNSON   //   Johnson,Amanda   //   number:222222",
    "ANDREW BROWN   //   Brown,Andrew   //   number:333333",
    "BELLA MARTINEZ   //   Martinez,Bella   //   number:444444",
    "BENJAMIN GARCIA   //   Garcia,Benjamin   //   number:555555",
    "CHARLOTTE WILSON   //   Wilson,Charlotte   //   number:666666",
    "CHRISTOPHER DAVIS   //   Davis,Christopher   //   number:777777",
    "DAVID HERNANDEZ   //   Hernandez,David   //   number:888888",
    "EMMA LOPEZ   //   Lopez,Emma   //   number:999999",
    "ETHAN GONZALEZ   //   Gonzalez,Ethan   //   number:123456",
    "GRACE RODRIGUEZ   //   Rodriguez,Grace   //   number:654321",
    "HANNAH MARTINEZ   //   Martinez,Hannah   //   number:987654",
    "ISABELLA HERNANDEZ   //   Hernandez,Isabella   //   number:246813",
    "JACK GARCIA   //   Garcia,Jack   //   number:135792",
    "JACOB WILSON   //   Wilson,Jacob   //   number:111222",
    "JAMES BROWN   //   Brown,James   //   number:222333",
    "LIAM JOHNSON   //   Johnson,Liam   //   number:333444",
    "LILY SMITH   //   Smith,Lily   //   number:444555",
    "LUCAS MARTINEZ   //   Martinez,Lucas   //   number:555666",
    "MIA GARCIA   //   Garcia,Mia   //   number:666777",
    "OLIVIA WILSON   //   Wilson,Olivia   //   number:777888",
    "SOPHIA DAVIS   //   Davis,Sophia   //   number:888999",
    "WILLIAM HERNANDEZ   //   Hernandez,William   //   number:999000",
    "ZOE LOPEZ   //   Lopez,Zoe   //   number:000111",
    // Add more names here...
];


const nameInput = document.getElementById("nameInput");
const suggestionList = document.getElementById("suggestionList");

nameInput.addEventListener("input", updateSuggestions);

function updateSuggestions() {
    const inputValue = nameInput.value.toLowerCase();
    suggestionList.innerHTML = "";

    const filteredNames = namesDatabase.filter(name => name.toLowerCase().startsWith(inputValue));

    filteredNames.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        suggestionList.appendChild(listItem);
    });
}
