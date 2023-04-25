const selectAllCharacters = (user) => {
  return {
    text: `SELECT * FROM public.character WHERE user_id = $1`,
    values: user
  }
}

const selectCharacter = (userAndCharacter) => {
  return {
    text: `SELECT * FROM public.character WHERE user_id = $1 AND character_name = $2`,
    values: userAndCharacter
  }
}

const deleteCharacter = (userAndCharacter) => {
  return {
    text: `DELETE FROM public.character WHERE user_id = $1 AND id = $2`,
    values: userAndCharacter
  }
}

const insertCharacter = (char) => {
  return {
    text: `INSERT INTO public.character (character_name, player_name, alignment, race, age, height, weight, eyes, skin,
                                         hair, background, class, about, personality_traits, ideals, bonds, flaws,
                                         allies_organisations, backstory, addition_information, user_id)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
           RETURNING *`,
    values: char
  };
}

const updateCharacter = (char) => {
  return {
    text: `UPDATE public.character
            SET (character_name, player_name, alignment, race, age, height, weight, eyes, skin,
                 hair, background, class, about, personality_traits, ideals, bonds, flaws,
                 allies_organisations, backstory, addition_information) = 
                (VALUES ($1, $2, $3, $4, $5::integer, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20))
             WHERE user_id = $22 AND id = $21
             RETURNING *`,
    values: char
  };
}


module.exports = {
  insertCharacter,
  selectAllCharacters,
  selectCharacter,
  updateCharacter,
  deleteCharacter
}