const state = {
    "KinoBase": ["spider man - 2007","Terminator - 1999"],
    "YearsFilms":[]
}


 const b = confirm("Войти в KinoBase?")
var help = ("add film - Добавить фильм в базу \n see base - Посмотреть базу данных \n exit -Выход")
do {
    const cmd = prompt("KinoBase  \nДля просмотра команд-пропишите help!")

    if (cmd == "exit") break

    switch (cmd) {
        case "add film": {
            const fileName = prompt(" Enter the name of the movie and its year")
            state.KinoBase.push(fileName)
            break
        }    
         case "add year": {
            const year = prompt("Enter years your film")
            state.YearsFilms.push(year)
            break
        
        }
        case "see base": {
            alert("KinoBase: " + state.KinoBase )
            break
        }
        case "help":{
            alert(help)
            break
        }
        default:
            alert(cmd + " no found")
            break
    }
} while (true)
