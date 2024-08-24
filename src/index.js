const Team = require('./Team');
const Character = require('./Character');

const team = new Team();
team.add(new Character('Лучник', 'Bowman', 50, 1, 40, 10));
team.add(new Character('Маг', 'Magician', 60, 2, 50, 15));
team.add(new Character('Мечник', 'Swordsman', 70, 3, 45, 20));

for (const member of team) {
	console.log(member);
}