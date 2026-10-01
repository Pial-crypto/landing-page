import { Link } from "react-router-dom";
import AuthLayout, { Field, SocialLogin } from "../components/AuthLayout";
import { Button } from "../components/ui";
import { useForm } from "../hooks";

const validate = (v) => ({
  ...(!/^\S+@\S+\.\S+$/.test(v.email) && { email: "Enter a valid email address" }),
  ...(!v.password && { password: "Enter your password" }),
});

export default function Login() {
  const { bind, submit, done } = useForm({ email: "", password: "" }, validate);
  return (
    <AuthLayout
      heading="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In" title="Welcome Back"
      footer={<>New user? <Link to="/signup">Create an account</Link></>}
    >
      <form className="auth-form" onSubmit={submit} noValidate>
        <Field label="Email" type="email" placeholder="designer@example.com" autoComplete="email" {...bind("email")} />
        <Field label="Password" type="password" placeholder="********" autoComplete="current-password" {...bind("password")} />
        <Button className="lime continue">Sign In</Button>
        {done && <p className="ok" role="status">Looks good — connect this form to your backend to finish sign in.</p>}
      </form>
      <SocialLogin />
    </AuthLayout>
  );
}
