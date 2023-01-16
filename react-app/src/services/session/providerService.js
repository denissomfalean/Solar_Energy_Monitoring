import {
  SessionStorageKeys,
  getSessionItem,
  setSessionItem,
  UserRoles,
} from "./Utils";

export function getSelectedProvider() {
  return getSessionItem(SessionStorageKeys.PROVIDER);
}

export function changeProvider(index) {
  console.log(index);
}

export function getProviders() {
  return getSessionItem(SessionStorageKeys.PROVIDERS);
}

export function selectProvider(name) {
  let providers = getSessionItem(SessionStorageKeys.PROVIDERS);

  if (providers === null) {
    alert("No providers are avilable!");
    return;
  }

  let selectedProvider = providers.find((provider) => provider.name === name);

  if (selectedProvider === undefined) {
    alert("No providers are avilable!");
    return;
  }

  setSessionItem(SessionStorageKeys.PROVIDER, selectedProvider);
  return;
}

export function addDefaultProviders() {
  let providers = [
    {
      name: "Enerco Corp",
      address: "San Francisco Houston",
      feedInTraffic: "2.9 RON/kW",
      energyTraffic: "3.8 RON/kW",
    },
    {
      name: "ElectricCorp",
      address: "USA, Lousiana, Friday Street",
      feedInTraffic: "1.9 RON/kW",
      energyTraffic: "2.3 RON/kW",
    },
    {
      name: "Legitimate Company",
      address: "Fraud Prices Street, Wakanda",
      feedInTraffic: "10.9 RON/kW",
      energyTraffic: "0.8 RON/kW",
    },
  ];
  setSessionItem(SessionStorageKeys.PROVIDERS, providers);
}
