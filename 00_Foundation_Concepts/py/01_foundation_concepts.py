# ============================================================================ #
"""	Setting and Swapping
	 	Set myNumber to 42. Set myName to your name
	 	Now swap myNumber into myName & vice versa	"""

# myNumber = 42
# myName = "Tommy"
#
# myNumber, myName = myName, myNumber
#
# print("myNumber is {}".format(myNumber))
# print("myName is {}".format(myName))

# ============================================================================ #
""" Print -52 to 1066
	 	Print integers from -52 to 1066 using a FOR loop """

# for i in range(-52, 1067):
# 	print i

# ============================================================================ #
""" Don't Worry, Be Happy
	 	Create beCheerful(). Within it, console.log
	 	string "good morning!" Call it 98 times. """

# def beCheerful():
# 	for i in range(98):
# 		print "good morning!"
#
# beCheerful()

# ============================================================================ #
""" Multiples of Three - but Not All
	 	Using FOR, print multiples of 3 from -300 to 0.
	 	Skip -3 and -6. """

# for num in range(-300, 1):
# 	if num % 3 == 0:
# 		if num == -3 or num == -6:
# 			continue
# 		else:
# 			print num

# ============================================================================ #
""" Printing Integers with While
		 Print integers from 2000 to 5280, using a WHILE """

num = 2000
while num <= 5280:
	print num
	num += 1
