"use client";

import { Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface SkillsFilterProps {
  selectedSkills: string[];
  onSkillsChange: (skills: string[]) => void;
}

const AVAILABLE_SKILLS = [
  "JavaScript",
  "React",
  "Node.js",
  "Digital Marketing",
  "SEO",
  "Content Strategy",
  "Linux",
  "AWS",
  "Docker",
  "Kubernetes",
  "Figma",
  "Adobe XD",
  "User Research",
  "Financial Analysis",
  "Excel",
  "Power BI",
  "AutoCAD",
  "Construction Management",
  "Structural Design",
  "Teaching",
  "TOEIC",
  "Curriculum Development",
];

export function SkillsFilter({ selectedSkills, onSkillsChange }: SkillsFilterProps) {
  const handleSkillToggle = (skill: string) => {
    const updatedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];
    onSkillsChange(updatedSkills);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">ทักษะ</h3>
      {/* ใช้ flex-col เพื่อให้ checkbox และ label แสดงเป็นแถวแนวตั้ง */}
      <div className="flex flex-col space-y-3">
        {AVAILABLE_SKILLS.map((skill) => (
          <div key={skill} className="flex items-center space-x-2">
            <Checkbox
              id={`skill-${skill}`}
              checked={selectedSkills.includes(skill)}
              onCheckedChange={() => handleSkillToggle(skill)}
              className="h-4 w-4" // ปรับขนาดของ checkbox ตามต้องการ
            />
            <label
              htmlFor={`skill-${skill}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {skill}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
