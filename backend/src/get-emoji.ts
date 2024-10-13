import * as emoji from "node-emoji";
import type { RangeType } from "./types";

const danceEmojiNames = ["dancer", "man_dancing"];

const foodEmojiNames = [
  "pizza",
  "hamburger",
  "fries",
  "hotdog",
  "sandwich",
  "taco",
  "burrito",
  "sushi",
  "spaghetti",
  "bread",
  "cheese",
  "cake",
  "cookie",
  "ice_cream",
  "doughnut",
  "popcorn",
  "beer",
  "wine_glass",
  "cocktail",
];

const sportEmojiNames = [
  "soccer",
  "basketball",
  "football",
  "baseball",
  "tennis",
  "volleyball",
  "rugby_football",
  "8ball",
  "ping_pong",
  "badminton",
  "field_hockey",
  "cricket",
  "bowling",
  "boxing_glove",
  "martial_arts_uniform",
  "golf",
  "ice_skate",
  "fishing_pole_and_fish",
  "running_shirt_with_sash",
  "ski",
  "skier",
  "snowboarder",
  "racing_car",
  "motorcycle",
  "racehorse",
  "trophy",
];

export const getEmoji = (rangeType: RangeType) => {
  if (rangeType === "Underweight")
    return emoji.get(
      foodEmojiNames[Math.floor(Math.random() * foodEmojiNames.length)],
    ) as string;
  if (rangeType === "Healthy")
    return emoji.get(
      danceEmojiNames[Math.floor(Math.random() * danceEmojiNames.length)],
    ) as string;
  return emoji.get(
    sportEmojiNames[Math.floor(Math.random() * sportEmojiNames.length)],
  ) as string;
};
