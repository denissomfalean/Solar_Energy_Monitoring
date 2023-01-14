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
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              <img
                class="img-account-profile rounded-circle mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <div class="mb-3">
                <label class="small mb-1" for="inputEmail">
                  Email
                </label>
                <input
                  class="form-control"
                  id="inputEmail"
                  type="email"
                  value=""
                  readOnly
                />
              </div>
              <div class="mb-3">
                <label class="small mb-1" for="inputName">
                  Name
                </label>
                <input
                  class="form-control"
                  id="inputName"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div class="mb-3">
                <label class="small mb-1" for="inputAddress">
                  Address
                </label>
                <input
                  class="form-control"
                  id="inputAddress"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">Energy Provider</div>
            <div class="card-body">
              <div class="mb-2">
                <label class="small mb-1" for="inputEnergyName">
                  Name
                </label>
                <input
                  class="form-control"
                  id="inputEnergyName"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div class="mb-2">
                <label class="small mb-1" for="inputEnergyAddress">
                  Address
                </label>
                <input
                  class="form-control"
                  id="inputEnergyAddress"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div class="mb-2">
                <label class="small mb-1" for="inputEnergyRegistration">
                  Registration
                </label>
                <input
                  class="form-control"
                  id="inputEnergyRegistration"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">Contract Status</div>
            <div class="card-body">
              <div class="mb-2">
                <label class="small mb-1" for="inputEnergyFeedIn">
                  Feed-in-Traffic
                </label>
                <input
                  class="form-control"
                  id="inputEnergyFeedIn"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div class="mb-2">
                <label class="small mb-1" for="inputEnergyTraffic">
                  Energy-Traffic
                </label>
                <input
                  class="form-control"
                  id="inputEnergyTraffic"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
              <div class="mb-2">
                <label class="small mb-1" for="inputEnergyStatus">
                  Contract Status
                </label>
                <input
                  class="form-control"
                  id="inputEnergyStatus"
                  type="text"
                  value=""
                  readOnly
                />
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-header">Available Providers</div>
            <div class="card-body">
              <div class="mb-2">
                <label class="small mb-1" for="provider1">
                  Provider
                </label>
                <input
                  class="form-control"
                  id="provider1"
                  type="button"
                  onClick={onAddProvider1}
                  value=""
                  readOnly
                />
              </div>
              <div class="mb-2">
                <label class="small mb-1" for="provider2">
                  Provider
                </label>
                <input
                  class="form-control"
                  id="provider2"
                  type="button"
                  onClick={onAddProvider2}
                  value=""
                  readOnly
                />
              </div>
              <div class="mb-2">
                <label class="small mb-1" for="provider3">
                  Provider
                </label>
                <input
                  id="provider3"
                  class="form-control"
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
