import type { CustomKillLogic, MonsterKillOptions, MonsterOptions } from "../meta/types";
import Bank from "./Bank";
import LootTable from "./LootTable";
import Monster from "./Monster";
interface SimpleMonsterOptions extends MonsterOptions {
    table?: LootTable | LootTable[];
    onTaskTable?: LootTable;
    wildyCaveTable?: LootTable;
    pickpocketTable?: LootTable;
    customKillLogic?: CustomKillLogic;
}
export default class SimpleMonster extends Monster {
    table?: LootTable | LootTable[];
    onTaskTable?: LootTable;
    wildyCaveTable?: LootTable;
    pickpocketTable?: LootTable;
    customKillLogic?: CustomKillLogic;
    constructor(options: SimpleMonsterOptions);
    kill(quantity?: number, options?: MonsterKillOptions): Bank;
}
export {};
//# sourceMappingURL=SimpleMonster.d.ts.map