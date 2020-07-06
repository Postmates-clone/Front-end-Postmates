/* eslint-disable import/prefer-default-export */
const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const options = [
  {
    id: 1,
    name: "Barq's Root Beer",
    option_price: 0.15,
  },
  { id: 2, name: 'Coke', option_price: 0.15 },
  {
    id: 3,
    name: 'Fries',
    option_price: 0.15,
  },
  {
    id: 4,
    name: 'Curly Fries',
    option_price: 0.15,
  },
];

export const getOptions = async () => {
  await sleep(500);
  return options;
};

// {
//   option_group: [
//     {
//       name: 'Choose Drink',
//       options: [
//         {
//           id: 1,
//           name: "Barq's Root Beer",
//           option_price: 0.15,
//         },
//         { id: 2, name: 'Coke', option_price: 0.15 },
//       ],
//       is_required: true,
//     },
//     {
//       name: 'Choose Side',
//       options: [
//         {
//           id: 1,
//           name: 'Fries',
//           option_price: 0.15,
//         },
//         {
//           id: 2,
//           name: 'Curly Fries',
//           option_price: 0.15,
//         },
//       ],
//     },
//   ],
// },
