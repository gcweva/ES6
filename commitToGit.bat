
git init
git add .
git commit -m "Add all my files"
git remote rm origin
git remote add origin https://github.com/gravityCrytsal/blog.git

Upload of project from scratch require git pull origin master.

git pull origin master
git push origin master


To remove git file or folder

git rm --cached file1.txt
git commit -m "remove file1.txt"
git push origin master

