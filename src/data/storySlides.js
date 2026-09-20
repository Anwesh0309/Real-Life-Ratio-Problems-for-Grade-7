// Story Carousel Slide Definitions - "The Mango Shake Ratio Adventure" (on-screen paragraph = narrated paragraph)
// NOTE: titles are shown on screen only. They are NEVER narrated (see AUDIO_PIPELINE.md content policy).

export const storySlides = [
  {
    id: 1,
    title: "Slide 1: Meet the Ratio Family!",
    image: "/assets/images/story_slide_1.png",
    narrative: "A ratio compares two amounts of the same kind. In Robo's mango shake there are 2 scoops of mango and 3 scoops of milk, so mango to milk is 2 : 3. That is a part-to-part ratio. Compare mango to the whole shake and you get a part-to-whole ratio, 2 : 5. Careful, order matters: 2 : 3 is not the same as 3 : 2!",
    mascotPose: "thinking",
    mascotDialogue: "Order matters! Mango first, then milk.",
    keyPoint: "KEY POINT: Order matters! Mango : Milk = 2 : 3, but Milk : Mango = 3 : 2.",
    badge: "Slide 1 of 4",
  },
  {
    id: 2,
    title: "Slide 2: Same Ratio, Same Taste!",
    image: "/assets/images/story_slide_2.png",
    narrative: "Make a bigger batch by multiplying both parts by the same number. Double the shake and 2 : 3 becomes 4 : 6. Triple it and you get 6 : 9. These are equivalent ratios, and they all taste exactly the same! To simplify, divide both parts by the same number, so 12 : 18 becomes 2 : 3.",
    mascotPose: "excited",
    mascotDialogue: "Bigger batch, same taste!",
    keyPoint: "GOLDEN RULE: Multiply or divide BOTH parts by the same number to make an equivalent ratio!",
    badge: "Slide 2 of 4",
  },
  {
    id: 3,
    title: "Slide 3: Sharing with a Bar Model!",
    image: "/assets/images/story_slide_3.png",
    narrative: "Robo and Alex share 40 stickers in the ratio 3 : 5. Draw a bar model: Robo gets 3 units and Alex gets 5 units, which is 8 units in total. Divide 40 by 8 to find that 1 unit is 5 stickers. So Robo gets 15 stickers and Alex gets 25!",
    mascotPose: "explaining",
    mascotDialogue: "Total ÷ total units = 1 unit!",
    keyPoint: "SHARING RULE: Add the parts, divide the total to find 1 unit, then multiply by each part!",
    badge: "Slide 3 of 4",
  },
  {
    id: 4,
    title: "Slide 4: The Unit Detective!",
    image: "/assets/images/story_slide_4.png",
    narrative: "Detective time! Oats to raisins in a cookie mix is 4 : 3, and there are 20 g of oats. Four units are 20 g, so 1 unit is 5 g. Raisins are 3 units, so 3 × 5 = 15 g of raisins!",
    mascotPose: "celebrating",
    mascotDialogue: "Known amount ÷ its units = 1 unit. Works every time!",
    keyPoint: "SOLVING RULE: Match the known amount to its units, find 1 unit, then multiply!",
    badge: "Slide 4 of 4",
  }
];

export default storySlides;
