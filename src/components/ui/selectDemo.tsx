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
import { useState } from 'react';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const ages = Array.from({ length: 88 }, (_, i) => i + 13);
  // const options = [
  //   'Option 1',
  //   'Option 2',
  //   'Option 3',
  //   'Option 4',
  //   'Option 5',
  //   'Option 6',
  //   'Option 7',
  //   'Option 8',
  //   'Option 9',
  //   'Option 10',
  //   'Option 11',
  //   'Option 12',
  //   'Option 13',
  //   'Option 14',
  //   'Option 15',
  // ];

  return (
    <div className="relative w-full">
      {/* Кнопка для відкриття/закриття */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="h-[36px] w-full rounded-lg border border-gray-300 bg-white px-4 text-left shadow-sm hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selected || 'Select an option'}
        <span className="absolute right-3 top-3">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Випадаючий список */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg">
          {/* Скрол контейнер */}
          <div className="max-h-64 overflow-y-auto">
            {/* Кастомний скролбар */}
            <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {ages.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-3 transition-colors hover:bg-gray-100 ${
                    selected === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
