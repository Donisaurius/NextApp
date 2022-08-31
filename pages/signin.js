import PageLayout from "./PageLayout";
import SignInForm from "../components/SignInForm";
import LoginLayout from "../shared/LoginLayout";

const formStyles = {
  background: "#D9D9D9",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "24px",
};

export default function signin() {
  return (
    <PageLayout title="Welcome | Sign in" display="block">
      <LoginLayout>
        <SignInForm formStyles={formStyles} />
      </LoginLayout>
    </PageLayout>
  );
}
