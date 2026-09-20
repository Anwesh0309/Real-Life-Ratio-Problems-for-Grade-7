// 100 Deterministic Practice Questions across 10 Worlds (10 Questions per World)
// Topic: Real-Life Ratio Problems (Grade 6). Every answer is computed & verified by tools/build_questions.py.

export const staticQuestionBank = {
  // WORLD 1: Writing ratios from real situations
  1: [
    {
      id: "w1_q1", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "A bag has 3 red marbles and 5 blue marbles. What is the ratio of red marbles to blue marbles?",
      diagram: {"type": "tokens", "rows": [{"label": "Red", "n": 3, "color": "cyan"}, {"label": "Blue", "n": 5, "color": "gold"}]},
      options: ["3 : 5", "5 : 3", "3 : 8", "8 : 5"], correctAnswer: "3 : 5",
      hint: "Say the amounts in the order they are asked: red first, then blue.",
      explanation: "Red : Blue = 3 : 5."
    },
    {
      id: "w1_q2", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "A fruit bowl has 4 apples and 7 oranges. What is the ratio of oranges to apples?",
      diagram: {"type": "tokens", "rows": [{"label": "Apples", "n": 4, "color": "cyan"}, {"label": "Oranges", "n": 7, "color": "gold"}]},
      options: ["4 : 7", "7 : 11", "11 : 4", "7 : 4"], correctAnswer: "7 : 4",
      hint: "Watch the order! The question names oranges first, so its number goes first.",
      explanation: "Oranges : Apples = 7 : 4."
    },
    {
      id: "w1_q3", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "Mei Ling has 6 pens and 5 pencils. What is the ratio of pencils to pens?",
      diagram: {"type": "tokens", "rows": [{"label": "Pens", "n": 6, "color": "cyan"}, {"label": "Pencils", "n": 5, "color": "gold"}]},
      options: ["6 : 5", "5 : 11", "5 : 6", "11 : 6"], correctAnswer: "5 : 6",
      hint: "Watch the order! The question names pencils first, so its number goes first.",
      explanation: "Pencils : Pens = 5 : 6."
    },
    {
      id: "w1_q4", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "A kueh box has 2 pink kuehs and 9 green kuehs. What is the ratio of pink kuehs to green kuehs?",
      diagram: {"type": "tokens", "rows": [{"label": "Pink", "n": 2, "color": "cyan"}, {"label": "Green", "n": 9, "color": "gold"}]},
      options: ["9 : 2", "2 : 9", "2 : 11", "11 : 9"], correctAnswer: "2 : 9",
      hint: "Say the amounts in the order they are asked: pink first, then green.",
      explanation: "Pink : Green = 2 : 9."
    },
    {
      id: "w1_q5", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "A box has 3 red and 4 green counters. What is the ratio of red counters to ALL the counters?",
      diagram: {"type": "tokens", "rows": [{"label": "Red", "n": 3, "color": "cyan"}, {"label": "Green", "n": 4, "color": "gold"}]},
      options: ["3 : 7", "3 : 4", "4 : 7", "7 : 3"], correctAnswer: "3 : 7",
      hint: "Part to whole: the second number is the total. First find 3 + 4.",
      explanation: "Total = 3 + 4 = 7, so red : all = 3 : 7."
    },
    {
      id: "w1_q6", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "A shelter has 5 cats and 8 dogs. What is the ratio of dogs to cats?",
      diagram: {"type": "tokens", "rows": [{"label": "Cats", "n": 5, "color": "cyan"}, {"label": "Dogs", "n": 8, "color": "gold"}]},
      options: ["5 : 8", "8 : 13", "13 : 5", "8 : 5"], correctAnswer: "8 : 5",
      hint: "Watch the order! The question names dogs first, so its number goes first.",
      explanation: "Dogs : Cats = 8 : 5."
    },
    {
      id: "w1_q7", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "Ali cycled 5 km and walked 3 km. What is the ratio of the distance walked to the distance cycled?",
      diagram: {"type": "tokens", "rows": [{"label": "Cycled", "n": 5, "color": "cyan"}, {"label": "Walked", "n": 3, "color": "gold"}]},
      options: ["5 : 3", "3 : 8", "3 : 5", "8 : 5"], correctAnswer: "3 : 5",
      hint: "Watch the order! The question names walked first, so its number goes first.",
      explanation: "Walked : Cycled = 3 : 5."
    },
    {
      id: "w1_q8", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "A class has 7 boys and 6 girls. What is the ratio of girls to all the students?",
      diagram: {"type": "tokens", "rows": [{"label": "Boys", "n": 7, "color": "cyan"}, {"label": "Girls", "n": 6, "color": "gold"}]},
      options: ["6 : 7", "6 : 13", "7 : 13", "13 : 6"], correctAnswer: "6 : 13",
      hint: "Part to whole: the second number is the total. First find 7 + 6.",
      explanation: "Total = 7 + 6 = 13, so girls : all = 6 : 13."
    },
    {
      id: "w1_q9", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "A recipe uses 2 cups of flour and 3 cups of milk. What is the ratio of milk to flour?",
      diagram: {"type": "tokens", "rows": [{"label": "Flour", "n": 2, "color": "cyan"}, {"label": "Milk", "n": 3, "color": "gold"}]},
      options: ["3 : 2", "2 : 3", "3 : 5", "5 : 2"], correctAnswer: "3 : 2",
      hint: "Watch the order! The question names milk first, so its number goes first.",
      explanation: "Milk : Flour = 3 : 2."
    },
    {
      id: "w1_q10", worldId: 1, difficulty: "Easy", fact: "ratio_write",
      prompt: "A bus has 8 adults and 3 children. What is the ratio of children to adults?",
      diagram: {"type": "tokens", "rows": [{"label": "Adults", "n": 8, "color": "cyan"}, {"label": "Children", "n": 3, "color": "gold"}]},
      options: ["8 : 3", "3 : 11", "11 : 8", "3 : 8"], correctAnswer: "3 : 8",
      hint: "Watch the order! The question names children first, so its number goes first.",
      explanation: "Children : Adults = 3 : 8."
    }
  ],

  // WORLD 2: Simplest form
  2: [
    {
      id: "w2_q1", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "The ratio of boys to girls in a class is 12 : 18. Write the ratio in simplest form.",
      diagram: {"type": "table", "headers": ["Boys", "Girls"], "cols": [[12, 18], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["3 : 2", "2 : 3", "6 : 9", "4 : 6"], correctAnswer: "2 : 3",
      hint: "Find the biggest number that divides both 12 and 18, then divide both parts by it.",
      explanation: "12 ÷ 6 = 2 and 18 ÷ 6 = 3, so 12 : 18 = 2 : 3."
    },
    {
      id: "w2_q2", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "Ali has 15 blue tiles and 20 white tiles. Write blue : white in simplest form.",
      diagram: {"type": "table", "headers": ["Blue", "White"], "cols": [[15, 20], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["3 : 4", "4 : 3", "3 : 5", "5 : 4"], correctAnswer: "3 : 4",
      hint: "Find the biggest number that divides both 15 and 20, then divide both parts by it.",
      explanation: "15 ÷ 5 = 3 and 20 ÷ 5 = 4, so 15 : 20 = 3 : 4."
    },
    {
      id: "w2_q3", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "A ribbon is cut into two pieces, 10 cm and 25 cm. Write short : long in simplest form.",
      diagram: {"type": "table", "headers": ["Short", "Long"], "cols": [[10, 25], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["5 : 2", "2 : 3", "1 : 2", "2 : 5"], correctAnswer: "2 : 5",
      hint: "Find the biggest number that divides both 10 and 25, then divide both parts by it.",
      explanation: "10 ÷ 5 = 2 and 25 ÷ 5 = 5, so 10 : 25 = 2 : 5."
    },
    {
      id: "w2_q4", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "A tank holds 28 litres of water and 16 litres of juice. Write water : juice in simplest form.",
      diagram: {"type": "table", "headers": ["Water", "Juice"], "cols": [[28, 16], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["4 : 7", "14 : 8", "7 : 4", "7 : 2"], correctAnswer: "7 : 4",
      hint: "Find the biggest number that divides both 28 and 16, then divide both parts by it.",
      explanation: "28 ÷ 4 = 7 and 16 ÷ 4 = 4, so 28 : 16 = 7 : 4."
    },
    {
      id: "w2_q5", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "Mrs Tan spent $24 and saved $32. Write the ratio spent : saved in simplest form.",
      diagram: {"type": "table", "headers": ["Spent", "Saved"], "cols": [[24, 32], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["4 : 3", "3 : 4", "6 : 8", "12 : 16"], correctAnswer: "3 : 4",
      hint: "Find the biggest number that divides both 24 and 32, then divide both parts by it.",
      explanation: "24 ÷ 8 = 3 and 32 ÷ 8 = 4, so 24 : 32 = 3 : 4."
    },
    {
      id: "w2_q6", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "A choir has 36 girls and 24 boys. Write the ratio of girls to boys in simplest form.",
      diagram: {"type": "table", "headers": ["Girls", "Boys"], "cols": [[36, 24], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["3 : 2", "2 : 3", "6 : 4", "18 : 12"], correctAnswer: "3 : 2",
      hint: "Find the biggest number that divides both 36 and 24, then divide both parts by it.",
      explanation: "36 ÷ 12 = 3 and 24 ÷ 12 = 2, so 36 : 24 = 3 : 2."
    },
    {
      id: "w2_q7", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "A paint mix has 18 ml of red and 30 ml of white. Write red : white in simplest form.",
      diagram: {"type": "table", "headers": ["Red", "White"], "cols": [[18, 30], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["5 : 3", "9 : 15", "6 : 10", "3 : 5"], correctAnswer: "3 : 5",
      hint: "Find the biggest number that divides both 18 and 30, then divide both parts by it.",
      explanation: "18 ÷ 6 = 3 and 30 ÷ 6 = 5, so 18 : 30 = 3 : 5."
    },
    {
      id: "w2_q8", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "A stall sold 45 chicken rice and 20 fish rice. Write chicken rice : fish rice in simplest form.",
      diagram: {"type": "table", "headers": ["Chicken", "Fish"], "cols": [[45, 20], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["4 : 9", "9 : 5", "9 : 4", "5 : 2"], correctAnswer: "9 : 4",
      hint: "Find the biggest number that divides both 45 and 20, then divide both parts by it.",
      explanation: "45 ÷ 5 = 9 and 20 ÷ 5 = 4, so 45 : 20 = 9 : 4."
    },
    {
      id: "w2_q9", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "A model train is 16 cm long and its track is 40 cm long. Write train : track in simplest form.",
      diagram: {"type": "table", "headers": ["Train", "Track"], "cols": [[16, 40], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["5 : 2", "2 : 5", "4 : 10", "8 : 20"], correctAnswer: "2 : 5",
      hint: "Find the biggest number that divides both 16 and 40, then divide both parts by it.",
      explanation: "16 ÷ 8 = 2 and 40 ÷ 8 = 5, so 16 : 40 = 2 : 5."
    },
    {
      id: "w2_q10", worldId: 2, difficulty: "Easy-Med", fact: "simplify",
      prompt: "A garden has 35 roses and 49 tulips. Write the ratio of roses to tulips in simplest form.",
      diagram: {"type": "table", "headers": ["Roses", "Tulips"], "cols": [[35, 49], ["?", "?"]], "ops": ["÷ ?"]},
      options: ["5 : 7", "7 : 5", "5 : 8", "35 : 7"], correctAnswer: "5 : 7",
      hint: "Find the biggest number that divides both 35 and 49, then divide both parts by it.",
      explanation: "35 ÷ 7 = 5 and 49 ÷ 7 = 7, so 35 : 49 = 5 : 7."
    }
  ],

  // WORLD 3: Equivalent ratios (missing term)
  3: [
    {
      id: "w3_q1", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Complete the equivalent ratio: 2 : 3 = 8 : ?",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[2, 3], [8, "?"]], "ops": ["× ?"]},
      options: [9, 16, 12, 15], correctAnswer: 12,
      hint: "Look at the first parts: 2 → 8. What did you multiply by? Do the same to 3.",
      explanation: "2 × 4 = 8, so 3 × 4 = 12. 2 : 3 = 8 : 12."
    },
    {
      id: "w3_q2", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Which number completes the equivalent ratio? 3 : 5 = 12 : ?",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[3, 5], [12, "?"]], "ops": ["× ?"]},
      options: [14, 20, 15, 24], correctAnswer: 20,
      hint: "Look at the first parts: 3 → 12. What did you multiply by? Do the same to 5.",
      explanation: "3 × 4 = 12, so 5 × 4 = 20. 3 : 5 = 12 : 20."
    },
    {
      id: "w3_q3", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Find the missing number in the equivalent ratio: 4 : 7 = ? : 21",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[4, 7], ["?", 21]], "ops": ["× ?"]},
      options: [12, 18, 9, 14], correctAnswer: 12,
      hint: "Look at the second parts: 7 → 21. What did you multiply by? Do the same to 4.",
      explanation: "7 × 3 = 21, so 4 × 3 = 12. 4 : 7 = 12 : 21."
    },
    {
      id: "w3_q4", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Complete the equivalent ratio: 5 : 2 = 35 : ?",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[5, 2], [35, "?"]], "ops": ["× ?"]},
      options: [32, 10, 7, 14], correctAnswer: 14,
      hint: "Look at the first parts: 5 → 35. What did you multiply by? Do the same to 2.",
      explanation: "5 × 7 = 35, so 2 × 7 = 14. 5 : 2 = 35 : 14."
    },
    {
      id: "w3_q5", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Which number completes the equivalent ratio? 3 : 8 = ? : 40",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[3, 8], ["?", 40]], "ops": ["× ?"]},
      options: [35, 24, 15, 12], correctAnswer: 15,
      hint: "Look at the second parts: 8 → 40. What did you multiply by? Do the same to 3.",
      explanation: "8 × 5 = 40, so 3 × 5 = 15. 3 : 8 = 15 : 40."
    },
    {
      id: "w3_q6", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Find the missing number in the equivalent ratio: 24 : 40 = 3 : ?",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[24, 40], [3, "?"]], "ops": ["÷ ?"]},
      options: [19, 5, 8, 13], correctAnswer: 5,
      hint: "Look at the first parts: 24 → 3. What did you divide by? Do the same to 40.",
      explanation: "24 ÷ 8 = 3, so 40 ÷ 8 = 5. 24 : 40 = 3 : 5."
    },
    {
      id: "w3_q7", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Complete the equivalent ratio: 18 : 27 = ? : 3",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[18, 27], ["?", 3]], "ops": ["÷ ?"]},
      options: [2, 3, 9, 6], correctAnswer: 2,
      hint: "Look at the second parts: 27 → 3. What did you divide by? Do the same to 18.",
      explanation: "27 ÷ 9 = 3, so 18 ÷ 9 = 2. 18 : 27 = 2 : 3."
    },
    {
      id: "w3_q8", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Which number completes the equivalent ratio? 6 : 7 = 30 : ?",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[6, 7], [30, "?"]], "ops": ["× ?"]},
      options: [31, 42, 36, 35], correctAnswer: 35,
      hint: "Look at the first parts: 6 → 30. What did you multiply by? Do the same to 7.",
      explanation: "6 × 5 = 30, so 7 × 5 = 35. 6 : 7 = 30 : 35."
    },
    {
      id: "w3_q9", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Find the missing number in the equivalent ratio: 9 : 4 = 63 : ?",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[9, 4], [63, "?"]], "ops": ["× ?"]},
      options: [58, 27, 28, 36], correctAnswer: 28,
      hint: "Look at the first parts: 9 → 63. What did you multiply by? Do the same to 4.",
      explanation: "9 × 7 = 63, so 4 × 7 = 28. 9 : 4 = 63 : 28."
    },
    {
      id: "w3_q10", worldId: 3, difficulty: "Easy-Med", fact: "equivalent",
      prompt: "Complete the equivalent ratio: 20 : 15 = ? : 3",
      diagram: {"type": "table", "headers": ["A", "B"], "cols": [[20, 15], ["?", 3]], "ops": ["÷ ?"]},
      options: [5, 4, 3, 12], correctAnswer: 4,
      hint: "Look at the second parts: 15 → 3. What did you divide by? Do the same to 20.",
      explanation: "15 ÷ 5 = 3, so 20 ÷ 5 = 4. 20 : 15 = 4 : 3."
    }
  ],

  // WORLD 4: Part : part vs part : whole
  4: [
    {
      id: "w4_q1", worldId: 4, difficulty: "Medium", fact: "part_whole",
      prompt: "The ratio of boys to girls is 3 : 5. What is the ratio of boys to all the children?",
      diagram: {"type": "bars", "rows": [{"label": "Boys", "units": 3, "color": "cyan"}, {"label": "Girls", "units": 5, "color": "gold"}], "bracket": "All"},
      options: ["3 : 5", "5 : 8", "8 : 3", "3 : 8"], correctAnswer: "3 : 8",
      hint: "Add the parts to find the whole: 3 + 5 units. Boys are 3 of those units.",
      explanation: "Whole = 3 + 5 = 8 units, so boys : all children = 3 : 8."
    },
    {
      id: "w4_q2", worldId: 4, difficulty: "Medium", fact: "part_whole",
      prompt: "The ratio of cats to dogs is 2 : 3. What is the ratio of dogs to all the pets?",
      diagram: {"type": "bars", "rows": [{"label": "Cats", "units": 2, "color": "cyan"}, {"label": "Dogs", "units": 3, "color": "gold"}], "bracket": "All"},
      options: ["3 : 2", "2 : 5", "3 : 5", "5 : 3"], correctAnswer: "3 : 5",
      hint: "Whole = cats + dogs. Dogs are 3 of the units in the whole.",
      explanation: "Whole = 2 + 3 = 5 units, so dogs : all pets = 3 : 5."
    },
    {
      id: "w4_q3", worldId: 4, difficulty: "Medium", fact: "part_whole",
      prompt: "The ratio of red to blue beads is 4 : 7. What is the ratio of blue beads to all the beads?",
      diagram: {"type": "bars", "rows": [{"label": "Red", "units": 4, "color": "cyan"}, {"label": "Blue", "units": 7, "color": "gold"}], "bracket": "All"},
      options: ["7 : 4", "7 : 11", "4 : 11", "11 : 7"], correctAnswer: "7 : 11",
      hint: "Find the whole first: 4 + 7. Then put blue's 7 units over the whole.",
      explanation: "Whole = 4 + 7 = 11 units, so blue : all beads = 7 : 11."
    },
    {
      id: "w4_q4", worldId: 4, difficulty: "Medium", fact: "part_whole",
      prompt: "In a fruit basket the ratio of apples to pears is 5 : 1. What is the ratio of apples to all the fruit?",
      diagram: {"type": "bars", "rows": [{"label": "Apples", "units": 5, "color": "cyan"}, {"label": "Pears", "units": 1, "color": "gold"}], "bracket": "All"},
      options: ["5 : 6", "5 : 1", "1 : 6", "6 : 5"], correctAnswer: "5 : 6",
      hint: "Whole = 5 + 1. Apples take up 5 of those units.",
      explanation: "Whole = 5 + 1 = 6 units, so apples : all fruit = 5 : 6."
    },
    {
      id: "w4_q5", worldId: 4, difficulty: "Medium", fact: "whole_part",
      prompt: "Pets are only cats and dogs. The ratio of cats to all pets is 2 : 7. What is the ratio of cats to dogs?",
      diagram: {"type": "bars", "rows": [{"label": "Cats", "units": 2, "color": "cyan"}, {"label": "Dogs", "units": "?", "color": "gold"}], "bracket": "7 units"},
      options: ["2 : 7", "5 : 2", "7 : 5", "2 : 5"], correctAnswer: "2 : 5",
      hint: "Dogs = whole − cats. Take 2 units away from 7 units.",
      explanation: "Dogs = 7 − 2 = 5 units, so cats : dogs = 2 : 5."
    },
    {
      id: "w4_q6", worldId: 4, difficulty: "Medium", fact: "whole_part",
      prompt: "A pack has only red and green cards. The ratio of green to all cards is 3 : 8. What is red : green?",
      diagram: {"type": "bars", "rows": [{"label": "Green", "units": 3, "color": "gold"}, {"label": "Red", "units": "?", "color": "cyan"}], "bracket": "8 units"},
      options: ["3 : 5", "8 : 3", "5 : 3", "5 : 8"], correctAnswer: "5 : 3",
      hint: "Red = whole − green = 8 − 3 units. Then write red first.",
      explanation: "Red = 8 − 3 = 5 units, so red : green = 5 : 3."
    },
    {
      id: "w4_q7", worldId: 4, difficulty: "Medium", fact: "whole_part",
      prompt: "Only boys and girls are in a club. The ratio of girls to all members is 4 : 9. What is boys : girls?",
      diagram: {"type": "bars", "rows": [{"label": "Girls", "units": 4, "color": "gold"}, {"label": "Boys", "units": "?", "color": "cyan"}], "bracket": "9 units"},
      options: ["4 : 5", "5 : 4", "9 : 4", "5 : 9"], correctAnswer: "5 : 4",
      hint: "Boys = whole − girls = 9 − 4 units. Write boys first.",
      explanation: "Boys = 9 − 4 = 5 units, so boys : girls = 5 : 4."
    },
    {
      id: "w4_q8", worldId: 4, difficulty: "Medium", fact: "whole_part",
      prompt: "A drink is made of tea and milk. Tea is 3 out of every 5 parts. What is the ratio of tea to milk?",
      diagram: {"type": "bars", "rows": [{"label": "Tea", "units": 3, "color": "gold"}, {"label": "Milk", "units": "?", "color": "cyan"}], "bracket": "5 parts"},
      options: ["3 : 2", "3 : 5", "2 : 3", "5 : 2"], correctAnswer: "3 : 2",
      hint: "Milk is the rest of the 5 parts. How many parts are left after tea?",
      explanation: "Milk = 5 − 3 = 2 parts, so tea : milk = 3 : 2."
    },
    {
      id: "w4_q9", worldId: 4, difficulty: "Medium", fact: "whole_part",
      prompt: "Juice is 5 out of every 9 parts in a punch. The rest is water. What is the ratio of juice to water?",
      diagram: {"type": "bars", "rows": [{"label": "Juice", "units": 5, "color": "gold"}, {"label": "Water", "units": "?", "color": "cyan"}], "bracket": "9 parts"},
      options: ["5 : 9", "4 : 5", "9 : 4", "5 : 4"], correctAnswer: "5 : 4",
      hint: "Water is the rest of the 9 parts: 9 − 5.",
      explanation: "Water = 9 − 5 = 4 parts, so juice : water = 5 : 4."
    },
    {
      id: "w4_q10", worldId: 4, difficulty: "Medium", fact: "part_whole",
      prompt: "The ratio of adults to children at a fair is 6 : 1. What is the ratio of children to all the people?",
      diagram: {"type": "bars", "rows": [{"label": "Adults", "units": 6, "color": "cyan"}, {"label": "Children", "units": 1, "color": "gold"}], "bracket": "All"},
      options: ["1 : 6", "6 : 7", "1 : 7", "7 : 1"], correctAnswer: "1 : 7",
      hint: "Whole = 6 + 1. Children are just 1 unit of it.",
      explanation: "Whole = 6 + 1 = 7 units, so children : all = 1 : 7."
    }
  ],

  // WORLD 5: Sharing an amount in a ratio
  5: [
    {
      id: "w5_q1", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "Robo and Alex share 40 stickers in the ratio 3 : 5. How many stickers does Alex get?",
      diagram: {"type": "bars", "rows": [{"label": "Robo", "units": 3, "color": "cyan"}, {"label": "Alex", "units": 5, "color": "gold"}], "bracket": "40"},
      options: [25, 15, 5, 30], correctAnswer: 25,
      hint: "Add the parts: 3 + 5 = 8 units. Divide 40 by 8 to find 1 unit.",
      explanation: "3 + 5 = 8 units; 1 unit = 40 ÷ 8 = 5; the share = 5 × 5 = 25."
    },
    {
      id: "w5_q2", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "Mei and Lin share $36 in the ratio 1 : 2. How much money does Lin get?",
      diagram: {"type": "bars", "rows": [{"label": "Mei", "units": 1, "color": "cyan"}, {"label": "Lin", "units": 2, "color": "gold"}], "bracket": "$36"},
      options: ["$12", "$36", "$48", "$24"], correctAnswer: "$24",
      hint: "Add the parts: 1 + 2 = 3 units. Divide 36 by 3 to find 1 unit.",
      explanation: "1 + 2 = 3 units; 1 unit = 36 ÷ 3 = 12; the share = 2 × 12 = 24."
    },
    {
      id: "w5_q3", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "A baker packs 45 tarts into red and green boxes in the ratio 2 : 3. How many tarts are in the red boxes?",
      diagram: {"type": "bars", "rows": [{"label": "Red", "units": 2, "color": "cyan"}, {"label": "Green", "units": 3, "color": "gold"}], "bracket": "45"},
      options: [27, 9, 18, 36], correctAnswer: 18,
      hint: "Add the parts: 2 + 3 = 5 units. Divide 45 by 5 to find 1 unit.",
      explanation: "2 + 3 = 5 units; 1 unit = 45 ÷ 5 = 9; the share = 2 × 9 = 18."
    },
    {
      id: "w5_q4", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "Ravi and Sam share 60 sweets in the ratio 3 : 2. How many sweets does Sam get?",
      diagram: {"type": "bars", "rows": [{"label": "Ravi", "units": 3, "color": "cyan"}, {"label": "Sam", "units": 2, "color": "gold"}], "bracket": "60"},
      options: [36, 24, 12, 48], correctAnswer: 24,
      hint: "Add the parts: 3 + 2 = 5 units. Divide 60 by 5 to find 1 unit.",
      explanation: "3 + 2 = 5 units; 1 unit = 60 ÷ 5 = 12; the share = 2 × 12 = 24."
    },
    {
      id: "w5_q5", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "54 pupils are split into Team Red and Team Blue in the ratio 4 : 5. How many pupils are in Team Blue?",
      diagram: {"type": "bars", "rows": [{"label": "Red", "units": 4, "color": "cyan"}, {"label": "Blue", "units": 5, "color": "gold"}], "bracket": "54"},
      options: [30, 24, 6, 36], correctAnswer: 30,
      hint: "Add the parts: 4 + 5 = 9 units. Divide 54 by 9 to find 1 unit.",
      explanation: "4 + 5 = 9 units; 1 unit = 54 ÷ 9 = 6; the share = 5 × 6 = 30."
    },
    {
      id: "w5_q6", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "Mum gives $48 to Jia and Hao in the ratio 1 : 3. How much money does Jia get?",
      diagram: {"type": "bars", "rows": [{"label": "Jia", "units": 1, "color": "cyan"}, {"label": "Hao", "units": 3, "color": "gold"}], "bracket": "$48"},
      options: ["$36", "$24", "$48", "$12"], correctAnswer: "$12",
      hint: "Add the parts: 1 + 3 = 4 units. Divide 48 by 4 to find 1 unit.",
      explanation: "1 + 3 = 4 units; 1 unit = 48 ÷ 4 = 12; the share = 1 × 12 = 12."
    },
    {
      id: "w5_q7", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "A shop has 72 T-shirts in white and black in the ratio 5 : 7. How many T-shirts are black?",
      diagram: {"type": "bars", "rows": [{"label": "White", "units": 5, "color": "cyan"}, {"label": "Black", "units": 7, "color": "gold"}], "bracket": "72"},
      options: [30, 6, 42, 48], correctAnswer: 42,
      hint: "Add the parts: 5 + 7 = 12 units. Divide 72 by 12 to find 1 unit.",
      explanation: "5 + 7 = 12 units; 1 unit = 72 ÷ 12 = 6; the share = 7 × 6 = 42."
    },
    {
      id: "w5_q8", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "Two friends share 56 kueh in the ratio 3 : 4. How many kueh does the bigger share get?",
      diagram: {"type": "bars", "rows": [{"label": "Friend 1", "units": 3, "color": "cyan"}, {"label": "Friend 2", "units": 4, "color": "gold"}], "bracket": "56"},
      options: [24, 32, 8, 40], correctAnswer: 32,
      hint: "Add the parts: 3 + 4 = 7 units. Divide 56 by 7 to find 1 unit.",
      explanation: "3 + 4 = 7 units; 1 unit = 56 ÷ 7 = 8; the share = 4 × 8 = 32."
    },
    {
      id: "w5_q9", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "A 63-litre tank holds juice and water in the ratio 2 : 7. How many litres of water are there?",
      diagram: {"type": "bars", "rows": [{"label": "Juice", "units": 2, "color": "cyan"}, {"label": "Water", "units": 7, "color": "gold"}], "bracket": "63"},
      options: [49, 14, 7, 56], correctAnswer: 49,
      hint: "Add the parts: 2 + 7 = 9 units. Divide 63 by 9 to find 1 unit.",
      explanation: "2 + 7 = 9 units; 1 unit = 63 ÷ 9 = 7; the share = 7 × 7 = 49."
    },
    {
      id: "w5_q10", worldId: 5, difficulty: "Medium", fact: "share_ratio",
      prompt: "A $90 prize is shared by Anna and Ben in the ratio 4 : 5. How much does Anna get?",
      diagram: {"type": "bars", "rows": [{"label": "Anna", "units": 4, "color": "cyan"}, {"label": "Ben", "units": 5, "color": "gold"}], "bracket": "$90"},
      options: ["$50", "$10", "$30", "$40"], correctAnswer: "$40",
      hint: "Add the parts: 4 + 5 = 9 units. Divide 90 by 9 to find 1 unit.",
      explanation: "4 + 5 = 9 units; 1 unit = 90 ÷ 9 = 10; the share = 4 × 10 = 40."
    }
  ],

  // WORLD 6: One quantity known
  6: [
    {
      id: "w6_q1", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "The ratio of red to blue beads is 3 : 4. There are 12 red beads. How many blue beads are there?",
      diagram: {"type": "bars", "rows": [{"label": "Red", "units": 3, "color": "cyan", "tag": "12"}, {"label": "Blue", "units": 4, "color": "gold", "tag": "?"}], "bracket": null},
      options: [20, 16, 12, 13], correctAnswer: 16,
      hint: "3 units = 12. Divide to find what 1 unit is worth.",
      explanation: "3 units = 12, so 1 unit = 12 ÷ 3 = 4. The answer is 4 × 4 = 16."
    },
    {
      id: "w6_q2", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "The ratio of boys to girls is 2 : 5. There are 10 boys. How many girls are there?",
      diagram: {"type": "bars", "rows": [{"label": "Boys", "units": 2, "color": "cyan", "tag": "10"}, {"label": "Girls", "units": 5, "color": "gold", "tag": "?"}], "bracket": null},
      options: [25, 30, 20, 13], correctAnswer: 25,
      hint: "2 units = 10. Divide to find what 1 unit is worth.",
      explanation: "2 units = 10, so 1 unit = 10 ÷ 2 = 5. The answer is 5 × 5 = 25."
    },
    {
      id: "w6_q3", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "Rice and water are mixed in the ratio 5 : 3. 20 cups of rice are used. How many cups of water are needed?",
      diagram: {"type": "bars", "rows": [{"label": "Rice", "units": 5, "color": "cyan", "tag": "20"}, {"label": "Water", "units": 3, "color": "gold", "tag": "?"}], "bracket": null},
      options: [16, 8, 18, 12], correctAnswer: 12,
      hint: "5 units = 20. Divide to find what 1 unit is worth.",
      explanation: "5 units = 20, so 1 unit = 20 ÷ 5 = 4. The answer is 3 × 4 = 12."
    },
    {
      id: "w6_q4", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "Mango and milk are in the ratio 4 : 7 in a shake. There is 28 ml of mango. How much milk is there?",
      diagram: {"type": "bars", "rows": [{"label": "Mango", "units": 4, "color": "cyan", "tag": "28"}, {"label": "Milk", "units": 7, "color": "gold", "tag": "?"}], "bracket": null},
      options: [56, 42, 49, 31], correctAnswer: 49,
      hint: "4 units = 28. Divide to find what 1 unit is worth.",
      explanation: "4 units = 28, so 1 unit = 28 ÷ 4 = 7. The answer is 7 × 7 = 49."
    },
    {
      id: "w6_q5", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "The ratio of pens to pencils is 3 : 8. There are 15 pens. How many pencils are there?",
      diagram: {"type": "bars", "rows": [{"label": "Pens", "units": 3, "color": "cyan", "tag": "15"}, {"label": "Pencils", "units": 8, "color": "gold", "tag": "?"}], "bracket": null},
      options: [45, 40, 35, 20], correctAnswer: 40,
      hint: "3 units = 15. Divide to find what 1 unit is worth.",
      explanation: "3 units = 15, so 1 unit = 15 ÷ 3 = 5. The answer is 8 × 5 = 40."
    },
    {
      id: "w6_q6", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "A chocolate bar has dark and milk squares in the ratio 6 : 5. There are 30 dark squares. How many milk squares?",
      diagram: {"type": "bars", "rows": [{"label": "Dark", "units": 6, "color": "cyan", "tag": "30"}, {"label": "Milk", "units": 5, "color": "gold", "tag": "?"}], "bracket": null},
      options: [25, 30, 20, 29], correctAnswer: 25,
      hint: "6 units = 30. Divide to find what 1 unit is worth.",
      explanation: "6 units = 30, so 1 unit = 30 ÷ 6 = 5. The answer is 5 × 5 = 25."
    },
    {
      id: "w6_q7", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "The ratio of Ken's stamps to Lee's stamps is 2 : 9. Ken has 8 stamps. How many stamps does Lee have?",
      diagram: {"type": "bars", "rows": [{"label": "Ken", "units": 2, "color": "cyan", "tag": "8"}, {"label": "Lee", "units": 9, "color": "gold", "tag": "?"}], "bracket": null},
      options: [40, 32, 15, 36], correctAnswer: 36,
      hint: "2 units = 8. Divide to find what 1 unit is worth.",
      explanation: "2 units = 8, so 1 unit = 8 ÷ 2 = 4. The answer is 9 × 4 = 36."
    },
    {
      id: "w6_q8", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "The ratio of red to green apples is 3 : 5. There are 15 red apples. How many apples are there altogether?",
      diagram: {"type": "bars", "rows": [{"label": "Red", "units": 3, "color": "cyan", "tag": "15"}, {"label": "Green", "units": 5, "color": "gold", "tag": ""}], "bracket": "?"},
      options: [25, 45, 40, 20], correctAnswer: 40,
      hint: "3 units = 15. Find 1 unit, then count all 8 units.",
      explanation: "3 units = 15, so 1 unit = 5. Total units = 3 + 5 = 8, so 8 × 5 = 40."
    },
    {
      id: "w6_q9", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "The ratio of cats to dogs is 7 : 2. There are 14 dogs. How many cats are there?",
      diagram: {"type": "bars", "rows": [{"label": "Cats", "units": 7, "color": "cyan", "tag": "?"}, {"label": "Dogs", "units": 2, "color": "gold", "tag": "14"}], "bracket": null},
      options: [56, 49, 42, 19], correctAnswer: 49,
      hint: "2 units = 14. Divide to find what 1 unit is worth.",
      explanation: "2 units = 14, so 1 unit = 14 ÷ 2 = 7. The answer is 7 × 7 = 49."
    },
    {
      id: "w6_q10", worldId: 6, difficulty: "Med-Hard", fact: "one_part_known",
      prompt: "Tea and milk are mixed in the ratio 5 : 4. There is 24 ml of milk. How many ml of drink are there altogether?",
      diagram: {"type": "bars", "rows": [{"label": "Tea", "units": 5, "color": "cyan", "tag": ""}, {"label": "Milk", "units": 4, "color": "gold", "tag": "24"}], "bracket": "?"},
      options: [54, 30, 60, 29], correctAnswer: 54,
      hint: "4 units = 24. Find 1 unit, then count all 9 units.",
      explanation: "4 units = 24, so 1 unit = 6. Total units = 5 + 4 = 9, so 9 × 6 = 54."
    }
  ],

  // WORLD 7: Difference known
  7: [
    {
      id: "w7_q1", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "Ann and Bo have stickers in the ratio 5 : 3. Ann has 24 more than Bo. How many stickers does Ann have?",
      diagram: {"type": "bars", "rows": [{"label": "Ann", "units": 5, "color": "cyan"}, {"label": "Bo", "units": 3, "color": "gold"}], "diff": "24 more"},
      options: [120, 72, 60, 12], correctAnswer: 60,
      hint: "The gap is 5 − 3 = 2 units, and that gap is worth 24. Find 1 unit first.",
      explanation: "2 units = 24, so 1 unit = 12. Bigger share = 5 × 12 = 60."
    },
    {
      id: "w7_q2", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "The ratio of Sam's to Tim's marbles is 7 : 4. Sam has 15 more marbles. How many marbles does Tim have?",
      diagram: {"type": "bars", "rows": [{"label": "Sam", "units": 7, "color": "cyan"}, {"label": "Tim", "units": 4, "color": "gold"}], "diff": "15 more"},
      options: [60, 20, 25, 5], correctAnswer: 20,
      hint: "The gap is 7 − 4 = 3 units, and that gap is worth 15. Find 1 unit first.",
      explanation: "3 units = 15, so 1 unit = 5. Smaller share = 4 × 5 = 20."
    },
    {
      id: "w7_q3", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "The ratio of boys to girls is 3 : 2. There are 9 more boys than girls. How many children are there in all?",
      diagram: {"type": "bars", "rows": [{"label": "Boys", "units": 3, "color": "cyan"}, {"label": "Girls", "units": 2, "color": "gold"}], "diff": "9 more"},
      options: [45, 54, 9, 36], correctAnswer: 45,
      hint: "The gap is 3 − 2 = 1 units, and that gap is worth 9. Find 1 unit first.",
      explanation: "1 units = 9, so 1 unit = 9. Total = 5 × 9 = 45."
    },
    {
      id: "w7_q4", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "The ratio of Ella's to Fay's savings is 9 : 5. Ella has $20 more. How much money does Ella have?",
      diagram: {"type": "bars", "rows": [{"label": "Ella", "units": 9, "color": "cyan"}, {"label": "Fay", "units": 5, "color": "gold"}], "diff": "$20 more"},
      options: ["$180", "$50", "$5", "$45"], correctAnswer: "$45",
      hint: "The gap is 9 − 5 = 4 units, and that gap is worth 20. Find 1 unit first.",
      explanation: "4 units = 20, so 1 unit = 5. Bigger share = 9 × 5 = 45."
    },
    {
      id: "w7_q5", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "The ratio of roses to tulips is 8 : 3. There are 25 more roses than tulips. How many tulips are there?",
      diagram: {"type": "bars", "rows": [{"label": "Roses", "units": 8, "color": "cyan"}, {"label": "Tulips", "units": 3, "color": "gold"}], "diff": "25 more"},
      options: [75, 20, 15, 5], correctAnswer: 15,
      hint: "The gap is 8 − 3 = 5 units, and that gap is worth 25. Find 1 unit first.",
      explanation: "5 units = 25, so 1 unit = 5. Smaller share = 3 × 5 = 15."
    },
    {
      id: "w7_q6", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "A rope is cut in the ratio 4 : 1. The long piece is 18 cm longer than the short one. How long was the rope in cm?",
      diagram: {"type": "bars", "rows": [{"label": "Long", "units": 4, "color": "cyan"}, {"label": "Short", "units": 1, "color": "gold"}], "diff": "18 more"},
      options: [90, 30, 36, 6], correctAnswer: 30,
      hint: "The gap is 4 − 1 = 3 units, and that gap is worth 18. Find 1 unit first.",
      explanation: "3 units = 18, so 1 unit = 6. Total = 5 × 6 = 30."
    },
    {
      id: "w7_q7", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "Big and small cups are in the ratio 5 : 2. There are 21 more big cups than small cups. How many big cups?",
      diagram: {"type": "bars", "rows": [{"label": "Big", "units": 5, "color": "cyan"}, {"label": "Small", "units": 2, "color": "gold"}], "diff": "21 more"},
      options: [35, 105, 42, 7], correctAnswer: 35,
      hint: "The gap is 5 − 2 = 3 units, and that gap is worth 21. Find 1 unit first.",
      explanation: "3 units = 21, so 1 unit = 7. Bigger share = 5 × 7 = 35."
    },
    {
      id: "w7_q8", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "The ratio of Jan's to Kit's stickers is 7 : 5. Jan has 16 more stickers. How many stickers does Kit have?",
      diagram: {"type": "bars", "rows": [{"label": "Jan", "units": 7, "color": "cyan"}, {"label": "Kit", "units": 5, "color": "gold"}], "diff": "16 more"},
      options: [80, 48, 8, 40], correctAnswer: 40,
      hint: "The gap is 7 − 5 = 2 units, and that gap is worth 16. Find 1 unit first.",
      explanation: "2 units = 16, so 1 unit = 8. Smaller share = 5 × 8 = 40."
    },
    {
      id: "w7_q9", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "Cars and bikes in a car park are in the ratio 6 : 1. There are 35 more cars than bikes. How many cars are there?",
      diagram: {"type": "bars", "rows": [{"label": "Cars", "units": 6, "color": "cyan"}, {"label": "Bikes", "units": 1, "color": "gold"}], "diff": "35 more"},
      options: [210, 49, 42, 7], correctAnswer: 42,
      hint: "The gap is 6 − 1 = 5 units, and that gap is worth 35. Find 1 unit first.",
      explanation: "5 units = 35, so 1 unit = 7. Bigger share = 6 × 7 = 42."
    },
    {
      id: "w7_q10", worldId: 7, difficulty: "Med-Hard", fact: "difference",
      prompt: "The ratio of Mia's money to Nick's is 9 : 4. Mia has $30 more than Nick. How much do they have together?",
      diagram: {"type": "bars", "rows": [{"label": "Mia", "units": 9, "color": "cyan"}, {"label": "Nick", "units": 4, "color": "gold"}], "diff": "$30 more"},
      options: ["$390", "$78", "$84", "$6"], correctAnswer: "$78",
      hint: "The gap is 9 − 4 = 5 units, and that gap is worth 30. Find 1 unit first.",
      explanation: "5 units = 30, so 1 unit = 6. Total = 13 × 6 = 78."
    }
  ],

  // WORLD 8: Three-part ratios
  8: [
    {
      id: "w8_q1", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "Share 60 stickers among three friends in the ratio 2 : 3 : 5. How many does the biggest share get?",
      diagram: {"type": "bars", "rows": [{"label": "A", "units": 2, "color": "cyan"}, {"label": "B", "units": 3, "color": "gold"}, {"label": "C", "units": 5, "color": "pink"}], "bracket": "60"},
      options: [12, 18, 6, 30], correctAnswer: 30,
      hint: "Add all three parts: 2 + 3 + 5 = 10 units. Divide 60 by 10 to get 1 unit.",
      explanation: "2 + 3 + 5 = 10 units; 1 unit = 60 ÷ 10 = 6; answer = 30."
    },
    {
      id: "w8_q2", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "Three tanks hold water in the ratio 1 : 2 : 3. Altogether they hold 72 litres. How many litres in the middle tank?",
      diagram: {"type": "bars", "rows": [{"label": "Tank 1", "units": 1, "color": "cyan"}, {"label": "Tank 2", "units": 2, "color": "gold"}, {"label": "Tank 3", "units": 3, "color": "pink"}], "bracket": "72"},
      options: [12, 36, 24, 8], correctAnswer: 24,
      hint: "Add all three parts: 1 + 2 + 3 = 6 units. Divide 72 by 6 to get 1 unit.",
      explanation: "1 + 2 + 3 = 6 units; 1 unit = 72 ÷ 6 = 12; answer = 24."
    },
    {
      id: "w8_q3", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "Ali, Ben and Cara share $90 in the ratio 2 : 3 : 4. How much money does Cara get?",
      diagram: {"type": "bars", "rows": [{"label": "Ali", "units": 2, "color": "cyan"}, {"label": "Ben", "units": 3, "color": "gold"}, {"label": "Cara", "units": 4, "color": "pink"}], "bracket": "$90"},
      options: ["$20", "$40", "$30", "$45"], correctAnswer: "$40",
      hint: "Add all three parts: 2 + 3 + 4 = 9 units. Divide 90 by 9 to get 1 unit.",
      explanation: "2 + 3 + 4 = 9 units; 1 unit = 90 ÷ 9 = 10; answer = $40."
    },
    {
      id: "w8_q4", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "A drink has juice, water and soda in the ratio 1 : 3 : 4. The drink is 48 ml. How much juice is in it?",
      diagram: {"type": "bars", "rows": [{"label": "Juice", "units": 1, "color": "cyan"}, {"label": "Water", "units": 3, "color": "gold"}, {"label": "Soda", "units": 4, "color": "pink"}], "bracket": "48"},
      options: [6, 18, 24, 8], correctAnswer: 6,
      hint: "Add all three parts: 1 + 3 + 4 = 8 units. Divide 48 by 8 to get 1 unit.",
      explanation: "1 + 3 + 4 = 8 units; 1 unit = 48 ÷ 8 = 6; answer = 6."
    },
    {
      id: "w8_q5", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "Red, green and blue beads are in the ratio 2 : 3 : 4. There are 12 green beads. How many beads are there in all?",
      diagram: {"type": "bars", "rows": [{"label": "Red", "units": 2, "color": "cyan"}, {"label": "Green", "units": 3, "color": "gold", "tag": "12"}, {"label": "Blue", "units": 4, "color": "pink"}], "bracket": "?"},
      options: [24, 40, 48, 36], correctAnswer: 36,
      hint: "3 units = 12. Find 1 unit, then count all 9 units.",
      explanation: "3 units = 12, so 1 unit = 4. Total = 9 × 4 = 36."
    },
    {
      id: "w8_q6", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "Pens, pencils and erasers are in the ratio 3 : 4 : 5. There are 20 pencils. How many erasers are there?",
      diagram: {"type": "bars", "rows": [{"label": "Pens", "units": 3, "color": "cyan"}, {"label": "Pencils", "units": 4, "color": "gold", "tag": "20"}, {"label": "Erasers", "units": 5, "color": "pink", "tag": "?"}]},
      options: [15, 20, 25, 30], correctAnswer: 25,
      hint: "4 units = 20. Find 1 unit first.",
      explanation: "4 units = 20, so 1 unit = 5. Erasers = 5 × 5 = 25."
    },
    {
      id: "w8_q7", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "A ribbon is cut in the ratio 2 : 3 : 6. The longest piece is 24 cm longer than the shortest. How long is the middle piece?",
      diagram: {"type": "bars", "rows": [{"label": "1st", "units": 2, "color": "cyan", "tag": ""}, {"label": "2nd", "units": 3, "color": "gold", "tag": "?"}, {"label": "3rd", "units": 6, "color": "pink", "tag": ""}], "diff": "24 more"},
      options: [12, 18, 36, 6], correctAnswer: 18,
      hint: "Longest − shortest = 6 − 2 = 4 units, which is worth 24 cm.",
      explanation: "4 units = 24, so 1 unit = 6. Middle piece = 3 × 6 = 18 cm."
    },
    {
      id: "w8_q8", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "Three ropes are in the ratio 1 : 3 : 5. The longest is 32 m longer than the shortest. How long is the middle rope?",
      diagram: {"type": "bars", "rows": [{"label": "1st", "units": 1, "color": "cyan", "tag": ""}, {"label": "2nd", "units": 3, "color": "gold", "tag": "?"}, {"label": "3rd", "units": 5, "color": "pink", "tag": ""}], "diff": "32 more"},
      options: [24, 8, 32, 40], correctAnswer: 24,
      hint: "Longest − shortest = 5 − 1 = 4 units, which is worth 32 m.",
      explanation: "4 units = 32, so 1 unit = 8. Middle rope = 3 × 8 = 24 m."
    },
    {
      id: "w8_q9", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "A : B = 2 : 3 and B : C = 3 : 5. What is the ratio A : B : C?",
      diagram: {"type": "bars", "rows": [{"label": "A", "units": 2, "color": "cyan"}, {"label": "B", "units": 3, "color": "gold"}, {"label": "C", "units": 5, "color": "pink"}]},
      options: ["2 : 5", "3 : 3 : 5", "2 : 3 : 8", "2 : 3 : 5"], correctAnswer: "2 : 3 : 5",
      hint: "B is already 3 in both ratios, so line them up: A : B : C.",
      explanation: "B = 3 in both ratios, so A : B : C = 2 : 3 : 5."
    },
    {
      id: "w8_q10", worldId: 8, difficulty: "Hard", fact: "three_part",
      prompt: "A : B = 3 : 4 and B : C = 2 : 5. What is the ratio A : B : C?",
      diagram: {"type": "bars", "rows": [{"label": "A", "units": 3, "color": "cyan"}, {"label": "B", "units": 4, "color": "gold"}, {"label": "C", "units": "?", "color": "pink"}]},
      options: ["3 : 2 : 5", "6 : 4 : 5", "3 : 4 : 10", "3 : 4 : 5"], correctAnswer: "3 : 4 : 10",
      hint: "Make B the same in both ratios first. B is 4 in one and 2 in the other.",
      explanation: "B : C = 2 : 5 = 4 : 10, so B = 4 in both. A : B : C = 3 : 4 : 10."
    }
  ],

  // WORLD 9: Recipes, maps, prices & rates
  9: [
    {
      id: "w9_q1", worldId: 9, difficulty: "Hard", fact: "scale",
      prompt: "A recipe for 4 people uses 300 g of flour. How much flour is needed for 10 people?",
      diagram: {"type": "table", "headers": ["People", "Flour (g)"], "cols": [[4, 300], [10, "?"]], "ops": ["× ?"]},
      options: ["750 g", "600 g", "900 g", "1200 g"], correctAnswer: "750 g",
      hint: "Find the flour for 1 person first: 300 ÷ 4. Then multiply by 10.",
      explanation: "300 ÷ 4 = 75 g for 1 person, and 75 × 10 = 750 g."
    },
    {
      id: "w9_q2", worldId: 9, difficulty: "Hard", fact: "map_scale",
      prompt: "On a map, 1 cm stands for 5 km. Two towns are 6 cm apart on the map. What is the real distance?",
      diagram: {"type": "map", "cm": 6, "scale": "1 cm : 5 km", "real": "?"},
      options: ["11 km", "1.2 km", "60 km", "30 km"], correctAnswer: "30 km",
      hint: "Each 1 cm on the map is 5 km in real life. Multiply by 6.",
      explanation: "6 × 5 = 30 km."
    },
    {
      id: "w9_q3", worldId: 9, difficulty: "Hard", fact: "map_scale",
      prompt: "On a map, 1 cm stands for 5 km. Two cities are 40 km apart. How far apart are they on the map?",
      diagram: {"type": "map", "cm": "?", "scale": "1 cm : 5 km", "real": "40 km"},
      options: ["200 cm", "35 cm", "8 cm", "4 cm"], correctAnswer: "8 cm",
      hint: "Going from real distance to the map, divide instead of multiply.",
      explanation: "40 ÷ 5 = 8 cm on the map."
    },
    {
      id: "w9_q4", worldId: 9, difficulty: "Hard", fact: "unit_rate",
      prompt: "3 notebooks cost $9. How much do 8 notebooks cost?",
      diagram: {"type": "table", "headers": ["Notebooks", "Cost ($)"], "cols": [[3, 9], [8, "?"]], "ops": ["× ?"]},
      options: ["$27", "$24", "$15", "$72"], correctAnswer: "$24",
      hint: "Find the cost of 1 notebook first: $9 ÷ 3.",
      explanation: "$9 ÷ 3 = $3 for 1 notebook, and 8 × $3 = $24."
    },
    {
      id: "w9_q5", worldId: 9, difficulty: "Hard", fact: "unit_rate",
      prompt: "A tap fills 12 litres of water in 3 minutes. How many litres does it fill in 7 minutes?",
      diagram: {"type": "table", "headers": ["Minutes", "Litres"], "cols": [[3, 12], [7, "?"]], "ops": ["× ?"]},
      options: ["28 litres", "21 litres", "36 litres", "84 litres"], correctAnswer: "28 litres",
      hint: "Find the litres filled in 1 minute: 12 ÷ 3. Then multiply by 7.",
      explanation: "12 ÷ 3 = 4 litres per minute, and 7 × 4 = 28 litres."
    },
    {
      id: "w9_q6", worldId: 9, difficulty: "Hard", fact: "mix",
      prompt: "Blue and white paint are mixed in the ratio 2 : 5. How many litres of blue paint are needed to make 35 litres of paint?",
      diagram: {"type": "bars", "rows": [{"label": "Blue", "units": 2, "color": "cyan", "tag": "?"}, {"label": "White", "units": 5, "color": "gold"}], "bracket": "35 L"},
      options: ["14 litres", "25 litres", "5 litres", "10 litres"], correctAnswer: "10 litres",
      hint: "Total units = 2 + 5 = 7. Divide 35 litres by 7 to get 1 unit.",
      explanation: "7 units = 35 litres, so 1 unit = 5 litres. Blue = 2 × 5 = 10 litres."
    },
    {
      id: "w9_q7", worldId: 9, difficulty: "Hard", fact: "model_scale",
      prompt: "A model train is built to the scale 1 : 50. The model is 30 cm long. How long is the real train, in metres?",
      diagram: {"type": "table", "headers": ["Model (cm)", "Real (cm)"], "cols": [[1, 50], [30, "?"]], "ops": ["× ?"]},
      options: ["1.5 m", "150 m", "15 m", "80 m"], correctAnswer: "15 m",
      hint: "Real length = 30 × 50 cm. Then change centimetres into metres (÷ 100).",
      explanation: "30 × 50 = 1500 cm, and 1500 cm ÷ 100 = 15 m."
    },
    {
      id: "w9_q8", worldId: 9, difficulty: "Hard", fact: "mix",
      prompt: "A bubble tea cup holds 400 ml. The ratio of tea to milk is 3 : 1. How much milk is in the cup?",
      diagram: {"type": "bars", "rows": [{"label": "Tea", "units": 3, "color": "gold"}, {"label": "Milk", "units": 1, "color": "cyan", "tag": "?"}], "bracket": "400 ml"},
      options: ["300 ml", "100 ml", "200 ml", "50 ml"], correctAnswer: "100 ml",
      hint: "Total units = 3 + 1 = 4. Divide 400 ml by 4.",
      explanation: "4 units = 400 ml, so 1 unit = 100 ml. Milk is 1 unit = 100 ml."
    },
    {
      id: "w9_q9", worldId: 9, difficulty: "Hard", fact: "best_buy",
      prompt: "Pack A has 4 pens for $6. Pack B has 6 pens for $8. Which pack costs less for each pen?",
      diagram: {"type": "cards", "items": [{"title": "Pack A", "lines": ["4 pens", "$6"]}, {"title": "Pack B", "lines": ["6 pens", "$8"]}]},
      options: ["Pack B", "Pack A", "Same price", "Cannot tell"], correctAnswer: "Pack B",
      hint: "Work out the cost of 1 pen in each pack: price ÷ number of pens.",
      explanation: "Pack A: $6 ÷ 4 = $1.50 per pen. Pack B: $8 ÷ 6 ≈ $1.33 per pen. Pack B is cheaper."
    },
    {
      id: "w9_q10", worldId: 9, difficulty: "Hard", fact: "unit_rate",
      prompt: "A car uses 6 litres of petrol for 90 km. How many litres are needed for 240 km?",
      diagram: {"type": "table", "headers": ["Litres", "Distance (km)"], "cols": [[6, 90], ["?", 240]], "ops": ["× ?"]},
      options: ["15 litres", "36 litres", "20 litres", "16 litres"], correctAnswer: "16 litres",
      hint: "Find how far 1 litre goes: 90 ÷ 6. Then see how many litres 240 km needs.",
      explanation: "90 ÷ 6 = 15 km per litre, and 240 ÷ 15 = 16 litres."
    }
  ],

  // WORLD 10: Singapore multi-step challenges
  10: [
    {
      id: "w10_q1", worldId: 10, difficulty: "Hard", fact: "before_after",
      prompt: "Ali and Ben have stickers in the ratio 3 : 2. Ali gives 6 to Ben, then they have equal amounts. How many did Ali have at first?",
      diagram: {"type": "bars", "rows": [{"label": "Ali", "units": 3, "color": "cyan"}, {"label": "Ben", "units": 2, "color": "gold"}], "caption": "Ali gives 6 → equal"},
      options: [30, 36, 24, 12], correctAnswer: 36,
      hint: "After giving 6: Ali's 3 units − 6 = Ben's 2 units + 6. The 1-unit gap equals 12.",
      explanation: "3u − 6 = 2u + 6, so 1 unit = 12. Ali had 3 × 12 = 36."
    },
    {
      id: "w10_q2", worldId: 10, difficulty: "Hard", fact: "before_after",
      prompt: "The ratio of boys to girls is 5 : 3. After 8 more girls join, the numbers of boys and girls are equal. How many boys are there?",
      diagram: {"type": "bars", "rows": [{"label": "Boys", "units": 5, "color": "cyan"}, {"label": "Girls", "units": 3, "color": "gold"}], "caption": "+8 girls → equal"},
      options: [20, 12, 4, 16], correctAnswer: 20,
      hint: "Equal means 3 units + 8 = 5 units. So 2 units = 8.",
      explanation: "2 units = 8, so 1 unit = 4. Boys = 5 × 4 = 20."
    },
    {
      id: "w10_q3", worldId: 10, difficulty: "Hard", fact: "before_after",
      prompt: "The ratio of red to blue marbles is 2 : 3. After 12 more red marbles are added, red and blue are equal. How many blue marbles?",
      diagram: {"type": "bars", "rows": [{"label": "Red", "units": 2, "color": "cyan"}, {"label": "Blue", "units": 3, "color": "gold"}], "caption": "+12 red → equal"},
      options: [24, 12, 48, 36], correctAnswer: 36,
      hint: "Red 2 units + 12 = Blue 3 units. So 1 unit = 12.",
      explanation: "1 unit = 12, so blue = 3 × 12 = 36."
    },
    {
      id: "w10_q4", worldId: 10, difficulty: "Hard", fact: "before_after",
      prompt: "Mei's savings to Lin's savings is 3 : 5. Lin spends $20, then they have equal amounts. How much did Lin have at first?",
      diagram: {"type": "bars", "rows": [{"label": "Mei", "units": 3, "color": "cyan"}, {"label": "Lin", "units": 5, "color": "gold"}], "caption": "Lin spends $20 → equal"},
      options: ["$30", "$10", "$50", "$70"], correctAnswer: "$50",
      hint: "Lin's 5 units − $20 = Mei's 3 units. So 2 units = $20.",
      explanation: "2 units = $20, so 1 unit = $10. Lin had 5 × $10 = $50."
    },
    {
      id: "w10_q5", worldId: 10, difficulty: "Hard", fact: "change_ratio",
      prompt: "Adults to children at a hawker centre is 3 : 7. There are 40 people. 8 adults leave. What is the new ratio in simplest form?",
      diagram: {"type": "bars", "rows": [{"label": "Adults", "units": 3, "color": "cyan"}, {"label": "Kids", "units": 7, "color": "gold"}], "caption": "8 adults leave → ?"},
      options: ["3 : 7", "1 : 7", "12 : 28", "1 : 4"], correctAnswer: "1 : 7",
      hint: "Find 1 unit first (40 ÷ 10). Take 8 away from the adults, then simplify.",
      explanation: "1 unit = 4, so adults = 12 and children = 28. After 8 leave: 4 : 28 = 1 : 7."
    },
    {
      id: "w10_q6", worldId: 10, difficulty: "Hard", fact: "change_ratio",
      prompt: "Pencils to erasers is 5 : 2 and there are 84 altogether. After 12 more erasers are added, what is the new ratio in simplest form?",
      diagram: {"type": "bars", "rows": [{"label": "Pencils", "units": 5, "color": "cyan"}, {"label": "Erasers", "units": 2, "color": "gold"}], "caption": "+12 erasers → ?"},
      options: ["5 : 3", "5 : 2", "5 : 4", "3 : 5"], correctAnswer: "5 : 3",
      hint: "1 unit = 84 ÷ 7. Add 12 to the erasers, then simplify the new ratio.",
      explanation: "1 unit = 12: pencils 60, erasers 24. New erasers = 36, so 60 : 36 = 5 : 3."
    },
    {
      id: "w10_q7", worldId: 10, difficulty: "Hard", fact: "before_after",
      prompt: "Zara and Yan have cookies in the ratio 4 : 7. Yan gives 9 to Zara, then they are equal. How many cookies are there in total?",
      diagram: {"type": "bars", "rows": [{"label": "Zara", "units": 4, "color": "cyan"}, {"label": "Yan", "units": 7, "color": "gold"}], "caption": "Yan gives 9 → equal"},
      options: [33, 42, 72, 66], correctAnswer: 66,
      hint: "The gap of 3 units is split between them: 3 units = 9 + 9 = 18.",
      explanation: "3 units = 18, so 1 unit = 6. Total = 11 × 6 = 66."
    },
    {
      id: "w10_q8", worldId: 10, difficulty: "Hard", fact: "difference",
      prompt: "Dad is 30 years older than his son. Their ages are in the ratio 7 : 2. How old is the son?",
      diagram: {"type": "bars", "rows": [{"label": "Dad", "units": 7, "color": "cyan"}, {"label": "Son", "units": 2, "color": "gold"}], "caption": "30 years older"},
      options: [42, 6, 12, 18], correctAnswer: 12,
      hint: "The age gap is 7 − 2 = 5 units, and it equals 30 years.",
      explanation: "5 units = 30, so 1 unit = 6. Son = 2 × 6 = 12 years old."
    },
    {
      id: "w10_q9", worldId: 10, difficulty: "Hard", fact: "before_after",
      prompt: "The ratio of boys to girls is 3 : 4. After 8 girls leave, the numbers are equal. How many children were there at first?",
      diagram: {"type": "bars", "rows": [{"label": "Boys", "units": 3, "color": "cyan"}, {"label": "Girls", "units": 4, "color": "gold"}], "caption": "8 girls leave → equal"},
      options: [24, 56, 32, 48], correctAnswer: 56,
      hint: "Girls 4 units − 8 = Boys 3 units. So 1 unit = 8.",
      explanation: "1 unit = 8, so total at first = 7 × 8 = 56."
    },
    {
      id: "w10_q10", worldId: 10, difficulty: "Hard", fact: "change_ratio",
      prompt: "Kim's money to Lee's is 4 : 3. After Kim gets $15 more, the ratio becomes 5 : 3. How much did Kim have at first?",
      diagram: {"type": "bars", "rows": [{"label": "Kim", "units": 4, "color": "cyan"}, {"label": "Lee", "units": 3, "color": "gold"}], "caption": "Kim +$15 → 5 : 3"},
      options: ["$60", "$45", "$75", "$30"], correctAnswer: "$60",
      hint: "Lee's 3 units did not change. Kim went from 4 units to 5 units, so 1 unit = $15.",
      explanation: "Kim gained 1 unit = $15. So Kim first had 4 × $15 = $60."
    }
  ]

};

export function buildWorldSession(worldId, sessionSize = 10) {
  const worldQuestions = staticQuestionBank[worldId] || staticQuestionBank[1];
  return [...worldQuestions].slice(0, sessionSize);
}

export function generateQuestionForWorld(worldId) {
  const worldQuestions = staticQuestionBank[worldId] || staticQuestionBank[1];
  return worldQuestions[0];
}

export default staticQuestionBank;
