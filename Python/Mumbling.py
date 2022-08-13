# Prompt: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python

# Answer:
def accum(s):
    return "-".join([c.upper() + c.lower() * i for i, c in enumerate(s)])


# Long Answer:
# def accum(s):
#     mumble_str = ""

#     for idx, char in enumerate(s):
#         last = len(s) - 1
#         if idx == 0:
#             mumble_str += f"{char.upper()}-"
#         elif idx == last:
#             mumble_str += f"{char.upper() + char.lower()*idx}"
#         else:
#             mumble_str += f"{char.upper() + char.lower()*idx}-"

#     return mumble_str
