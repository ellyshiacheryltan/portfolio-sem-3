const MenuSvg = ({ setOpenNavigation }) => {
  return (
    <svg className="overflow-visible w-[60px] h-[60px]">
      <rect
        className="transition-all origin-center fill-color-2 w-[27px] h-[2px]"
        y="19"
        x="17"
        transform={`rotate(${setOpenNavigation ? "45" : "0"}) translate(${setOpenNavigation ? "-0.5" : "0"}, ${setOpenNavigation ? "12" : "0"})`}
      />
      <rect
        className="transition-all origin-center fill-color-2 w-[27px] h-[2px]"
        y="29"
        x="17"
        opacity={setOpenNavigation ? "0" : "1"}
      />
      <rect
        className="transition-all origin-center fill-color-2 w-[27px] h-[2px]"
        y="39"
        x="17"
        transform={`rotate(${setOpenNavigation ? "-45" : "0"}) translate(${setOpenNavigation ? "-2" : "0"}, ${setOpenNavigation ? "-10" : "0"})`}
      />
    </svg>
  );
};

export default MenuSvg;
