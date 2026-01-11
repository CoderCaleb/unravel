import React from "react";
import cn from "@/lib/helpers/cn";

type ColorOption = {
  id: string;
  color: string;
  name: string;
};

type ColorSelectorProps = {
  colors?: ColorOption[];
  selectedColor?: string;
  onColorChange?: (colorId: string) => void;
  className?: string;
};

const defaultColors: ColorOption[] = [
  { id: "red", color: "#FF9B9B", name: "Red" },
  { id: "purple", color: "#B4A5F6", name: "Purple" },
  { id: "yellow", color: "#FFD966", name: "Yellow" },
  { id: "blue", color: "#87CEEB", name: "Blue" },
];

export default function ColorSelector({
  colors = defaultColors,
  selectedColor,
  onColorChange,
  className,
}: ColorSelectorProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      {colors.map((colorOption) => {
        const isSelected = selectedColor === colorOption.id;
        return (
          <button
            key={colorOption.id}
            onClick={() => onColorChange?.(colorOption.id)}
            className={cn(
              "w-12 h-12 rounded-full transition-all cursor-pointer border-4",
              isSelected
                ? "border-gray-800 scale-110"
                : "border-transparent hover:scale-105",
            )}
            style={{ backgroundColor: colorOption.color }}
            aria-label={`Select ${colorOption.name} color`}
          />
        );
      })}
    </div>
  );
}
