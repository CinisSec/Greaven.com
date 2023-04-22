/* const csvwishlist = ``; */

const csvbooks = `
Title,Author,Status
Mo Dao Zu Shi 1,Mo Xiang Xiu, In progress
Mo Dao Zu Shi 2,Mo Xiang Xiu, To do
Mo Dao Zu Shi 3,Mo Xiang Xiu, To do`;

const csvgames = `
Title,Platform,Status
Xenoblade Chronicles 3,Switch,In progress
Atelier Escha & Logy,Steamdeck,In progress
Monster Hunter Rise: Sunbreak,Switch,In progress
Advance wars,Gameboy Advance,In Progress
Like a dragon: Ishin!,Steamdeck,In Progress
Trials of Mana,Steamdeck,To do
Sengoku Rance,Steamdeck,To do
Dohna Dohna,Steamdeck,To do
Eiyuu Senki Gold,Steamdeck,To do
Utawarerumono: Prelude of the fallen,Steamdeck,To do
Fire Emblem: Three Houses,Switch,To do
Final Fantasy XV: Royal Edition,Steamdeck,To do
Tales of Arise,Steamdeck,To do
Ys VIII: Lacrimosa of Dana,Switch,To do
Yakuza 0,Steamdeck,To do
Persona 5,Steamdeck,To do
Trails from Zero,Switch,To do
NEO: The World Ends With You,Switch,To do
Cyberpunk 2077,Steamdeck,To do
Shin Megami Tensei V,Switch,To do
Digimon Cyber Sleuth: Hackers Memory,Switch,To do
Inscryption,Steamdeck,To do
Nier automata,Steamdeck,To do
Megaman Battle Network 2,Gameboy Advance,To do
13 Sentinels: Aegis Rim,Switch,To do
Resonance of Fate,Steamdeck,To do
Utawarerumono: Mask of deception,Steamdeck,To do
Romancing SaGa: Minstrel Song,PS2/Steamdeck,To do
Romancing SaGa 2,Switch,To do
Romancing SaGa 3,Switch,To do
SaGa Scarlet Grace,Switch,To do
SaGa Frontier,PS1,To do
SaGa Frontier 2,PS1,To do
Suikoden,PS1,To do
Suikoden 2,PS1,To do
Xenogears,PS1,To do
Ace Attorney Trilogy,Switch,To do
Shining Resonance,Switch,To do
Star Ocean First Departure R,Switch,To do
God Wars,Switch,To do
World of Final Fantasy,Switch,To do
Ni no Kuni,Switch,To do
Valkyria Chronicles 4,Switch,To do
Triangle Strategy,Switch,To do
Dragon Quest XI,Switch,To do
God Eater 3,Switch,To do
Mary Skelter 2,Switch,To do
Langrisser 1&2,Steamdeck,To do
Yakuza Kiwami,Steamdeck,To do
The Last Remnant,Steamdeck,To do
Metal Gear Solid V,Steamdeck,To do
Hellblade: Senua's Sacrifice,Steamdeck,To do
Oneshot,Steamdeck,To do
Fate Stay Night,Steamdeck,To do
Graveyard Keeper,Steamdeck,To do
Metal Gear Rising: Revengeance,Steamdeck,To do
Baroque,PS2,To do
Shadow Hearts,PS2,To do
Shadow Hearts Covenant,PS2,To do
Tales of Symphonia,Gamecube/Steamdeck,To do
Baten Kaitos,Gamecube,To do
Breath of Fire IV,PS1,To do
Final Fantasy VI,SNES/Gameboy Advance,To do
Final Fantasy VIII,PS1,To do
Legend of Dragoon,PS1,To do
Shin Megami Tensei: if,SNES,To do
Threads of Fate,PS1,To do
Atelier Marie+Ellie,PS2,To do
Tales of Legendia,PS2,To do
Tales of Abyss,PS2,To do
Persona 1,PSP,To do
Persona 2: Innocent Sin,PSP,To do
Persona 2: Eternal Punishment,PSP,To do
Tactics Ogre: Let Us Cling Together,PSP/Switch,To do
Valkyria Chronicles 2,PSP,To do
Final Fantasy Tactics: War of the Lions,PSP,To do`;

const csvmodelkits = `
Model,Manufacturer,Status
30Min Sister: Tiasha,Bandai,In progress
Omnimon Amplified,Bandai,In progress
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
/* const table5 = csvToTable(csvwishlist); */

document.getElementById('booksbacklog').innerHTML = table2;
document.getElementById('gamesbacklog').innerHTML = table3;
document.getElementById('modelkitsbacklog').innerHTML = table4;
/* document.getElementById('wishlist').innerHTML = table5; */