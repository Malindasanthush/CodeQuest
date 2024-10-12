const jsQuizData = [         
    {             
        question: "What is JavaScript primarily used for?",             
        answers: ["Styling Web Pages", "Building Databases", "Client-Side Scripting", "Designing Websites"],             
        correct: 3         
    },         
    {             
        question: "Which of the following is a JavaScript framework?",             
        answers: ["Django", "React", "Flask", "Laravel"],             
        correct: 2         
    },         
    {             
        question: "Which symbol is used for comments in JavaScript?",             
        answers: ["//", "#", "<!-- -->", "*"],             
        correct: 1         
    },         
    {             
        question: "What does 'DOM' stand for in JavaScript?",             
        answers: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Database Object Method"],             
        correct: 1         
    },         
    {             
        question: "Which function is used to parse a string to an integer in JavaScript?",             
        answers: ["parseFloat", "parseInt", "Number", "Integer"],             
        correct: 2         
    },
    {             
        question: "Which of the following is a JavaScript data type?",             
        answers: ["Float", "Decimal", "Number", "Character"],             
        correct: 3         
    },         
    {             
        question: "How can you create a function in JavaScript?",             
        answers: ["function = myFunction()", "function myFunction()", "createFunction myFunction()", "def myFunction()"],             
        correct: 2         
    },         
    {             
        question: "Which event occurs when a user clicks on an HTML element?",             
        answers: ["onmouseover", "onchange", "onclick", "onmouseclick"],             
        correct: 3         
    },         
    {             
        question: "How do you declare a JavaScript variable?",             
        answers: ["v carName;", "var carName;", "variable carName;", "int carName;"],             
        correct: 2         
    },         
    {             
        question: "Which method is used to add elements to the end of an array?",             
        answers: ["add()", "push()", "append()", "insert()"],             
        correct: 2         
    },         
    {             
        question: "Which operator is used to assign a value to a variable?",             
        answers: ["-", "=", "==", "*"],             
        correct: 2         
    },         
    {             
        question: "Which keyword is used to define a constant variable?",             
        answers: ["const", "var", "let", "constant"],             
        correct: 1         
    },         
    {             
        question: "What is the correct syntax for referring to an external JavaScript file?",             
        answers: ["<script src='filename.js'>", "<script href='filename.js'>", "<script link='filename.js'>", "<script file='filename.js'>"],             
        correct: 1         
    },         
    {             
        question: "How can you add a comment that spans multiple lines in JavaScript?",             
        answers: ["<!-- Comment -->", "/* Comment */", "// Comment", "'' Comment"],             
        correct: 2         
    },         
    {             
        question: "What is the result of '3' + 2 in JavaScript?",             
        answers: ["5", "'32'", "'5'", "Error"],             
        correct: 2         
    }     
];

const javaQuizData = [
    {
        question: "What is Java primarily used for?",
        answers: ["Web Development", "Mobile Development", "Game Development", "Desktop Applications"],
        correct: 2
    },
    {
        question: "Which company developed Java?",
        answers: ["Microsoft", "Sun Microsystems", "Apple", "Google"],
        correct: 2
    },
    {
        question: "Which of the following is a Java framework?",
        answers: ["Spring", "Angular", "Django", "Flask"],
        correct: 1
    },
    {
        question: "Which keyword is used to create a class in Java?",
        answers: ["object", "class", "def", "function"],
        correct: 2
    },
    {
        question: "Which method is used as the entry point in a Java application?",
        answers: ["run()", "start()", "main()", "execute()"],
        correct: 3
    },
    {
        question: "Which data type is used to store true or false values in Java?",
        answers: ["int", "boolean", "String", "float"],
        correct: 2
    },
    {
        question: "What is the size of an int data type in Java?",
        answers: ["16 bits", "32 bits", "64 bits", "8 bits"],
        correct: 2
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        answers: ["this", "implements", "extends", "super"],
        correct: 3
    },
    {
        question: "Which method is used to compare two strings in Java?",
        answers: ["equals()", "compareTo()", "==", "compare()"],
        correct: 1
    },
    {
        question: "What is the default value of a local variable in Java?",
        answers: ["null", "0", "undefined", "No default value"],
        correct: 4
    },
    {
        question: "Which of the following is a reserved keyword in Java?",
        answers: ["goto", "next", "main", "null"],
        correct: 1
    },
    {
        question: "Which exception is thrown when a division by zero occurs in Java?",
        answers: ["NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException", "IllegalArgumentException"],
        correct: 2
    },
    {
        question: "Which keyword is used to define an interface in Java?",
        answers: ["class", "interface", "implements", "abstract"],
        correct: 2
    },
    {
        question: "Which of these cannot be used for a variable name in Java?",
        answers: ["var", "_var", "$var", "123var"],
        correct: 4
    },
    {
        question: "What is the correct way to declare an array in Java?",
        answers: ["int[] arr;", "array arr;", "int arr[];", "int arr;"],
        correct: 1
    }
];

