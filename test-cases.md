#Test Cases

I strongly believe the test cases do not need any description since they're self explanatory. Even more with steps decorator.
For ease of access below you can find the test cases:

##ToDo Page
* Check that Page Title is correct
    Steps:
        1. launch the application
        2. check that the default page has the correct tile
    Expected result:
        Page has correct tile
    Scope: basic page loading

* Check that default app state is empty
    Steps:
        1. launch the application
        2. check that default state of the page is empty
    Expected result:
        Page has no objects pre-created
        Default text is correct
    Scope: correct default state is displayed

##Modal Dialog
* Check that "X" button is functional
    Steps:
        1. launch the application
        2. click on "Add Task" button to open modal Dialog
        3. fill in the title field in the modal Dialog
        4. click on "X" button
        5. check that no item was created
    Expected result:
        No item is created and default state is displayed
    Scope: title field input functionality and characters support, "X" button functionality

* Check that "Cancel" button is functional
    Steps:
        1. launch the application
        2. click on "Add Task" button to open modal Dialog
        3. fill in the title field in the modal Dialog
        4. click on "Cancel" button
        5. check that no item was created
    Expected result:
        No item is created and default state is displayed
    Scope:"Cancel" button functionality


* Check that Add Task button is functional
    Steps:
        1. launch the application
        2. click on "Add Task" button to open modal Dialog
        3. fill in the title field in the modal Dialog
        4. click on "Add Task" button from the modal Dialog
        5. check that item was created with correct title
    Expected result:
        Item was created and displayed with correct title
    Scope:"Add Task" button from modal Dialog functionality, characters display in items list

* Check that Status from modal dialog can be set to complete
    Steps:
        1. launch the application
        2. click on "Add Task" button to open modal Dialog
        3. fill in the title field in the modal Dialog
        4. click on the Status dropdown from the modal Dialog
        5. select the Completed status
        6. click on "Add Task" button from the modal Dialog
        7. check that item was created with correct tickbox state
    Expected result:
        Item was created and displayed with the tickbox checked
    Scope:tickbox opacity 

* Check that Status from modal dialog is incomplete by default
    Steps:
        1. launch the application
        2. click on "Add Task" button to open modal Dialog
        3. fill in the title field in the modal Dialog
        6. click on "Add Task" button from the modal Dialog
        7. check that item was created with correct tickbox state
    Expected result:
        Item was created and displayed with the tickbox is unchecked
    Scope:tickbox opacity 


* Check that Status from modal dialog can be set to incomplete
    Steps:
        1. launch the application
        2. click on "Add Task" button to open modal Dialog
        3. fill in the title field in the modal Dialog
        4. click on the Status dropdown from the modal Dialog
        5. select the Completed status
        6. click on the Status dropdown from the modal Dialog
        7. select the Incomplete status
        8. click on "Add Task" button from the modal Dialog
        9. check that item was created with correct tickbox state
    Expected result:
        Item was created and displayed with the tickbox is unchecked
    Scope:tickbox opacity 

## Please note that these test cases were not aimed particularly to core functionality of the app. A lot of cases are still missing but for the purpose of this exercise I used a more systematic approach to showcase framework structure and test definition.