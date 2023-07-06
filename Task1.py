#!/bin/python

import math
import os
import random
import re
import sys


# the stocks of a company are being surveyed to analyze the net profit of the company over a period.

# for an analysis parameter k, an interval of k consecutive months is said to be highly profitable if the 
# values of the stock prices are strictly increasing for those months. Given the stock prices of the company for n months and 
# the analysis parameter k, find the number of highly profitable intervals

# note that if the interval length is 1, each subarray of length 1 is highly profitable



# Complete the 'countHighlyProfitableMonths' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY stockPrices
#  2. INTEGER k
#

def countHighlyProfitableMonths(stockPrices, k):
    # Write your code here
    # Initialize count variable
    count = 0
    length = len(stockPrices)
    
    # Intialize our pointers
    left = 0
    right = 0
    
    # Per the note in the instructions, if k is equal to 1 we conclude that each subarray of length 1 is highly profitable
    # so we just return the length
    if k == 1:
        return length 
    
    # Run the while loop until the right pointer reaches the full length   
    while right < length:
        # Move the right pointer forward (and this ensures it's always greater than the left pointer)
        right = left + 1
        
        # This while loop finds the index where the interval stops increasing
        # Loop continues until we reach the last month or until the interval stops increasing
        while right < length and stockPrices[right] > stockPrices[right-1]:
            right += 1
            
        # Calculate the length of the interval where it was continuously increasing    
        intervLength = right - left
        if intervLength + 1 - k > 0:
            count += intervLength + 1 - k
        
        # Move the left pointer forward
        left = right
        
    return count

# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     stockPrices_count = int(raw_input().strip())

#     stockPrices = []

#     for _ in xrange(stockPrices_count):
#         stockPrices_item = int(raw_input().strip())
#         stockPrices.append(stockPrices_item)

#     k = int(raw_input().strip())

#     result = countHighlyProfitableMonths(stockPrices, k)

#     fptr.write(str(result) + '\n')

#     fptr.close()