const pythonQuizData = [
    {
        question: "Which statement is used to define a function in Python?",
        answers: ["function", "def", "lambda", "func"],
        correct: 2
    },
    {
        question: "Which of the following is used to install packages in Python?",
        answers: ["pip", "npm", "gem", "apt"],
        correct: 1
    },
    {
        question: "Which of these data types is immutable in Python?",
        answers: ["List", "Dictionary", "Set", "Tuple"],
        correct: 4
    },
    {
        question: "Which method is used to read input from the user in Python?",
        answers: ["scan()", "input()", "read()", "enter()"],
        correct: 2
    },
    {
        question: "Which of the following is a Python web framework?",
        answers: ["Django", "Flask", "Pyramid", "All of the above"],
        correct: 4
    },
    {
        question: "What is the output of 3 ** 2 in Python?",
        answers: ["9", "6", "5", "3"],
        correct: 1
    },
    {
        question: "Which function is used to get the length of a list in Python?",
        answers: ["size()", "length()", "len()", "list_length()"],
        correct: 3
    },
    {
        question: "Which keyword is used to handle exceptions in Python?",
        answers: ["catch", "except", "try", "throw"],
        correct: 2
    },
    {
        question: "How do you start a for loop in Python?",
        answers: ["for i=0 to 10", "for i in range(10):", "foreach(i=0; i<10; i++)", "for(i=0; i<10; i++)"],
        correct: 2
    },
    {
        question: "Which method can be used to remove whitespaces from the beginning and the end of a string?",
        answers: ["remove()", "strip()", "trim()", "clear()"],
        correct: 2
    },
    {
        question: "Which keyword is used to create a class in Python?",
        answers: ["object", "class", "def", "struct"],
        correct: 2
    },
    {
        question: "Which of the following is a mutable data type in Python?",
        answers: ["Tuple", "String", "List", "Integer"],
        correct: 3
    },
    {
        question: "Which operator is used to check if two values are equal in Python?",
        answers: ["=", "==", "===", "equals()"],
        correct: 2
    },
    {
        question: "What does the 'break' statement do in a loop?",
        answers: ["Terminates the loop", "Skips the next iteration", "Restarts the loop", "Pauses the loop"],
        correct: 1
    },
    {
        question: "What is the correct file extension for Python files?",
        answers: [".pt", ".python", ".py", ".pyt"],
        correct: 3
    }
];
const angularQuizData = [
{
    question: "What is Angular primarily used for?",
    answers: ["Client-Side Scripting", "Server-Side Scripting", "Building Mobile Apps", "Building Web Applications"],
    correct: 4
},
{
    question: "Which company developed Angular?",
    answers: ["Facebook", "Google", "Microsoft", "Apple"],
    correct: 2
},
{
    question: "Which directive is used for two-way data binding in Angular?",
    answers: ["ng-model", "ng-bind", "ng-init", "ng-repeat"],
    correct: 1
},
{
    question: "What is a component in Angular?",
    answers: ["A service", "A class that controls a part of the view", "A module", "A directive"],
    correct: 2
},
{
    question: "Which lifecycle hook is called once after the component is initialized?",
    answers: ["ngOnInit", "ngAfterViewInit", "ngDoCheck", "ngOnChanges"],
    correct: 1
},
{
    question: "What does the 'ngFor' directive do?",
    answers: ["Executes code", "Binds properties", "Iterates over a list", "Defines a loop condition"],
    correct: 3
},
{
    question: "Which file contains the main module of an Angular application?",
    answers: ["main.ts", "index.html", "app.module.ts", "angular.json"],
    correct: 3
},
{
    question: "What is Angular CLI used for?",
    answers: ["Managing databases", "Building, scaffolding, and maintaining Angular applications", "Debugging Angular apps", "Managing dependencies"],
    correct: 2
},
{
    question: "Which Angular decorator is used to define a component?",
    answers: ["@Component", "@Directive", "@Module", "@Injectable"],
    correct: 1
},
{
    question: "What is a service in Angular?",
    answers: ["A function that manipulates the DOM", "A reusable business logic unit", "A part of a component", "A module"],
    correct: 2
},
{
    question: "How do you define a route in Angular?",
    answers: ["Using ngRoute", "Using the Angular Router module", "Using @Route", "Using path bindings"],
    correct: 2
},
{
    question: "Which module in Angular is used for handling forms?",
    answers: ["FormsModule", "HttpClientModule", "RouterModule", "CoreModule"],
    correct: 1
},
{
    question: "What is a pipe in Angular?",
    answers: ["A method for transforming data", "A service", "A module", "A template"],
    correct: 1
},
{
    question: "Which operator is used for subscribing to an observable in Angular?",
    answers: ["subscribe()", "observe()", "call()", "watch()"],
    correct: 1
},
{
    question: "What is the purpose of a resolver in Angular?",
    answers: ["To initialize components", "To resolve data before navigation", "To inject services", "To manage errors"],
    correct: 2
}
];
const cppQuizData = [
{
    question: "What is C++ primarily used for?",
    answers: ["Web Development", "Game Development", "Database Management", "Mobile Development"],
    correct: 2
},
{
    question: "Which of the following is a C++ standard library?",
    answers: ["iostream", "numpy", "pandas", "bootstrap"],
    correct: 1
},
{
    question: "Which symbol is used for single-line comments in C++?",
    answers: ["#", "//", "/* */", "*"],
    correct: 2
},
{
    question: "Which of the following is the correct way to declare a variable in C++?",
    answers: ["int x = 5;", "let x = 5;", "var x = 5;", "define x = 5;"],
    correct: 1
},
{
    question: "Which keyword is used to define a class in C++?",
    answers: ["object", "class", "define", "struct"],
    correct: 2
},
{
    question: "Which of the following is used to create an object in C++?",
    answers: ["new", "create", "allocate", "instantiate"],
    correct: 1
},
{
    question: "Which operator is used to access members of a class through an object?",
    answers: [".", "->", "::", "*"],
    correct: 1
},
{
    question: "Which feature of C++ allows a function to have multiple forms?",
    answers: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    correct: 2
},
{
    question: "Which function is used to allocate memory dynamically in C++?",
    answers: ["malloc()", "allocate()", "new", "memory()"],
    correct: 3
},
{
    question: "What is the return type of the main function in C++?",
    answers: ["void", "int", "char", "float"],
    correct: 2
},
{
    question: "Which keyword is used to inherit a class in C++?",
    answers: ["extends", "inherits", "super", "public"],
    correct: 4
},
{
    question: "What is the default access modifier for class members in C++?",
    answers: ["private", "protected", "public", "internal"],
    correct: 1
},
{
    question: "Which of the following is not a valid loop in C++?",
    answers: ["for", "while", "do-while", "foreach"],
    correct: 4
},
{
    question: "Which operator is used to deallocate memory in C++?",
    answers: ["delete", "remove", "free", "clear"],
    correct: 1
},
{
    question: "What is the output of the expression 10 % 3 in C++?",
    answers: ["0", "1", "2", "3"],
    correct: 2
}
];

