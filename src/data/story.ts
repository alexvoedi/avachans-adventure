export default [
  {
    id: 1,
    title: "Der Wecker klingelt",
    text: `
      Ein neuer Tag ist angebrochen. Es ist so schön draußen.

      Aber was ist das? Da liegt eine Katze auf dem
    `,
    choices: [
      {
        text: "Brötchen essen",
        goto: 2,
      },
      {
        text: "Pizza von gestern in die Mikrowelle",
        goto: 3,
      },
    ],
  },
  {
    id: 2,
    title: "1",
    text: `2`,
  },
  {
    id: 3,
    title: "3",
    text: `4`,
  },
];
