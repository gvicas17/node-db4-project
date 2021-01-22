
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_title: 'Mac&Cheese'},
        {recipe_title: 'PB&J'},
        {recipe_title: 'Oatmeal'}
      ]);
};
