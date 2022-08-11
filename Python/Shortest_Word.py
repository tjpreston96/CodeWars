# Prompt: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/python

# Answer:
def find_short(s):
    return min(len(x) for x in s.split())


# def find_short(s):
#     return min(map(len, s.split(" ")))


# def find_short(s):
#     return min(map(lambda w: len(w), s.split(" ")))