const htmlQuizData = [
{
    question: "What does HTML stand for?",
    answers: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
    correct: 3
},
{
    question: "Which HTML tag is used to define an unordered list?",
    answers: ["<ul>", "<ol>", "<li>", "<list>"],
    correct: 1
},
{
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: ["<a>", "<link>", "<href>", "<hyperlink>"],
    correct: 1
},
{
    question: "Which HTML element is used to define the largest heading?",
    answers: ["<h1>", "<heading>", "<h6>", "<head>"],
    correct: 1
},
{
    question: "Which attribute is used to provide an alternative text for an image in HTML?",
    answers: ["title", "alt", "src", "href"],
    correct: 2
},
{
    question: "What is the purpose of the <meta> tag in HTML?",
    answers: ["To specify the content type", "To include a JavaScript file", "To define metadata", "To style elements"],
    correct: 3
},
{
    question: "Which tag is used to create a table row in HTML?",
    answers: ["<table>", "<tr>", "<td>", "<row>"],
    correct: 2
},
{
    question: "Which attribute is used to open a hyperlink in a new tab?",
    answers: ["_blank", "new", "target", "href"],
    correct: 3
},
{
    question: "Which HTML tag is used to display an image?",
    answers: ["<picture>", "<image>", "<img>", "<media>"],
    correct: 3
},
{
    question: "Which tag is used to define a paragraph in HTML?",
    answers: ["<pg>", "<p>", "<para>", "<par>"],
    correct: 2
},
{
    question: "What is the correct syntax for creating a comment in HTML?",
    answers: ["<!-- Comment -->", "// Comment", "/* Comment */", "# Comment"],
    correct: 1
},
{
    question: "Which HTML tag is used to define a division or a section?",
    answers: ["<section>", "<div>", "<span>", "<block>"],
    correct: 2
},
{
    question: "Which attribute is used to specify the URL of a linked document in the <a> tag?",
    answers: ["href", "link", "src", "url"],
    correct: 1
},
{
    question: "Which tag is used to add a line break in HTML?",
    answers: ["<br>", "<lb>", "<break>", "<nl>"],
    correct: 1
},
{
    question: "What is the default alignment of the <p> tag in HTML?",
    answers: ["Right", "Left", "Center", "Justify"],
    correct: 2
}
];
const cssQuizData = [
{
    question: "What does CSS stand for?",
    answers: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correct: 2
},
{
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["<css>", "<script>", "<style>", "<link>"],
    correct: 3
},
{
    question: "Which property is used to change the background color of an element?",
    answers: ["color", "bgcolor", "background-color", "background"],
    correct: 3
},
{
    question: "Which CSS property is used to change the text color of an element?",
    answers: ["fgcolor", "color", "font-color", "text-color"],
    correct: 2
},
{
    question: "Which property is used to set the spacing between lines of text?",
    answers: ["line-spacing", "text-spacing", "line-height", "text-height"],
    correct: 3
},
{
    question: "Which CSS property is used to change the font of an element?",
    answers: ["font-style", "font-weight", "font-family", "font-variant"],
    correct: 3
},
{
    question: "Which property is used to set the width of an element's border?",
    answers: ["border-width", "border-style", "border-color", "border-height"],
    correct: 1
},
{
    question: "Which CSS property controls the horizontal alignment of text?",
    answers: ["vertical-align", "text-align", "float", "position"],
    correct: 2
},
{
    question: "How do you make each word in a text start with a capital letter?",
    answers: ["text-transform: capitalize;", "text-style: capital;", "font-variant: small-caps;", "font-style: capitalize;"],
    correct: 1
},
{
    question: "Which property is used to create space between the element's border and inner content?",
    answers: ["margin", "border", "padding", "spacing"],
    correct: 3
},
{
    question: "Which CSS property is used to make text bold?",
    answers: ["font-style", "font-weight", "text-decoration", "text-transform"],
    correct: 2
},
{
    question: "Which property specifies the bottom margin of an element?",
    answers: ["margin-bottom", "padding-bottom", "border-bottom", "bottom-margin"],
    correct: 1
},
{
    question: "Which CSS property is used to float an element to the left?",
    answers: ["position", "float", "align", "display"],
    correct: 2
},
{
    question: "How do you remove the underline from a hyperlink in CSS?",
    answers: ["text-decoration: no-underline;", "text-decoration: none;", "text-style: no-underline;", "font-decoration: none;"],
    correct: 2
},
{
    question: "Which property is used to change the cursor icon when hovering over an element?",
    answers: ["cursor-style", "hover-cursor", "cursor", "mouse-pointer"],
    correct: 3
}
];

