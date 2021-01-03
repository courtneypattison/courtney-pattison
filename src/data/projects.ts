export interface ProjectI {
  name: string;
  description: string;
  year: number;
  url: string;
  source: string;
  img: string;
  tags: string[];
}

export const Projects = [
  {
    name: "courtney pattison.com",
    description: "My personal website",
    year: 2021,
    url: "https://courtneypattison.com/",
    source: "https://github.com/courtneypattison/courtneypattison.com",
    img: "courtneypattison.png",
    tags: ["Javascript", "React", "Gatsby", "GraphQL"],
  },
  {
    name: "BetrayalDice",
    description:
      "An Android app that replaces the dice in Betrayal at House on the Hill",
    year: 2019,
    url: "https://github.com/courtneypattison/BetrayalDice",
    source: "https://github.com/courtneypattison/BetrayalDice",
    img: "BetrayalDice.png",
    tags: ["Kotlin", "Android"],
  },
  {
    name: "attack-modifier-deck",
    description:
      "An Angular website that replaces players' attack modifier decks in Gloomhaven",
    year: 2019,
    url: "https://attack-modifier-deck.web.app/",
    source: "https://github.com/courtneypattison/attack-modifier-deck",
    img: "attack-modifier-deck.png",
    tags: ["Angular", "Typescript", "Firebase", "Travis CI"],
  },
  {
    name: "the-practice-of-parenting",
    description:
      'An Gatsby website for the book "The Practice of Parenting" by Rosemary Fernandes-Walker',
    year: 2019,
    url: "https://thepracticeofparenting.ca/",
    source: "https://github.com/courtneypattison/the-practice-of-parenting",
    img: "the-practice-of-parenting.png",
    tags: ["Gatsby", "Javascript", "Firebase"],
  },
  {
    name: "gulp-jpeg-2000",
    description:
      "A gulp plugin for converting images to JPEG 2000 (JP2) using ImageMagick with over 5K downloads",
    year: 2018,
    url: "https://www.npmjs.com/package/gulp-jpeg-2000",
    source: "https://github.com/courtneypattison/gulp-jpeg-2000",
    img: "gulp-jpeg-2000.png",
    tags: [
      "Javascript",
      "Gulp",
      "Mocha",
      "Travis CI",
      "Coveralls",
      "ImageMagick",
      "Node",
    ],
  },
  {
    name: "gulp-jpeg-xr",
    description:
      "A gulp plugin for converting images to JPEG XR (JXR) using nConvert with over 2K downloads",
    year: 2018,
    url: "https://www.npmjs.com/package/gulp-jpeg-xr",
    source: "https://github.com/courtneypattison/gulp-jpeg-xr",
    img: "gulp-jpeg-xr.png",
    tags: ["Javascript", "Gulp", "Mocha", "Travis CI", "Coveralls", "Node"],
  },
  {
    name: "mattermost-mobile",
    description: "Contribute new features, layout fixes, and test coverage",
    year: 2018,
    url:
      "https://github.com/mattermost/mattermost-mobile/pulls?q=is%3Apr+author%3Acourtneypattison+",
    source: "https://github.com/mattermost/mattermost-mobile",
    img: "mattermost-mobile.png",
    tags: [
      "Javascript",
      "React",
      "React Native",
      "Jest",
      "Android",
      "iOS",
      "Redux",
    ],
  },
  {
    name: "mattermost-webapp",
    description: "Contribute new features, layout fixes, and test coverage",
    year: 2018,
    url:
      "https://github.com/mattermost/mattermost-webapp/pulls?q=is%3Apr+author%3Acourtneypattison+",
    source: "https://github.com/mattermost/mattermost-webapp",
    img: "mattermost-webapp.png",
    tags: ["Javascript", "React", "Typescript", "Cypress", "Jest", "Redux"],
  },
  {
    name: "react-native-fade-in-out",
    description:
      "A React Native component that uses a boolean prop to fade children in and out, with over 4K downloads",
    year: 2018,
    url: "https://www.npmjs.com/package/react-native-fade-in-out",
    source: "https://github.com/courtneypattison/react-native-fade-in-out",
    img: "react-native-fade-in-out.png",
    tags: ["React", "React Native", "Node", "Javascript", "Travis CI", "Jest"],
  },
  {
    name: "slumber-numbers",
    description: "An Angular website that logs and charts sleep states",
    year: 2018,
    url: "https://slumber-numbers.web.app/",
    source: "https://github.com/courtneypattison/slumber-numbers",
    img: "slumber-numbers.png",
    tags: ["Angular", "Typescript", "Firebase", "Travis CI"],
  },
  {
    name: "contraction-timer",
    description: "An Angular website that tracks contraction times",
    year: 2018,
    url: "https://contraction-t.web.app/",
    source: "https://github.com/courtneypattison/contraction-timer",
    img: "contraction-timer.png",
    tags: ["Angular", "Typescript", "Firebase", "Travis CI"],
  },
  {
    name: "audiobook-club-angular",
    description:
      "An Angular website for listening to audiobooks thats uses LibriVox recordings",
    year: 2017,
    url: "https://audiobook-club.web.app/",
    source: "https://github.com/courtneypattison/audiobook-club-angular",
    img: "audiobook-club-angular.png",
    tags: ["Angular", "Typescript", "Firebase", "Travis CI"],
  },
  {
    name: "audiobook-club-swift",
    description: "An IOS app that uses LibriVox books",
    year: 2017,
    url: "https://github.com/courtneypattison/audiobook-club-swift",
    source: "https://github.com/courtneypattison/audiobook-club-swift",
    img: "audiobook-club-swift.png",
    tags: ["Angular", "Typescript", "Firebase", "Travis CI"],
  },
  {
    name: "book-dating-game",
    description: "Website for the Gryph Reads book dating game event",
    year: 2016,
    url: "https://courtneypattison.github.io/book-dating-game/",
    source: "https://github.com/courtneypattison/book-dating-game",
    img: "book-dating-game.png",
    tags: ["HTML", "CSS", "GitHub Pages"],
  },
  {
    name: "256-colorschemes-vim",
    description: "A collection of 256 colorschemes for vim",
    year: 2015,
    url: "https://github.com/courtneypattison/256-colorschemes-vim",
    source: "https://github.com/courtneypattison/256-colorschemes-vim",
    img: "256-colorschemes-vim.png",
    tags: ["Vim"],
  },
];
