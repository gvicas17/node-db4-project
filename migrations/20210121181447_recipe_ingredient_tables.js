
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_title', 128).notNullable()
  })

  .createTable('ingredents', tbl => {
      tbl.increments('ingredients_id')
      tbl.string('ingredient_name', 128).notNullable().unique()
  })

  .createTable('instructions', tbl => {
      tbl.increments('instuctions_id')
      tbl.text('instuction').notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
  })

  .createTable('recipe_ingredients', tbl => {
      tbl.increments('recipe_ingredients_id')
      tbl.integer('quantity').notNullable()
      tbl.integer('unit').notNullable()
      tbl.integer('recipe_id')
      .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
      tbl.integer('ingredients_id')
      .unsigned()
        .notNullable()
        .references('ingredients_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
      tbl.integer('instuctions_id')
      .unsigned()
        .notNullable()
        .references('instructions_id')
        .inTable('instructions')
        .onDelete('RESTRICT')
  })
};

exports.down = function(knex) {
    return knex.schema
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('instructions')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
