export const APPCUES_ACCOUNTS = {
  EU: '', //Add EU Account ID here
  US: '119617' //Add US Account ID here
};

// Bundle domain each region's account loads from (passed to setup() as bundleDomain)
export const APPCUES_BUNDLE_DOMAINS = {
  [APPCUES_ACCOUNTS.EU]: 'https://fast.eu.appcues.com',
  [APPCUES_ACCOUNTS.US]: 'https://fast.appcues.com'
};

export const DEFAULT_ACCOUNT = APPCUES_ACCOUNTS.US;
