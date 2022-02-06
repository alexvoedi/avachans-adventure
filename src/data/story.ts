export default [
  {
    id: 1,
    title: "Die Reise beginnt",
    text: `
      Die Sonne geht auf und ein neuer Tag beginnt. Welches Abenteuer wirst du heute erleben?

      Erstmal musst du deinen Prachtkörper natürlich aus dem Bettchen erheben.
    `,
    question: "Wie möchtest du heute aufstehen?",
    choices: [
      {
        text: "Aus dem Bett rollen",
        goto: [2],
      },
      {
        text: "Es gemütlich angehen",
        goto: [3],
      },
    ],
  },
  {
    id: 2,
    title: "Kleiner Tollpatsch",
    text: `
      Du rollst micht Karacho von der Matratze. Dabei unterschätzt du den Schwung, den du aufgebaut hast und krachst mit dem Kopf gegen die Tür.
    `,
  },
  {
    id: 3,
    title: "",
    text: ``,
  },
];
