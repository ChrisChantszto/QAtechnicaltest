# QA technical test

##### Tech stack used:
1. Cypress.io
2. Javascript

##### Set up guide:
1. install via npm
```
cd /your/project/path
```
```
npm install cypress
```

2. install through other methods
https://docs.cypress.io/guides/getting-started/installing-cypress#Adding-npm-scripts

3. Open Cypress from your project root one of the following ways:
The long way with the full path
```
./node_modules/.bin/cypress open
```
Or with the shortcut using npm bin
```
$(npm bin)/cypress open
```
Or by using npx

note: npx is included with npm > v5.2 or can be installed separately.
```
npx cypress open
```
Or by using yarn
```
yarn run cypress open
```
After a moment, the Cypress Test Runner will launch.

4. Download the nftpage.spec.js file and put it in 

```
/your/project/path/cypress/integration
```


5. Please ensure that Google Chrome is installed in your machine as the test is using Google Chrome

6. Press the file name and the test will run accordingly.

![s](https://user-images.githubusercontent.com/68599772/137433521-d59aaffb-0819-4a6c-8836-df039da7eeda.PNG)
