import "./LoginPage.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const LoginPage = () => {
  return (
    <div id="main-wrapper" class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="card border-0">
            <div class="card-body p-0">
              <div class="row no-gutters">
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="mb-5">
                      <h3 class="h4 font-weight-bold text-theme">
                        <i class="bi bi-brightness-high"></i>Solar Energy
                        Monitoring
                      </h3>
                    </div>

                    <h6 class="h5 mb-0">Welcome back!</h6>
                    <p class="text-muted mt-2 mb-5">
                      Enter your email address and password to access your
                      account.
                    </p>

                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                        />
                      </div>
                      <div class="form-group mb-5">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <button type="submit" class="btn btn-primary btn-theme">
                        Login
                      </button>
                    </form>
                    <p class="text-muted text-center mt-3 mb-0">
                      Don't have an account?
                      <a href="register.html" class="text-primary ml-1">
                        register
                      </a>
                    </p>
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
      </div>
    </div>
  );
};
