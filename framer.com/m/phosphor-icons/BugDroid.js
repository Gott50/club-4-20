let Component;
var BugDroid_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M197.35,43.62l11.14-11.13a12,12,0,0,0-17-17L179.34,27.69a91.84,91.84,0,0,0-102.68,0L64.49,15.51a12,12,0,0,0-17,17L58.65,43.62A91.58,91.58,0,0,0,36,104v40a92,92,0,0,0,184,0V104A91.58,91.58,0,0,0,197.35,43.62ZM196,104v4H60v-4a68,68,0,0,1,136,0ZM128,212a68.07,68.07,0,0,1-68-68V132H196v12A68.07,68.07,0,0,1,128,212ZM140,80a16,16,0,1,1,16,16A16,16,0,0,1,140,80ZM84,80a16,16,0,1,1,16,16A16,16,0,0,1,84,80Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M208,120v24a80,80,0,0,1-160,0V120Z", opacity: "0.2" }), /* @__PURE__ */ React.createElement("path", { d: "M191.83,43.48l13.83-13.82a8,8,0,1,0-11.32-11.32L179.79,32.9a87.81,87.81,0,0,0-103.58,0L61.66,18.34A8,8,0,0,0,50.34,29.66L64.17,43.48A87.72,87.72,0,0,0,40,104v40a88,88,0,0,0,176,0V104A87.72,87.72,0,0,0,191.83,43.48ZM128,32a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,32Zm0,184a72.08,72.08,0,0,1-72-72V128H200v16A72.08,72.08,0,0,1,128,216ZM144,84a12,12,0,1,1,12,12A12,12,0,0,1,144,84ZM88,84a12,12,0,1,1,12,12A12,12,0,0,1,88,84Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M191.83,43.48l13.83-13.82a8,8,0,1,0-11.32-11.32L179.79,32.9a87.81,87.81,0,0,0-103.58,0L61.66,18.34A8,8,0,0,0,50.34,29.66L64.17,43.48A87.72,87.72,0,0,0,40,104v40a88,88,0,0,0,176,0V104A87.72,87.72,0,0,0,191.83,43.48ZM128,32a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,32Zm16,52a12,12,0,1,1,12,12A12,12,0,0,1,144,84ZM88,84a12,12,0,1,1,12,12A12,12,0,0,1,88,84Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M189,43.47l15.22-15.23a6,6,0,0,0-8.48-8.48L180,35.54A85.76,85.76,0,0,0,76,35.54L60.24,19.76a6,6,0,0,0-8.48,8.48L67,43.47A85.7,85.7,0,0,0,42,104v40a86,86,0,0,0,172,0V104A85.7,85.7,0,0,0,189,43.47ZM128,30a74.09,74.09,0,0,1,74,74v10H54V104A74.09,74.09,0,0,1,128,30Zm0,188a74.09,74.09,0,0,1-74-74V126H202v18A74.09,74.09,0,0,1,128,218ZM146,84a10,10,0,1,1,10,10A10,10,0,0,1,146,84ZM90,84a10,10,0,1,1,10,10A10,10,0,0,1,90,84Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M191.83,43.48l13.83-13.82a8,8,0,1,0-11.32-11.32L179.79,32.9a87.81,87.81,0,0,0-103.58,0L61.66,18.34A8,8,0,0,0,50.34,29.66L64.17,43.48A87.72,87.72,0,0,0,40,104v40a88,88,0,0,0,176,0V104A87.72,87.72,0,0,0,191.83,43.48ZM128,32a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,32Zm0,184a72.08,72.08,0,0,1-72-72V128H200v16A72.08,72.08,0,0,1,128,216ZM144,84a12,12,0,1,1,12,12A12,12,0,0,1,144,84ZM88,84a12,12,0,1,1,12,12A12,12,0,0,1,88,84Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M186.17,43.49l16.66-16.66a4,4,0,1,0-5.66-5.66l-17,17a83.72,83.72,0,0,0-104.26,0l-17-17a4,4,0,0,0-5.66,5.66L69.83,43.49A83.75,83.75,0,0,0,44,104v40a84,84,0,0,0,168,0V104A83.75,83.75,0,0,0,186.17,43.49ZM128,28a76.08,76.08,0,0,1,76,76v12H52V104A76.08,76.08,0,0,1,128,28Zm0,192a76.08,76.08,0,0,1-76-76V124H204v20A76.08,76.08,0,0,1,128,220ZM148,84a8,8,0,1,1,8,8A8,8,0,0,1,148,84ZM92,84a8,8,0,1,1,8,8A8,8,0,0,1,92,84Z" }))
      ]
    ]);
    const BugDroid = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    BugDroid.displayName = "BugDroid";
    Component = BugDroid;
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
  BugDroid_default as default
};
