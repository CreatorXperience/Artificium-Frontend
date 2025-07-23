export default function ResetPasswordEmail({
  firstName,
  resetLink,
}: {
  firstName: string;
  resetLink: string;
}) {
  return (
    <div>
      <h2>Hi {firstName || "there"},</h2>
      <p>You requested a password reset.</p>
      <p>Click the button below to reset your password:</p>
      <a
        href={resetLink}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Reset Password
      </a>
      <p>If you did not request this, you can ignore this email.</p>
    </div>
  );
}
