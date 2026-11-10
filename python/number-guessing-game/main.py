
import random

#generating random number
def genRandom(round):
    if round==1:
        print("\nNice, but theres one thing I want you to remember your range goes from 1-10.Good luck<..>")
        return random.randint(1,10) 
    elif round==2:
        print("\nGood! Now there is one thing I want you to remember your range goes from 1-50. Good luck:)\n")
        return random.randint(1,50)
    elif round==3:
        print("\nExcellent, but theres one thing I want you to remember your range goes from 1-100.Good luck<..>\n")
        return random.randint(1,100) 
    else:
        print("Select the provided levels only\n")
        round=int(input("Select the level\n1.Easy\t2.Medium\t3.Hard\n"))
        return genRandom(round)
    return -1

#define rules

print("Hey, Welcome to TRIPLE TRY.\nAs the name suggests, you are given three chances to guess the random number assaigned by the compiler.\nDont worry, ill give yopu hints;)\n\nWe have three levels in the game\n")
round=int(input("Select the level\n1.Easy\t2.Medium\t3.Hard\n"))

#generate random number
chance=1
Rnumber=genRandom(round)

#take input from user
#validate against correct number
#give suggestions if its wrong

for i in range(3):
    n=int(input(f"\n{chance} attempt, Enter the number"))
    chance=chance+1
    if n==Rnumber:
        print(f"Very Nice. You won the game with {3-chance+1} left")
        break
    elif n>Rnumber:
        print("Try a smaller number\n")
    else:
        print("Try a larger number\n")



