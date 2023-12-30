import MobileSvg from "../components/MobileSvg";
import Form from "../components/Form";
import DesktopSvg from "../components/DesktopSvg";

function SignUpPage() {
  return (
    <main className="flex flex-col gap-3 bg-white text-dark-slate-grey md:flex-row md:rounded-3xl">
      <MobileSvg />
      <Form />
      <DesktopSvg />
    </main>
  );
}

export default SignUpPage;
