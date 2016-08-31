# ============================================================================ #
""" You Say It's Your Birthday
	 	If 2 given numbers represent your birth month
		and day in either order, log 'How did you
		know?', else log 'Just another day...' """

# month = 12
# day = 18
#
# if month == 12 and day == 18:
# 	print "How did you know?"
# else:
# 	print "Just another day..."

# ============================================================================ #
""" Leap Year
	 	Write a function that determines whether a given
		year is a leap year. If a year is divisible by four,
		it is a leap year, unless it is divisible by 100.
		However, if it is divisible by 400, then it is. """

# year = 1900
# if year % 4 == 0:
# 	if year % 100 == 0 and year % 400 != 0:
# 		print "{} is a not leap year".format(year)
# 	else:
# 		print "{} is a leap year".format(year)
# else:
# 	print "{} is a not leap year".format(year)

# ============================================================================ #
""" Print and Count
		Print all interger multiples of 5, from 512 to 4096.
		Afterward, also log how many there were. """

# count = 0
#
# for i in range(512, 4096):
# 	if i % 5 == 0:
# 		print i
# 		count += 1
#
# print "There are {} of intergers that are multiples of 5, from 512 to 4096".format(count)

# ============================================================================ #
""" Multiples of Six
	 	Print multiples of 6 up to 60,000, using a WHILE. """

# num = 6
# while num <= 60000:
# 	if num % 6 == 0:
# 		print num
# 	num += 1

# ============================================================================ #
""" Counting, the Dojo Way
		Print integers 1 to 100. If divisible by 5, print
		"Coding" instead. If by 10, also print " Dojo". """

for i in range(1, 101):
	if i % 5 == 0:
		if i % 10 == 0:
			print "Coding Dojo"
		else:
			print "Dojo"
	else:
		print i
