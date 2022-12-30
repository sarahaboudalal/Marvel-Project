import React from 'react';

export default function Cards({ thumbnail, name }) {
  return (
    <div className="max-w-xs bg-whitish border border-orange rounded-lg shadow-md">
      {thumbnail !== null ? (
        <img
          className="rounded-t-lg overflow-hidden h-80 w-96"
          src={thumbnail}
          alt={name}
        />
      ) : (
        <img
          className="rounded-t-lg overflow-hidden h-80 w-96"
          src="https://cdn.discordapp.com/attachments/1054797763348541583/1056934597612548146/Marvel_Logo.svg.png"
          alt={name}
        />
      )}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-maroon ">
          {name}
        </h5>
      </div>
    </div>
  );
}
