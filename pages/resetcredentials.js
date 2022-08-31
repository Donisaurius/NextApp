import LoginLayout from "../shared/LoginLayout";
import PageLayout from "./PageLayout";
import ResetCredentialsLogin from "../components/ResetCredentialsLogin";

const formStyles = {
  background: "#D9D9D9",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: "24px",
  height: "348px",
};

export default function resetcredentials() {
  return (
    <PageLayout title="Reset credentials" display="none">
      <LoginLayout>
        <ResetCredentialsLogin
          innerTitle="Ingrese su correo para poder recuperar sus accesos"
          formStyles={formStyles}
        />
      </LoginLayout>
    </PageLayout>
  );
}
