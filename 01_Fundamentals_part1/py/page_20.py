# ============================================================================ #
"""	Countdown
		Create a function that accepts a number as an input.
		Return a new array that counts down by one, from
		the	number (as array's 'zero'th element) down to 0
		(as the last element). How long is this array?	"""

# def countdown(num):
# 	arr = []
# 	for i in range(num, 0, -1):
# 		arr.append(num);
# 	return arr
#
# result_1 = countdown(5)
# print(result_1)
# print('The length of this list is {}.'.format(len(result_1)))

# ============================================================================ #
"""	Print and Return
		Your function will receive an array with two numbers.
		Print the first value, and return the second.	"""

# def print_and_return(arr):
# 	print arr[0]
# 	return arr[1]
#
# result_2 = print_and_return([1, 2])
# print(result_2)

# ============================================================================ #
"""	First Plus Length
		Given an array, return the sum of the first value in the array,
		plus the array's length. What happens if th array's first value
		is not a number, but a string (like 'what'?) or a boolean
		(like false).	"""
		# what is not going to work. for this part, python is not as flexible as js. str() or int() must be used before concatenating different types. True = 1, False = 0

# def first_plus_length(arr):
# 	return arr[0] + len(arr)
#
# result_3 = first_plus_length([True, 3, 4])
# print(result_3)

# ============================================================================ #
"""	Values Greater than Second
		For [1, 3, 5, 7, 9, 13], print values that are greater than
		its 2nd value. Return how many values this is.	"""

# def greater_than_second(arr):
# 	count = 0
# 	for num in arr:
# 		if num > arr[1]:
# 			print num
# 			count += 1
# 	return count
#
# result_4 = greater_than_second([1, 3, 5, 7, 9, 13])
# print("There are {} values that are greater than its 2nd value.".format(result_4))

# ============================================================================ #
"""	Values Greater than Second, Generalized
		Write a function that accepts any array, and returns a new
		array with the array values that are greater that its
		2nd value. Print how manuy value this is. What will you do
		if the array is only one element long?	"""

# def greater_than_second_generalized(arr):
# 	if len(arr) < 1:
# 		return None
# 	count = 0
# 	for num in arr:
# 		if num > arr[1]:
# 			print num
# 			count += 1
# 	return count
#
# arr = [3, 5, 2, 3, 65, 4, 8, 9, 2, 13]
# result_5 = greater_than_second_generalized(arr)
# print("There are {} values that are greater than its 2nd value.".format(result_5))

# ============================================================================ #
"""	This Length, That Value
		Given two numbers, return array of length num1 with each
		value num2. Print 'Jinx!' if they are same.	"""

# def this_length_value(num1, num2):
# 	if num1 == num2:
# 		print 'Jinx!'
# 	arr = []
# 	for i in range(num1):
# 		arr.append(num2)
# 	return arr
#
# result_6 = this_length_value(5, 5)
# print(result_6)

# ============================================================================ #
"""	Fit the First Value
		Your function should accept an array. If value at [0] is
		greater than array's length, print 'Too big!'; if value
		at [0] is less than array's length, print 'Too small!';
		otherwise print 'Just right!'.	"""

# def fit_first_value(arr):
# 	list_length = len(arr)
# 	if arr[0] > list_length:
# 		print "Too big!"
# 	elif arr[0] < list_length:
# 		print "Too small!"
# 	else:
# 		print "Just right!"
#
# fit_first_value([4, 2, 3])

# ============================================================================ #
"""	Fahrenheit to Celsius
		Kelvin wants to convert between temperature scales.
		Create fahrenheitToCelsius(fDegrees) that accepts a number
		of degrees in Fahrenheit, and returns the equivalent
		temperature as expressed in Celsius degrees.
		For review, Fahrenheit = (9/5 * Celsius) + 32.	"""

# def fahrenheitToCelsius(fDegrees):
# 	return round((5.0 / 9) * (fDegrees - 32))
#
# result_8 = fahrenheitToCelsius(80)
# print(result_8)


# ============================================================================ #
"""	Celsius to Fahrenheit
		Create celsiusToFahrenheit(cDegrees) that accepts number of
		degrees Celsius, and return the equivalent temperature
		expressed in Fahrenheit degrees.	"""

# def celsiusToFahrenheit(cDegrees):
# 	return round((9 / 5.0 * cDegrees) + 32)
#
# result_9 = celsiusToFahrenheit(26.66)
# print(result_9)


"""		(optional) Do Fahrenheit and Celsius values equate at a certain
		number? Scientific calculation can be complex, so for this
		challenge just try a series of Celsius integer values starting
		at 200, going downward (descending), checking whether it is
		equal to the corresponding Fahrenheight value.	"""

def when_degrees_meet(cDegrees):
	while cDegrees or cDegrees == 0:
		fDegrees = round((9 / 5.0 * cDegrees) + 32)
		if cDegrees == fDegrees:
			return fDegrees
		cDegrees -= 1

result_10 = when_degrees_meet(200)
print(result_10)

# ============================================================================ #
