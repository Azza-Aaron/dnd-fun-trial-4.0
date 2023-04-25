
const createUser = `
CREATE TABLE IF NOT EXISTS "user"
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
)`;

const storyBoard = `
CREATE TABLE IF NOT EXISTS "story_board"
(
    id SERIAL PRIMARY KEY,
    wold_name TEXT,
    back_story TEXT,
    current_story TEXT,
    world_building TEXT,
    persons_of_interest TEXT,
    notes TEXT,
    user_id INT,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id)
        REFERENCES "user"(id)
)`

const userNotes = `
CREATE TABLE IF NOT EXISTS "user_notes_for_dm"
(
    id SERIAL PRIMARY KEY,
    header TEXT,
    note TEXT,
    character_name TEXT,
    character_pronounciation TEXT,
    type TEXT,
    player_name TEXT,
    user_id INT,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const characterNotes = `
CREATE TABLE IF NOT EXISTS "character_notes_for_dm"
(
    id SERIAL PRIMARY KEY,
    note TEXT,
    player_id INT,
    player_character TEXT,
    user_id INT,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`


const character = `
CREATE TABLE IF NOT EXISTS "character"
(
    id SERIAL PRIMARY KEY,
    character_name TEXT,
    player_name TEXT,
    alignment TEXT,
    race TEXT,
    age INT,
    height VARCHAR,
    weight VARCHAR,
    eyes TEXT,
    skin TEXT,
    hair TEXT,
    background TEXT,
    class TEXT,
    about TEXT,
    personality_traits TEXT,
    ideals TEXT,
    bonds TEXT,
    flaws TEXT,
    user_id INT,
    allies_organisations TEXT,
    backstory TEXT,
    addition_information TEXT,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const characterTreasure = `
CREATE TABLE IF NOT EXISTS "character_treasure"
(
    id SERIAL PRIMARY KEY,
    treasure TEXT,
    user_id INT,
    character_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const characterFood = `
CREATE TABLE IF NOT EXISTS "character_food"
(
    id SERIAL PRIMARY KEY,
    food TEXT,
    user_id INT,
    character_id INT,
    buff TEXT,
    de_buff TEXT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const characterAmmo = `
CREATE TABLE IF NOT EXISTS "character_ammunition"
(
    id SERIAL PRIMARY KEY,
    ammunition_type TEXT,
    stack INT,
    user_id INT,
    character_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const characterLightSources = `
CREATE TABLE IF NOT EXISTS "character_light_sources"
(
    id SERIAL PRIMARY KEY,
    type TEXT,
    stack INT,
    light_time VARCHAR,
    user_id INT,
    character_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const itemOther = `
CREATE TABLE IF NOT EXISTS "character_light_sources"
(
    id SERIAL PRIMARY KEY,
    type TEXT,
    stack INT,
    text VARCHAR,
    note INT,
    effect TEXT,
    time VARCHAR,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const clothing = `
CREATE TABLE IF NOT EXISTS "character_clothing"
(
    id SERIAL PRIMARY KEY,
    clothing TEXT,
    user_id INT,
    character_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const characterWeapons = `
CREATE TABLE IF NOT EXISTS "character_weapons"
(
    weapon_name TEXT,
    melee boolean,
    ranged boolean,
    damage_text TEXT,
    damage INT,
    type TEXT,
    limited_uses boolean,
    description TEXT,
    requirements TEXT,
    properties TEXT,
    notes TEXT,
    wear TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const characterArmour = `
CREATE TABLE IF NOT EXISTS "character_armour"
(
    armour TEXT,
    type TEXT,
    limited_uses boolean,
    description TEXT,
    requirements TEXT,
    properties TEXT,
    notes TEXT,
    wear TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const characterSpells = `
CREATE TABLE IF NOT EXISTS "character_spells"
(
    spells TEXT,
    notes TEXT,
    damage TEXT,
    type TEXT,
    ingredients TEXT,
    use_limit TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const itemLimits = `
CREATE TABLE IF NOT EXISTS "item_use_limits"
(
    item TEXT,
    "limit" INT,
    notes TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const itemUses = `
CREATE TABLE IF NOT EXISTS "item_uses"
(
    item TEXT,
    character TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id),
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id)
)`

const characterAttributes = `
CREATE TABLE IF NOT EXISTS character_stats
(
    id SERIAL PRIMARY KEY,
    level INT,
    experience_points INT,
    strength_base INT,
    dexterity_base INT,
    constitution_base INT,
    intelligence_base INT,
    wisdom_base INT,
    charisma_base INT,
    strength_adjustment INT,
    dexterity_adjustment INT,
    constitution_adjustment INT,
    intelligence_adjustment INT,
    wisdom_adjustment INT,
    charisma_adjustment INT,
    proficiency_bonus INT,
    saving_throw_strength INT,
    saving_throw_strength_proficient BOOLEAN,
    saving_throw_dexterity INT,
    saving_throw_dexterity_proficient BOOLEAN,
    saving_throw_constitution INT,
    saving_throw_constitution_proficient BOOLEAN,
    saving_throw_intelligence INT,
    saving_throw_intelligence_proficient BOOLEAN,
    saving_throw_wisdom INT,
    saving_throw_wisdom_proficient BOOLEAN,
    saving_throw_charisma INT,
    saving_throw_charisma_proficient BOOLEAN,
    acrobatics INT,
    acrobatics_proficient BOOLEAN,
    animal_handling INT,
    animal_handling_proficient BOOLEAN,
    arcana INT,
    arcana_proficient BOOLEAN,
    athletics INT,
    athletics_proficient BOOLEAN,
    deception INT,
    deception_proficient BOOLEAN,
    history INT,
    history_proficient BOOLEAN,
    insight INT,
    insight_proficient BOOLEAN,
    intimidation INT,
    intimidation_proficient BOOLEAN,
    investigation INT,
    investigation_proficient BOOLEAN,
    medicine INT,
    medicine_proficient BOOLEAN,
    nature INT,
    nature_proficient BOOLEAN,
    perception INT,
    perception_proficient BOOLEAN,
    performance INT,
    performance_proficient BOOLEAN,
    persuasion INT,
    persuasion_proficient BOOLEAN,
    religion INT,
    religion_proficient BOOLEAN,
    sleight_of_hand INT,
    sleight_of_hand_proficient BOOLEAN,
    stealth INT,
    stealth_proficient BOOLEAN,
    survival INT,
    survival_proficient BOOLEAN,
    user_id INT,
    armor_class INT,
    initiative INT,
    hit_points_total INT,
    current_hit_points INT,
    temporary_hit_points INT,
    hit_dice TEXT,
    death_saves TEXT,
    speed INT,
    gold INT,
    silver INT,
    copper INT,
    diamond INT,
    money INT,
    character_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const attackUses = `
CREATE TABLE IF NOT EXISTS "item_uses"
(
    attack TEXT,
    spell TEXT,
    day VARCHAR,
    user_id INT,
    character_id INT,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id),
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id)
)`

const attacks = `
CREATE TABLE IF NOT EXISTS userAttacks
(
    "name" TEXT,
    bonus TEXT,
    damage TEXT,
    notes TEXT,
    "type" TEXT,
    "RANGE" TEXT,
    "limit" INT,
    user_id INT,
    character_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`


const players = `
CREATE TABLE IF NOT EXISTS players
(
    id SERIAL PRIMARY KEY,
    group_name TEXT,
    group_leader TEXT,
    user_id INT,
    dm_id INT,
    bond TEXT
)`

const features = `
CREATE TABLE IF NOT EXISTS features
(
    id SERIAL PRIMARY KEY,
    feature TEXT,
    notes TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const skills = `
CREATE TABLE IF NOT EXISTS skills
(
    id SERIAL PRIMARY KEY,
    skill TEXT,
    notes TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const languages = `
CREATE TABLE IF NOT EXISTS languages
(
    id    SERIAL PRIMARY KEY,
    language_verbal TEXT,
    language_written TEXT,
    notes TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character" (id),
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES "user" (id)
)`

const traits = `
CREATE TABLE IF NOT EXISTS  traits
(
    id SERIAL PRIMARY KEY,
    trait TEXT,
    notes TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const spellCastingSpells = `
CREATE TABLE IF NOT EXISTS spell_casting
(
    level INT,
    spell TEXT,
    damage TEXT,
    type TEXT,
    cantrip BOOLEAN,
    requirements TEXT,
    ingredients TEXT,
    ritual TEXT,
    use_limit TEXT,
    notes TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const spellCastingChar = `
CREATE TABLE IF NOT EXISTS spell_casting_char
(
    level INT,
    spell_casting_class VARCHAR,
    spell_casting_ability VARCHAR,
    spell_save_DC VARCHAR,
    spell_attack_bonus VARCHAR,
    notes TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const beast = `
CREATE TABLE IF NOT EXISTS beast
(
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    languages TEXT,
    spells TEXT,
    level TEXT,
    actions TEXT,
    alignment TEXT,
    armour_class TEXT,
    armour_type TEXT,
    hit_points TEXT,
    skills TEXT,
    senses TEXT,
    challenge TEXT,
    speed TEXT,
    strength_base INT,
    dexterity_base INT,
    constitution_base INT,
    intelligence_base INT,
    wisdom_base INT,
    charisma_base INT,
    strength_adjustment INT,
    dexterity_adjustment INT,
    constitution_adjustment INT,
    intelligence_adjustment INT,
    wisdom_adjustment INT,
    charisma_adjustment INT,
    proficiency_bonus INT,
    saving_throw_strength INT,
    saving_throw_strength_proficient BOOLEAN,
    saving_throw_dexterity INT,
    saving_throw_dexterity_proficient BOOLEAN,
    saving_throw_constitution INT,
    saving_throw_constitution_proficient BOOLEAN,
    saving_throw_intelligence INT,
    saving_throw_intelligence_proficient BOOLEAN,
    saving_throw_wisdom INT,
    saving_throw_wisdom_proficient BOOLEAN,
    saving_throw_charisma INT,
    saving_throw_charisma_proficient BOOLEAN,
    acrobatics INT,
    acrobatics_proficient BOOLEAN,
    animal_handling INT,
    animal_handling_proficient BOOLEAN,
    arcana INT,
    arcana_proficient BOOLEAN,
    athletics INT,
    athletics_proficient BOOLEAN,
    deception INT,
    deception_proficient BOOLEAN,
    history INT,
    history_proficient BOOLEAN,
    insight INT,
    insight_proficient BOOLEAN,
    intimidation INT,
    intimidation_proficient BOOLEAN,
    investigation INT,
    investigation_proficient BOOLEAN,
    medicine INT,
    medicine_proficient BOOLEAN,
    nature INT,
    nature_proficient BOOLEAN,
    perception INT,
    perception_proficient BOOLEAN,
    performance INT,
    performance_proficient BOOLEAN,
    persuasion INT,
    persuasion_proficient BOOLEAN,
    religion INT,
    religion_proficient BOOLEAN,
    sleight_of_hand INT,
    sleight_of_hand_proficient BOOLEAN,
    stealth INT,
    stealth_proficient BOOLEAN,
    survival INT,
    survival_proficient BOOLEAN,
    user_id INT,
    armor_class INT,
    initiative INT
)`

const beastNotes = `
CREATE TABLE IF NOT EXISTS beast_notes
(
    beast TEXT,
    notes TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const userImages = `
CREATE TABLE IF NOT EXISTS user_images
(
    image TEXT,
    type TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const playerNotes = `
CREATE TABLE IF NOT EXISTS player_general_notes
(
    header TEXT,
    body TEXT,
    type TEXT,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`

const playerJournal = `
CREATE TABLE IF NOT EXISTS player_character_journal
(
    header TEXT,
    body TEXT,
    date VARCHAR,
    character_id INT,
    user_id INT,
    CONSTRAINT fk_character
        FOREIGN KEY (character_id)
            REFERENCES "character"(id),
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
)`




const queries = [
  storyBoard,
  userNotes,
  characterNotes,
  characterTreasure,
  characterWeapons,
  characterArmour,
  characterSpells,
  itemLimits,
  itemUses,
  characterAttributes,
  attackUses,
  attacks,
  players,
  features,
  skills,
  languages,
  traits,
  spellCastingSpells,
  spellCastingChar,
  beast,
  characterFood,
  characterAmmo,
  clothing,
  characterLightSources,
  itemOther,
  beastNotes,
  userImages,
  playerNotes,
  playerJournal
]

const createTables = async (client) => {
  const promises = []
  try {
    await client.query(createUser)
    await client.query(character)
    for (let i = 0; i < queries.length; i++) {
      promises.push(client.query(queries[i]))
    }
    await Promise.all(promises)
    console.log('table plated')
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

module.exports = {
  createTables
}
