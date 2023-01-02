import React from 'react'

export default function Flex({children}) {
  return (
    <div className="flex flex-col items-center justify-center md:p-0 p-6">
      {children}
    </div>
  );
}
