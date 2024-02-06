function twoSum(nums: number[], target: number): number[] {
  let hashMap: Record<number, number> = {}

  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i]

    if (sub in hashMap) {
      return [hashMap[sub], i]
    }

    hashMap[nums[i]] = i

  }

  return []
}