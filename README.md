# node-move Enhanced Version
Node.js script to move a file from a directory to another. Supports absolute paths!

node move.js @param1 @param2

@param1 represents the path for the file to be copied
@param2 is the location where the file should be copied ending with the final name for the file

Example: node move.js to-copy/text.txt foo/destination.txt

Notes: 
*if the folder(s) doesn't/don't exist, the script will create it/them.
*a good practice is putting the path name between quotes: "<path>"
