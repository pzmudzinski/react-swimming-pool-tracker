export function classifyOccupancy(occupancyString) {
  const numberOfLanes = 10;
  const poolLength = 50;
  const maximumOccupancy = (numberOfLanes - 1) * poolLength;

  const sum = occupancyString.reduce( (sum, current) => {
    const lanesMatch = current.match(/(\d+)x(\d+)/);
    if (lanesMatch != null) {
      const numberOfLanes = Number(lanesMatch[1]);
      const laneLength = Number(lanesMatch[2]);
      return sum + numberOfLanes * laneLength;
    }

    return sum;
  }, 0);

  return Math.round((sum / maximumOccupancy) * 100);
}