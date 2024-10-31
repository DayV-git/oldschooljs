import LootTable from "../../../../structures/LootTable";
import SimpleMonster from "../../../../structures/SimpleMonster";

export default new SimpleMonster({
	id: 13302,
	name: "Wealthy Citizen",
	pickpocketTable: new LootTable()
		.add("Coins", 85, 1 / 1.076)
		.add("House keys", 1, 1 / 17)
		.add("Clue Scroll (Easy)", 1, 1 / 85),
	aliases: ["wealthy citizen", "wealthy", "varlamore"],
});
