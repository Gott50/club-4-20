let Component;
var NumberOne_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M148,48V208a12,12,0,0,1-24,0V69.19l-21.83,13.1A12,12,0,0,1,89.83,61.71l40-24A12,12,0,0,1,148,48Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M144,48V208a8,8,0,0,1-16,0V62.13L100.12,78.86a8,8,0,1,1-8.24-13.72l40-24A8,8,0,0,1,144,48Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM144,184a8,8,0,0,1-16,0V84.94L107.58,95.16a8,8,0,1,1-7.16-14.32l32-16A8,8,0,0,1,144,72Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M142,48V208a6,6,0,0,1-12,0V58.6L99.09,77.14a6,6,0,0,1-6.18-10.29l40-24A6,6,0,0,1,142,48Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M144,48V208a8,8,0,0,1-16,0V62.13L100.12,78.86a8,8,0,1,1-8.24-13.72l40-24A8,8,0,0,1,144,48Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M140,48V208a4,4,0,0,1-8,0V55.06L98.06,75.43a4,4,0,0,1-4.12-6.86l40-24A4,4,0,0,1,140,48Z" }))
      ]
    ]);
    const NumberOne = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    NumberOne.displayName = "NumberOne";
    Component = NumberOne;
  }
  return Component;
};
const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      slots: [],
      annotations: { framerContractVersion: "1" }
    },
    __FramerMetadata__: { type: "variable" }
  }
};
export {
  __FramerMetadata__,
  NumberOne_default as default
};
