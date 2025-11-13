export interface TemperatureData {
  fahrenheit: number;
  celsius: number;
  sassyDescription: string;
}

// Convert Fahrenheit to Celsius
export const fahrenheitToCelsius = (fahrenheit: number): number => {
  return Math.round(((fahrenheit - 32) * 5) / 9);
};

// Get sassy description based on Fahrenheit temperature (for low humidity areas)
export const getSassyDescription = (fahrenheit: number): string => {
  if (fahrenheit <= -20) {
    return "Your tears will literally freeze before they hit the ground";
  } else if (fahrenheit <= -10) {
    return "Can't walk an entire block without your nose freezing";
  } else if (fahrenheit <= 0) {
    return "Even the polar bears are wearing sweaters";
  } else if (fahrenheit <= 10) {
    return "Perfect weather for becoming a hermit";
  } else if (fahrenheit <= 20) {
    return "Your car won't start and neither will you";
  } else if (fahrenheit <= 32) {
    return "Ice skating on the sidewalk is now a thing";
  } else if (fahrenheit <= 40) {
    return "Hot chocolate is basically a survival tool";
  } else if (fahrenheit <= 50) {
    return "Layers, layers, and more layers";
  } else if (fahrenheit <= 60) {
    return "Light jacket weather for the smart ones";
  } else if (fahrenheit <= 70) {
    return "Perfect for those 'I love fall' people";
  } else if (fahrenheit <= 75) {
    return "Goldilocks weather - just right";
  } else if (fahrenheit <= 80) {
    return "Don't need a sweater in the sun";
  } else if (fahrenheit <= 85) {
    return "Shorts and t-shirt territory";
  } else if (fahrenheit <= 90) {
    return "AC becomes your best friend";
  } else if (fahrenheit <= 95) {
    return "It's too hot for a jacket";
  } else if (fahrenheit <= 100) {
    return "Time to relocate to the Arctic";
  } else if (fahrenheit <= 110) {
    return "Even lizards are complaining";
  } else if (fahrenheit <= 120) {
    return "Your phone gives up and overheats";
  } else if (fahrenheit <= 140) {
    return "Cooking eggs on the sidewalk isn't just a saying";
  } else if (fahrenheit <= 160) {
    return "Mars is looking pretty comfortable right now";
  } else if (fahrenheit <= 180) {
    return "Water boils with jealousy at this point";
  } else if (fahrenheit <= 200) {
    return "Even the sun is asking for sunscreen";
  } else if (fahrenheit <= 220) {
    return "Congrats, you've discovered a new circle of hell";
  } else {
    return "At this point, you're basically lava";
  }
};

// Generate temperature data for the range -42°F to 242°F
export const generateTemperatureData = (): TemperatureData[] => {
  const data: TemperatureData[] = [];
  
  // Generate data every 2 degrees from -42 to 242
  for (let fahrenheit = -42; fahrenheit <= 242; fahrenheit += 2) {
    data.push({
      fahrenheit,
      celsius: fahrenheitToCelsius(fahrenheit),
      sassyDescription: getSassyDescription(fahrenheit),
    });
  }
  
  return data;
};