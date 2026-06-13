const readlineSync = require('readline-sync');

function subnetHostChecker() {
  const hosts = readlineSync.question('Enter number of hosts needed: ');
  const numHosts = Number(hosts);

  if (Number.isNaN(numHosts) || numHosts <= 0) {
    console.log('Please enter a valid positive number.');
    return;
  }

  let bits = 0;
  let totalHosts = 2;

  while (totalHosts - 2 < numHosts) {
    bits++;
    totalHosts = Math.pow(2, bits);
  }

  console.log(`You need ${bits} host bits.`);
  console.log(`That gives ${totalHosts - 2} usable hosts.`);
}

function computeEnvironmentSelector() {
  const environments = ['Development', 'Testing', 'Staging', 'Production'];
  const choice = readlineSync.keyInSelect(environments, 'Choose a compute environment:');

  if (choice === -1) {
    console.log('No selection made.');
    return;
  }

  console.log(`You selected: ${environments[choice]}`);
}

function mainMenu() {
  while (true) {
    console.log('\nInfrastructure Decision Tool');
    console.log('1. Subnet Host Checker');
    console.log('2. Compute Environment Selector');
    console.log('3. Exit');

    const option = readlineSync.question('Choose an option: ');

    if (option === '1') {
      subnetHostChecker();
    } else if (option === '2') {
      computeEnvironmentSelector();
    } else if (option === '3') {
      console.log('Goodbye!');
      break;
    } else {
      console.log('Invalid option. Try again.');
    }
  }
}

mainMenu();
console.log("test");

