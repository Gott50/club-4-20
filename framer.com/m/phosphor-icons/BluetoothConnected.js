let Component;
var BluetoothConnected_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M191.2,166.4,140,128l51.2-38.4a12,12,0,0,0,0-19.2l-64-48A12,12,0,0,0,108,32v72L63.2,70.4A12,12,0,0,0,48.8,89.6L100,128,48.8,166.4a12,12,0,1,0,14.4,19.2L108,152v72a12,12,0,0,0,19.2,9.6l64-48a12,12,0,0,0,0-19.2ZM132,56l32,24-32,24Zm0,144V152l32,24ZM48,144a16,16,0,1,1,16-16A16,16,0,0,1,48,144Zm168-16a16,16,0,1,1-16-16A16,16,0,0,1,216,128Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M184,80l-64,48V32ZM120,224l64-48-64-48Z", opacity: "0.2" }), /* @__PURE__ */ React.createElement("path", { d: "M188.8,169.6,133.33,128,188.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,112,32v80L60.8,73.6a8,8,0,0,0-9.6,12.8L106.67,128,51.2,169.6a8,8,0,1,0,9.6,12.8L112,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM128,48l42.67,32L128,112Zm0,160V144l42.67,32ZM52,140a12,12,0,1,1,12-12A12,12,0,0,1,52,140Zm156-12a12,12,0,1,1-12-12A12,12,0,0,1,208,128Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M192,176a8,8,0,0,1-3.2,6.4l-64,48A8,8,0,0,1,120,232a8,8,0,0,1-8-8V144L60.8,182.4a8,8,0,0,1-9.6-12.8L106.67,128,51.2,86.4a8,8,0,0,1,9.6-12.8L112,112V32a8,8,0,0,1,12.8-6.4l64,48a8,8,0,0,1,0,12.8L133.33,128l55.47,41.6A8,8,0,0,1,192,176ZM64,128a12,12,0,1,0-12,12A12,12,0,0,0,64,128Zm132-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M187.6,171.2,130,128l57.6-43.2a6,6,0,0,0,0-9.6l-64-48A6,6,0,0,0,114,32v84L59.6,75.2a6,6,0,0,0-7.2,9.6L110,128,52.4,171.2a6,6,0,0,0,7.2,9.6L114,140v84a6,6,0,0,0,9.6,4.8l64-48a6,6,0,0,0,0-9.6ZM126,44l48,36-48,36Zm0,168V140l48,36ZM52,138a10,10,0,1,1,10-10A10,10,0,0,1,52,138Zm154-10a10,10,0,1,1-10-10A10,10,0,0,1,206,128Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M188.8,169.6,133.33,128,188.8,86.4a8,8,0,0,0,0-12.8l-64-48A8,8,0,0,0,112,32v80L60.8,73.6a8,8,0,0,0-9.6,12.8L106.67,128,51.2,169.6a8,8,0,1,0,9.6,12.8L112,144v80a8,8,0,0,0,12.8,6.4l64-48a8,8,0,0,0,0-12.8ZM128,48l42.67,32L128,112Zm0,160V144l42.67,32ZM52,140a12,12,0,1,1,12-12A12,12,0,0,1,52,140Zm156-12a12,12,0,1,1-12-12A12,12,0,0,1,208,128Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M186.4,172.8,126.67,128,186.4,83.2a4,4,0,0,0,0-6.4l-64-48A4,4,0,0,0,116,32v88L58.4,76.8a4,4,0,0,0-4.8,6.4L113.33,128,53.6,172.8a4,4,0,0,0,4.8,6.4L116,136v88a4,4,0,0,0,6.4,3.2l64-48a4,4,0,0,0,0-6.4ZM124,40l53.33,40L124,120Zm0,176V136l53.33,40ZM52,136a8,8,0,1,1,8-8A8,8,0,0,1,52,136Zm152-8a8,8,0,1,1-8-8A8,8,0,0,1,204,128Z" }))
      ]
    ]);
    const BluetoothConnected = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    BluetoothConnected.displayName = "BluetoothConnected";
    Component = BluetoothConnected;
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
  BluetoothConnected_default as default
};