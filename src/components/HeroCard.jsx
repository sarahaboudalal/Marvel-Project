import React from 'react';

export default function HeroCard({ thumbnail, name, description }) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md">
      <img
        className="rounded-t-lg overflow-hidden h-80 w-80"
        src={thumbnail}
        alt={name}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {name}
        </h5>
      </div>
    </div>
  );
}
