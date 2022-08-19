# Prompt: https://www.codewars.com/kata/513e08acc600c94f01000001/python

# Answer:
def rgb(r, g, b):
    limit = lambda x: min(255, max(x, 0))
    return ("%02X" * 3) % (limit(r), limit(g), limit(b))


# def rgb(r, g, b):
#     return "".join(map(conversion,[r,g,b]))

# def conversion(value):
#     if value < 0:
#         return '00'
#     elif value > 255:
#         return 'FF'
#     else:
#         return '%02X' % value
