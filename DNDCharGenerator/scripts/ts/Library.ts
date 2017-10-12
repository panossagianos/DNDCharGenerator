namespace DNDCharacterGenerator {
    /**
     * Contains all object definitions of the application.
     */
    export namespace Library {
        export enum alignmentType { Good, Neutral, Evil }
        export enum alignmentLoyalty { Lawful, Neutral, Chaotic }
        export enum characterSize { Small, Medium, Large }
        export enum language { Common, Dwarvish, Elven, Draconic, Infernal, Abyssal, Celestial }
        export enum die { d4 = 4, d6 = 6, d8 = 8, d10 = 10, d12 = 12, d20 = 20 }
        export enum proficiencyType { weapon, armor }
        export enum weaponRangeType { melee, ranged }
        export enum weaponDamageType { slashing, bludgeoning }
        /** Used internally to describe any game object defining a name for it and a short description.*/
        interface IGameObject {
            /** The name of the current game object.*/
            readonly Name: string;
            /** A short description of the current game object. */
            readonly Description: string;
        }
        /** Used internally to describe characteristics of various objects like character HP etc. */
        interface IProperty<T> extends IGameObject {
            /** The value of the current property. */
            Value: T;
        }
        /** Used internally to describe a game object defining name and description properties.*/
        interface IGameObjectProperty {
            /** The name of the current object.*/
            Name: IProperty<string>;
            /** A short description of the current object.*/
            Description: IProperty<string>;
        }
        /** A string comprised of three characters.*/
        interface IString3 {
            /** The three character string.*/
            Value: string;
        }
        /** A complete roll like 2d4, 1d20 etc.*/
        export interface IRoll {
            /** The name of the roll like 1d6, 2d8 etc.*/
            readonly Name: string;
            /** The number of dice in the roll.*/
            DiceNumber: number;
            /** The die type in the roll.*/
            Die: die;
        }
        /**
         * The race of the generated character contributes in various characteristics
         * not only of his personality and appearance but also of his combat stats.
         */
        export interface IRace extends IGameObjectProperty {
            /** The maximum age of characters of the current race.*/
            Age: IProperty<number>;
            /** The most common alignment of characters of the current race.*/
            Alignment: IProperty<IAlignment>;
            /** The average size of characters of the current race.*/
            Size: IProperty<characterSize>;
            /** The base speed of characters of the current race in feet.*/
            Speed: IProperty<number>;
            /** A list of the languages commonly spoken by characters of the current race.*/
            Languages: IProperty<language[]>;
            /** A list of the traits granted by the current race.*/
            Traits: IProperty<ITrait[]>;
            /** A list of Ability adjustments that the current race applies to a character.*/
            Abilityadjustments: IProperty<[IAbility, number]>;
        }
        /** A further segmentation of Races.*/
        export interface ISubRace extends IGameObjectProperty {
            /** The race that the current subrace belongs to.*/
            Race: IProperty<IRace>;
            /** A list of the traits granted by the current subrace.*/
            Traits: IProperty<ITrait[]>;
        }
        /** A general outline of the aspects that govern the character's personality.*/
        export interface IAlignment extends IGameObjectProperty {
            /** The type of the current alignment such us good or evil.*/
            AlignmentType: alignmentType;
            /** The loyalty of the current alignment such as lawful or chaotic.*/
            AlignmentLoyalty: alignmentLoyalty;
        }
        /** A trait to be granted by a race or subrace.*/
        export interface ITrait extends IGameObjectProperty {
            /** An very short description of the trait to be used in notes.*/
            ShortDescription: IProperty<string>;
        }
        /** One of the basic character abilities.*/
        export interface IAbility extends IGameObjectProperty {
            /** A short version of the name of the current ability with three letters.*/
            ShortName: IProperty<IString3>;
            /** The current ability's score.*/
            Score: IProperty<number>;
            /** The current ability's modifier.*/
            Modifier: IProperty<number>;
        }
        /** A character class defining a character's combat specialization.*/
        export interface ICharacterClass extends IGameObjectProperty {
            /** The level that the character has on this class.*/
            Level: IProperty<number>;
            /** A list of the features provided by the current class.*/
            Features: IProperty<IFeature[]>;
            /** A list of the proficiencies provided by the current class.*/
            Proficiencies: IProperty<IProficiency[]>;
            /** The die that determines the character's HP.*/
            HitDie: IProperty<die>;
            /** A list of the proficiency bonuses granted by the class.*/
            ProficiencyBonus: IProperty<IProficiencyBonus[]>;
            /** A list of all the starting items granted by the class.*/
            Equipment: IProperty<IItem[]>;
            /** The starting gold for this class.*/
            GoldPieces: IProperty<number>;
            /** The primary abilities for this class.*/
            PrimaryAbilities: IProperty<IAbility[]>;
            /** The ability proficiencies granted by this class.*/
            SavingThrowProficiencies: IProperty<IAbility[]>;
            /** The skill proficiencies granted by this class.*/
            Skills: IProperty<ISkill[]>;
        }
        /** A player character.*/
        export interface ICharacter {
            /** The character's first name.*/
            FirstName: IProperty<string>;
            /** The character's last name.*/
            LastName: IProperty<string>;
            /** The character's combination of first and last name.*/
            readonly FullName: IProperty<string>;
            /** A short description of the character's past.*/
            BackgroundStory: IProperty<string>;
            /** A list of all the classes of the current character.*/
            Classes: IProperty<ICharacterClass[]>;
            /** The experience points of the character.*/
            XP: IProperty<number>;
            /** The experience points needed to gain a level.*/
            XpToNext: IProperty<number>;
            /** The character's race.*/
            Race: IProperty<IRace>;
            /** The character's sub race.*/
            SubRace: IProperty<ISubRace>;
            /** The character's base speed.*/
            BaseSpeed: IProperty<number>;
            /** The character's basic abilities.*/
            Abilities: IProperty<IAbility[]>;
            /** The character's current health points.*/
            readonly HP: IProperty<number>;
            /** The character's maximum health points.*/
            readonly MaxHP: IProperty<number>;
            /** The character's alignment.*/
            Alignment: IProperty<IAlignment>;
            /** The total weight of items that the character can carry.*/
            readonly TotalCarryingWeight: IProperty<number>;
            /** The character's Armor Class.*/
            readonly AC: IProperty<number>;
            /** The order in which the character's turn comes in combat.*/
            readonly Initiative: IProperty<number>;
        }
        /** A class feature.*/
        export interface IFeature extends IGameObjectProperty {
        }
        /** A class proficiency.*/
        export interface IProficiency extends IGameObjectProperty {
            /** The proficiency type.*/
            Type: IProperty<proficiencyType>;
        }
        /** A class proficiency bonus.*/
        export interface IProficiencyBonus {
            /** The amount of bonus provided.*/
            Bonus: number;
            /** The character level that the bonus applies to.*/
            Level: number;
        }
        /** An item in the dnd world.*/
        export interface IItem extends IGameObjectProperty {
            /** The weight of the current item.*/
            Weight: IProperty<number>;
            /** The average price of the current item.*/
            Price: IProperty<number>;
        }
        /** A weapon for attacking.*/
        interface IWeapon extends IItem {
            /** Declares whether the weapon is melee or ranged.*/
            Type: IProperty<weaponRangeType>;
            /** Declares whether the weapon has the finesse property.*/
            HasFinesse: IProperty<boolean>;
            /** Declares whether the weapon is throwable.*/
            IsThrown: IProperty<boolean>;
            /** States the damage die*/
            Damage: IProperty<IRoll>;
            /** The weapon's damage type*/
            DamageType: IProperty<weaponDamageType>;
            /** States the secondary damage die*/
            SecondaryDamage: IProperty<IRoll>;
        }
        /** An armor for protection.*/
        interface IArmor extends IItem {

        }
        /** A skill test.*/
        export interface ISkill extends IGameObjectProperty {
            /** The ability associated with this skill test.*/
            Ability: IProperty<IAbility>;
        }

        class String3 implements IString3 {
            /**
             * A string comprised of three characters. If more are specified then the first three are chosen.
             * If a string of less than three characters is provided then the Value remains undefined.
             * @param Value The string value.
             */
            constructor(public Value: string) {
                this.Value = Value.slice(0, 3);
                if (this.Value.length < 3)
                    this.Value = undefined;
            }
        }
        export class Alignment implements IAlignment {
            /**
             * A general outline of the aspects that govern the character's personality.
             * @param name The name of the current alignment.
             * @param description A short description of the current alingment.
             * @param type The type of the current alignment such us good or evil.
             * @param loyalty The loyalty of the current alignment such as lawful or chaotic.
             */
            constructor(name: string, description: string, type: alignmentType, loyalty: alignmentLoyalty) {
                this.Name.Value = name;
                this.Description.Value = description;
                this.AlignmentType = type;
                this.AlignmentLoyalty = loyalty;
            };
            /** The name of the current alignment.*/
            Name: IProperty<string> = {
                Name: "Name",
                Description: "Description",
                Value: <string>undefined
            };
            /** A short description of the current alingment.*/
            Description: IProperty<string> = {
                Name: "Description",
                Description: "A short description of the current alignent.",
                Value: <string>undefined
            };
            /** The type of the current alignment such us good or evil.*/
            AlignmentType: alignmentType;
            /** The loyalty of the current alignment such as lawful or chaotic.*/
            AlignmentLoyalty: alignmentLoyalty;
        };
        export class Race implements IRace {
            /**
             * The race of the generated character contributes in various characteristics
             * not only of his personality and appearance but also of his combat stats.
             * @param name The name of the current race.
             * @param description A short description of the current race.
             * @param age The maximum age of characters of the current race.
             * @param alignment The most common alignment of characters of the current race.
             * @param size The average size of characters of the current race.
             * @param speed The base speed of characters of the current race in feet.
             * @param languages A list of the languages commonly spoken by characters of the current race.
             * @param traits A list of the traits granted by the current race.
             * @param abilityAdjustments A list of ability adjustments that the current race applies to a character.
             */
            constructor(name: string, description: string, age: number, alignment: IAlignment
                , size: characterSize, speed: number, languages: language[], traits: ITrait[]
                , abilityAdjustments: [IAbility, number]) {
                this.Name.Value = name;
                this.Description.Value = description;
                this.Age.Value = age;
                this.Alignment.Value = alignment;
                this.Size.Value = size;
                this.Speed.Value = speed;
                this.Languages.Value = languages;
                this.Traits.Value = traits;
                this.Abilityadjustments.Value = abilityAdjustments;
            }

            /** The name of the current race.*/
            public Name: IProperty<string> = {
                Name: "Name",
                Description: "The name of the current race.",
                Value: <string>undefined
            }
            /** A short description of the current race.*/
            public Description: IProperty<string> = {
                Name: "Description",
                Description: "A short description of the current race.",
                Value: <string>undefined
            }
            /** The maximum age of characters of the current race.*/
            public Age: IProperty<number> = {
                Name: "Age",
                Description: "The maximum age of characters of the current race.",
                Value: <number>undefined
            }
            /** The most common alignment of characters of the current race.*/
            public Alignment: IProperty<IAlignment> = {
                Name: "Alignment",
                Description: "The most common alignment of characters of the current race.",
                Value: <IAlignment>undefined
            }
            /** The average size of characters of the current race.*/
            public Size: IProperty<characterSize> = {
                Name: "Size",
                Description: "The average size of characters of the current race.",
                Value: <characterSize>undefined
            }
            /** The base speed of characters of the current race in feet.*/
            public Speed: IProperty<number>;
            /** A list of the languages commonly spoken by characters of the current race.*/
            public Languages: IProperty<language[]> = {
                Name: "Languages",
                Description: "A list of the languages commonly spoken by characters of the current race.",
                Value: <language[]>undefined
            }
            /** A list of the traits granted by the current race.*/
            public Traits: IProperty<ITrait[]> = {
                Name: "Traits",
                Description: "A list of the traits granted by the current race.",
                Value: <ITrait[]>undefined
            }
            /** A list of Ability adjustments that the current race applies to a character.*/
            Abilityadjustments: IProperty<[IAbility, number]> = {
                Name: "Ability Adjustments",
                Description: "A list of ability adjustments that the current race applies to a character.",
                Value: <[IAbility, number]>undefined
            };
        }
        export class SubRace implements ISubRace {
            /**
             * A further segmentation of Races.
             * @param name The name of the current subrace.
             * @param description A short description of the current subrace.
             * @param race The race that the current subrace belongs to.
             * @param traits A list of the traits granted by the current subrace.
             */
            constructor(name: string, description: string, race: IRace, traits: ITrait[]) {
                this.Name.Value = name;
                this.Description.Value = description;
                this.Race.Value = race;
                this.Traits.Value = traits;
            }

            /** The name of the current subrace.*/
            public Name: IProperty<string> = {
                Name: "Name",
                Description: "The name of the current subrace.",
                Value: <string>undefined
            }
            /** A short description of the current subrace.*/
            public Description: IProperty<string> = {
                Name: "Description",
                Description: "A short description of the current subrace.",
                Value: <string>undefined
            }
            /** The race that the current subrace belongs to.*/
            public Race: IProperty<IRace> = {
                Name: "Race",
                Description: "The race that the current subrace belongs to.",
                Value: <IRace>undefined
            }
            /** A list of the traits granted by the current subrace.*/
            public Traits: IProperty<ITrait[]> = {
                Name: "Traits",
                Description: "A list of the traits granted by the current subrace.",
                Value: <ITrait[]>undefined
            }
        }
        export class Ability implements IAbility {
            /**
            * One of the basic character abilities.
            * @param name The name of the current ability.
            * @param description A short description of the current ability.
            * @param shortName A short version of the name of the current ability comprised of three letters.
            * @param score The current ability's score.
            */
            constructor(name: string, description: string, shortName: string, score: number) {
                this.Name.Value = name;
                this.Description.Value = description;
                this.ShortName.Value = new String3(shortName);
                this.Score.Value = score;
                this.Modifier.Value = Math.floor((this.Score.Value - 10) / 2);
            }

            /** The name of the current ability.*/
            public Name: IProperty<string> = {
                Name: "Name",
                Description: "The name of the current ability.",
                Value: <string>undefined
            }
            /** A short description of the current ability.*/
            public Description: IProperty<string> = {
                Name: "Description",
                Description: "A short description of the current ability.",
                Value: <string>undefined
            }
            /** A short version of the name of the current ability with three letters.*/
            public ShortName: IProperty<IString3> = {
                Name: "Short Name",
                Description: "A short version of the name of the current ability with three letters.",
                Value: undefined
            }
            /** The current ability's score.*/
            Score: IProperty<number> = {
                Name: "Score",
                Description: "The current ability's score.",
                Value: <number>undefined
            };
            /** The current ability's modifier.*/
            Modifier: IProperty<number> = {
                Name: "Modifier",
                Description: "The current ability's modifier",
                Value: <number>undefined
            };
        }
        export class CharacterClass implements ICharacterClass {
            /**
             * A character class defining a character's combat specialization.
             * @param name The name of the current class.
             * @param description A short description for the current class.
             * @param features A list of features granted by the current class.
             * @param proficiencies A list of proficiencies granted by the current class.
             * @param hitDie The hit die that define the HP of the character.
             * @param proficiencyBonus A list of the proficiency bonus granted by the class by level.
             * @param equipment A list of the starting items suggested by this class.
             * @param goldPieces The average starting gold of characters of this class.
             * @param primaryAbilities The primary abilities of the current class.
             * @param savingThrowProficiencies The saving throw proficiencies granted by the class.
             * @param skills The skill proficiencies granted by the class.
             */
            constructor(name: string, description: string, features: IFeature[]
                , proficiencies: IProficiency[], hitDie: die, proficiencyBonus: IProficiencyBonus[]
                , equipment: IItem[], goldPieces: number, primaryAbilities: IAbility[]
                , savingThrowProficiencies: IAbility[], skills: ISkill[]) {
                this.Name.Value = name;
                this.Description.Value = description;
                this.Features.Value = features;
                this.Proficiencies.Value = proficiencies;
                this.HitDie.Value = hitDie;
                this.ProficiencyBonus.Value = proficiencyBonus;
                this.Equipment.Value = equipment;
                this.GoldPieces.Value = goldPieces;
                this.PrimaryAbilities.Value = primaryAbilities;
                this.SavingThrowProficiencies.Value = savingThrowProficiencies;
                this.Skills.Value = skills;
            }
            /** The level that the character has on this class.*/
            Level: IProperty<number> = {
                Name: "Level",
                Description: "The level that the character has attained on the current class.",
                Value: <number>undefined
            };
            /** The name of the current class.*/
            public Name: IProperty<string> = {
                Name: "Name",
                Description: "The name of the current class.",
                Value: <string>undefined
            };
            /** A short description of the current class.*/
            public Description: IProperty<string> = {
                Name: "Description",
                Description: "A short description of the current class.",
                Value: <string>undefined
            };
            /** A list of the features provided by the current class.*/
            public Features: IProperty<IFeature[]> = {
                Name: "Features",
                Description: "A list of the features provided by the current class.",
                Value: <IFeature[]>undefined
            };
            /** A list of the proficiencies provided by the current class.*/
            public Proficiencies: IProperty<IProficiency[]> = {
                Name: "Proficiencies",
                Description: "A list of the proficiencies provided by the current class.",
                Value: <IProficiency[]>undefined
            };
            /** The die that determines the character's HP.*/
            public HitDie: IProperty<die> = {
                Name: "Hit Die",
                Description: "The die that determines the character's HP.",
                Value: <die>undefined
            };
            /** A list of the proficiency bonuses granted by the class.*/
            public ProficiencyBonus: IProperty<IProficiencyBonus[]> = {
                Name: "Proficiency Bonus List",
                Description: "The proficiency bonuses granted for each character level.",
                Value: <IProficiencyBonus[]>undefined
            };
            /** A list of all the starting items granted by the class.*/
            public Equipment: IProperty<IItem[]> = {
                Name: "Equipment",
                Description: "A list of the suggested starting gear for a character of this class.",
                Value: <IItem[]>undefined
            };
            /** The starting gold for this class.*/
            public GoldPieces: IProperty<number> = {
                Name: "Gold",
                Description: "The starting gold for this class.",
                Value: <number>undefined
            };
            /** The primary abilities for this class.*/
            public PrimaryAbilities: IProperty<IAbility[]> = {
                Name: "Primary Abilities",
                Description: "The most important ability/ies for this class.",
                Value: <IAbility[]>undefined
            };
            /** The ability proficiencies granted by this class.*/
            public SavingThrowProficiencies: IProperty<IAbility[]> = {
                Name: "Saving Throw Proficiencies",
                Description: "The ability saving throw proficiencies granted by this class.",
                Value: <IAbility[]>undefined
            };
            /** The skill proficiencies granted by this class.*/
            public Skills: IProperty<ISkill[]> = {
                Name: "Skills",
                Description: "A list of the skill proficiencies granted by this class.",
                Value: <ISkill[]>undefined
            };
        }
        export class Character implements ICharacter {
            /**
             * Returns the current character's  ability with the specified name.
             * @param name The name to base the ability search on.
             */
            private getAbilityByName(name: string): IAbility {
                let results: IAbility[] = this.Abilities.Value.filter(function (checkName) {
                    return checkName.Name.Value == name;
                });
                let result: IAbility = (results) ? results[0] : new Ability(name, name, new String3(name).Value, 0);
                return result;
            }

            /** The character's first name.*/
            FirstName: IProperty<string> = {
                Name: "First Name",
                Description: "The character's first name.",
                Value: <string>undefined
            };
            /** The character's last name.*/
            LastName: IProperty<string> = {
                Name: "Last Name",
                Description: "The character's last name.",
                Value: <string>undefined
            };
            /** The character's combination of first and last name.*/
            get FullName(): IProperty<string> {
                return <IProperty<string>>{
                    Name: "Full Name",
                    Description: "The character's combination of first and last name.",
                    Value: `${this.FirstName} ${this.LastName}`
                };
            };
            /** A short description of the character's past.*/
            BackgroundStory: IProperty<string> = {
                Name: "Background Story",
                Description: "A short description of the character's past.",
                Value: <string>undefined
            };
            /** A list of all the classes of the current character.*/
            Classes: IProperty<ICharacterClass[]> = {
                Name: "Class",
                Description: "The classes of the current character.",
                Value: <ICharacterClass[]>undefined
            };
            /** The experience points of the character.*/
            XP: IProperty<number> = {
                Name: "XP",
                Description: "The experience points of the character.",
                Value: <number>undefined
            };
            /** The experience points needed to gain a level.*/
            XpToNext: IProperty<number> = {
                Name: "XP to next Level",
                Description: "The amount of experience points needed to gain the next character level.",
                Value: <number>undefined
            };
            /** The character's race.*/
            Race: IProperty<IRace> = {
                Name: "Race",
                Description: "The character's race.",
                Value: <IRace>undefined
            };
            /** The character's sub race.*/
            SubRace: IProperty<ISubRace> = {
                Name: "Sub Race",
                Description: "The character's sub race.",
                Value: <ISubRace>undefined
            };
            /** The character's base speed.*/
            BaseSpeed: IProperty<number> = {
                Name: "Base speed",
                Description: "The character's base speed.",
                Value: <number>undefined
            };
            /** The character's basic abilities.*/
            Abilities: IProperty<IAbility[]> = {
                Name: "Abilities",
                Description: "The character's basic abilities.",
                Value: <IAbility[]>undefined
            };
            /** The character's current health points.*/
            get HP() {
                return {
                    Name: "HP",
                    Description: "The character's current health points.",
                    Value: this.MaxHP.Value
                }
            };
            /** The character's maximum health points.*/
            get MaxHP() {
                return {
                    Name: "Max HP",
                    Description: "The character's maximum health points.",
                    Value: <number>undefined
                }
            };
            /** The character's alignment.*/
            Alignment: IProperty<IAlignment> = {
                Name: "Alignment",
                Description: "The character's alignment.",
                Value: <IAlignment>undefined
            };
            /** The total weight of items that the character can carry.*/
            get TotalCarryingWeight() {
                let strScore = this.getAbilityByName("Strength").Score.Value;
                return {
                    Name: "Carrying Weight",
                    Description: "The total weight of items that the character can carry.",
                    Value: 15 * strScore
                };
            };
            /** The character's Armor Class.*/
            get AC() {
                let dexMod = this.getAbilityByName("Dexterity").Modifier.Value;
                return {
                    Name: "AC",
                    Description: "The character's Armor Class",
                    Value: 10 + dexMod
                }
            };
            /** The order in which the character's turn comes in combat.*/
            get Initiative() {
                let dexMod = this.getAbilityByName("Dexterity").Modifier.Value;
                return {
                    Name: "Initiative",
                    Description: "The order in which the character's turn comes in combat.",
                    Value: dexMod
                }
            }
        }
        export class Skill implements ISkill {
            /**
             * A skill test.
             * @param name he name of the skill.
             * @param description A short description of the skill.
             * @param ability The ability ascociated with this skill test.
             */
            constructor(name: string, description: string, ability: IAbility) {
                this.Name.Value = name;
                this.Description.Value = description;
                this.Ability.Value = ability;
            }
            Name: IProperty<string> = {
                /** The name of the skill.*/
                Name: "Name",
                Description: "The name of the skill.",
                Value: <string>undefined
            }
            /** A short description of the skill.*/
            Description: IProperty<string> = {
                Name: "Description",
                Description: "A short description of the skill.",
                Value: <string>undefined
            }
            /** The ability ascociated with this skill test.*/
            Ability: IProperty<IAbility> = {
                Name: "Ability",
                Description: "The ability ascociated with this skill test.",
                Value: <IAbility>undefined
            }
        }
        export class Trait implements ITrait {
            /**
             * A trait granted by a race or subrace.
             * @param name The name of the trait.
             * @param description The description of the trait.
             * @param shortDescription A short description of the trait to be used in notes.
             */
            constructor(name: string, description: string, shortDescription: string) {
                this.Name.Value = name;
                this.Description.Value = description;
                this.ShortDescription.Value = shortDescription;
            }
            /** The name of the trait.*/
            public Name: IProperty<string> = {
                Name: "Name",
                Description: "The name of the trait.",
                Value: <string>undefined
            }
            /** The description of the trait.*/
            public Description: IProperty<string> = {
                Name: "Description",
                Description: "The description of the trait",
                Value: <string>undefined
            }
            /** A short description of the trait to be used in notes.*/
            public ShortDescription: IProperty<string> = {
                Name: "Short Description",
                Description: "A short description of the trait to be used in notes.",
                Value: <string>undefined
            }
        }
        export class Weapon implements IWeapon {
            /**
             * A weapon for attacking.
             * @param name The name of the weapon.
             * @param description A short description of the weapon.
             * @param weight The weight of the weapon.
             * @param price The price of the weapon.
             * @param type The weapon type melee or ranged.
             * @param hasFinesse Has the weapon finesse or not.
             * @param isThrown Can the weapon be thrown or not.
             * @param damage The damage that the weapon does.
             * @param damageType The damage type of the weapon.
             * @param secondaryDamage The secondary damage of the weapon.
             */
            constructor(name: string, description: string, weight: number, price: number
                , type: weaponRangeType, hasFinesse: boolean, isThrown: boolean
                , damage: IRoll, damageType: weaponDamageType, secondaryDamage: IRoll) {

            };
            /** The name of the weapon.*/
            public Name: IProperty<string> = {
                Name: "Name",
                Description:"The name of the weapon",
                Value: <string>undefined
            }
            public Description: IProperty<string>;
            public Weight: IProperty<number>;
            public Price: IProperty<number>;

            /** Declares whether the weapon is melee or ranged.*/
            Type: IProperty<weaponRangeType>;
            /** Declares whether the weapon has the finesse property.*/
            HasFinesse: IProperty<boolean>;
            /** Declares whether the weapon is throwable.*/
            IsThrown: IProperty<boolean>;
            /** States the damage die*/
            Damage: IProperty<IRoll>;
            /** The weapon's damage type*/
            DamageType: IProperty<weaponDamageType>;
            /** States the secondary damage die*/
            SecondaryDamage: IProperty<IRoll>;

        }
    }
}