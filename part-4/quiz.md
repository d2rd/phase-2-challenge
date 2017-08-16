Q1: When you run a command in the terminal, where does BASH look for that command?

  A: Bash looks for commands in the default path.

Q2: On a UNIX computer, how do you stop a running process? 

  A: ^c ('control-c') stops a running process that is in focus (i.e. not running in the background). Some apps require, like node.js require you hit ^c twice to quit.
 
Q3: What packages do you have installed via homebrew? 

  A: git, hub, icu4c, mysql, node, openssl, openssl@1.1, postgresql, readline, wget. 
  NOTE: This is a new machine so I have not reloaded all the packages I had on the old machine.  I have only reloaded what I needed for the new LG program.

Q4: On a UNIX computer, how do you find the process id of a running process?

  A: The command I researched says 'pidof' + 'program_name' will give me the process id. However, I have not used this command and a quick attempt for this question threw the error 'bash: pidof: command not found'

Q5: In a terminal, what does control-c do?
  A: control-c stops the current process.

Q6: What would be the result of typing the following commands?
  $ cd /Users/steve
  $ mkdir foo
  $ touch bar
  $ cd foo
  $ touch bar
  $ pwd

A:  
  The command 'cd /Users/steve' navigates to a directory named '/Users/steve'
  The command 'mkdir foo' creates a directory named 'foo'. 
  The command 'touch bar' creates a file named 'bar'.
  The command 'cd foo' navigates to a directory named 'foo'.
  The command 'touch bar' creates a file named 'bar'.
  The command 'pwd' displays the path from the users home directory to the current directory.  
  Example: 
    My home directory is '$ /Users/d2rd/'.
    Assuming the scenario from this question after executing the steps above typing 'pwd' would result in this response: '/users/d2rd/foo'.

Q7: How do you set an environment variable in your shell?

Q8: What keyboard shortcut do you use to split the screen in your editor?
A: I use Visual Studio Code.  The split screen command is 'command + \'.

Q9: How do you create an alias in your shell?

Q10: When a terminal command completes, how can you tell if it was successful or not?
A: It depends on the command and program. In general, the absence of an error message and return to the '$' prompt indicates success. In the case of node.js the running program returns '>' (greater than sign) as a prompt. In the case of postgreSQL nothing is returned so you're okay.

Q11: What does your ~/.gitconfig have in it? 
A: git config --list
    credential.helper=osxkeychain
    color.ui=auto
    user.name=Glenn-David Daniel
    user.email=d2rd@outlook.com
    core.repositoryformatversion=0
    core.filemode=true
    core.bare=false
    core.logallrefupdates=true
    core.ignorecase=true
    core.precomposeunicode=true
    remote.origin.url=https://github.com/d2rd/phase-2-challenge.git
    remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
    branch.master.remote=origin
    branch.master.merge=refs/heads/master

Q12: What is the difference between a relative and absolute path?

  A: Relative paths reference from the root of the project (application) folder.  Absolute paths reference from the root directory or users home directory.

Q13: Lets say you have the following file structure
    ~
    └── Projects
    ├── pinterest-for-dogs
    │   └── package.json
    └── linkedin-for-dancers
    ├── README.md
    └── package.json

  And you were in the linkedin-for-dancers folder. What command would you use to copy the README.md file to the pinterest-for-dogs folder?

  A: To copy README.md file to the target folder I would use ' cp README.md ../pinterest-for-dogs'.

Q14: What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

  A: For VS Code the command is 'command + p'

Q15: What files or folders do you want all git repositories to ignore?

  A: Libraries like 'node', supporting files and folders and system files like '.DS_STORE'.


Q16: What is the main difference between Array.map and Array.forEach in JavaScript?

  A: 'foreach' iterates over a list and applies some operation to each list member (like saving each item to the database).  Whereas 'map' iterates over a list, transforms each item in that list, and returns another list of the same size with the transformed items (like converting the strings to all uppercase letters).