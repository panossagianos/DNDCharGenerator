var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DNDCharacterGenerator;
(function (DNDCharacterGenerator) {
    /**
     * Contains all object definitions of the application.
     */
    var Library;
    (function (Library) {
        var alignmentType;
        (function (alignmentType) {
            alignmentType[alignmentType["Good"] = 0] = "Good";
            alignmentType[alignmentType["Neutral"] = 1] = "Neutral";
            alignmentType[alignmentType["Evil"] = 2] = "Evil";
        })(alignmentType = Library.alignmentType || (Library.alignmentType = {}));
        var alignmentLoyalty;
        (function (alignmentLoyalty) {
            alignmentLoyalty[alignmentLoyalty["Lawful"] = 0] = "Lawful";
            alignmentLoyalty[alignmentLoyalty["Neutral"] = 1] = "Neutral";
            alignmentLoyalty[alignmentLoyalty["Chaotic"] = 2] = "Chaotic";
        })(alignmentLoyalty = Library.alignmentLoyalty || (Library.alignmentLoyalty = {}));
        var characterSize;
        (function (characterSize) {
            characterSize[characterSize["Small"] = 0] = "Small";
            characterSize[characterSize["Medium"] = 1] = "Medium";
            characterSize[characterSize["Large"] = 2] = "Large";
        })(characterSize = Library.characterSize || (Library.characterSize = {}));
        var language;
        (function (language) {
            language[language["Common"] = 0] = "Common";
            language[language["Dwarvish"] = 1] = "Dwarvish";
            language[language["Elven"] = 2] = "Elven";
            language[language["Draconic"] = 3] = "Draconic";
            language[language["Infernal"] = 4] = "Infernal";
            language[language["Abyssal"] = 5] = "Abyssal";
            language[language["Celestial"] = 6] = "Celestial";
        })(language = Library.language || (Library.language = {}));
        var die;
        (function (die) {
            die[die["d4"] = 4] = "d4";
            die[die["d6"] = 6] = "d6";
            die[die["d8"] = 8] = "d8";
            die[die["d10"] = 10] = "d10";
            die[die["d12"] = 12] = "d12";
            die[die["d20"] = 20] = "d20";
        })(die = Library.die || (Library.die = {}));
        var proficiencyType;
        (function (proficiencyType) {
            proficiencyType[proficiencyType["weapon"] = 0] = "weapon";
            proficiencyType[proficiencyType["armor"] = 1] = "armor";
        })(proficiencyType = Library.proficiencyType || (Library.proficiencyType = {}));
        var weaponRangeType;
        (function (weaponRangeType) {
            weaponRangeType[weaponRangeType["melee"] = 0] = "melee";
            weaponRangeType[weaponRangeType["ranged"] = 1] = "ranged";
        })(weaponRangeType = Library.weaponRangeType || (Library.weaponRangeType = {}));
        var weaponDamageType;
        (function (weaponDamageType) {
            weaponDamageType[weaponDamageType["slashing"] = 0] = "slashing";
            weaponDamageType[weaponDamageType["bludgeoning"] = 1] = "bludgeoning";
        })(weaponDamageType = Library.weaponDamageType || (Library.weaponDamageType = {}));
        var String3 = (function () {
            /**
             * A string comprised of three characters. If more are specified then the first three are chosen.
             * If a string of less than three characters is provided then the Value remains undefined.
             * @param Value The string value.
             */
            function String3(Value) {
                this.Value = Value;
                this.Value = Value.slice(0, 3);
                if (this.Value.length < 3)
                    this.Value = undefined;
            }
            return String3;
        }());
        var Alignment = (function () {
            /**
             * A general outline of the aspects that govern the character's personality.
             * @param name The name of the current alignment.
             * @param description A short description of the current alingment.
             * @param type The type of the current alignment such us good or evil.
             * @param loyalty The loyalty of the current alignment such as lawful or chaotic.
             */
            function Alignment(name, description, type, loyalty) {
                /** The name of the current alignment.*/
                this.Name = {
                    Name: "Name",
                    Description: "Description",
                    Value: undefined
                };
                /** A short description of the current alingment.*/
                this.Description = {
                    Name: "Description",
                    Description: "A short description of the current alignent.",
                    Value: undefined
                };
                this.Name.Value = name;
                this.Description.Value = description;
                this.AlignmentType = type;
                this.AlignmentLoyalty = loyalty;
            }
            ;
            return Alignment;
        }());
        Library.Alignment = Alignment;
        ;
        var Race = (function () {
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
             */
            function Race(name, description, age, alignment, size, speed, languages, traits) {
                /** The name of the current race.*/
                this.Name = {
                    Name: "Name",
                    Description: "The name of the current race.",
                    Value: undefined
                };
                /** A short description of the current race.*/
                this.Description = {
                    Name: "Description",
                    Description: "A short description of the current race.",
                    Value: undefined
                };
                /** The maximum age of characters of the current race.*/
                this.Age = {
                    Name: "Age",
                    Description: "The maximum age of characters of the current race.",
                    Value: undefined
                };
                /** The most common alignment of characters of the current race.*/
                this.Alignment = {
                    Name: "Alignment",
                    Description: "The most common alignment of characters of the current race.",
                    Value: undefined
                };
                /** The average size of characters of the current race.*/
                this.Size = {
                    Name: "Size",
                    Description: "The average size of characters of the current race.",
                    Value: undefined
                };
                /** A list of the languages commonly spoken by characters of the current race.*/
                this.Languages = {
                    Name: "Languages",
                    Description: "A list of the languages commonly spoken by characters of the current race.",
                    Value: undefined
                };
                /** A list of the traits granted by the current race.*/
                this.Traits = {
                    Name: "Traits",
                    Description: "A list of the traits granted by the current race.",
                    Value: undefined
                };
                this.Name.Value = name;
                this.Description.Value = description;
                this.Age.Value = age;
                this.Alignment.Value = alignment;
                this.Size.Value = size;
                this.Speed.Value = speed;
                this.Languages.Value = languages;
                this.Traits.Value = traits;
            }
            return Race;
        }());
        Library.Race = Race;
        var SubRace = (function () {
            /**
             * A further segmentation of Races.
             * @param name The name of the current subrace.
             * @param description A short description of the current subrace.
             * @param race The race that the current subrace belongs to.
             * @param traits A list of the traits granted by the current subrace.
             */
            function SubRace(name, description, race, traits) {
                /** The name of the current subrace.*/
                this.Name = {
                    Name: "Name",
                    Description: "The name of the current subrace.",
                    Value: undefined
                };
                /** A short description of the current subrace.*/
                this.Description = {
                    Name: "Description",
                    Description: "A short description of the current subrace.",
                    Value: undefined
                };
                /** The race that the current subrace belongs to.*/
                this.Race = {
                    Name: "Race",
                    Description: "The race that the current subrace belongs to.",
                    Value: undefined
                };
                /** A list of the traits granted by the current subrace.*/
                this.Traits = {
                    Name: "Traits",
                    Description: "A list of the traits granted by the current subrace.",
                    Value: undefined
                };
                this.Name.Value = name;
                this.Description.Value = description;
                this.Race.Value = race;
                this.Traits.Value = traits;
            }
            return SubRace;
        }());
        Library.SubRace = SubRace;
        var Ability = (function () {
            /**
            * One of the basic character abilities.
            * @param name The name of the current ability.
            * @param description A short description of the current ability.
            * @param shortName A short version of the name of the current ability comprised of three letters.
            * @param score The current ability's score.
            */
            function Ability(name, description, shortName, score) {
                /** The name of the current ability.*/
                this.Name = {
                    Name: "Name",
                    Description: "The name of the current ability.",
                    Value: undefined
                };
                /** A short description of the current ability.*/
                this.Description = {
                    Name: "Description",
                    Description: "A short description of the current ability.",
                    Value: undefined
                };
                /** A short version of the name of the current ability with three letters.*/
                this.ShortName = {
                    Name: "Short Name",
                    Description: "A short version of the name of the current ability with three letters.",
                    Value: undefined
                };
                /** The current ability's score.*/
                this.Score = {
                    Name: "Score",
                    Description: "The current ability's score.",
                    Value: undefined
                };
                /** The current ability's modifier.*/
                this.Modifier = {
                    Name: "Modifier",
                    Description: "The current ability's modifier",
                    Value: undefined
                };
                this.Name.Value = name;
                this.Description.Value = description;
                this.ShortName.Value = new String3(shortName);
                this.Score.Value = score;
                this.Modifier.Value = Math.floor((this.Score.Value - 10) / 2);
            }
            return Ability;
        }());
        Library.Ability = Ability;
        var CharacterClass = (function () {
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
            function CharacterClass(name, description, features, proficiencies, hitDie, proficiencyBonus, equipment, goldPieces, primaryAbilities, savingThrowProficiencies, skills) {
                /** The level that the character has on this class.*/
                this.Level = {
                    Name: "Level",
                    Description: "The level that the character has attained on the current class.",
                    Value: undefined
                };
                /** The name of the current class.*/
                this.Name = {
                    Name: "Name",
                    Description: "The name of the current class.",
                    Value: undefined
                };
                /** A short description of the current class.*/
                this.Description = {
                    Name: "Description",
                    Description: "A short description of the current class.",
                    Value: undefined
                };
                /** A list of the features provided by the current class.*/
                this.Features = {
                    Name: "Features",
                    Description: "A list of the features provided by the current class.",
                    Value: undefined
                };
                /** A list of the proficiencies provided by the current class.*/
                this.Proficiencies = {
                    Name: "Proficiencies",
                    Description: "A list of the proficiencies provided by the current class.",
                    Value: undefined
                };
                /** The die that determines the character's HP.*/
                this.HitDie = {
                    Name: "Hit Die",
                    Description: "The die that determines the character's HP.",
                    Value: undefined
                };
                /** A list of the proficiency bonuses granted by the class.*/
                this.ProficiencyBonus = {
                    Name: "Proficiency Bonus List",
                    Description: "The proficiency bonuses granted for each character level.",
                    Value: undefined
                };
                /** A list of all the starting items granted by the class.*/
                this.Equipment = {
                    Name: "Equipment",
                    Description: "A list of the suggested starting gear for a character of this class.",
                    Value: undefined
                };
                /** The starting gold for this class.*/
                this.GoldPieces = {
                    Name: "Gold",
                    Description: "The starting gold for this class.",
                    Value: undefined
                };
                /** The primary abilities for this class.*/
                this.PrimaryAbilities = {
                    Name: "Primary Abilities",
                    Description: "The most important ability/ies for this class.",
                    Value: undefined
                };
                /** The ability proficiencies granted by this class.*/
                this.SavingThrowProficiencies = {
                    Name: "Saving Throw Proficiencies",
                    Description: "The ability saving throw proficiencies granted by this class.",
                    Value: undefined
                };
                /** The skill proficiencies granted by this class.*/
                this.Skills = {
                    Name: "Skills",
                    Description: "A list of the skill proficiencies granted by this class.",
                    Value: undefined
                };
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
            return CharacterClass;
        }());
        Library.CharacterClass = CharacterClass;
        var Character = (function () {
            function Character() {
                /** The character's first name.*/
                this.FirstName = {
                    Name: "First Name",
                    Description: "The character's first name.",
                    Value: undefined
                };
                /** The character's last name.*/
                this.LastName = {
                    Name: "Last Name",
                    Description: "The character's last name.",
                    Value: undefined
                };
                /** A short description of the character's past.*/
                this.BackgroundStory = {
                    Name: "Background Story",
                    Description: "A short description of the character's past.",
                    Value: undefined
                };
                /** A list of all the classes of the current character.*/
                this.Classes = {
                    Name: "Class",
                    Description: "The classes of the current character.",
                    Value: undefined
                };
                /** The experience points of the character.*/
                this.XP = {
                    Name: "XP",
                    Description: "The experience points of the character.",
                    Value: undefined
                };
                /** The experience points needed to gain a level.*/
                this.XpToNext = {
                    Name: "XP to next Level",
                    Description: "The amount of experience points needed to gain the next character level.",
                    Value: undefined
                };
                /** The character's race.*/
                this.Race = {
                    Name: "Race",
                    Description: "The character's race.",
                    Value: undefined
                };
                /** The character's sub race.*/
                this.SubRace = {
                    Name: "Sub Race",
                    Description: "The character's sub race.",
                    Value: undefined
                };
                /** The character's base speed.*/
                this.BaseSpeed = {
                    Name: "Base speed",
                    Description: "The character's base speed.",
                    Value: undefined
                };
                /** The character's basic abilities.*/
                this.Abilities = {
                    Name: "Abilities",
                    Description: "The character's basic abilities.",
                    Value: undefined
                };
                /** The character's alignment.*/
                this.Alignment = {
                    Name: "Alignment",
                    Description: "The character's alignment.",
                    Value: undefined
                };
            }
            /**
             * Returns the current character's  ability with the specified name.
             * @param name The name to base the ability search on.
             */
            Character.prototype.getAbilityByName = function (name) {
                var results = this.Abilities.Value.filter(function (checkName) {
                    return checkName.Name.Value == name;
                });
                var result = (results) ? results[0] : new Ability(name, name, new String3(name).Value, 0);
                return result;
            };
            Object.defineProperty(Character.prototype, "FullName", {
                /** The character's combination of first and last name.*/
                get: function () {
                    return {
                        Name: "Full Name",
                        Description: "The character's combination of first and last name.",
                        Value: this.FirstName + " " + this.LastName
                    };
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(Character.prototype, "HP", {
                /** The character's current health points.*/
                get: function () {
                    return {
                        Name: "HP",
                        Description: "The character's current health points.",
                        Value: this.MaxHP.Value
                    };
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(Character.prototype, "MaxHP", {
                /** The character's maximum health points.*/
                get: function () {
                    return {
                        Name: "Max HP",
                        Description: "The character's maximum health points.",
                        Value: undefined
                    };
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(Character.prototype, "TotalCarryingWeight", {
                /** The total weight of items that the character can carry.*/
                get: function () {
                    var strScore = this.getAbilityByName("Strength").Score.Value;
                    return {
                        Name: "Carrying Weight",
                        Description: "The total weight of items that the character can carry.",
                        Value: 15 * strScore
                    };
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(Character.prototype, "AC", {
                /** The character's Armor Class.*/
                get: function () {
                    var dexMod = this.getAbilityByName("Dexterity").Modifier.Value;
                    return {
                        Name: "AC",
                        Description: "The character's Armor Class",
                        Value: 10 + dexMod
                    };
                },
                enumerable: true,
                configurable: true
            });
            ;
            Object.defineProperty(Character.prototype, "Initiative", {
                /** The order in which the character's turn comes in combat.*/
                get: function () {
                    var dexMod = this.getAbilityByName("Dexterity").Modifier.Value;
                    return {
                        Name: "Initiative",
                        Description: "The order in which the character's turn comes in combat.",
                        Value: dexMod
                    };
                },
                enumerable: true,
                configurable: true
            });
            return Character;
        }());
        Library.Character = Character;
        var Skill = (function () {
            /**
             * A skill test.
             * @param name he name of the skill.
             * @param description A short description of the skill.
             * @param ability The ability ascociated with this skill test.
             */
            function Skill(name, description, ability) {
                this.Name = {
                    /** The name of the skill.*/
                    Name: "Name",
                    Description: "The name of the skill.",
                    Value: undefined
                };
                /** A short description of the skill.*/
                this.Description = {
                    Name: "Description",
                    Description: "A short description of the skill.",
                    Value: undefined
                };
                /** The ability ascociated with this skill test.*/
                this.Ability = {
                    Name: "Ability",
                    Description: "The ability ascociated with this skill test.",
                    Value: undefined
                };
                this.Name.Value = name;
                this.Description.Value = description;
                this.Ability.Value = ability;
            }
            return Skill;
        }());
        Library.Skill = Skill;
        var Trait = (function () {
            /**
             * A trait granted by a race or subrace.
             * @param name The name of the trait.
             * @param description The description of the trait.
             * @param shortDescription A short description of the trait to be used in notes.
             */
            function Trait(name, description, shortDescription) {
                /** The name of the trait.*/
                this.Name = {
                    Name: "Name",
                    Description: "The name of the trait.",
                    Value: undefined
                };
                /** The description of the trait.*/
                this.Description = {
                    Name: "Description",
                    Description: "The description of the trait",
                    Value: undefined
                };
                /** A short description of the trait to be used in notes.*/
                this.ShortDescription = {
                    Name: "Short Description",
                    Description: "A short description of the trait to be used in notes.",
                    Value: undefined
                };
                this.Name.Value = name;
                this.Description.Value = description;
                this.ShortDescription.Value = shortDescription;
            }
            return Trait;
        }());
        Library.Trait = Trait;
        var AbilityIncrease = (function (_super) {
            __extends(AbilityIncrease, _super);
            /**
             * An ability modification provided by a race or sub race as a trait.
             * @param name The name of the trait.
             * @param description A description of the trait.
             * @param shortdescription A short description of the trait to be used in notes.
             * @param ability The ability to be modified.
             * @param bonus The bonus to be applied to the ability's score.
             */
            function AbilityIncrease(name, description, shortdescription, ability, bonus) {
                var _this = _super.call(this, name, description, shortdescription) || this;
                _this.Ability = ability;
                _this.Bonus = bonus;
                return _this;
            }
            return AbilityIncrease;
        }(Trait));
        Library.AbilityIncrease = AbilityIncrease;
        var Weapon = (function () {
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
            function Weapon(name, description, weight, price, type, hasFinesse, isThrown, damage, damageType, secondaryDamage) {
                /** The name of the weapon.*/
                this.Name = {
                    Name: "Name",
                    Description: "The name of the weapon",
                    Value: undefined
                };
                /** A short description of the weapon.*/
                this.Description = {
                    Name: "Description",
                    Description: "A short description of the weapon.",
                    Value: undefined
                };
                /** The weapon's weight.*/
                this.Weight = {
                    Name: "Weight",
                    Description: "The weapon's weight",
                    Value: undefined
                };
                /** The weapon's price.*/
                this.Price = {
                    Name: "Price",
                    Description: "The weapon's price",
                    Value: undefined
                };
                /** Declares whether the weapon is melee or ranged.*/
                this.Type = {
                    Name: "Type",
                    Description: "Declares whether the weapon is melee or ranged.",
                    Value: undefined
                };
                /** Declares whether the weapon has the finesse property.*/
                this.HasFinesse = {
                    Name: "Finesse",
                    Description: "Declares whether the weapon has the finesse property.",
                    Value: undefined
                };
                /** Declares whether the weapon is throwable.*/
                this.IsThrown = {
                    Name: "Thrown",
                    Description: "Declares whether the weapon is thrown.",
                    Value: undefined
                };
                /** States the damage die.*/
                this.Damage = {
                    Name: "Damage",
                    Description: "States the damage die.",
                    Value: undefined
                };
                /** The weapon's damage type.*/
                this.DamageType = {
                    Name: "Damage Type",
                    Description: "The weapon's damage type.",
                    Value: undefined
                };
                /** States the secondary damage die.*/
                this.SecondaryDamage = {
                    Name: "Secondary Damage",
                    Description: "States the secondary damage die.",
                    Value: undefined
                };
            }
            ;
            return Weapon;
        }());
        Library.Weapon = Weapon;
    })(Library = DNDCharacterGenerator.Library || (DNDCharacterGenerator.Library = {}));
})(DNDCharacterGenerator || (DNDCharacterGenerator = {}));
//# sourceMappingURL=Library.js.map