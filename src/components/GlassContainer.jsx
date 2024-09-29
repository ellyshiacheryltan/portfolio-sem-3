const GlassContainer = ({ colored, children }) => {
  const classes = `inline-flex w-auto align-center rounded-[1rem] bg-n-2 backdrop-blur-[3px] shadow-dropShadow hover:bg-n-3 ${
    colored ? "border-[.5px] border-color-5" : "border-[1px] border-color-6"
  }`;
  const spanClasses =
    "absolute top-0 left-0 w-[100%] h-[100%] rounded-[1rem] shadow-inner z-10";

  return (
    <div className={classes}>
      {colored && <span className={spanClasses}></span>}
      {children}
    </div>
  );
};

export default GlassContainer;
