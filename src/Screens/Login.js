import "./Login.css";

const Login = () => {
  return (
    <div className="login-div">
      <h1 className="login-heading">Login</h1>
      <form action="">
        <div class="form__group field">
          <input
            type="input"
            class="form__field"
            placeholder="Email"
            name="name"
            id="name"
            required
          />
          <label for="name" class="form__label">
            Email
          </label>
        </div>
        <div class="form__group field">
          <input
            type="number"
            class="form__field"
            placeholder="Email"
            name="name"
            id="name"
            required
          />
          <label for="name" class="form__label">
            OTP
          </label>
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
