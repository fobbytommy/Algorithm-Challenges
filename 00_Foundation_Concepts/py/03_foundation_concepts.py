# ============================================================================ #
""" What Do You Know?
	 	Your function will be given an input parameter
		incoming. Please console.log this value. """

# def incoming(data):
# 	print data
#
# incoming("This is the incoming data!")

# ============================================================================ #
""" Whoa, That Sucker's Huge...
	 	Add odd intergers from -300,000 to 300,000, and
		console.log the final sum. Is there a shortcut? """

# sum = 0
#
# for i in range(-300000, 300001):
# 	if i % 2 == 1:
# 		sum += i
#
# print sum

# ============================================================================ #
""" Countdown By Fours
	 	Log positive numbers starting at 2016, counting
		down by fours (exclude 0), without a FOR loop. """

# num = 2016
#
# while num > 0:
# 	print num
# 	num -= 4

# ============================================================================ #
""" Flexible Countdown
	 	Based on earlier 'Countdown By Fours', given
		lowNum, highNum, mult, print multiples of mult
		from highNum down to lowNum, using a FOR.
		For (2, 9, 3), print 9 6 3 (on successive lines) """

# def flexibleCountdown(lowNum, highNum, mult):
# 	line_string = ""
# 	for i in range(highNum, lowNum-1, -1):
# 		if i % mult == 0:
# 			line_string += str(i) + " "
# 	print line_string
#
# flexibleCountdown(2, 9, 3)

# ============================================================================ #
""" The Final Countdown
		This is based on 'Flexible Countdown'. The parameter names
		are not as helpful, but the problem is essentially identical;
		don't be thrown off! Given 4 parameters (param1, param2, param3,
		param4), print the multiples of param1, starting at param2
		and extending to param3. One exception: if a multiple is equal
		to param4, then skip (don't print) that one. Do this using a WHILE.
		Given (3, 5, 17, 9), print 6, 12, 15 (which are all of the
		multiples of 3 between 5 and 17, except for the value 9). """

def finalCountdown(param1, param2, param3, param4):
	line_string = ""
	num = param2

	while num <= param3:
		if num % param1 == 0:
			if num != param4:
				line_string += str(num) + " "
		num += 1

	print line_string

finalCountdown(3, 5, 17, 9)
