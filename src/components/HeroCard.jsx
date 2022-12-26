import React from 'react';

export default function HeroCard({ thumbnail, name, description }) {
  return (
    <div className="max-w-xs bg-whitish border border-orange rounded-lg shadow-md">
      <img
        className="rounded-t-lg overflow-hidden h-80 w-96"
        src={thumbnail}
        alt={name}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-maroon ">
          {name}
        </h5>
      </div>
    </div>
  );
}
