const Register = () => {
  return (
    <div className="login-div">
      <h1 className="login-heading">Sign up</h1>
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
        <div class="form__group field">
          <input
            type="text"
            class="form__field"
            placeholder="Email"
            name="name"
            id="name"
            required
          />
          <label for="name" class="form__label">
            Device ID
          </label>
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Register;
