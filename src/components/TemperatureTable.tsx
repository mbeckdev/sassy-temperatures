'use client';

import { useState, useMemo } from 'react';
import { generateTemperatureData, type TemperatureData } from '@/utils/temperatureData';

export default function TemperatureTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const temperatureData = useMemo(() => generateTemperatureData(), []);

  const filteredData = useMemo(() => {
    if (!searchTerm) return temperatureData;
    
    return temperatureData.filter((item) => 
      item.fahrenheit.toString().includes(searchTerm) ||
      item.celsius.toString().includes(searchTerm) ||
      item.sassyDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [temperatureData, searchTerm]);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          🌡️ Sassy Temperatures
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Temperatures with attitude.
        </p>
        
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search temperatures or descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-500 to-green-600 text-white">
              <tr>
                <th className="pl-2 pr-2 py-4 text-center font-semibold">
                  Temp (°F)
                </th>
                <th className="px-2 py-4 text-center font-semibold">
                  Sassy Description
                </th>
                <th className="pl-2 pr-2 py-4 text-center font-semibold">
                  Temp (°C)
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item.fahrenheit}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-blue-50 transition-colors duration-200`}
                >
                  <td className="pl-2 pr-2 font-mono text-lg font-semibold text-blue-600 text-center">
                    {item.fahrenheit}°F
                  </td>
                  <td className="px-2 py-4 text-gray-700 italic text-center">
                    {item.sassyDescription}
                  </td>
                  <td className="pl-2 pr-2 py-4 font-mono text-lg font-semibold text-green-600 text-center">
                    {item.celsius}°C
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        Showing {filteredData.length} of {temperatureData.length} temperatures
      </div>
      <div className="py-4 text-gray-400 text-center text-xs">Disclaimer - These sassy descriptions are for entertainment purposes only, and have only been tested in a high altitude, dry environment, where there is barely any wind. Actual temperature experiences may vary.</div>
    </div>
  );
}