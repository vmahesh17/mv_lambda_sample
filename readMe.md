#Introduction
Project to integrate Playwright typescript with Lambdatest service

#Installation process
1. Run the below commands to install playwright and their browsers
    npx playwright install

2. Install playwright dependencies, run the below command
    npx playwright install-deps

3. Run the below commands to add Lambda test username and Access key

    For Mac
    export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
    export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"

    For Windows
    set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
    set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"

4. To Run playwright tests, use the below command
    npx playwright test

5. To install HyperExecute CLI, run the below commands
    wget https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute
   #after successful installation hyperexecute file will be downloaded can seen under the project
   
6. Change user permissions using below command to set hyperexecute
    chmod u+x hyperexecute

7. Run the below command to run the test suites against hyperexecute
    ./hyperexecute --user=$LT_USERNAME --key=$LT_ACCESS_KEY --config .autosplit.yaml --download-artifact --force-clean-artifacts
