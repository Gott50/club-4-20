let Component;
var SmileyAngry_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M92,156a16,16,0,1,1,16-16A16,16,0,0,1,92,156Zm72-32a16,16,0,1,0,16,16A16,16,0,0,0,164,124Zm72,4A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM85.34,102l36,24a12,12,0,0,0,13.32,0l36-24a12,12,0,0,0-13.32-20L128,101.58,98.66,82a12,12,0,0,0-13.32,20ZM154,167.12a51.1,51.1,0,0,0-52,0,12,12,0,1,0,12,20.76,27.13,27.13,0,0,1,28,0,12,12,0,1,0,12-20.76Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ React.createElement("path", { d: "M92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM171.56,81.34,128,110.39l-43.56-29a8,8,0,1,0-8.88,13.32l48,32a8,8,0,0,0,8.88,0l48-32a8,8,0,0,0-8.88-13.32Zm-15.13,96C148,171.73,139.94,168,128,168s-20,3.73-28.43,9.34a8,8,0,0,0,8.86,13.32C114.93,186.34,120,184,128,184s13.07,2.34,19.57,6.66a8,8,0,1,0,8.86-13.32Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM80,140a12,12,0,1,1,12,12A12,12,0,0,1,80,140Zm78.66,48.43a8,8,0,0,1-11.09,2.23C141.07,186.34,136,184,128,184s-13.07,2.34-19.57,6.66a8,8,0,0,1-8.86-13.32C108,171.73,116.06,168,128,168s20,3.73,28.43,9.34A8,8,0,0,1,158.66,188.43ZM164,152a12,12,0,1,1,12-12A12,12,0,0,1,164,152Zm16.44-57.34-48,32a8,8,0,0,1-8.88,0l-48-32a8,8,0,1,1,8.88-13.32L128,110.39l43.56-29a8,8,0,0,1,8.88,13.32Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M92,150a10,10,0,1,1,10-10A10,10,0,0,1,92,150Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm66-2A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM172.67,83,128,112.79,83.33,83a6,6,0,0,0-6.66,10l48,32a6,6,0,0,0,6.66,0l48-32a6,6,0,1,0-6.66-10Zm-17.35,96c-8.13-5.4-15.88-9-27.32-9s-19.19,3.6-27.32,9a6,6,0,0,0,6.64,10c6.67-4.43,12.19-7,20.68-7s14,2.57,20.68,7a5.94,5.94,0,0,0,3.31,1,6,6,0,0,0,3.33-11Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68,0A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM171.56,81.34,128,110.39l-43.56-29a8,8,0,1,0-8.88,13.32l48,32a8,8,0,0,0,8.88,0l48-32a8,8,0,0,0-8.88-13.32Zm-15.13,96C148,171.73,139.94,168,128,168s-20,3.73-28.43,9.34a8,8,0,0,0,8.86,13.32C114.93,186.34,120,184,128,184s13.07,2.34,19.57,6.66a8,8,0,1,0,8.86-13.32Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M100,140a8,8,0,1,1-8-8A8,8,0,0,1,100,140Zm64-8a8,8,0,1,0,8,8A8,8,0,0,0,164,132Zm64-4A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128ZM173.78,84.67,128,115.19,82.22,84.67a4,4,0,1,0-4.44,6.66l48,32a4,4,0,0,0,4.44,0l48-32a4,4,0,1,0-4.44-6.66Zm-19.57,96c-7.82-5.2-15.27-8.67-26.21-8.67s-18.39,3.47-26.21,8.67a4,4,0,1,0,4.42,6.66C113.2,182.69,119,180,128,180s14.8,2.69,21.79,7.33a4,4,0,1,0,4.42-6.66Z" }))
      ]
    ]);
    const SmileyAngry = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    SmileyAngry.displayName = "SmileyAngry";
    Component = SmileyAngry;
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
  SmileyAngry_default as default
};
