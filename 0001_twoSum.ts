// Store traversed numbers in hashmap, check to see if the
// number we are looking for is already in the hashmap

function twoSum(nums: number[], target: number): number[] {
   let map: Map<number, number> = new Map();

   for (let i = 0; i < nums.length; i++) {
      let toFind = target - nums[i];

      if (map.has(toFind)) {
         return [map.get(toFind)!, i];
      }

      map.set(nums[i], i);
   }

   return [];
}
