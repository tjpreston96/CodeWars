# Prompt:

# Answer:
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashtable = {}

        for idx, value in enumerate(nums):
            complement = target - value

            if complement in hashtable:
                return [hashtable[complement], idx]

            hashtable[value] = idx
