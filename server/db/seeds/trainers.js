exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Trainers').del()
  await knex('Trainers').insert([
    {id: 1, colName: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};
