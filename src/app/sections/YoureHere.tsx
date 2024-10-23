import Blue from "@/app/assets/Blue.svg";
import Green from "@/app/assets/Green.svg";

export const YoureHere = () => {
  return (
    <section className="relative py-24 min-h-screen">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-lg text-left tracking-tighter pb-3">
              Hey! I am
            </h1>
            <h2 className="text-6xl whitespace-normal break-words text-left tracking-tight leading-none">
              Pablo <br />
              Leon
            </h2>
            <p className="text-xl bg-[linear-gradient(to_right,#fea55f,#E99287,#C98BDF,#43D9AD,#C98BDF,#E99287,#FEA55F)] [background-size:200%] text-transparent bg-clip-text text-left pt-3">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full z-0">
        <Blue className="absolute inset-0 w-full h-full object-cover" />
        <Green className="absolute inset-0 w-full h-full object-cover" />
      </div>
    </section>
  );
};
