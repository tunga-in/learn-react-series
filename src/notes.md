## Node and Node package managers

### [nodejs](https://nodejs.org/en/)
nodejs: runtime engine that allows to run js (not in the browser).

### npm : node package manager
allows to install packages from npmjs.org or other repositories

#### yarn : alternative to np from facebook[yarn](https://yarnpkg.com/).
```bash
npm install -g yarn
```

##### *file* :package.json 
for you to manage version of you packages, track, pass script command using npm .. created when you install or when you run ```npm init ```nor ```yarn init```

##### *file* :package-lock.json 
for managing versions of npm packages and their subsequent dependencies. in short tracks changes in versions of you npm packages.
***note*** : whilst using yarn . a yarn.lock file is created rather than a package-lock.json
