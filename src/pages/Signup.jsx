import { Link } from "react-router-dom";
import AuthLayout, { Field } from "../components/AuthLayout";
import { Button } from "../components/ui";
import { useForm } from "../hooks";

const validate = (v) => ({
  ...(!v.name.trim() && { name: "Enter your full name" }),
  ...(!/^\S+@\S+\.\S+$/.test(v.email) && { email: "Enter a valid email address" }),
  ...(v.password.length < 8 && { password: "Use at least 8 characters" }),
});

export default function Signup() {
  const { bind, submit, done } = useForm({ name: "", email: "", password: "" }, validate);
  return (
    <AuthLayout
      heading="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account" title={<>Welcome to<br />ByteSpace</>}
      footer={<>Already have an account? <Link to="/login">Login</Link></>}
    >
      <form className="auth-form" onSubmit={submit} noValidate>
        <Field label="Full Name" placeholder="Jamie Davis" autoComplete="name" {...bind("name")} />
        <Field label="Email" type="email" placeholder="designer@example.com" autoComplete="email" {...bind("email")} />
        <Field label="Password" type="password" placeholder="********" autoComplete="new-password" {...bind("password")} />
        <Button className="lime continue">Continue</Button>
        {done && <p className="ok" role="status">Account details look good — connect this form to your backend to finish sign up.</p>}
      </form>
    </AuthLayout>
  );
}
