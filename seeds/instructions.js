
exports.seed = function(knex) {
      return knex('instructions').insert([
        {instruction: 'Put water in pot and bring to a boil', recipe_id: 1 },
        {instruction: 'While waiting on water to boil heat up butter', recipe_id: 1},
        {instruction: 'once butter is melted add in milk, cheese, salt, and pepper', recipe_id: 1},
        {instruction: 'Let cheese mixture melt into a sauce, remove from heat', recipe_id:1 },
        {instruction: 'Once the water is boiling pour noodles into water and cook until a la dante', recipe_id: 1},
        {instruction: 'When noodles are done, drain and then pour the cheese mixture into the noodles', recipe_id: 1},
        {instruction: 'Serve hot', recipe_id: 1},

        {instruction: 'Take out 2 slices of bread', recipe_id: 2},
        {instruction: 'With a knife spread peanut butter on one slice of bread', recipe_id: 2},
        {instruction: 'Then take a spoon and spread jelly on the other slice of bread', recipe_id: 2},
        {instruction: 'Put the two pieces of bread together and cut in half', recipe_id: 2},
        {instruction: 'You can change it up and mix the panut butter and jelly together before spreading on the bread.', recipe_id: 2},
        
        {instruction: 'put water in pot and bring to a boil', recipe_id: 3},
        {instruction: 'once water is boiling add in oats and salt', recipe_id: 3},
        {instruction: 'cook until oatmeal is to the consistancy that you desire', recipe_id: 3},
        {instruction: 'When done put oatmeal in bowl', recipe_id: 3},
        {instruction: 'add sugar and nuts and enjoy hot', recipe_id: 3}
      ]);
};
