import readline from 'readline-sync';
import {Leader} from './Leader'
//let Leaders = fetch('https://raw.githubusercontent.com/Fais212/FilesforWebOntwikkeling/main/AfricanLeaders.json');
//Leaders.then((result) => result.json()).then(data => console.log(data));
//console.log("Hello ");

const fetchFromUrl = async () => {
    const response = await fetch('https://raw.githubusercontent.com/Fais212/FilesforWebOntwikkeling/main/AfricanLeaders.json');
    const data = await response.json();
    showSubMenu(data);
}
const menuOptions: string[] = [
    "1. Show all Influental African leaders",
    "2. Filter Influental African leaders by id",
    "3. Exit"
];


function ShowAllLeader(data:Leader[]){
    for (let i = 0; i < data.length; i++) {
        console.log(`\n${data[i].name}: ${data[i].description}\n`)
    }
}

function FilterLeaderById(data:Leader[]) {
    let id = readline.questionInt("Enter the id of the Influental African leader you want to see: ");
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            console.log(`${data[i].name}: ${data[i].description}\n`)
        }
    }
}


function showSubMenu(leaders:Leader[]){
    let subMenuOption = readline.keyInSelect(menuOptions,
        "Welcome to the JSON of the greatest Influental African leaders in history.\n Choose an option: ",
        { cancel: false, guide: false });

    while (subMenuOption !== 2) {
        switch (subMenuOption) {
            case 0:
                ShowAllLeader(leaders);
                break;
            case 1:
                FilterLeaderById(leaders);
                break;
            default:
                console.log("Please choose a valid option.");
                break;
        }
        subMenuOption = readline.keyInSelect(menuOptions,
            "Welcome to the JSON of the greatest Influental African leaders in history. Choose an option: \n",
            { cancel: false, guide: false });
    }
}

fetchFromUrl();
export {}