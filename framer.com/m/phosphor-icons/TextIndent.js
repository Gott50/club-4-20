let Component;
var TextIndent_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M228,128a12,12,0,0,1-12,12H120a12,12,0,0,1,0-24h96A12,12,0,0,1,228,128ZM120,76h96a12,12,0,0,0,0-24H120a12,12,0,0,0,0,24Zm96,104H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM31.51,144.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0,0-17l-40-40a12,12,0,0,0-17,17L63,96,31.51,127.51A12,12,0,0,0,31.51,144.49Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M80,96,40,136V56Z", opacity: "0.2" }), /* @__PURE__ */ React.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM112,72H216a8,8,0,0,0,0-16H112a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM32,136V56a8,8,0,0,1,13.66-5.66l40,40a8,8,0,0,1,0,11.32l-40,40A8,8,0,0,1,32,136Zm16-19.31L68.69,96,48,75.31Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM112,72H216a8,8,0,0,0,0-16H112a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM36.94,143.39a8,8,0,0,0,8.72-1.73l40-40a8,8,0,0,0,0-11.32l-40-40A8,8,0,0,0,32,56v80A8,8,0,0,0,36.94,143.39Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M222,128a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM112,70H216a6,6,0,0,0,0-12H112a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM35.76,140.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0,0-8.48l-40-40a6,6,0,0,0-8.48,8.48L71.51,96,35.76,131.76A6,6,0,0,0,35.76,140.24Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM112,72H216a8,8,0,0,0,0-16H112a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM34.34,141.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40A8,8,0,0,0,34.34,61.66L68.69,96,34.34,130.34A8,8,0,0,0,34.34,141.66Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M220,128a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM112,68H216a4,4,0,0,0,0-8H112a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM37.17,138.83a4,4,0,0,0,5.66,0l40-40a4,4,0,0,0,0-5.66l-40-40a4,4,0,0,0-5.66,5.66L74.34,96,37.17,133.17A4,4,0,0,0,37.17,138.83Z" }))
      ]
    ]);
    const TextIndent = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    TextIndent.displayName = "TextIndent";
    Component = TextIndent;
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
  TextIndent_default as default
};
