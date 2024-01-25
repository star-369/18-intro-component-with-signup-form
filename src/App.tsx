import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const SignUpSchema = z.object({
  firstName: z.string().min(1, { message: "First Name cannot be empty" }),
  lastName: z.string().min(1, { message: "Last Name cannot be empty" }),
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .email({ message: "Looks like this is not an email" }),
  password: z
    .string()
    .min(1, { message: "Password cannot be empty" })
    .min(8, { message: "Password must be atleast 8 characters" }),
});

type SignUpType = z.infer<typeof SignUpSchema>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: SignUpType) => {
    console.log(data);
  };

  return (
    <>
      <main className="form-signup">
        <section className="form-signup__title">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>

        <section className="form-signup__content">
          <div className="form-signup__content__header">
            <p>
              <span>Try it free 7 days</span> then 120/mo. thereafter
            </p>
          </div>

          <form
            className="form-signup__content__body"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <span className="inputContainer">
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  {...register("firstName")}
                  className={`form-signup__content__body--${
                    errors.firstName ? "danger" : "default"
                  }`}
                />
                <label htmlFor="fname">
                  {errors.firstName && (
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle fill="#FF7979" cx="12" cy="12" r="12" />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                        />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  )}
                </label>
              </span>
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            <div>
              <span>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  {...register("lastName")}
                  className={`form-signup__content__body--${
                    errors.lastName ? "danger" : "default"
                  }`}
                />
                <label htmlFor="lname">
                  {errors.lastName && (
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle fill="#FF7979" cx="12" cy="12" r="12" />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                        />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  )}
                </label>
              </span>
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            <div>
              <span>
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  {...register("email")}
                  className={`form-signup__content__body--${
                    errors.email ? "danger" : "default"
                  }`}
                />
                <label htmlFor="email">
                  {errors.lastName && (
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle fill="#FF7979" cx="12" cy="12" r="12" />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                        />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  )}
                </label>
              </span>
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <span>
                <input
                  type="text"
                  placeholder="Password"
                  id="password"
                  {...register("password")}
                  className={`form-signup__content__body--${
                    errors.password ? "danger" : "default"
                  }`}
                />{" "}
                <label htmlFor="password">
                  {errors.password && (
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle fill="#FF7979" cx="12" cy="12" r="12" />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                        />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  )}
                </label>
              </span>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
            <p>
              By clicking the button, you are agreeing to our
              <span> Terms and Services</span>
            </p>
          </form>
        </section>
      </main>

      <footer style={{ display: "none" }}>
        <p className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  );
}
