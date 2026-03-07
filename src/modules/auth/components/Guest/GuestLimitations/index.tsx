import React from 'react';

const limitationsData = [
  { text: 'Random chat only access' },
  { text: 'No chat history saved' },
  { text: 'Cannot access rooms' },
  { text: 'Cannot save contacts' },
];

export const GuestLimitations: React.FC = () => {
  return (
    <div className="mt-[80px]">
      <div className="flex gap-[12px]">
        <img alt="warning" src="/img/warning.svg" className="h-[20px] w-[20px]" />
        <p className="text-[14px] font-semibold leading-[20px] text-[#525252]">Guest Limitations</p>
      </div>{' '}
      <ul className="mt-[16px] flex flex-col gap-[6px]">
        {limitationsData.map((item, index) => (
          <li
            key={index}
            className="relative pl-4 text-[14px] font-normal leading-[16px] text-[#525252]"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
