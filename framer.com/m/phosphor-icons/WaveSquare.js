let Component;
var WaveSquare_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M244,128v56a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V84H36v44a12,12,0,0,1-24,0V72A12,12,0,0,1,24,60H128a12,12,0,0,1,12,12V172h80V128a12,12,0,0,1,24,0Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,72v56H24V72Zm0,56v56H232V128Z", opacity: "0.2" }), /* @__PURE__ */ React.createElement("path", { d: "M240,128v56a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V80H32v48a8,8,0,0,1-16,0V72a8,8,0,0,1,8-8H128a8,8,0,0,1,8,8V176h88V128a8,8,0,0,1,16,0Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-8,128a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V96H64v32a8,8,0,0,1-16,0V88a8,8,0,0,1,8-8h72a8,8,0,0,1,8,8v72h56V128a8,8,0,0,1,16,0Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M238,128v56a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V78H30v50a6,6,0,0,1-12,0V72a6,6,0,0,1,6-6H128a6,6,0,0,1,6,6V178h92V128a6,6,0,0,1,12,0Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M240,128v56a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V80H32v48a8,8,0,0,1-16,0V72a8,8,0,0,1,8-8H128a8,8,0,0,1,8,8V176h88V128a8,8,0,0,1,16,0Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M236,128v56a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V76H28v52a4,4,0,0,1-8,0V72a4,4,0,0,1,4-4H128a4,4,0,0,1,4,4V180h96V128a4,4,0,0,1,8,0Z" }))
      ]
    ]);
    const WaveSquare = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    WaveSquare.displayName = "WaveSquare";
    Component = WaveSquare;
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
  WaveSquare_default as default
};
