// Q1
const names = [
  { userid: 2, name: "Velen" },
  { userid: 56, name: "Illidan" },
  { userid: 23, name: "Muradin" },
  { userid: 12, name: "Sylvanas" },
  { userid: 44, name: "Cenarius" },
  { userid: 4, name: "Gul'Dan" },
];
const roles = [
  { userid: 2, role: "Mage" },
  { userid: 4, role: "Worlock" },
  { userid: 56, role: "Demon Hunter" },
  { userid: 66, role: "Druid" },
  { userid: 87, role: "Shaman" },
  { userid: 12, role: "Hunter" },
];
//   expect: [
//     {
//       userid: 2, name:  "Velen", role: "Mage"
//     },
//     {
//       userid: 44, name:  "Cenarius", role: null
//     },
//     ...
//   ]
const rolemap = {};
roles.forEach((role) => {
  rolemap[role.userid] = role.role;
});

const expected_op = names.map((user) => {
  return {
    ...user,
    role: rolemap[user.userid] || null,
  };
});

console.log(expected_op);

// Q2
const callback1 = (a) => a + 2; // 6
const callback2 = (b) => b * 2; // 12
const callback3 = (c) => c - 2; // 10
console.log("Q2 result");
console.log(runAll(4)(callback1, callback2, callback3)); // 10

// Complete this function runAll so that it returns the final result of the callback functions.
// function runAll(initNum) {
//   return function(...args) {
//   }
// }

function runAll(initNum) {
  return function (...args) {
    return args.reduce((acc, cb) => cb(acc), initNum);
  };
}

// Q3
source = [
  ["Foley", "Chemicals", "CHEM"],
  ["Foley", "Chemicals", "CTO"],
  ["Foley", "Chemicals", "LK"],
  ["Foley", "Chemicals", "R8"],
  ["Foley", "Chemicals", "WT"],
  ["Foley", "Finishing", "LB2"],
  ["Foley", "Finishing", "LB4"],
  ["Foley", "Finishing", "RW1"],
  ["Foley", "Finishing", "RW2"],
  ["Foley", "Line 3", "LN3"],
  ["Foley", "Line 3", "Production Process"],
  ["Foley", "Line 4", "LN4"],
  ["Foley", "Line 4", "Prod Process"],
  ["Foley", "Mill General", "Wastewater Treatment"],
  ["Foley", "Powerhouse", "BB1"],
  ["Foley", "Powerhouse", "BB2"],
  ["Foley", "Powerhouse", "EV5"],
  ["Foley", "Powerhouse", "FWE"],
  ["Foley", "Powerhouse", "PB1"],
  ["Foley", "Powerhouse", "PB2"],
  ["Foley", "Powerhouse", "RB2"],
  ["Foley", "Powerhouse", "RB3"],
  ["Foley", "Powerhouse", "RB4"],
  ["Foley", "Powerhouse", "TG2"],
  ["Foley", "Powerhouse", "TG3"],
  ["Foley", "Powerhouse", "TG4"],
];
// change the data to:
// example: [['Foley', 'Powerhouse', 'TG3', 'Bright']...] --->
// [{
//   name:'Foley',
//   children: [
//     {
//       name: 'Powerhouse',
//       children: [
//         {
//           name: 'TG3',
//           children: [
//             {name: 'Bright', children: []}
//           ]
//         }
//       ]
//     }
//   ]
// },
// ...]

const expected_op2 = convertToArray(
  source.reduce((acc, [level1, level2, level3]) => {
    if (!acc[level1]) {
      acc[level1] = { name: level1, children: {} };
    }
    if (!acc[level1].children[level2]) {
      acc[level1].children[level2] = { name: level2, children: {} };
    }
    if (!acc[level1].children[level2].children[level3]) {
      acc[level1].children[level2].children[level3] = {
        name: level3,
        children: [],
      };
    }
    return acc;
  }, {})
);

function convertToArray(obj) {
  return Object.values(obj).map(({ name, children }) => ({
    name,
    children: convertToArray(children),
  }));
}

console.log(JSON.stringify(expected_op2, null, 2));
