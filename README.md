## Cypress.io sample codes

###### Following areas are covered:
  * Web UI - (desktop & mobile)
    * ⁨cypress⁩ ▸ ⁨integration⁩ ▸ ⁨demo-mar⁩ ▸ ⁨01_Launch_website.spec.js
    * cypress⁩ ▸ ⁨integration⁩ ▸ ⁨demo-mar⁩ ▸ 03_Mobile_web.spec.js
  
  * Functionality
    * ⁨cypress⁩ ▸ ⁨integration⁩ ▸ ⁨demo-mar⁩ ▸ 02_Search.spec.js
  
  * API calls & Response body validation
    * ⁨cypress⁩ ▸ ⁨integration⁩ ▸ ⁨demo-mar⁩ ▸ 02_Search.spec.js

###### Other important/depdent files:
  * Fixture files:
    * ⁨cypress⁩ ▸ ⁨integration⁩ ▸ fixtures ▸ 02_search.json
    * ⁨cypress⁩ ▸ ⁨integration⁩ ▸ fixtures ▸ 04_getDemo.json
  
  * cypress.json
    * ⁨cypress⁩ ▸ cypress.json

###### Environment used while scripting
* nvm - v0.34.0
* node - v10.15.3
* npm - v6.4.1
* cypress - v3.2.0
* chrome - v72
* VS Code - Editor

###### How to run the tests?
1. Install pre-requisite tools as mentioned above.
2. Download the repository.
3. Launch terminal in the '...cypress/integration/demo-mar' folder.
4. Open the Cypress runner by executing 'npx cypress open' in the Terminal window and select any test run(...spec.js) file to running the corresponding tests.
5. For headless execution, after step(3), execute 'npx cypress run' in the Terminal.
