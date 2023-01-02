import React from 'react';

export default function Grid({ children }) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-6 py-10">
      {children}
    </div>
  );
}
