
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('table_name').insert([
        {ingredient_name: 'noodles'},
        {ingredient_name: 'milk'},
        {ingredient_name: 'water'},
        {ingredient_name: 'butter'},
        {ingredient_name: 'salt'},
        {ingredient_name: 'pepper'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'bread'},
        {ingredient_name: 'peanut butter'},
        {ingredient_name: 'jelly'},
        {ingredient_name: 'oats'},
        {ingredient_name: 'sugar'},
        {ingredient_name: 'nuts'}
      ]);
};
