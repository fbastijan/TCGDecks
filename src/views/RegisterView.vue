<template>
  <div>
    <div class="row mt-5">
      <div class="col"></div>
      <div class="col">
        <div
          class="card custom-card shadow bg-dark"
          style="border-radius: 25px"
        >
          <h5 class="card-header" style="color: #eeeeee">Register</h5>
          <div class="card-body mx-5">
            <div class="row d-flex align-items-center">
              <div class="col">
                <h1 class="card-title display-5 mb-5" style="color: #eeeeee">
                  Započnimo!
                </h1>

                <div class="form-floating mb-3 reg-form">
                  <input
                    type="email"
                    class="form-control reg-form bg-dark"
                    placeholder="name@example.com"
                  />
                  <label>Email address</label>
                </div>
                <div class="form-floating mb-3 reg-form">
                  <input
                    type="username"
                    class="form-control reg-form bg-dark"
                    placeholder="username"
                  />
                  <label>Username</label>
                </div>
                <div class="form-floating mb-3 reg-form bg-dark">
                  <input
                    type="password"
                    class="form-control reg-form bg-dark"
                    placeholder="Password"
                  />
                  <label>Password</label>
                </div>
                <div class="form-floating reg-form">
                  <input
                    type="password"
                    class="form-control reg-form bg-dark"
                    placeholder="Password"
                  />
                  <label>Confirm Password</label>
                </div>

                <a
                  href="#"
                  class="btn custom-btn-2 btn btn-outline-danger btn-lg my-3 form-button"
                  >Register</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.reg-form {
  border-color: #eeeeee;
  color: #eeeeee;
}
.form-button:not(:hover) {
  border-color: #eeeeee;
  color: #eeeeee;
}
.form-button:hover {
  background-color: #eeeeee;
  color: #222831;
  border-color: #eeeeee;
}
</style>
