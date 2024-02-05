import random
import content

number_letters = int(input("Letters : "))
number_numbers = int(input("Numbers : "))
number_symbols = int(input("Symbols : "))

rand_letters = ''
for new_letter in range(number_letters):
    rand_letters += random.choice(content.letters)
    
rand_numbers = ''
for new_number in range(number_numbers):
    rand_numbers += random.choice(content.numbers)

rand_symbols =''
for new_symbol in range(number_symbols):
    rand_symbols += random.choice(content.symbols)

password = rand_letters + rand_numbers + rand_symbols
print(f"Pasword is: {password}")
