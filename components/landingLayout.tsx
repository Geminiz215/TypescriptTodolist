import clsx from "clsx";

type NewLandingLayoutProp = {
  children: React.ReactNode;
  className: string;
};

const NewLandingLayout = ({ children, className }: NewLandingLayoutProp) => {
  return (
    <div className={clsx(`flex flex-col items-center w-screen`, className)}>
      {children}
    </div>
  );
};

export default NewLandingLayout;
