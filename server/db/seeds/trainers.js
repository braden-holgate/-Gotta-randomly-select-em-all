exports.seed = async function(knex) {
  await knex('Trainers').del()
  await knex('Trainers').insert([
    {id: 1, name: 'Halmai', pokemon_type: 'fire', home_gym:'Cinnabar Island', img_url: null, bio: 'A trainer with her own internal flame, Halmai teaches pokemon to use fire for maximum destructive impact.'},
    {id: 2, name: 'Grace', pokemon_type: 'water', home_gym:'Cerulean City', img_url: null, bio: 'A cute and innocent-looking trainer who teaches water pokemon to turn tranquil lakes into tsunamis.'},
    {id: 3, name: 'Lawrence', pokemon_type: 'poison', home_gym:'Fuschia City', img_url: null, bio: 'Famously injects poison code into your sql, gives the Soul Badge if you defeat him.'},
    {id: 4, name: 'Cat', pokemon_type: 'electric', home_gym:'Vermilion City', img_url: null, bio: 'The most experienced of all trainers, the matriarch, Cat understands the power of electricity and how it can feed off other elements during battles.'},
    {id: 5, name: 'Justine', pokemon_type: 'psychic', home_gym:'Saffron City', img_url: null, bio: 'Master of the mind, overwhelms opponents with laugh attacks that invade your mind and incapacitate you.'},
    {id: 6, name: 'Braden', pokemon_type: 'flying', home_gym:'Fortree City', img_url: null, bio: 'A benevolent trainer who teaches flying pokemon how to harness the power of the wind.'},
  ])
  };

