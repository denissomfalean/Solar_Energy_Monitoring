import "./UserProfilePage.css";
import { SideNavigation } from "../../layouts/SideNavigation";
import { useEffect } from "react";
import { getLoggedUser } from "../../services/session/userService.js";
import {
  getSelectedProvider,
  selectProvider,
  getProviders,
  changeProvider,
} from "../../services/session/providerService.js";

export const UserProfilePage = () => {
  const refresh = () => window.location.reload(true);

  const onAddProvider1 = () => {
    let providers = getProviders();
    alert("Provider changed to " + providers[0].name);
    selectProvider(providers[0].name);
    refresh();
  };
  const onAddProvider2 = () => {
    let providers = getProviders();
    alert("Provider changed to " + providers[1].name);
    selectProvider(providers[1].name);
    refresh();
  };
  const onAddProvider3 = () => {
    let providers = getProviders();
    alert("Provider changed to " + providers[2].name);
    selectProvider(providers[2].name);
    refresh();
  };
  useEffect(() => {
    let loggedUser = getLoggedUser();
    document.getElementById("inputEmail").value = loggedUser.email;
    document.getElementById("inputName").value = loggedUser.name;
    document.getElementById("inputAddress").value = loggedUser.address;

    let providers = getProviders();
    document.getElementById("provider1").value = providers[0].name;
    document.getElementById("provider2").value = providers[1].name;
    document.getElementById("provider3").value = providers[2].name;

    let selectedProvider = getSelectedProvider();

    if (selectedProvider === null) {
      alert("No provider is selected!");
    } else {
      document.getElementById("inputEnergyName").value = selectedProvider.name;
      document.getElementById("inputEnergyAddress").value =
        selectedProvider.address;

      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let currentDate = `${day}-${month}-${year}`;

      document.getElementById("inputEnergyRegistration").value = currentDate;

      document.getElementById("inputEnergyFeedIn").value =
        selectedProvider.feedInTraffic;
      document.getElementById("inputEnergyTraffic").value =
        selectedProvider.energyTraffic;
      document.getElementById("inputEnergyStatus").value = "ACTIVE";
    }
  }, []);

  return (
    <div>
      <SideNavigation />
      <div className={"content flex justify-content-center align-items-center"}>
        <hr />
        <div className="row">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputEmail">
                  Email
                </label>
                <input
                  className="form-control"
                  id="inputEmail"
                  type="email"
                  value=""
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputName">
                  Name
                </label>
                <input
                  className="form-control"
                  id="inputName"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="small mb-1" htmlFor="inputAddress">
                  Address
                </label>
                <input
                  className="form-control"
                  id="inputAddress"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">Energy Provider</div>
            <div className="card-body">
              <div className="mb-2">
                <label className="small mb-1" htmlFor="inputEnergyName">
                  Name
                </label>
                <input
                  className="form-control"
                  id="inputEnergyName"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div className="mb-2">
                <label className="small mb-1" htmlFor="inputEnergyAddress">
                  Address
                </label>
                <input
                  className="form-control"
                  id="inputEnergyAddress"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div className="mb-2">
                <label className="small mb-1" htmlFor="inputEnergyRegistration">
                  Registration
                </label>
                <input
                  className="form-control"
                  id="inputEnergyRegistration"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">Contract Status</div>
            <div className="card-body">
              <div className="mb-2">
                <label className="small mb-1" htmlFor="inputEnergyFeedIn">
                  Feed-in-Traffic
                </label>
                <input
                  className="form-control"
                  id="inputEnergyFeedIn"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div className="mb-2">
                <label className="small mb-1" htmlFor="inputEnergyTraffic">
                  Energy-Traffic
                </label>
                <input
                  className="form-control"
                  id="inputEnergyTraffic"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div className="mb-2">
                <label className="small mb-1" htmlFor="inputEnergyStatus">
                  Contract Status
                </label>
                <input
                  className="form-control"
                  id="inputEnergyStatus"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header">Available Providers</div>
            <div className="card-body">
              <div className="mb-2">
                <label className="small mb-1" htmlFor="provider1">
                  Provider
                </label>
                <input
                  className="form-control"
                  id="provider1"
                  type="button"
                  onClick={onAddProvider1}
                  value=""
                  readOnly
                />
              </div>
              <div className="mb-2">
                <label className="small mb-1" htmlFor="provider2">
                  Provider
                </label>
                <input
                  className="form-control"
                  id="provider2"
                  type="button"
                  onClick={onAddProvider2}
                  value=""
                  readOnly
                />
              </div>
              <div className="mb-2">
                <label className="small mb-1" htmlFor="provider3">
                  Provider
                </label>
                <input
                  id="provider3"
                  className="form-control"
                  type="button"
                  onClick={onAddProvider3}
                  value=""
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
