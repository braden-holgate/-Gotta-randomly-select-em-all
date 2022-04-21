exports.seed = async function(knex) {
  await knex('Trainers').del()
  await knex('Trainers').insert([
    {id: 1, name: 'Halmai', pokemon_type: 'fire', home_gym:'Cinnabar Island', img_url: '', bio: '' ol
      {id:, name: 'Grace', pokemon_type: 'water', home_gym:'Cerulean City', img_url: '', bio: '' },olName   {i: name: 'Lawrence', pokemon_type: 'poison', home_gym:'Fuschia City', img_url: '', bio: '' 3, colName:  {iname: 'Cat', pokemon_type: 'electric', home_gym:'Vermilion City', img_url: '', bio: '' d: 3, col4ame: name: 'Justine', pokemon_type: 'psychic', home_gym:'Saffron City', img_url: '', bio: '' ' {id: 3, col5aname: 'Braden', pokemon_type: 'flying', home_gym:'Fortree City', img_url: '', bio: '' m,: ' {id: , col6ame: ');
};

