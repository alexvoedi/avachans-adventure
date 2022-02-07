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
    title: "Zieh dich an, Mann!",
    text: `
      Nach dem Aufstehen zieht man sich normalerweise erst einmal etwas an. Auch du gehörst zu diesen Menschen, zumindest manchmal. Du bist dir nicht sicher, ob du heute lieber doch nackt das Haus verlassen möchtest oder nicht. Du überlegst...
    `,
    question: "Was ziehst du an?",
    choices: [
      {
        text: "Nichts",
        goto: [5],
      },
      {
        text: "Alte Gammelkleidung",
        goto: [6],
      },
      {
        text: "Was Frisches",
        goto: [7],
      },
    ],
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
  {
    id: 5,
    title: "Bohrmaschine",
    text: `
      Du bleibst also nackig, wieso auch nicht?

      Als du frohlockend und nackt durch die Wohnung zu hüpfen beginnst, rutscht du plötzlich aus. Welch ein Pech, denn letzte Woche hast du ausgerechnet in dieser Ecke renoviert und die Bohrmaschine liegt noch da. Du fällst mit dem Gesucht voll in den Holzbohrer, der sich sogleich durch dein Gehirn bohrt.

      Das tat weh! Du hättest dir wohl doch besser was anziehen sollen, dann wärst du vielleicht an der Türklinke hängen geblieben und hättest überlebt.
    `,
  },
  {
    id: 6,
    title: "",
    text: "",
  },
  {
    id: 7,
    title: "",
    text: `
      Du suchst dir einen frischen Pullover aus dem Schank und versuchst ihn überzuziehen. Du gibst dir zwar Mühe, aber der Pullover ist wohl beim Waschen eingelaufen, so dass du jetzt feststeckst. Verzweifelt versuchst du dich zu befreien, kommst aber nicht weiter. Dir geht langsam die Luft aus und du erstickst jämmerlich in deinem frischen Pullover.

      Wenigstens hast du bei der Beerdigung frische Kleidung an!
    `,
  },
];
