import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth></Button>
        </div>
      </div>
    </section>
  );

  return (
    <section className="flex flex-row max-md:flex-col justify-between items-center">
      <div>
        <h3 className="text-4xl font-palanquin font-bold max-w-sm">
          Sign Up from <span className="text-coral-red">Updates</span> &
          Newsletter
        </h3>
      </div>
      <div className="flex flex-row border border-black rounded-full py-3 px-3">
        <input className="px-8" type="text" />
        <Button label="Sign Up"></Button>
      </div>
    </section>
  );
};

export default Subscribe;
