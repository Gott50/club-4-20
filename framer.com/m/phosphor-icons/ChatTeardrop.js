let Component;
var ChatTeardrop_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M132,20A104.11,104.11,0,0,0,28,124v84.33A19.69,19.69,0,0,0,47.67,228H132a104,104,0,0,0,0-208Zm0,184H52V124a80,80,0,1,1,80,80Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M224,124h0a92,92,0,0,1-92,92H47.67A7.66,7.66,0,0,1,40,208.33V124a92,92,0,0,1,92-92h0A92,92,0,0,1,224,124Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M132,24A100.11,100.11,0,0,0,32,124v84.33A15.69,15.69,0,0,0,47.67,224H132a100,100,0,0,0,0-200Zm0,184H48V124a84,84,0,1,1,84,84Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M232,124A100.11,100.11,0,0,1,132,224H47.67A15.69,15.69,0,0,1,32,208.33V124a100,100,0,0,1,200,0Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M132,26a98.11,98.11,0,0,0-98,98v84.33A13.68,13.68,0,0,0,47.67,222H132a98,98,0,0,0,0-196Zm0,184H47.67A1.67,1.67,0,0,1,46,208.33V124a86,86,0,1,1,86,86Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M132,24A100.11,100.11,0,0,0,32,124v84.33A15.69,15.69,0,0,0,47.67,224H132a100,100,0,0,0,0-200Zm0,184H48V124a84,84,0,1,1,84,84Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M132,28a96.11,96.11,0,0,0-96,96v84.33A11.68,11.68,0,0,0,47.67,220H132a96,96,0,0,0,0-192Zm0,184H47.67A3.67,3.67,0,0,1,44,208.33V124a88,88,0,1,1,88,88Z" }))
      ]
    ]);
    const ChatTeardrop = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    ChatTeardrop.displayName = "ChatTeardrop";
    Component = ChatTeardrop;
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
  ChatTeardrop_default as default
};