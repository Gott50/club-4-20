let Component;
var YinYang_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20ZM44,128a84.09,84.09,0,0,1,84-84,36,36,0,0,1,0,72,60,60,0,0,0-58.81,71.9A83.73,83.73,0,0,1,44,128Zm84,84a36,36,0,0,1,0-72,60,60,0,0,0,58.81-71.9A83.94,83.94,0,0,1,128,212Zm16-36a16,16,0,1,1-16-16A16,16,0,0,1,144,176ZM112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M224,128a96,96,0,0,1-96,96,48,48,0,0,1,0-96,48,48,0,0,0,0-96A96,96,0,0,1,224,128Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88,40,40,0,0,1,0,80A56,56,0,0,0,77.39,200,88,88,0,0,1,40,128Zm88,88a40,40,0,0,1,0-80,56,56,0,0,0,50.61-79.95A88,88,0,0,1,128,216Zm12-40a12,12,0,1,1-12-12A12,12,0,0,1,140,176ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M140,80a12,12,0,1,1-12-12A12,12,0,0,1,140,80Zm92,48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-92,48a12,12,0,1,0-12,12A12,12,0,0,0,140,176Zm32-92a44.05,44.05,0,0,0-44-44A88,88,0,0,0,81.09,202.42,52,52,0,0,1,128,128,44.05,44.05,0,0,0,172,84Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM38,128a90.1,90.1,0,0,1,90-90,42,42,0,0,1,0,84,54,54,0,0,0-44.88,84A90.06,90.06,0,0,1,38,128Zm90,90a42,42,0,0,1,0-84,54,54,0,0,0,44.88-84A90,90,0,0,1,128,218Zm12-42a12,12,0,1,1-12-12A12,12,0,0,1,140,176ZM118,80a10,10,0,1,1,10,10A10,10,0,0,1,118,80Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM40,128a88.1,88.1,0,0,1,88-88,40,40,0,0,1,0,80A56,56,0,0,0,77.39,200,88,88,0,0,1,40,128Zm88,88a40,40,0,0,1,0-80,56,56,0,0,0,50.61-79.95A88,88,0,0,1,128,216Zm12-40a12,12,0,1,1-12-12A12,12,0,0,1,140,176ZM116,80a12,12,0,1,1,12,12A12,12,0,0,1,116,80Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28ZM36,128a92.1,92.1,0,0,1,92-92,44,44,0,0,1,0,88,52,52,0,0,0-37.44,88A92.14,92.14,0,0,1,36,128Zm92,92a44,44,0,0,1,0-88,52,52,0,0,0,37.44-88A92,92,0,0,1,128,220Zm8-44a8,8,0,1,1-8-8A8,8,0,0,1,136,176ZM120,80a8,8,0,1,1,8,8A8,8,0,0,1,120,80Z" }))
      ]
    ]);
    const YinYang = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    YinYang.displayName = "YinYang";
    Component = YinYang;
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
  YinYang_default as default
};
