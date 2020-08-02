const { utf8ToHex } = require('web3-utils')
const { injectWeb3, injectArtifacts, pct16, bn, ONE_DAY } = require('@aragon/contract-helpers-test')

const createActions = require('./src/create-actions')
const grantPermissions = require('./src/grant-permissions')
const setupDisputableVoting = require('./src/setup-disputable-voting')

const config = {
  dao:            '0xa6e4b08981AE324F16d6be39362f6dE2dA22882A',   // agreement3
  voting:         '0x0284abf70c63aab1085f5f4489953d6f494e4596',   // DAO Voting app
  tokenManager:   '0x6dcc07270be9898c32de0cdd252fbc3c32ebd088',   // DAO Token Manager app
  arbitrator:     '0x52180af656a1923024d1accf1d827ab85ce48878',   // Aragon Court staging instance
  stakingFactory: '0x07429001eeA415E967C57B8d43484233d57F8b0B',   // Real StakingFactory instance on Rinkeby
  appFeesCashier: '0x0000000000000000000000000000000000000000',   // None
  feeToken:       '0x3af6b2f907f0c55f279e0ed65751984e6cdc4a42',   // DAI mock token used in Aragon Court staging
  agreement: {
    title:        'Agreement Test v3',
    content:      utf8ToHex('ipfs:QmdLu3XXT9uUYxqDKXXsTYG77qNYNPbhzL27ZYT9kErqcZ'),
    base:         '0xAC7bA031E2A598A01d823aa96fB25b6662721de6',   // Agreement base v4.0.0
    appId:        '0x34c62f3aec3073826f39c2c35e9a1297d9dbf3cc77472283106f09eee9cf47bf',
  },
  disputableVoting: {
    token:        '0x991f49aad101db17ff02d8d867a880703bface62',   // DAO token
    base:         '0x70d2ca5ce76336cb5963eCeC0fC06Cc840Ef5D9e',   // Disputable Voting base v4.0.0
    appId:        '0x705b5084c67966bb8e4640b28bab7a1e51e03d209d84e3a04d2a4f7415f93b34',
    duration:             ONE_DAY * 5,
    support:              pct16(50),
    minQuorum:            pct16(20),
    executionDelay:       0,
    overruleWindow:       ONE_DAY * 2,
    quietEndingPeriod:    ONE_DAY,
    quietEndingExtension: ONE_DAY / 2,
    actionCollateral:     bn(0),
    challengeCollateral:  bn(0),
    challengeDuration:    ONE_DAY * 3,
  },
}

async function deploy() {
  const options = await loadConfig(config)
  await grantPermissions(options)
  const apps = await setupDisputableVoting(options)

  options.agreement.app = apps.agreement
  options.disputableVoting.app = apps.disputableVoting
  await createActions(options)
}

async function loadConfig(config) {
  const options = config
  options.owner = await getSender()
  options.dao = await getInstance('Kernel', options.dao)
  options.acl = await getInstance('ACL', await options.dao.acl())
  options.agreement.base = await getInstance('Agreement', options.agreement.base)
  options.disputableVoting.base = await getInstance('DisputableVoting', options.disputableVoting.base)
  options.feeToken = await getInstance('MiniMeToken', options.feeToken)
  options.arbitrator = await getInstance('IArbitrator', options.arbitrator)
  options.stakingFactory = await getInstance('StakingFactory', options.stakingFactory)
  options.aragonAppFeesCashier = { address: options.appFeesCashier }
  return options
}

async function getSender() {
  const accounts = await web3.eth.getAccounts()
  return accounts[0]
}

async function getInstance(contract, address) {
  return artifacts.require(contract).at(address)
}

module.exports = cb => {
  injectWeb3(web3)
  injectArtifacts(artifacts)
  deploy().then(cb).catch(cb)
}
