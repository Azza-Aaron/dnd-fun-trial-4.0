
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
    quests TEXT,
    notes TEXT,
    user_id INT,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id)
        REFERENCES "user"(id)
)`

const quests = `
CREATE TABLE IF NOT EXISTS "quest_board"
(
    id SERIAL PRIMARY KEY,
    quest_header TEXT,
    quest_body TEXT,
    quest_characters TEXT,
    quest_reward TEXT,
    quest_length TEXT,
    quest_requirements TEXT,
    quest_obstacles TEXT,
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
    player_id VARCHAR,
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
    age VARCHAR,
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
    stack VARCHAR,
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
    stack VARCHAR,
    text VARCHAR,
    note VARCHAR,
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
    melee VARCHAR,
    ranged VARCHAR,
    damage_text TEXT,
    damage VARCHAR,
    type TEXT,
    limited_uses VARCHAR,
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
    limited_uses VARCHAR,
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
    "limit" VARCHAR,
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
    level VARCHAR,
    experience_points VARCHAR,
    strength_base VARCHAR,
    dexterity_base VARCHAR,
    constitution_base VARCHAR,
    intelligence_base VARCHAR,
    wisdom_base VARCHAR,
    charisma_base VARCHAR,
    strength_adjustment VARCHAR,
    dexterity_adjustment VARCHAR,
    constitution_adjustment VARCHAR,
    intelligence_adjustment VARCHAR,
    wisdom_adjustment VARCHAR,
    charisma_adjustment VARCHAR,
    proficiency_bonus VARCHAR,
    saving_throw_strength VARCHAR,
    saving_throw_strength_proficient VARCHAR,
    saving_throw_dexterity VARCHAR,
    saving_throw_dexterity_proficient VARCHAR,
    saving_throw_constitution VARCHAR,
    saving_throw_constitution_proficient VARCHAR,
    saving_throw_intelligence VARCHAR,
    saving_throw_intelligence_proficient VARCHAR,
    saving_throw_wisdom VARCHAR,
    saving_throw_wisdom_proficient VARCHAR,
    saving_throw_charisma VARCHAR,
    saving_throw_charisma_proficient VARCHAR,
    acrobatics VARCHAR,
    acrobatics_proficient VARCHAR,
    animal_handling VARCHAR,
    animal_handling_proficient VARCHAR,
    arcana VARCHAR,
    arcana_proficient VARCHAR,
    athletics VARCHAR,
    athletics_proficient VARCHAR,
    deception VARCHAR,
    deception_proficient VARCHAR,
    history VARCHAR,
    history_proficient VARCHAR,
    insight VARCHAR,
    insight_proficient VARCHAR,
    intimidation VARCHAR,
    intimidation_proficient VARCHAR,
    investigation VARCHAR,
    investigation_proficient VARCHAR,
    medicine VARCHAR,
    medicine_proficient VARCHAR,
    nature VARCHAR,
    nature_proficient VARCHAR,
    perception VARCHAR,
    perception_proficient VARCHAR,
    performance VARCHAR,
    performance_proficient VARCHAR,
    persuasion VARCHAR,
    persuasion_proficient VARCHAR,
    religion VARCHAR,
    religion_proficient VARCHAR,
    sleight_of_hand VARCHAR,
    sleight_of_hand_proficient VARCHAR,
    stealth VARCHAR,
    stealth_proficient VARCHAR,
    survival VARCHAR,
    survival_proficient VARCHAR,
    user_id INT,
    armor_class VARCHAR,
    initiative VARCHAR,
    hit_points_total VARCHAR,
    current_hit_points VARCHAR,
    temporary_hit_points VARCHAR,
    hit_dice TEXT,
    death_saves TEXT,
    speed VARCHAR,
    gold VARCHAR,
    silver VARCHAR,
    copper VARCHAR,
    diamond VARCHAR,
    money VARCHAR,
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
    "limit" VARCHAR,
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
    dm_id VARCHAR,
    bond TEXT,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
            REFERENCES "user"(id)
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
    level VARCHAR,
    spell TEXT,
    damage TEXT,
    type TEXT,
    cantrip VARCHAR,
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
    level VARCHAR,
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
    strength_base VARCHAR,
    dexterity_base VARCHAR,
    constitution_base VARCHAR,
    intelligence_base VARCHAR,
    wisdom_base VARCHAR,
    charisma_base VARCHAR,
    strength_adjustment VARCHAR,
    dexterity_adjustment VARCHAR,
    constitution_adjustment VARCHAR,
    intelligence_adjustment VARCHAR,
    wisdom_adjustment VARCHAR,
    charisma_adjustment VARCHAR,
    proficiency_bonus VARCHAR,
    saving_throw_strength VARCHAR,
    saving_throw_strength_proficient VARCHAR,
    saving_throw_dexterity VARCHAR,
    saving_throw_dexterity_proficient VARCHAR,
    saving_throw_constitution VARCHAR,
    saving_throw_constitution_proficient VARCHAR,
    saving_throw_intelligence VARCHAR,
    saving_throw_intelligence_proficient VARCHAR,
    saving_throw_wisdom VARCHAR,
    saving_throw_wisdom_proficient VARCHAR,
    saving_throw_charisma VARCHAR,
    saving_throw_charisma_proficient VARCHAR,
    acrobatics VARCHAR,
    acrobatics_proficient VARCHAR,
    animal_handling VARCHAR,
    animal_handling_proficient VARCHAR,
    arcana VARCHAR,
    arcana_proficient VARCHAR,
    athletics VARCHAR,
    athletics_proficient VARCHAR,
    deception VARCHAR,
    deception_proficient VARCHAR,
    history VARCHAR,
    history_proficient VARCHAR,
    insight VARCHAR,
    insight_proficient VARCHAR,
    intimidation VARCHAR,
    intimidation_proficient VARCHAR,
    investigation VARCHAR,
    investigation_proficient VARCHAR,
    medicine VARCHAR,
    medicine_proficient VARCHAR,
    nature VARCHAR,
    nature_proficient VARCHAR,
    perception VARCHAR,
    perception_proficient VARCHAR,
    performance VARCHAR,
    performance_proficient VARCHAR,
    persuasion VARCHAR,
    persuasion_proficient VARCHAR,
    religion VARCHAR,
    religion_proficient VARCHAR,
    sleight_of_hand VARCHAR,
    sleight_of_hand_proficient VARCHAR,
    stealth VARCHAR,
    stealth_proficient VARCHAR,
    survival VARCHAR,
    survival_proficient VARCHAR,
    created_by VARCHAR,
    armor_class VARCHAR,
    initiative VARCHAR
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

const images = `
CREATE TABLE IF NOT EXISTS images
(
    image TEXT,
    type TEXT
)`

const mob = `
CREATE TABLE IF NOT EXISTS beast_mob
(
    beast TEXT,
    description TEXT,
    health TEXT,
    damage TEXT,
    group_size TEXT,
    type TEXT
    
)`

const dmJournal = `
CREATE TABLE IF NOT EXISTS dm_journal
(
    id SERIAL PRIMARY KEY,
    date VARCHAR,
    header TEXT,
    body TEXT,
    associations TEXT,
    group_name TEXT,
    notes TEXT,
    user_id INT,
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
  playerJournal,
  quests,
  images,
  mob,
  dmJournal
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
