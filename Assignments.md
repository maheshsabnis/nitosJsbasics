# Date : 18-12-2021

1. Accept a String as follows:

In 1961, producers Albert R. Broccoli and Harry Saltzman purchased the filming rights to Fleming's novels.[3] They founded Eon Productions and, with financial backing by United Artists, produced Dr. No, directed by Terence Young and featuring Connery as Bond.[4] Following its release in 1962, Broccoli and Saltzman created the holding company Danjaq to ensure future productions in the James Bond film series.[5] The series currently has twenty-five films, with the most recent, No Time to Die, released in September 2021. With a combined gross of nearly $7 billion to date, it is the fourth-highest-grossing film series.[6] Accounting for inflation, it has earned over $14 billion at current prices.[a] The films have won five Academy Awards: for Sound Effects (now Sound Editing) in Goldfinger (at the 37th Awards), to John Stears for Visual Effects in Thunderball (at the 38th Awards), to Per Hallberg and Karen Baker Landers for Sound Editing, to Adele and Paul Epworth for Original Song in Skyfall (at the 85th Awards) and to Sam Smith and Jimmy Napes for Original Song in Spectre (at the 88th Awards). Several of the songs produced for the films have been nominated for Academy Awards for Original Song, including Paul McCartney's "Live and Let Die", Carly Simon's "Nobody Does It Better" and Sheena Easton's "For Your Eyes Only". In 1982 Albert R. Broccoli received the Irving G. Thalberg Memorial Award.[8]

Write a JavaScript for performing following operations on te above string
1. Find out number of words
2. Find out number of blankspaces
3. Find out number of Special characters e.g. ., ',',", (), $, etc.
4. Find out number of number of statements
5. Find out number of number and
 positions of vowels (a,e,i,o,u)
6. Find out number of time words 'of', 'the', 'and' occurrs in the string   

2. Define an Array of Employees as follows:

let Employees = [
    {EmpNo:101, EmpName: 'A', Salary: 12222, DeptName:'D1'},
    {EmpNo:102, EmpName: 'B', Salary: 22222, DeptName:'D2'},
    {EmpNo:103, EmpName: 'C', Salary: 32222, DeptName:'D3'},
    {EmpNo:104, EmpName: 'D', Salary: 42222, DeptName:'D1'},
    {EmpNo:105, EmpName: 'E', Salary: 52222, DeptName:'D2'},
    {EmpNo:106, EmpName: 'F', Salary: 62222, DeptName:'D3'}
];

Add at-least 40 Records. Perform following operations on the array

1. Show All Employees by Alphabetical Ascending order 
2. Generate Separate arrays based on Different DeptName
3. Print Sum of Salary of Employees per department  

# Date: 19-12-2021

1. Modify the assignment 2 of Date:18-12-2021 for Employee Collection using Map()
    - The Map will have key as 'DeptName', and value will be Array of Employees as shown in assignment 2.
    - Perform Following operations on Map()
        - Create Group of Employees based in DeptName
        - Sort Every Collection of Employees for Each Department based on Sorted order of EmpName
2. Use the Promise Object for HTTP PUT and DELETE operation by creating a HttpService class with following methods
    - get()
    - post()
    - put()
    - delete()
    - Each of the above method will return 'Promise' object      
        - URL for update         
            - https://apiapptrainingnewapp.azurewebsites.net/api/Products/${ProductRowId}  
            - the data to be updated MUST be passed in Body
          - URL for delete         
            - https://apiapptrainingnewapp.azurewebsites.net/api/Products/${ProductRowId}  
     

# ADV JS

# Date: 15-Jan-2022 (Today)
1. Create a Collection of Employees (at least 40 Records) and Perform Folowing Operations on it
    - List of all Employees Group by DeptName  and Designations
    - Calculate Sum of Salary for each DeptName Group
    - Print EMployee from Each group that is Max and Min Salary
2. CReate a JS Module that have an overloaded functions to rearrange data in array as per the following requirements
    - if an array is like follows
        - [10,[20,30], 40,50,60, [70,80,90], 100,110, [120]]
            - then the array MUST be made as a flat array
                - [10,20,30,40,50,60,70,80,90,100,110,120]
        - rearrange()
            - default result should be:  [10,20,30,40,50,60,70,80,90,100,110,120]
        - rearrange(sort)
            - sort in ascending order       
        - rearrange(reverse)
            - result will be [120,110,100,90,80,70,60,50,40,30,20,10]
        - Do this for Numeric and String values     
