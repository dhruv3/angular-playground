# git Notes

* You can check your default Git global configuration, you can type the following at the prompt:
  ```bash
  git config --list
  ```
* Initializing the folder as a Git repository:
  ```bash
  git init
  ```
* Adding files to the staging area:
  ```bash
  git add .
  ```
* Commiting to the Git repository:
  ```bash
  git commit -m "first commit"
  ```
* Checking the log of Git commits:
  ```bash
  git log --oneline
  ```
* Checking out a file from an earlier commit:
  ```bash
  git checkout <second commit's number> index.html
  ```
* Set the local Git repository to set its remote origin:
  ```bash
  git remote add origin <repository URL>
  ```
* Pushing your commits to the online repository:
  ```bash
  git push -u origin master
  ```

this is a test commit