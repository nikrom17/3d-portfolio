import React from 'react';

function Chip({ children }) {
  return (
    <div
      data-te-chip-init
      data-te-ripple-init
      className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] items-center justify-between rounded-md border border-[#3b71ca] px-[12px] py-0 text-[13px]"
      data-te-ripple-color="dark"
    >
      {children}
    </div>
  );
}

export default Chip;
