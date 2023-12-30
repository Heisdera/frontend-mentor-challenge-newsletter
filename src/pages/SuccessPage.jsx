import SuccessMessage from "../components/SuccessMessage";
import DismissButton from "../components/DismissButton";

function SuccessPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-white md:h-0">
      <div className="mx-5 flex flex-col justify-between rounded-3xl md:h-[440px] md:w-[430px] md:bg-white md:px-11 md:py-10">
        <SuccessMessage />
        <DismissButton />
      </div>
    </div>
  );
}

export default SuccessPage;
