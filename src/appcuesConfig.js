export const APPCUES_ACCOUNTS = {
  EU: '', //Add EU Account ID here
  US: '' //Add US Account ID here
};

export const APPCUES_URLS = {
  [APPCUES_ACCOUNTS.EU]: `https://fast.eu.appcues.com/${APPCUES_ACCOUNTS.EU}.js`,
  [APPCUES_ACCOUNTS.US]: `https://fast.appcues.com/${APPCUES_ACCOUNTS.US}.js`
};

export const DEFAULT_ACCOUNT = APPCUES_ACCOUNTS.US;