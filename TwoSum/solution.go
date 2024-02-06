package solution

func TwoSum(nums []int, target int) []int {
	var hashMap = make(map[int]int)

	for i, v := range nums {
		sub := target - v
		if j, ok := hashMap[sub]; ok {
			return []int{i, j}
		}

		hashMap[v] = i
	}

	return nil
}
