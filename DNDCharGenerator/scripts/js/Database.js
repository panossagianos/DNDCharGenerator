/**
 * Core namespace of the application.
 */
var DNDCharacterGenerator;
(function (DNDCharacterGenerator) {
    /**
     * Contains all of the application's objects.
     */
    var Database;
    (function (Database) {
        var gen = DNDCharacterGenerator.Library;
        /**
         * Character Alignments.
         */
        var Alignment;
        (function (Alignment) {
            Alignment.lawfulGood = new gen.Alignment("Lawful Good", "Lawful good (LG) creatures can be counted on to do the right thing as expected by society."
                + " Gold dragons, paladins, and most dwarves are lawful good.", gen.alignmentType.Good, gen.alignmentLoyalty.Lawful);
            Alignment.lawfulNeutral = new gen.Alignment("Lawful Neutral", "Lawful neutral (LN) individuals act in accordance with law, tradition, or personal codes."
                + " Many monks and some wizards are lawful neutral", gen.alignmentType.Neutral, gen.alignmentLoyalty.Lawful);
            Alignment.lawfulEvil = new gen.Alignment("Lawful Evil", "Lawful evil (LE) creatures methodically take what they want, within the limits of a code of tradition"
                + ", loyalty, or order.Devils, blue dragons, and hobgoblins are Lawful evil.", gen.alignmentType.Evil, gen.alignmentLoyalty.Lawful);
            Alignment.neutralGood = new gen.Alignment("Neutral Good", "Neutral good (NG) folk do the best they can to help others according to their needs."
                + " Many celestials, some cloud giants, and most gnomes are neutral good.", gen.alignmentType.Good, gen.alignmentLoyalty.Neutral);
            Alignment.trueNeutral = new gen.Alignment("True Neutral", "Neutral (N) is the alignment of those who prefer to steer clear of moral questions and don't take sides"
                + ", doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral.", gen.alignmentType.Neutral, gen.alignmentLoyalty.Neutral);
            Alignment.neutralEvil = new gen.Alignment("Neutral Evil", "Neutral evil (NE) is the alignment of those who do whatever they can get away with, without compassion"
                + " or qualms.Many drow, some cloud giants, and yugoloths are neutraI evil.", gen.alignmentType.Evil, gen.alignmentLoyalty.Neutral);
            Alignment.chaoticGood = new gen.Alignment("Chaotic Good", "Chaotic good (CG) creatures act as their conscience directs, with little regard for what others expect."
                + " Copper dragons, many elves, and unicorns are chaotic good.", gen.alignmentType.Good, gen.alignmentLoyalty.Chaotic);
            Alignment.chaoticNeutral = new gen.Alignment("Chaotic Neutral", "Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else."
                + " Many barbarians and rogues, and some bards, are chaotic neutral.", gen.alignmentType.Neutral, gen.alignmentLoyalty.Chaotic);
            Alignment.chaoticEvil = new gen.Alignment("Chaotic Evil", "Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust."
                + " Demons, red dragons, and orcs are chaotic evil.", gen.alignmentType.Evil, gen.alignmentLoyalty.Chaotic);
        })(Alignment = Database.Alignment || (Database.Alignment = {}));
        /**
         * Character core Abilities.
         */
        var Ability;
        (function (Ability) {
            /** Measures physical power.*/
            Ability.strength = new gen.Ability("Strength", "Strength measures bodily power, athletic Training, and the extent to which you can exert"
                + " raw physical force.", "Str", undefined);
            /** Measures agility.*/
            Ability.dexterity = new gen.Ability("Dexterity", "Dexterity measures agility, reflexes, and balance.", "Dex", undefined);
            /** Measures endurance.*/
            Ability.constitution = new gen.Ability("Constitution", "Measures endurance.", "Con", undefined);
            /** Measures reasoning and memory.*/
            Ability.intelligence = new gen.Ability("Intelligence", "Measures reasoning and memory.", "Int", undefined);
            /** Measures perception and insight.*/
            Ability.wisdom = new gen.Ability("Wisdom", "Measures perception and insight.", "Wis", undefined);
            /** Measures force of personality.*/
            Ability.charisma = new gen.Ability("Charisma", "Measures force of personality.", "Cha", undefined);
        })(Ability = Database.Ability || (Database.Ability = {}));
        /**
         * All available skills.
         */
        var Skill;
        (function (Skill) {
            var abl = DNDCharacterGenerator.Database.Ability;
            /** Covers difficult situations you encounter while climbing, Jumping, or swimming.*/
            Skill.athletics = new gen.Skill("Athletics", "Your Strength (Athletics) check covers difficult situations you encounter"
                + " while climbing, Jumping, or swimming.", abl.strength);
            /**
             * Covers your attempt to stay on your feet in a tricky situation and to perform acrobatic stunts.
             */
            Skill.acrobatics = new gen.Skill("Acrobatics", "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in"
                + "a tricky situation, such as when you’re trying to run across a sheet of ice, balance"
                + " on a tightrope, or stay upright on a rocking ship’s deck.The GM might also call for a"
                + " Dexterity (Acrobatics) check to see if you can perform acrobatic stunts"
                + ", including dives, rolls, somersaults, and flips.", abl.dexterity);
            /**
             * Covers manual trickery and small items theft that requires nimble fingers.
             */
            Skill.sleightOfHand = new gen.Skill("Sleight of Hand", "Whenever you attempt an act of legerdemain or manual trickery, such as planting something"
                + " on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand)"
                + " check.The GM might also call for a Dexterity (Sleight of Hand) check to determine whether you"
                + " can lift a coin purse off another person or slip something out of another person’s pocket.", abl.dexterity);
            /**
             * Covers hiding and sneaking secretly.
             */
            Skill.stealth = new gen.Skill("Stealth", "Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards,"
                + " slip away without being noticed, or sneak up on someone without being seen or heard.", abl.dexterity);
            /**
             * Covers the ability to recall lore about Spells and other entities of magical nature or background.
             */
            Skill.arcana = new gen.Skill("Arcana", "Your Intelligence (Arcana) check measures your ability to recall lore about Spells, Magic Items,"
                + " eldritch symbols, magical traditions, The Planes of Existence, and the inhabitants of those planes.", abl.intelligence);
            /**
             * Covers the ability to recall lore about historical events.
             */
            Skill.history = new gen.Skill("History", "Your Intelligence (History) check measures your ability to recall lore about historical events,"
                + " legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations.", abl.intelligence);
            /**
             * Covers the ability to deduct correct information from clues.
             */
            Skill.investigation = new gen.Skill("Investigation", "When you look around for clues and make deductions based on those clues, you make an Intelligence"
                + " (Investigation) check.You might deduce the location of a hidden object, discern from the appearance"
                + " of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause"
                + " it to collapse.Poring through ancient scrolls in Search of a hidden fragment of knowledge might also"
                + " call for an Intelligence (Investigation) check.", abl.intelligence);
            /**
             * Measures the ability to recall lore about terrain, pants, animals the weather and natural cycles.
             */
            Skill.nature = new gen.Skill("Nature", "Your Intelligence (Nature) check measures your ability to recall lore about terrain, Plants and"
                + " animals, the weather, and natural cycles.", abl.intelligence);
            /**
             * Measures the ability to recall lore about deities, rites and other concepts of religious nature.
             */
            Skill.religion = new gen.Skill("Religion", "Your Intelligence (Religion) check measures your ability to recall lore about deities,"
                + "rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults.", abl.intelligence);
            /**
             * Covers manipulation of an animal's will and emotions.
             */
            Skill.animalHandling = new gen.Skill("Animal Handling", "When there is any question whether you can calm down a domesticated animal, keep a mount"
                + " from getting spooked, or intuit an animal’s intentions, the GM might call for a Wisdom"
                + " (Animal Handling) check.You also make a Wisdom (Animal Handling) check to control your"
                + " mount when you attempt a risky maneuver.", abl.wisdom);
            /**
             * Covers discerning lies and predicting the true intentions of others.
             */
            Skill.insight = new gen.Skill("Insight", "Your Wisdom (Insight) check decides whether you can determine the true intentions of a"
                + " creature, such as when searching out a lie or predicting someone’s next move.Doing so"
                + " involves gleaning clues from body Language, Speech habits, and changes in mannerisms.", abl.wisdom);
            /**
             * Allows for stabilizing dying companions or diagnosing illnesses.
             */
            Skill.medicine = new gen.Skill("Medicine", "A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness.", abl.wisdom);
            /**
             * Measures the general awareness of surroundings and the keenness of senses.
             */
            Skill.perception = new gen.Skill("Perception", "Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something."
                + " It measures your general awareness of your surroundings and the keenness of your senses."
                + " For example, you might try to hear a conversation through a closed door, eavesdrop under an open"
                + " window, or hear Monsters moving stealthily in the forest.Or you might try to spot things that"
                + " are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding"
                + " in the shadows of an alley, or candlelight under a closed secret door.", abl.wisdom);
            /**
             * Covers the ability to read tracks and signs and generally go by in the wild.
             */
            Skill.survival = new gen.Skill("Survival", "The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game,"
                + " guide your group through frozen wastelands, Identify signs that owlbears live nearby,"
                + " predict the weather, or avoid quicksand and other natural hazards.", abl.wisdom);
            /**
             * Measures the ability to lie and pretend convincingly.
             */
            Skill.deception = new gen.Skill("Deception", "Your Charisma (Deception) check determines whether you can convincingly hide the truth,"
                + " either verbally or through your actions.This deception can encompass everything from misleading"
                + " others through ambiguity to telling outright lies.Typical situations include trying to"
                + " fast- talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise"
                + " , dull someone’s suspicions with false assurances, or maintain a straight face while telling"
                + " a blatant lie.", abl.charisma);
            /**
             * Covers the effectiveness of scaring someone through own presence and power.
             */
            Skill.intimidation = new gen.Skill("Intimidation", "When you attempt to influence someone through overt threats, hostile actions, and physical violence,"
                + "the GM might ask you to make a Charisma (Intimidation) check.Examples include trying to pry"
                + " information out of a prisoner, convincing street thugs to back down from a confrontation,"
                + " or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision.", abl.charisma);
            /**
             * Measures how well a character can delight an audience with various forms of entertainment.
             */
            Skill.performance = new gen.Skill("Performance", "Your Charisma (Performance) check determines how well you can delight an audience with music,"
                + " dance, acting, storytelling, or some other form of entertainment.", abl.charisma);
            /**
             * Covers the ability to convince someone with social techniques.
             */
            Skill.persuasion = new gen.Skill("Persuasion", "When you attempt to influence someone or a group of people with tact, social graces, or good nature,"
                + " the GM might ask you to make a Charisma (Persuasion) check.Typically, you use persuasion when"
                + " acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette."
                + " Examples of persuading others include convincing a chamberlain to let your party see the king,"
                + " negotiating peace between warring tribes, or inspiring a crowd of townsfolk.", abl.charisma);
        })(Skill = Database.Skill || (Database.Skill = {}));
        /**
         * All traits granted by races and sub races.
         */
        var Trait;
        (function (Trait) {
            /**
             * Colorless clear low light vision - 60ft radius.
             */
            Trait.darkVision = new gen.Trait("Darkvision", "Accustomed to life underground, you have superior vision in dark and dim Conditions."
                + " You can see in dim light within 60 feet of you as if it were bright light, and in Darkness"
                + " as if it were dim light.You can’t discern color in Darkness, only shades of gray.", "Colorless clear low light vision - 60ft radius.");
            /**
             * Poison damage resistance and saving throws against it.
             */
            Trait.dwarvenResilience = new gen.Trait("Dwarven Resilience", "You have advantage on saving throws against poison, and you have Resistance against poison damage.", "Poison damage resistance and saving throws against it.");
        })(Trait = Database.Trait || (Database.Trait = {}));
        /**
         * The different character races.
         */
        var Race;
        (function (Race) {
            var align = DNDCharacterGenerator.Database.Alignment;
            var abl = DNDCharacterGenerator.Database.Ability;
            /**
             * A short stocky race taht stands about a foot shorter than most humans.
             * They have wide, compact bodies that account for their burly appearance.
             */
            Race.dwarf = new gen.Race("Dwarf", "Dwarves are a short and stocky race, and stand about a foot shorter than most humans,"
                + " with wide, compact bodies that account for their burly appearance.Male and female dwarves"
                + " pride themselves on the long length of their hair, and men often decorate their beards with"
                + " a variety of clasps and intricate braids.Clean - shavenness on a male dwarf is a sure sign"
                + " of madness, or worse—no one familiar with their race trusts a beardless dwarven man.", 400, align.lawfulGood, gen.characterSize.Medium, 25, [gen.language.Common, gen.language.Dwarvish], [undefined], [abl.constitution, 2]);
        })(Race = Database.Race || (Database.Race = {}));
    })(Database = DNDCharacterGenerator.Database || (DNDCharacterGenerator.Database = {}));
})(DNDCharacterGenerator || (DNDCharacterGenerator = {}));
//# sourceMappingURL=Database.js.map