const phpQuizData = [
{
    question: "What does PHP stand for?",
    answers: ["Personal Home Page", "Hypertext Preprocessor", "Pre Hypertext Processor", "Private Hypertext Processor"],
    correct: 2
},
{
    question: "Which symbol is used to denote a variable in PHP?",
    answers: ["$", "#", "@", "%"],
    correct: 1
},
{
    question: "Which function is used to output text in PHP?",
    answers: ["echo", "print", "write", "show"],
    correct: 1
},
{
    question: "Which of the following is used to include a PHP file within another PHP file?",
    answers: ["include", "insert", "require", "import"],
    correct: 1
},
{
    question: "Which of the following is NOT a PHP data type?",
    answers: ["String", "Integer", "Boolean", "Character"],
    correct: 4
},
{
    question: "How do you create a function in PHP?",
    answers: ["function myFunction()", "def myFunction()", "function:myFunction()", "create myFunction()"],
    correct: 1
},
{
    question: "Which superglobal variable holds information about uploaded files?",
    answers: ["$_FILES", "$_UPLOAD", "$_POST", "$_REQUEST"],
    correct: 1
},
{
    question: "How can you get the length of a string in PHP?",
    answers: ["strlen()", "strlength()", "count()", "len()"],
    correct: 1
},
{
    question: "How do you create an array in PHP?",
    answers: ["array[]", "array()", "arr[]", "arr()"],
    correct: 2
},
{
    question: "Which of the following is used to end a PHP statement?",
    answers: [".", ";", ":", "$"],
    correct: 2
},
{
    question: "Which of the following is used to connect to a MySQL database in PHP?",
    answers: ["mysqli_connect()", "mysql_connect()", "pdo_connect()", "db_connect()"],
    correct: 1
},
{
    question: "What does the `isset()` function do in PHP?",
    answers: ["Checks if a variable is set", "Initializes a variable", "Deletes a variable", "Returns the type of a variable"],
    correct: 1
},
{
    question: "Which of the following is a correct way to start a session in PHP?",
    answers: ["session_start()", "session_begin()", "session_init()", "session_run()"],
    correct: 1
},
{
    question: "How do you add a comment in PHP?",
    answers: ["# This is a comment", "// This is a comment", "/* This is a comment */", "All of the above"],
    correct: 4
},
{
    question: "Which of the following is used to check if a file exists in PHP?",
    answers: ["file_exists()", "check_file()", "file_exist()", "is_file()"],
    correct: 1
}
];
const sqlQuizData = [
{
    question: "What does SQL stand for?",
    answers: ["Structured Query Language", "Simple Query Language", "System Query Language", "Standard Query Language"],
    correct: 1
},
{
    question: "Which SQL statement is used to retrieve data from a database?",
    answers: ["GET", "SELECT", "RETRIEVE", "FETCH"],
    correct: 2
},
{
    question: "Which clause is used to filter records in a SQL query?",
    answers: ["WHERE", "FILTER", "SORT", "GROUP BY"],
    correct: 1
},
{
    question: "Which SQL statement is used to insert new data into a database?",
    answers: ["INSERT INTO", "ADD NEW", "UPDATE", "PUT"],
    correct: 1
},
{
    question: "Which function is used to count the number of rows in a SQL query?",
    answers: ["COUNT()", "SUM()", "TOTAL()", "ROW_COUNT()"],
    correct: 1
},
{
    question: "Which SQL statement is used to update existing data in a table?",
    answers: ["CHANGE", "MODIFY", "UPDATE", "SET"],
    correct: 3
},
{
    question: "Which SQL keyword is used to delete data from a database?",
    answers: ["REMOVE", "DELETE", "DROP", "CUT"],
    correct: 2
},
{
    question: "What is the SQL keyword used to sort the result-set?",
    answers: ["SORT BY", "ORDER BY", "GROUP BY", "ALIGN BY"],
    correct: 2
},
{
    question: "How do you select all the columns from a table named 'employees'?",
    answers: ["SELECT * FROM employees;", "GET ALL FROM employees;", "SELECT ALL FROM employees;", "RETRIEVE * FROM employees;"],
    correct: 1
},
{
    question: "Which SQL clause is used to group rows with the same values?",
    answers: ["ORDER BY", "GROUP BY", "SORT BY", "PARTITION BY"],
    correct: 2
},
{
    question: "Which function returns the maximum value in a column?",
    answers: ["MAX()", "HIGH()", "TOP()", "MAXIMUM()"],
    correct: 1
},
{
    question: "Which SQL keyword is used to specify a condition for filtering groups?",
    answers: ["HAVING", "WHERE", "FILTER", "GROUP BY"],
    correct: 1
},
{
    question: "Which SQL keyword is used to create a new table?",
    answers: ["INSERT TABLE", "CREATE TABLE", "NEW TABLE", "ADD TABLE"],
    correct: 2
},
{
    question: "Which SQL statement is used to remove a table from a database?",
    answers: ["REMOVE TABLE", "DELETE TABLE", "DROP TABLE", "CLEAR TABLE"],
    correct: 3
},
{
    question: "Which SQL keyword is used to limit the number of rows returned by a query?",
    answers: ["LIMIT", "TOP", "ROWCOUNT", "COUNT"],
    correct: 1
}
];
const noSqlQuizData = [
{
    question: "What does NoSQL stand for?",
    answers: ["Non-Structured Query Language", "Not Only SQL", "Non-Sequential Query Language", "Non-Standard Query Language"],
    correct: 2
},
{
    question: "Which of the following is a NoSQL database?",
    answers: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    correct: 2
},
{
    question: "Which data format is commonly used with NoSQL databases like MongoDB?",
    answers: ["CSV", "JSON", "XML", "YAML"],
    correct: 2
},
{
    question: "Which of the following is a characteristic of NoSQL databases?",
    answers: ["Relational", "Schema-less", "Fixed Schema", "Table-based"],
    correct: 2
},
{
    question: "Which type of NoSQL database is MongoDB?",
    answers: ["Key-Value", "Document", "Graph", "Column"],
    correct: 2
},
{
    question: "Which command is used to insert a document in MongoDB?",
    answers: ["INSERT INTO", "ADD DOCUMENT", "INSERT()", "db.collection.insert()"],
    correct: 4
},
{
    question: "Which of the following is a key-value NoSQL database?",
    answers: ["Neo4j", "Redis", "Cassandra", "MySQL"],
    correct: 2
},
{
    question: "Which NoSQL database is optimized for storing large-scale graphs?",
    answers: ["MongoDB", "Neo4j", "DynamoDB", "CouchDB"],
    correct: 2
},
{
    question: "In NoSQL databases, what does 'sharding' refer to?",
    answers: ["A way to replicate data", "A method of indexing data", "Partitioning data across servers", "Encrypting data"],
    correct: 3
},
{
    question: "Which of the following is NOT a NoSQL database type?",
    answers: ["Document-based", "Column-based", "Key-value", "Table-based"],
    correct: 4
},
{
    question: "Which NoSQL database uses column-family storage?",
    answers: ["MongoDB", "Cassandra", "Redis", "Neo4j"],
    correct: 2
},
{
    question: "Which NoSQL database is fully managed by Amazon Web Services?",
    answers: ["CouchDB", "DynamoDB", "Cassandra", "Redis"],
    correct: 2
},
{
    question: "Which is an advantage of NoSQL databases over traditional relational databases?",
    answers: ["Better at handling structured data", "Easier to maintain", "Horizontal scaling", "Fixed schema"],
    correct: 3
},
{
    question: "Which NoSQL database is commonly used for caching data?",
    answers: ["MongoDB", "Neo4j", "Redis", "Cassandra"],
    correct: 3
},
{
    question: "Which of the following is NOT typically associated with NoSQL databases?",
    answers: ["Scalability", "High Availability", "ACID transactions", "Schema-less data"],
    correct: 3
}
];
const swiftQuizData = [
{
    question: "What is Swift primarily used for?",
    answers: ["Building Android apps", "Web Development", "iOS and macOS Development", "Game Development"],
    correct: 3
},
{
    question: "Which keyword is used to define a constant in Swift?",
    answers: ["let", "var", "const", "static"],
    correct: 1
},
{
    question: "Which symbol is used for comments in Swift?",
    answers: ["//", "#", "<!-- -->", "*"],
    correct: 1
},
{
    question: "Which function is used to print output to the console in Swift?",
    answers: ["console.log()", "print()", "echo()", "output()"],
    correct: 2
},
{
    question: "How do you declare an optional variable in Swift?",
    answers: ["let x: Int!", "let x: Int?", "var x: Int?", "var x: Int!"],
    correct: 2
},
{
    question: "Which keyword is used to handle errors in Swift?",
    answers: ["try", "catch", "handle", "except"],
    correct: 1
},
{
    question: "Which of the following is a data type in Swift?",
    answers: ["String", "str", "char", "text"],
    correct: 1
},
{
    question: "What is used to create a loop in Swift?",
    answers: ["while", "for", "repeat", "All of the above"],
    correct: 4
},
{
    question: "Which keyword is used to declare a function in Swift?",
    answers: ["func", "function", "def", "method"],
    correct: 1
},
{
    question: "What is the correct way to unwrap an optional in Swift?",
    answers: ["if let x = x?", "if let x = x!", "if let x = x", "if let x: x"],
    correct: 3
},
{
    question: "Which of the following is a collection type in Swift?",
    answers: ["Array", "Set", "Dictionary", "All of the above"],
    correct: 4
},
{
    question: "What is the purpose of 'guard' in Swift?",
    answers: ["Check for conditions before continuing", "Create loops", "Handle errors", "Declare a function"],
    correct: 1
},
{
    question: "Which keyword is used to define a variable in Swift?",
    answers: ["const", "let", "var", "def"],
    correct: 3
},
{
    question: "Which of the following is the correct way to define a tuple in Swift?",
    answers: ["let tuple = (1, 2)", "let tuple = [1, 2]", "let tuple = {1, 2}", "let tuple = (1; 2)"],
    correct: 1
},
{
    question: "What is the use of closures in Swift?",
    answers: ["A special function to allocate memory", "An inline block of code that can be passed around", "A way to handle exceptions", "A mechanism to define classes"],
    correct: 2
}
];
const kotlinQuizData = [
{
    question: "What is Kotlin primarily used for?",
    answers: ["Building iOS apps", "Web Development", "Android Development", "Game Development"],
    correct: 3
},
{
    question: "Which keyword is used to define a variable in Kotlin?",
    answers: ["val", "let", "var", "const"],
    correct: 3
},
{
    question: "Which symbol is used for single-line comments in Kotlin?",
    answers: ["//", "#", "<!-- -->", "*"],
    correct: 1
},
{
    question: "Which function is used to print output to the console in Kotlin?",
    answers: ["console.log()", "println()", "print()", "echo()"],
    correct: 2
},
{
    question: "What keyword is used to define a constant in Kotlin?",
    answers: ["var", "let", "const", "val"],
    correct: 4
},
{
    question: "How do you define a nullable type in Kotlin?",
    answers: ["Type!", "Type?", "Type[]", "Type?[]"],
    correct: 2
},
{
    question: "What is the primary difference between 'val' and 'var' in Kotlin?",
    answers: ["val is immutable, var is mutable", "var is a keyword for constants", "Both are the same", "val is used for methods, var for variables"],
    correct: 1
},
{
    question: "Which function is used to handle null exceptions in Kotlin?",
    answers: ["try-catch", "nullCheck", "safeCall", "let"],
    correct: 4
},
{
    question: "How do you declare a function in Kotlin?",
    answers: ["def functionName()", "fun functionName()", "func functionName()", "function functionName()"],
    correct: 2
},
{
    question: "Which of the following is a collection type in Kotlin?",
    answers: ["List", "Map", "Set", "All of the above"],
    correct: 4
},
{
    question: "Which of the following is the correct way to declare an array in Kotlin?",
    answers: ["Array<Type>()", "type[]", "arrayOf<Type>()", "Array[]"],
    correct: 3
},
{
    question: "Which of the following is a key feature of Kotlin?",
    answers: ["Null safety", "Platform independence", "Interoperability with Java", "All of the above"],
    correct: 4
},
{
    question: "Which function is used to check if an object is of a certain type?",
    answers: ["as", "instanceof", "is", "equals"],
    correct: 3
},
{
    question: "Which operator is used to perform string interpolation in Kotlin?",
    answers: ["$", "#", "!", "@"],
    correct: 1
},
{
    question: "How do you create a lambda expression in Kotlin?",
    answers: ["fun() => {}", "{ -> }", "( ) -> {}", "( ) => {}"],
    correct: 3
}
];
const reactQuizData = [
{
    question: "What is React primarily used for?",
    answers: ["Server-side rendering", "Mobile app development", "Building user interfaces", "Database management"],
    correct: 3
},
{
    question: "Who developed React?",
    answers: ["Google", "Microsoft", "Facebook", "Amazon"],
    correct: 3
},
{
    question: "What is a component in React?",
    answers: ["A piece of HTML code", "A function or class that returns JSX", "A database entity", "A styling framework"],
    correct: 2
},
{
    question: "Which symbol is used to write JSX in React?",
    answers: ["{}", "()", "<>", "[]"],
    correct: 3
},
{
    question: "What is JSX in React?",
    answers: ["JavaScript XML", "JavaScript Extension", "Java Syntax Extension", "JavaScript for Servers"],
    correct: 1
},
{
    question: "How do you pass data to a React component?",
    answers: ["States", "Refs", "Props", "Components"],
    correct: 3
},
{
    question: "Which hook is used to handle state in functional components?",
    answers: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 2
},
{
    question: "What is the purpose of useEffect hook in React?",
    answers: ["For managing state", "For handling side effects", "For routing", "For rendering HTML"],
    correct: 2
},
{
    question: "Which of the following is true about React components?",
    answers: ["They must be class-based", "They must return JSX", "They don't have lifecycle methods", "They can't accept props"],
    correct: 2
},
{
    question: "How do you create a functional component in React?",
    answers: ["function MyComponent() {}", "class MyComponent extends React.Component {}", "let MyComponent = () => {}", "Both 1 and 3"],
    correct: 4
},
{
    question: "What is the virtual DOM in React?",
    answers: ["A virtual copy of the entire web page", "A lightweight copy of the actual DOM used for efficient rendering", "An abstract model of CSS", "None of the above"],
    correct: 2
},
{
    question: "How do you handle events in React?",
    answers: ["By writing HTML event handlers", "By using addEventListener", "By passing a function to a JSX event handler", "None of the above"],
    correct: 3
},
{
    question: "How do you conditionally render elements in React?",
    answers: ["Using if statements", "Using ternary operators", "Using switch statements", "All of the above"],
    correct: 4
},
{
    question: "What is a React fragment used for?",
    answers: ["To group multiple elements without adding extra nodes to the DOM", "To write inline styles", "To define custom hooks", "To create forms"],
    correct: 1
},
{
    question: "What is the default port for running a React application in development?",
    answers: ["3000", "8080", "8000", "5000"],
    correct: 1
}
];
const flutterQuizData = [
{
    question: "What is Flutter primarily used for?",
    answers: ["Building web apps", "Building Android and iOS apps", "Database management", "Game development"],
    correct: 2
},
{
    question: "Which programming language is used to write Flutter apps?",
    answers: ["Java", "Kotlin", "Swift", "Dart"],
    correct: 4
},
{
    question: "Which widget is used to create a clickable button in Flutter?",
    answers: ["Text()", "Container()", "FlatButton()", "Button()"],
    correct: 3
},
{
    question: "What is the main building block of a Flutter app's UI?",
    answers: ["Fragments", "Components", "Widgets", "Views"],
    correct: 3
},
{
    question: "What is 'hot reload' in Flutter?",
    answers: ["A feature that updates the UI without restarting the app", "A tool for debugging", "A state management system", "A build tool"],
    correct: 1
},
{
    question: "Which widget is used to display text in Flutter?",
    answers: ["TextField()", "Text()", "Input()", "Label()"],
    correct: 2
},
{
    question: "How do you create a new Flutter project?",
    answers: ["flutter create myapp", "flutter start myapp", "flutter init myapp", "flutter new myapp"],
    correct: 1
},
{
    question: "Which of the following is used for navigation between screens in Flutter?",
    answers: ["Navigator", "Router", "Switcher", "Handler"],
    correct: 1
},
{
    question: "Which widget is used for layouts in Flutter?",
    answers: ["ListView", "Column", "Row", "All of the above"],
    correct: 4
},
{
    question: "What is the entry point of a Flutter application?",
    answers: ["startApp()", "runApp()", "initApp()", "beginApp()"],
    correct: 2
},
{
    question: "Which of the following is true about Flutter widgets?",
    answers: ["They are mutable", "They are immutable", "They are stateful by default", "They do not use build methods"],
    correct: 2
},
{
    question: "What is a StatefulWidget in Flutter?",
    answers: ["A widget that doesn't change", "A widget that can change its state during runtime", "A static widget", "A widget that doesn’t require user interaction"],
    correct: 2
},
{
    question: "How do you add an image in Flutter?",
    answers: ["Image.asset()", "Image.file()", "Image.network()", "All of the above"],
    correct: 4
},
{
    question: "Which widget allows you to add padding to its child widget?",
    answers: ["Padding", "Margin", "SizedBox", "Align"],
    correct: 1
},
{
    question: "Which of the following is a commonly used state management solution in Flutter?",
    answers: ["Redux", "Provider", "Bloc", "All of the above"],
    correct: 4
}
];
const reactNativeQuizData = [
{
    question: "What is React Native primarily used for?",
    answers: ["Web development", "Building cross-platform mobile apps", "Server-side development", "Desktop application development"],
    correct: 2
},
{
    question: "Which programming language is primarily used in React Native?",
    answers: ["Swift", "Java", "Dart", "JavaScript"],
    correct: 4
},
{
    question: "Which company developed React Native?",
    answers: ["Google", "Microsoft", "Facebook", "Apple"],
    correct: 3
},
{
    question: "What is the primary function used to start a React Native app?",
    answers: ["startApp()", "runApp()", "initApp()", "AppRegistry.registerComponent()"],
    correct: 4
},
{
    question: "Which component is used to display text in React Native?",
    answers: ["<View>", "<TextInput>", "<Text>", "<Label>"],
    correct: 3
},
{
    question: "Which of the following is true about React Native?",
    answers: ["It uses native components for building UI", "It compiles to web applications", "It only works for Android apps", "It requires Node.js for development"],
    correct: 1
},
{
    question: "How do you handle touch events in React Native?",
    answers: ["onPress", "onClick", "handleClick", "onTouch"],
    correct: 1
},
{
    question: "Which of the following is used to navigate between screens in React Native?",
    answers: ["ReactRouter", "Navigator", "React Navigation", "Switch"],
    correct: 3
},
{
    question: "What is the default file extension for React Native components?",
    answers: [".js", ".jsx", ".tsx", ".native"],
    correct: 1
},
{
    question: "Which hook is commonly used to manage state in React Native functional components?",
    answers: ["useEffect", "useContext", "useReducer", "useState"],
    correct: 4
},
{
    question: "How do you style components in React Native?",
    answers: ["CSS", "SCSS", "StyleSheet", "SASS"],
    correct: 3
},
{
    question: "Which command is used to create a new React Native project?",
    answers: ["npx react-native create", "npx react-native init", "npx react-native new", "npx create-react-native-app"],
    correct: 2
},
{
    question: "What is the primary benefit of using React Native?",
    answers: ["Native performance", "Write once, run everywhere", "Web development", "Only for Android apps"],
    correct: 2
},
{
    question: "Which of the following is used to display a scrollable list of items in React Native?",
    answers: ["FlatList", "ScrollView", "ListView", "RecyclerView"],
    correct: 1
},
{
    question: "Which component is used to capture text input from the user in React Native?",
    answers: ["<Input>", "<TextField>", "<TextInput>", "<FormInput>"],
    correct: 3
}
];