# Login test cases

[https://practicetestautomation.com/practice-test-login/](https://practicetestautomation.com/practice-test-login/)

## test cases description

1. Valid login
   username: student
   password: Password123
   expected result: login success and logout button visible and when clicked on logout navigated back to login page

2. wrong username
   username: asdf
   password: Password123
   expected result: Error message as 'Invalid username' is displayed

3. wrong password
   user: student
   pass: asdf
   expected result: Error message as 'Invalid password' is displayed

4. empty login
   dont type anything
   click submit
   expected result: Error message as 'Invalid username' is displayed
