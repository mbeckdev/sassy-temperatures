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
  if (fahrenheit <= -42) {
    return "Even penguins are filing complaints about the working conditions";
  } else if (fahrenheit <= -40) {
    return "The universe achieved perfect harmony - both Fahrenheit and Celsius agree you're screwed";
  } else if (fahrenheit <= -20) {
    return "Your tears will literally freeze before they hit the ground";
  } else if (fahrenheit <= -10) {
    return "Your nose hairs freeze solid and become tiny ice sculptures - congrats, you're now part art installation";
  } else if (fahrenheit <= 0) {
    return "Shoveling snow with no gloves? You've got exactly 4 minutes before your hands become useless ice blocks";
  } else if (fahrenheit <= 8) {
    return "Bitterly cold. You'll need two jackets, warm shoes, a hat, a scarf, and one glove (because let's be honest, you lost the other one)";
  } else if (fahrenheit <= 10) {
    return "So cold you might see a sun dog - nature's way of showing off while you're freezing your butt off";
  } else if (fahrenheit <= 15) {
    return "Time to shove heat packs in your shoes just to drive home - your feet have officially given up on life";
  } else if (fahrenheit <= 20) {
    return "Your car won't start and neither will you";
  } else if (fahrenheit <= 32) {
    return "Ice skating on the sidewalk is now a thing";
  } else if (fahrenheit <= 40) {
    return "Hot chocolate is basically a survival tool";
  } else if (fahrenheit <= 43) {
    return "Actually nice in the sun with a sweater - finally, some decent weather!";
  } else if (fahrenheit <= 44) {
    return "Walk a block with your hair up, and now your nose is running. Thanks, nature.";
  } else if (fahrenheit <= 45) {
    return "Jacket required, but you'll spend half the day debating if you really need it";
  } else if (fahrenheit <= 50) {
    return "Layers, layers, and more layers";
  } else if (fahrenheit <= 55) {
    return "Sweater weather for indecisive people - too cold for shorts, too warm for a winter coat, so you'll be uncomfortable either way";
  } else if (fahrenheit <= 60) {
    return "Light jacket weather for the smart ones";
  } else if (fahrenheit <= 63) {
    return "Sweater and a light jacket are tolerable";
  } else if (fahrenheit <= 65) {
    return "The temperature that makes everyone argue about whether windows should be open or closed";
  } else if (fahrenheit <= 70) {
    return "Perfect for those 'I love fall' people";
  } else if (fahrenheit <= 75) {
    return "Goldilocks weather - just right";
  } else if (fahrenheit <= 80) {
    return "Don't need a sweater in the sun";
  } else if (fahrenheit <= 85) {
    return "Shorts and t-shirt territory";
  } else if (fahrenheit <= 88) {
    return "Gotta ditch the sweater after leaving the AC building. Great for one block, block two? Ugh, too hot already";
  } else if (fahrenheit <= 95) {
    return "It's too hot for a jacket, obviously";
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
  } else if (fahrenheit <= 212) {
    return "Yay, you've reached water's breaking point - and yours too";
  } else if (fahrenheit <= 220) {
    return "Congrats, you've discovered a new circle of hell";
  } else {
    return "At this point, you're basically lava";
  }
};

export const addATemp = (fahr: number, data: TemperatureData[]) => {
  data.push({
      fahrenheit: fahr,
      celsius: fahrenheitToCelsius(fahr),
      sassyDescription: getSassyDescription(fahr),
    });
}
export const deleteATemp = () => {

}

// Generate temperature data for the range -42°F to 242°F
export const generateTemperatureData = (): TemperatureData[] => {
  const data: TemperatureData[] = [];
  
  // Generate data every 2 degrees from 242 down to -42
  const nums = [242,220,212,200,180,150,125,115,110,100,95,90,88,
    85,80,75,70,65,60,55,50,45,44,43,40,32,20,15,10,8,0,-10,-20,-40,-42];

  nums.forEach(num => addATemp(num, data));

  // for (let fahrenheit = 75; fahrenheit >= -42; fahrenheit -= 5) {
  //   data.push({
  //     fahrenheit,
  //     celsius: fahrenheitToCelsius(fahrenheit),
  //     sassyDescription: getSassyDescription(fahrenheit),
  //   });
  // }
  
  
  
  return data;
};