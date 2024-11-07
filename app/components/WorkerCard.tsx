"use client";

import { Briefcase, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Worker } from "../types/worker";

interface WorkerCardProps {
  worker: Worker;
}

export function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {worker.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 flex items-center mt-1">
            <Briefcase className="h-4 w-4 mr-2" />
            {worker.position}
          </p>
          <p className="text-gray-600 dark:text-gray-300 flex items-center mt-1">
            <MapPin className="h-4 w-4 mr-2" />
            {worker.location}
          </p>
        </div>
        <div
          className={`px-3 py-1 rounded-full ${
            worker.available
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {worker.available ? "พร้อมทำงาน" : "ไม่ว่าง"}
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300">ประสบการณ์</p>
          <p className="font-medium">{worker.experience} ปี</p>
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300">ทักษะ</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {worker.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            เงินเดือนที่ต้องการ
          </p>
          <p className="font-medium">{worker.salary}</p>
        </div>
      </div>

      <Button className="w-full mt-4">ดูข้อมูลเพิ่มเติม</Button>
    </Card>
  );
}