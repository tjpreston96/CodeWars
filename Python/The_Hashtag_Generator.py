# Prompt: https://www.codewars.com/kata/52449b062fb80683ec000024/python

# Expected Result:
# " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"

# Answer:
def generate_hashtag(s: str) -> str:
    return f"#{s.title().replace(' ','')}" if 0 < len(s.strip()) <= 140 else False


# def generate_hashtag(s):
#     result = f'#{s.title().replace(" ", "")}'

#     if s.strip() == "" or len(result) > 140:
#         return False
#     else:
#         return result
