#!/bin/python

import math
import os
import random
import re
import sys


# given 2 strings, one is a subsequence if all of the elements of the first string occur in the same order within the second string. 
# They do not have to be contiguous in the second string, but order must be maintained. For example, given the string 'I like cheese', 
# the words ('I', 'cheese') are on possible subsequence of that string. Words are space delimited.

# Given two strings, s and t, where t is a subsequence of s, report the words of s, missing in t (case sensitive), 
# in the order they are missing

#
# Complete the 'missingWords' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts following parameters:
#  1. STRING s
#  2. STRING t
#

def missingWords(s, t):
    # Write your code here
    # Let's split the strings into their words
    wordsInS = s.split()
    wordsInT = t.split()
    
    # Then I'll need some pointers
    SPointer = 0
    TPointer = 0
    
    # Then I want to create an empty list to store any words that I don't find
    missingWords = []
    
    # Loop until you hit all words in s and t
    # If the loop finds the word from s in t, then we both pointers forward and carry on to the next word
    # If the word is not found in t, then it is added to our missingWords list
    while SPointer < len(wordsInS) and TPointer < len(wordsInT):
            if wordsInS[SPointer] == wordsInT[TPointer]:
                TPointer += 1
            else :
                missingWords.append(wordsInS[SPointer])
            SPointer += 1
        
    # At the end of our while loop, we still may have some wordsInS left over once we reach the end of wordsInT
    # This last loop iterates over the range of words from where the SPointer left off in the previous loop until
    # the end of the wordsInS and adds them to the missingWords list, as we know they can't be in t
    for i in range(SPointer, len(wordsInS)):
        missingWords.append(wordsInS[i])
    
    return missingWords

# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     s = raw_input()

#     t = raw_input()

#     result = missingWords(s, t)

#     fptr.write('\n'.join(result))
#     fptr.write('\n')

#     fptr.close()
