"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";


interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number[];
  onChange: (value: number[]) => void;
}

export function Slider({ min, max, step, value, onChange }: SliderProps) {
  return (
    <SliderPrimitive.Root
      className="relative flex items-center select-none touch-none w-full h-5"
      value={value}
      max={max}
      step={step}
      min={min}
      onValueChange={onChange}
    >
      <SliderPrimitive.Track className="bg-gray-700 relative grow rounded-full h-2">
        <SliderPrimitive.Range className="absolute bg-pink-500 rounded-full h-full" />
      </SliderPrimitive.Track>
      {value.map((v, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="block w-5 h-5 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label={`Thumb ${index + 1}`}
        />
      ))}
    </SliderPrimitive.Root>
  );
}
