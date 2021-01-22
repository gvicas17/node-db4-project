
exports.seed = function(knex) {
      return knex('table_name').insert([
        {quantity: 1, unit: 'lb', recipe_id: 1, ingredients_id: 1, instructions_id: 5},
        {quantity: 2, unit: 'cups', recipe_id: 1, ingredients_id: 2, instructions_id: 3},
        {quantity: 4, unit: 'qts', recipe_id: 1, ingredients_id: 3, instructions_id: 1},
        {quantity: 4, unit: 'tbs', recipe_id: 1, ingredients_id: 4, instructions_id: 2},
        {quantity: 2, unit: 'tsp', recipe_id: 1, ingredients_id: 5, instructions_id: 3},
        {quantity: 1, unit: 'tsp', recipe_id: 1, ingredients_id: 6, instructions_id: 3},
        {quantity: 3, unit: 'cups', recipe_id: 1, ingredients_id: 7, instructions_id: 3},

        {quantity: 2, unit: 'slices', recipe_id: 2, ingredients_id: 8, instructions_id: 1},
        {quantity: 3, unit: 'tbs', recipe_id: 2, ingredients_id: 9, instructions_id: 2},
        {quantity: 2, unit: 'tbs', recipe_id: 2, ingredients_id: 10, instructions_id: 3},

        {quantity: 4, unit: 'qt', recipe_id: 3, ingredients_id: 3, instructions_id: 1},
        {quantity: 1, unit: 'tsp', recipe_id: 3, ingredients_id: 5, instructions_id: 2},
        {quantity: .5, unit: 'cups', recipe_id: 3, ingredients_id: 11, instructions_id: 2},
        {quantity: 1, unit: 'tbs', recipe_id: 3, ingredients_id: 12, instructions_id: 5},
        {quantity: .25, unit: 'cups', recipe_id: 3, ingredients_id: 13, instructions_id: 5}
      ]);
};
