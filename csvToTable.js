

const csvbooks = `
Title,Author,Category,Status
Mo Dao Zu Shi 1,Mo Xiang Xiu,Fiction Book, In progress
Vagabond 1,Takehiko Inoue,Manga,To do
Vagabond 2,Takehiko Inoue,Manga,To do
Vagabond 3,Takehiko Inoue,Manga,To do`;

const csvgames = `
Title,Platform,Status, HLTB
Armored Core VI,Steamdeck,In Progress,30
Xenoblade Chronicles 3,Switch,On hold,61
Romancing SaGa: Minstrel Song,Steamdeck,In Progress,26
Atelier Escha & Logy,Steamdeck,In progress,30
Monster Hunter Rise: Sunbreak,Switch,In progress,31
Trials of Mana,Steamdeck,In Progress,20
Tactics Ogre: Reborn,Switch,To do,88
Trails from Zero,Switch,To do,41
Fire Emblem: Three Houses,Switch,On hold,49
Ys VIII: Lacrimosa of Dana,Steamdeck,In Progress,37
Ys IX: Monstrum Nox,Steamdeck,To do,27
Persona 5,Steamdeck,To do,98
NEO: The World Ends With You,Switch,To do,40
Inscryption,Steamdeck,To do,13
Nier automata,Steamdeck,To do,40
13 Sentinels: Aegis Rim,Switch,To do,31
Resonance of Fate,Steamdeck,To do,52
Romancing SaGa 2,Switch,To do,40
Romancing SaGa 3,Switch,To do,24
SaGa Scarlet Grace,Switch,To do,65
SaGa Frontier,PS1,To do,16
SaGa Frontier 2,PS1,To do,31
Suikoden,PS1,To do,25
Suikoden 2,PS1,To do,40
Xenogears,PS1,To do,56
Ace Attorney Trilogy,Switch,To do,66
Shining Resonance,Switch,To do,31
Star Ocean First Departure R,Switch,To do,21
God Wars,Switch,To do,40
World of Final Fantasy,Switch,To do,40
Ni no Kuni,Switch,To do,45
Valkyria Chronicles 4,Switch,To do,40
Triangle Strategy,Switch,To do,35
Dragon Quest XI,Switch,To do,60
Mary Skelter 2,Switch,To do,70
Langrisser 1&2,Steamdeck,To do,20
The Last Remnant,Steamdeck,To do,80
Fire Emblem Three Hopes,Switch,Wishlist,56
Trails to Azure,Switch,Wishlist,70
GrimGrimoire,Switch,Wishlist,20
Metroid Prime Remastered,Switch,Wishlist,16
Zanki Zero,Steamdeck,To do,50`;

const csvmodelkits = `
Model,Manufacturer,Status
30Min Sister: Tiasha,Bandai,In progress
MechatroWeGo Cream Soda & Crystal Gold,Hasegawa,In progress
MechatroWeGo Asuka,Hasegawa,To do
RG EVA01,Bandai,To do
Dukemon Amplified,Bandai,To do`;

/**
 * Converts a CSV string into an HTML table.
 *
 * @param {string} csv - The CSV string to be converted.
 * @return {string} The HTML table representation of the CSV string.
 */
function csvToTable(csv) {
    const rows = csv.split('\n');
    let table = '<table class="sortable">\n';
    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i].split(',');
      table += '\t<tr>\n';
      for (let j = 0; j < cols.length; j++) {
        if (i === 1) {
          table += `\t\t<th>${cols[j]}</th>\n`;
        } else {
          table += `\t\t<td>${cols[j]}</td>\n`;
        }
      }
      table += '\t</tr>\n';
    }
    table += '</table>';
    return table;
}

const table2 = csvToTable(csvbooks);
//const table3 = csvToTable(csvgames);
const table4 = csvToTable(csvmodelkits);

document.getElementById('booksbacklog').innerHTML = table2;
// document.getElementById('gamesbacklog').innerHTML = table3;
document.getElementById('modelkitsbacklog').innerHTML = table4;
