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
        text: "Wie ein normaler Mensch aufstehen",
        goto: [3],
      },
      {
        text: "Ich möchte gar nicht aufstehen und einfach liegen bleiben",
        goto: [4],
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
    title: "Kapitel 2",
    text: ``,
  },
  {
    id: 4,
    title: "Korken in Popo",
    text: `
      Du entscheidest dich dazu, im gemütlichen und warmen Bett liegen zu bleiben.

      Plötzlich spürst du, dass du verdammt nochmal heftige Bauchschmerzen hast. Es ist kaum zu ertragen, aber du willst unbedingt im Bett liegen bleiben und so wird der Druck immer größer, bis du explodierst.

      Du hättest dir besser keinen Korken in den Popo stecken sollen!
    `,
  },
];
