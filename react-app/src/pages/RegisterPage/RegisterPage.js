import "./RegisterPage.js";

export const RegisterPage = () => {
  return (
    <div id="main-wrapper" class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="row no-gutters">
            <div class="col-lg-6">
              <div class="p-5">
                <div class="mb-5">
                  <h3 class="h4 font-weight-bold text-theme">
                    <i class="bi bi-brightness-high"></i>Solar Energy Monitoring
                  </h3>
                </div>
                <h6 class="h5 mb-0">Welcome new user!</h6>
                <p class="text-muted mt-2 mb-5">
                  Enter your email address and password to register your
                  account.
                </p>
                <form>
                  <div class="form-group mb-4">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="form-group mb-5">
                    <label htmlFor="exampleInputPassword2">Repeat Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword2"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary btn-theme">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-6 d-none d-lg-inline-block">
              <div class="account-block rounded-right">
                <div class="overlay rounded-right"></div>
                <div class="account-testimonial"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
