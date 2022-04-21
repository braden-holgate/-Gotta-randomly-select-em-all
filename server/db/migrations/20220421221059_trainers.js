exports.up = function (knex) {
  return knex.schema.createTable('Trainers', (table) => {
    table.increments().primary()
    table.string('name')
    table.string('pokemon_type')
    table.string('home_gym')
    table.string('img_url')
    table.string('bio')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Trainers')
}
