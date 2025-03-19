"use client";

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

type Position = {
  x: number;
  y: number;
};

export function SnakeGame() {
  const [gridSize, setGridSize] = useState({ width: 20, height: 20 });
  const [cellSize, setCellSize] = useState(20);
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<string>('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Responsive grid sizing
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setGridSize({ width: 15, height: 15 });
        setCellSize(15);
      } else if (width < 768) {
        setGridSize({ width: 20, height: 20 });
        setCellSize(18);
      } else {
        setGridSize({ width: 25, height: 25 });
        setCellSize(20);
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * gridSize.width),
      y: Math.floor(Math.random() * gridSize.height),
    };
  }, [gridSize]);

  const resetGame = () => {
    setSnake([{ x: Math.floor(gridSize.width / 2), y: Math.floor(gridSize.height / 2) }]);
    setFood(generateFood());
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
  };

  const moveSnake = useCallback(() => {
    if (gameOver || !isPlaying) return;

    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'UP': head.y -= 1; break;
        case 'DOWN': head.y += 1; break;
        case 'LEFT': head.x -= 1; break;
        case 'RIGHT': head.x += 1; break;
      }

      if (
        head.x < 0 ||
        head.x >= gridSize.width ||
        head.y < 0 ||
        head.y >= gridSize.height ||
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        setIsPlaying(false);
        return prevSnake;
      }

      newSnake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 1);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, isPlaying, generateFood, gridSize]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp': setDirection((prev) => (prev !== 'DOWN' ? 'UP' : prev)); break;
        case 'ArrowDown': setDirection((prev) => (prev !== 'UP' ? 'DOWN' : prev)); break;
        case 'ArrowLeft': setDirection((prev) => (prev !== 'RIGHT' ? 'LEFT' : prev)); break;
        case 'ArrowRight': setDirection((prev) => (prev !== 'LEFT' ? 'RIGHT' : prev)); break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, 150);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-900 to-black  p-6 rounded-[16px]">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Snake Game</h1>
        <p className="text-gray-400 mb-4 text-sm md:text-base">You&apos;re offline, but the fun isn&apos;t!</p>
        <div className="text-xl md:text-2xl font-bold text-purple-400 mb-4">Score: {score}</div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-gray-800/50 rounded-3xl p-1 shadow-2xl border border-purple-500/20 backdrop-blur-sm"
        style={{
          width: gridSize.width * cellSize + 2,
          height: gridSize.height * cellSize + 2,
          maxWidth: '90vmin',
          maxHeight: '90vmin',
        }}
      >
        {snake.map((segment, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute bg-purple-500 rounded-sm"
            style={{
              width: cellSize - 2,
              height: cellSize - 2,
              left: segment.x * cellSize + 1,
              top: segment.y * cellSize + 1,
            }}
          />
        ))}
        <motion.div
          className="absolute bg-red-500 rounded-full"
          style={{
            width: cellSize - 2,
            height: cellSize - 2,
            left: food.x * cellSize + 1,
            top: food.y * cellSize + 1,
          }}
        />
      </motion.div>

      {/* Game Controls */}
      <div className="mt-8 space-y-4">
        {gameOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-red-500 mb-4">Game Over!</h2>
            <Button
              onClick={resetGame}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Play Again
            </Button>
          </motion.div>
        )}

        {!isPlaying && !gameOver && (
          <Button
            onClick={resetGame}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Start Game
          </Button>
        )}

        {/* Mobile Controls */}
        <div className="md:hidden grid grid-cols-3 gap-2 w-48 mx-auto mt-8">
          <div className="col-start-2">
            <Button
              onClick={() => setDirection(prev => prev !== 'DOWN' ? 'UP' : prev)}
              className="w-full bg-purple-600/50 hover:bg-purple-600"
            >
              ↑
            </Button>
          </div>
          <Button
            onClick={() => setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev)}
            className="w-full bg-purple-600/50 hover:bg-purple-600"
          >
            ←
          </Button>
          <Button
            onClick={() => setDirection(prev => prev !== 'UP' ? 'DOWN' : prev)}
            className="w-full bg-purple-600/50 hover:bg-purple-600"
          >
            ↓
          </Button>
          <Button
            onClick={() => setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev)}
            className="w-full bg-purple-600/50 hover:bg-purple-600"
          >
            →
          </Button>
        </div>
      </div>

      <div className="mt-8 text-gray-400 text-center">
        <p className="text-sm md:text-base mb-2">Use arrow keys to control the snake</p>
        <p className="text-sm md:text-base">Collect the red dots to grow and score points!</p>
      </div>
    </div>
  );
}