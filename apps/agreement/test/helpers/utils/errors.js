const ARAGON_OS_ERRORS = {
  ERROR_AUTH_FAILED: 'APP_AUTH_FAILED',
  ERROR_ALREADY_INITIALIZED: 'INIT_ALREADY_INITIALIZED'
}

const STAKING_ERRORS = {
  ERROR_SENDER_NOT_ALLOWED: 'STAKING_SENDER_NOT_ALLOWED',
  ERROR_TOKEN_DEPOSIT_FAILED: 'STAKING_TOKEN_DEPOSIT_FAIL',
  ERROR_AMOUNT_ZERO: 'STAKING_AMOUNT_ZERO',
  ERROR_NOT_ENOUGH_BALANCE: 'STAKING_NOT_ENOUGH_BALANCE',
  ERROR_NOT_ENOUGH_ALLOWANCE: 'STAKING_NOT_ENOUGH_ALLOWANCE',
}

const AGREEMENT_ERRORS = {
  ERROR_SENDER_NOT_ALLOWED: 'AGR_SENDER_NOT_ALLOWED',
  ERROR_SIGNER_ALREADY_SIGNED: 'AGR_SIGNER_ALREADY_SIGNED',
  ERROR_SIGNER_MUST_SIGN: 'AGR_SIGNER_MUST_SIGN',
  ERROR_ACTION_DOES_NOT_EXIST: 'AGR_ACTION_DOES_NOT_EXIST',
  ERROR_CHALLENGE_DOES_NOT_EXIST: 'AGR_CHALLENGE_DOES_NOT_EXIST',
  ERROR_TOKEN_DEPOSIT_FAILED: 'AGR_TOKEN_DEPOSIT_FAILED',
  ERROR_TOKEN_TRANSFER_FAILED: 'AGR_TOKEN_TRANSFER_FAILED',
  ERROR_CANNOT_CLOSE_ACTION: 'AGR_CANNOT_CLOSE_ACTION',
  ERROR_CANNOT_SETTLE_ACTION: 'AGR_CANNOT_SETTLE_ACTION',
  ERROR_CANNOT_DISPUTE_ACTION: 'AGR_CANNOT_DISPUTE_ACTION',
  ERROR_CANNOT_RULE_ACTION: 'AGR_CANNOT_RULE_ACTION',
  ERROR_CANNOT_SUBMIT_EVIDENCE: 'AGR_CANNOT_SUBMIT_EVIDENCE',
  ERROR_SUBMITTER_FINISHED_EVIDENCE: 'AGR_SUBMITTER_FINISHED_EVIDENCE',
  ERROR_CHALLENGER_FINISHED_EVIDENCE: 'AGR_CHALLENGER_FINISHED_EVIDENCE',
  ERROR_STAKING_FACTORY_NOT_CONTRACT: 'AGR_STAKING_FACTORY_NOT_CONTRACT',
  ERROR_ARBITRATOR_NOT_CONTRACT: 'AGR_ARBITRATOR_NOT_CONTRACT',
  ERROR_APP_FEE_CASHIER_NOT_CONTRACT: 'AGR_APP_FEE_CASHIER_NOT_CONTRACT',
  ERROR_ARBITRATOR_FEE_APPROVAL_FAILED: 'AGR_ARBITRATOR_FEE_APPROVAL_FAIL',
  ERROR_ACL_SIGNER_MISSING: 'AGR_ACL_ORACLE_SIGNER_MISSING',
  ERROR_ACL_SIGNER_NOT_ADDRESS: 'AGR_ACL_ORACLE_SIGNER_NOT_ADDR',
  ERROR_SENDER_CANNOT_CHALLENGE_ACTION: 'AGR_SENDER_CANT_CHALLENGE_ACTION',
  ERROR_COLLATERAL_REQUIREMENT_DOES_NOT_EXIST: 'AGR_COL_REQ_DOES_NOT_EXIST',
  ERROR_DISPUTABLE_APP_NOT_ACTIVE: 'AGR_DISPUTABLE_NOT_ACTIVE',
  ERROR_DISPUTABLE_APP_ALREADY_EXISTS: 'AGR_DISPUTABLE_ALREADY_EXISTS',
  ERROR_INVALID_APP_FEE_AMOUNT: 'AGR_INVALID_APP_FEE_AMOUNT'
}

const DISPUTABLE_ERRORS = {
  ERROR_CANNOT_SUBMIT: 'DISPUTABLE_CANNOT_SUBMIT',
  ERROR_AGREEMENT_STATE_INVALID: 'DISPUTABLE_AGREEMENT_STATE_INVAL'
}

module.exports = {
  ARAGON_OS_ERRORS,
  AGREEMENT_ERRORS,
  STAKING_ERRORS,
  DISPUTABLE_ERRORS
}
