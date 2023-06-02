

const csvbooks = `
Title,Author,Category,Status
Mo Dao Zu Shi 1,Mo Xiang Xiu,Fiction Book, In progress
Mo Dao Zu Shi 2,Mo Xiang Xiu,Fiction Book,To do
Mo Dao Zu Shi 3,Mo Xiang Xiu,Fiction Book,To do
Vagabond 1,Takehiko Inoue,Fiction Manga,To do
Vagabond 2,Takehiko Inoue,Fiction Manga,To do
Vagabond 3,Takehiko Inoue,Fiction Manga,To do`;

const csvgames = `
Title,Platform,Status, HLTB
Like a dragon: Ishin!,Steamdeck,In Progress,23
Xenoblade Chronicles 3,Switch,In progress,61
Xenoblade Chronicles X,Wii U,In Progress,108
Romancing SaGa: Minstrel Song,Steamdeck,To do,26
Atelier Escha & Logy,Steamdeck,In progress,30
Monster Hunter Rise: Sunbreak,Switch,In progress,31
Trials of Mana,Steamdeck,To do,20
Tactics Ogre: Reborn,Switch,To do,88
Utawarerumono: Prelude of the fallen,Steamdeck,To do,31
Trails from Zero,Switch,To do,41
Fire Emblem: Three Houses,Switch,To do,49
Tales of Arise,Steamdeck,To do,40
Ys VIII: Lacrimosa of Dana,Switch,To do,37
Ys IX: Monstrum Nox,Steamdeck,To do,27
Yakuza 0,Steamdeck,To do,31
Persona 5,Steamdeck,To do,98
NEO: The World Ends With You,Switch,To do,40
Cyberpunk 2077,Steamdeck,To do,25
Shin Megami Tensei V,Switch,To do,45
Digimon Cyber Sleuth: Hackers Memory,Switch,To do,46
Inscryption,Steamdeck,To do,13
Nier automata,Steamdeck,To do,40
13 Sentinels: Aegis Rim,Switch,To do,31
Resonance of Fate,Steamdeck,To do,52
Utawarerumono: Mask of deception,Steamdeck,To do,31
Romancing SaGa: Minstrel Song,Steamdeck,To do,26
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
God Eater 3,Switch,To do,24
Mary Skelter 2,Switch,To do,70
Langrisser 1&2,Steamdeck,To do,20
Yakuza Kiwami,Steamdeck,To do,18
The Last Remnant,Steamdeck,To do,80
Fate Stay Night,Steamdeck,To do,80
Graveyard Keeper,Steamdeck,To do,45
Metal Gear Rising: Revengeance,Steamdeck,To do,7
Baroque,PS2,To do,13
Shadow Hearts,PS2,To do,31
Shadow Hearts Covenant,PS2,To do,52
Tales of Symphonia,Gamecube,To do,65
Baten Kaitos,Gamecube,To do,60
Breath of Fire I,GBA,To do,28
Breath of Fire II,GBA,To do,40
Breath of Fire III,PS1,To do,48
Breath of Fire IV,PS1,To do,44
Final Fantasy VI,SNES/Gameboy Advance,To do,41
Final Fantasy VIII,PS1,To do,55
Legend of Dragoon,PS1,To do,58
Shin Megami Tensei: if,SNES,To do,30
Threads of Fate,PS1,To do,23
Atelier Marie+Ellie,PS2,To do,30
Tales of Legendia,PS2,To do,56
Tales of Abyss,PS2,To do,63
Persona 1,PSP,To do,50
Persona 2: Innocent Sin,PSP,To do,49
Persona 2: Eternal Punishment,PSP,To do,68
Valkyria Chronicles 2,PSP,To do,62
Final Fantasy Tactics: War of the Lions,PSP,To do,60
Fire Emblem Three Hopes,Switch,Wishlist,56
Trails to Azure,Switch,Wishlist,70
GrimGrimoire,Switch,Wishlist,20
Undernauts: Labyrinth of Yomi,Switch,Wishlist,50
Metroid Prime Remastered,Switch,Wishlist,16
Zanki Zero,Steamdeck,To do,50
The Vagrant,Steamdeck,To do,12`;


const csvmodelkits = `
Model,Manufacturer,Status
30Min Sister: Tiasha,Bandai,In progress
MechatroWeGo Cream Soda & Crystal Gold,Haseegawa,In progress
MechatroWeGo Asuka,Hasegawa,To do
RG EVA01,Bandai,To do
Dukemon Amplified,Bandai,To do
Sol Strike Raptor,Kotobukiya,To do`;

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
const table3 = csvToTable(csvgames);
const table4 = csvToTable(csvmodelkits);

document.getElementById('booksbacklog').innerHTML = table2;
document.getElementById('gamesbacklog').innerHTML = table3;
document.getElementById('modelkitsbacklog').innerHTML = table4;
