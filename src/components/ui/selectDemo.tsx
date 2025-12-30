// import * as React from 'react';
// import * as Select from '@radix-ui/react-select';
// import { ChevronDownIcon } from '@radix-ui/react-icons';
// export default function AgeDropdown({ id }) {
//   const ages = Array.from({ length: 88 }, (_, i) => i + 13);

//   return (
//     <Select.Root>
//       <Select.Trigger
//         id={id}
//         className="border px-3 py-2 rounded w-full flex justify-between items-center"
//       >
//         <Select.Value placeholder="Виберіть вік" />
//         <Select.Icon className="SelectIcon">
//           <ChevronDownIcon />
//         </Select.Icon>
//       </Select.Trigger>

//       <Select.Content className="border rounded mt-1 bg-white max-h-60 overflow-auto box-border">
//         <Select.Viewport>
//           {ages.map((age) => (
//             <Select.Item
//               key={age}
//               value={age.toString()}
//               className="px-3 py-[8px] hover:bg-gray-100"
//             >
//               <Select.ItemText>{age}</Select.ItemText>
//             </Select.Item>
//           ))}
//         </Select.Viewport>
//       </Select.Content>
//     </Select.Root>
//   );
// }
