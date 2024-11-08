"use client";

import { useState } from "react";
import { SearchFilters } from "./components/SearchFilters";
import { SkillsFilter } from "./components/SkillsFilter";
import { WorkerCard } from "./components/WorkerCard";
import { Pagination } from "./components/Pagination";
import { workers } from "./data/workers";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const workersPerPage = 6;

  const filteredWorkers = workers.filter((worker) => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === "" || 
      worker.name.toLowerCase().includes(searchTermLower) ||
      worker.position.toLowerCase().includes(searchTermLower);
    
    const matchesLocation = !location || location === "all" || worker.location === location;
    const matchesPosition = !position || position === "all" || worker.position.toLowerCase().includes(position.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 || 
      selectedSkills.every(skill => worker.skills.includes(skill));
    
    return matchesSearch && matchesLocation && matchesPosition && matchesSkills;
  });

  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
  const currentWorkers = filteredWorkers.slice(indexOfFirstWorker, indexOfLastWorker);
  const totalPages = Math.ceil(filteredWorkers.length / workersPerPage);

  const handleFilterChange = (type: string, value: string) => {
    setCurrentPage(1);
    switch (type) {
      case 'search':
        setSearchTerm(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'position':
        setPosition(value);
        break;
    }
  };

  const handleSkillsChange = (skills: string[]) => {
    setCurrentPage(1);
    setSelectedSkills(skills);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ระบบค้นหากำลังคน
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ค้นหาบุคลากรที่ตรงกับความต้องการของคุณ
          </p>
        </div>

        <SearchFilters
          searchTerm={searchTerm}
          location={location}
          position={position}
          onSearchChange={(value) => handleFilterChange('search', value)}
          onLocationChange={(value) => handleFilterChange('location', value)}
          onPositionChange={(value) => handleFilterChange('position', value)}
        />

        {/* Using grid layout for SkillsFilter and WorkerCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {/* Skills Filter */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <SkillsFilter selectedSkills={selectedSkills} onSkillsChange={handleSkillsChange} />
          </div>

          {/* Worker Cards */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {currentWorkers.map((worker) => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
            </div>
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}
