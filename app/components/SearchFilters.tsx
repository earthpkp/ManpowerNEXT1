"use client";

import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface SearchFiltersProps {
  searchTerm: string;
  location: string;
  position: string;
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onPositionChange: (value: string) => void;
}

export function SearchFilters({
  searchTerm,
  location,
  position,
  onSearchChange,
  onLocationChange,
  onPositionChange,
}: SearchFiltersProps) {
  const clearFilters = () => {
    onSearchChange("");
    onLocationChange("");
    onPositionChange("");
  };

  const hasActiveFilters = searchTerm || location || position;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative col-span-2">
          <Input
            placeholder="ค้นหาชื่อหรือตำแหน่ง"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <Select value={location} onValueChange={onLocationChange}>
          <SelectTrigger>
            <SelectValue placeholder="เลือกสถานที่" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ทุกสถานที่</SelectItem>
            <SelectItem value="กรุงเทพมหานคร">กรุงเทพมหานคร</SelectItem>
            <SelectItem value="เชียงใหม่">เชียงใหม่</SelectItem>
            <SelectItem value="ภูเก็ต">ภูเก็ต</SelectItem>
          </SelectContent>
        </Select>

        <Select value={position} onValueChange={onPositionChange}>
          <SelectTrigger>
            <SelectValue placeholder="ตำแหน่งงาน" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">ทุกตำแหน่ง</SelectItem>
            <SelectItem value="วิศวกร">วิศวกร</SelectItem>
            <SelectItem value="การตลาด">การตลาด</SelectItem>
            <SelectItem value="ออกแบบ">ออกแบบ</SelectItem>
            <SelectItem value="การเงิน">การเงิน</SelectItem>
            <SelectItem value="การศึกษา">การศึกษา</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">ตัวกรอง:</span>
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <Badge variant="secondary" className="gap-1">
                {searchTerm}
                <button onClick={() => onSearchChange("")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {location && location !== "all" && (
              <Badge variant="secondary" className="gap-1">
                {location}
                <button onClick={() => onLocationChange("")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {position && position !== "all" && (
              <Badge variant="secondary" className="gap-1">
                {position}
                <button onClick={() => onPositionChange("")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="ml-auto text-gray-500 hover:text-gray-700"
          >
            ล้างตัวกรองทั้งหมด
          </Button>
        </div>
      )}
    </div>
  );
}