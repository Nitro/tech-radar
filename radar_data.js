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
    "name": "Agile",
    "pc": {
      "r": 71,
      "t": 113
    },
    "movement": "t"
  },
  {
    "name": "Micro Services",
    "pc": {
      "r": 86,
      "t": 100
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
      "r": 146,
      "t": 56
    },
    "movement": "t"
  },
  {
    "name": "Spark",
    "pc": {
      "r": 153,
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
    "name": "Docker",
    "pc": {
      "r": 111,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "Mesos",
    "pc": {
      "r": 109,
      "t": 242
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
    "name": "C++",
    "pc": {
      "r": 98,
      "t": 332
    },
    "movement": "t"
  },
  {
    "name": "Scala",
    "pc": {
      "r": 83,
      "t": 319
    },
    "movement": "c"
  }
]
  }
];
