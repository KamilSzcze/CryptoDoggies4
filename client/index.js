import data from '../build/contracts/DoggiesContract.json' assert { type: "json" };


var account
var contractInstance

async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
}

async function loadBlockchainData() {

  const web3 = window.web3

  //gets all user accounts and displays the current user on the UI (navbar)
  var accounts = await web3.eth.getAccounts()
  
  const networkId = await web3.eth.net.getId()
  const networkData = data.networks[networkId]
  if(networkData) {
      
    contractInstance = new web3.eth.Contract(data.abi, networkData.address, {from: account})
     
  } else {
      window.alert('contract not deployed to detected network.')
      
  }
  
}


loadWeb3();
loadBlockchainData()
