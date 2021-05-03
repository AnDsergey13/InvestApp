# https://pymongo.readthedocs.io/en/stable/tutorial.html
# https://coderlessons.com/tutorials/python-technologies/izuchite-python-data-science/python-bazy-dannykh-nosql

# Import the python libraries
from pymongo import MongoClient
from pprint import pprint

# Choose the appropriate client
client = MongoClient()
print("1")
client = MongoClient('localhost', 27017)

# Connect to the test db 
db=client.test
pprint(db)
# Use the employee collection
employee = db.employee
employee_details = {
    'Name': 'Raj Kumar',
    'Address': 'Sears Streer, NZ',
    'Age': '42'
}

# Use the insert method
result = employee.insert_one(employee_details)

# Query for the inserted document.
Queryresult = employee.find_one({'Age': '42'})

pprint(Queryresult)