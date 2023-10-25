// If you still do not have gitignore file in youre repo,
// then use in terminal the next command to remove the node_modules from the git repo and to cler the cash!

touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status

After this command use:

npm install