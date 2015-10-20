#This Calc converts KES to other currencies
#This is a simple currency converter, using control statements, methods and variables
#First,  we define a method to welcome the user. 
def welcome

	puts "Welcome!! to Super iConverter! Please Enter Your Good Name"
	name = gets
	puts "Thanks Welcome  #{name} . We Convert KES to any Other Currency i.e USD, EURO, YEN etc "
     #return users name
     return name
end


#Second, we define a method for users to choose currency they would like to convert to. ie USD, EURO
def choose_currency

puts "Please Choose a Currency Enter 1 for USD, 2 for EURO, 3 for YEN, 4 for POUNDS, 5 for RAND "	
operation = gets.to_i #Get entered value as integer & store in a variable

#check users inputs
if operation ==1
	return "USD"
	#for USD
elsif operation ==2
	#for EURO
	return "EURO"

elsif operation ==3
	return "YEN"

elsif operation ==4
	return "POUNDS"	

elsif operation ==5
	return "RAND"		
else 
#invalid selection
	return "SELECT A VALID CURRENCY"

end
end


#this method is for perfoming our operation
def perform_operation()
puts "Enter Your Amount in KES . i.e 400"
kenyan_amt = gets.to_i  #prompt user to enter amount in KES & store in a variable

#before we start computing, we need user to enter the operation, so we call 'choose_currency' method
currency = choose_currency

#we check the currency entered & calculate based on it
if currency == "Error"
	return "There was an Error! Please Retry!!"
elsif currency == "USD"
	return answer = kenyan_amt*100
elsif currency == "EURO"
	return answer = kenyan_amt*116
elsif currency == "YEN"
	return answer = kenyan_amt*1.17
elsif currency == "POUNDS"
	return answer = kenyan_amt*0.0064
else 
return "UNKNOWN OPERATION"

end
end

#we invoke our methods
welcome
answer = perform_operation

#print the answer
puts "Answer is #{answer}"


