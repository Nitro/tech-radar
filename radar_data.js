var h = 1000;
var w = 1450;

var radar_arcs = [
  {
    "name": "ADOPT",
    "r": 130
  },
  {
    "name": "TRIAL",
    "r": 220
  },
  {
    "name": "ASSESS",
    "r": 310
  },
  {
    "name": "HOLD",
    "r": 400
  }
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Techniques; Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "Agile SW Dev",
    "pc": {
      "r": 92,
      "t": 139
    },
    "movement": "t"
  },
  {
    "name": "Micro Services",
    "pc": {
      "r": 68,
      "t": 100
    },
    "movement": "t"
  },
  {
    "name": "Reactive Systems",
    "pc": {
      "r": 82,
      "t": 113
    },
    "movement": "t"
  },
  {
    "name": "Software Craftmanship",
    "pc": {
      "r": 78,
      "t": 126
    },
    "movement": "t"
  },
  {
    "name": "Software Gardening",
    "pc": {
      "r": 61,
      "t": 165
    },
    "movement": "t"
  },
  {
    "name": "Blockchain",
    "pc": {
      "r": 250,
      "t": 166
    },
    "movement": "t"
  },
  {
    "name": "Data Pipelines",
    "pc": {
      "r": 274,
      "t": 136
    },
    "movement": "t"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "Databricks",
    "pc": {
      "r": 268,
      "t": 16
    },
    "movement": "t"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 149,
      "t": 8
    },
    "movement": "t"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "AWS EC2",
    "pc": {
      "r": 72,
      "t": 216
    },
    "movement": "t"
  },
  {
    "name": "AWS S3",
    "pc": {
      "r": 116,
      "t": 255
    },
    "movement": "t"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 57,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 75,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 67,
      "t": 229
    },
    "movement": "t"
  },
  {
    "name": "Postgres",
    "pc": {
      "r": 100,
      "t": 203
    },
    "movement": "t"
  },
  {
    "name": "AWS Kenesis",
    "pc": {
      "r": 290,
      "t": 196
    },
    "movement": "t"
  },
  {
    "name": "AWS Lambda ",
    "pc": {
      "r": 247,
      "t": 226
    },
    "movement": "t"
  },
  {
    "name": "Azure",
    "pc": {
      "r": 252,
      "t": 186
    },
    "movement": "t"
  },
  {
    "name": "AWS SQS",
    "pc": {
      "r": 197,
      "t": 224
    },
    "movement": "t"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "C++ (clang)",
    "pc": {
      "r": 108,
      "t": 293
    },
    "movement": "t"
  },
  {
    "name": "C++ (MSVC)",
    "pc": {
      "r": 71,
      "t": 280
    },
    "movement": "t"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 78,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Elixir",
    "pc": {
      "r": 256,
      "t": 346
    },
    "movement": "t"
  },
  {
    "name": "JavaScript",
    "pc": {
      "r": 352,
      "t": 298
    },
    "movement": "t"
  },
  {
    "name": "Go",
    "pc": {
      "r": 160,
      "t": 290
    },
    "movement": "t"
  },
  {
    "name": "TypeScript",
    "pc": {
      "r": 148,
      "t": 278
    },
    "movement": "t"
  }
]
  }
];
