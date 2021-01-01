# backend-experts-job
### Project tools
- [nodejs](https://nodejs.org/en/)
- [expressjs](https://expressjs.com/)
- [graphql](https://graphql.org/) `express-graphql`
- javascript
### Run backend project
1. Set the **.env** file with next variables
```sh
BACKEND_PORT=4000
BACKEND_HOST=localhost
DB_PORT=27017
DB_HOST=localhost
DB_NAME=ExpertsJob
```
2. Install all dependences 
```bash
yarn install
```
3. Run project
```bash
yarn start
```
4. Open the browser and go to `http://localhost:4000/graphql`
### Run test-integrations
1. Set the **.env** file with next variables
```sh
BACKEND_PORT=4000
BACKEND_HOST=localhost
DB_PORT=27017
DB_HOST=localhost
DB_NAME=ExpertsJob_TEST
```
2. Install all dependences 
```bash
yarn install
```
3. Run project
```bash
yarn start
```
4. Run tests integration on another console
```bash
yarn test:integration
```
