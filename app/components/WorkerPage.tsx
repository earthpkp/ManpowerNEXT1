// WorkerPage.tsx หรือไฟล์ที่แสดงผลทั้ง WorkerCard และ SkillsFilter
"use client";

import { WorkerCard } from "@/components/WorkerCard";
import { SkillsFilter } from "@/components/SkillsFilter";
import { Worker } from "../types/worker";

interface WorkerPageProps {
  workers: Worker[];
  selectedSkills: string[];
  onSkillsChange: (skills: string[]) => void;
}

export default function WorkerPage({
  workers,
  selectedSkills,
  onSkillsChange,
}: WorkerPageProps) {
  return (
    <div className="flex flex-wrap gap-6">
      {/* Skills Filter on the left (1/3 of the space) */}
      <div className="w-full md:w-1/3 lg:w-1/4">
        <SkillsFilter selectedSkills={selectedSkills} onSkillsChange={onSkillsChange} />
      </div>

      {/* Worker Cards on the right (2/3 or 3/4 of the space depending on screen size) */}
      <div className="w-full md:w-2/3 lg:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {workers.map((worker) => (
            <WorkerCard key={worker.id} worker={worker} />
          ))}
        </div>
      </div>
    </div>
  );
}
