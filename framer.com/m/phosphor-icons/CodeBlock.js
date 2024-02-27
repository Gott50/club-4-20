let Component;
var CodeBlock_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M51.51,104.49l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17L45,64,68.49,87.51a12,12,0,0,1-17,17Zm48,0a12,12,0,0,0,17,0l32-32a12,12,0,0,0,0-17l-32-32a12,12,0,1,0-17,17L123,64,99.51,87.51A12,12,0,0,0,99.51,104.49ZM200,36H180a12,12,0,0,0,0,24h16V196H60V140a12,12,0,0,0-24,0v60a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M208,56V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M58.34,101.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,69.66,37.66L43.31,64,69.66,90.34a8,8,0,0,1-11.32,11.32Zm40,0a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0,0-11.32l-32-32A8,8,0,0,0,98.34,37.66L124.69,64,98.34,90.34A8,8,0,0,0,98.34,101.66ZM200,40H176a8,8,0,0,0,0,16h24V200H56V136a8,8,0,0,0-16,0v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M200,40H168a16,16,0,0,0-16-16H32A16,16,0,0,0,16,40v80a16,16,0,0,0,16,16h8v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM106.34,61.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L124.69,80Zm-64,24a8,8,0,0,1,0-11.32l24-24A8,8,0,0,1,77.66,61.66L59.31,80,77.66,98.34a8,8,0,0,1-11.32,11.32ZM200,200H56V136h96a16,16,0,0,0,16-16V56h32Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M59.76,100.24l-32-32a6,6,0,0,1,0-8.48l32-32a6,6,0,1,1,8.48,8.48L40.49,64,68.24,91.76a6,6,0,1,1-8.48,8.48Zm40,0a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0,0-8.48l-32-32a6,6,0,1,0-8.48,8.48L127.51,64,99.76,91.76A6,6,0,0,0,99.76,100.24ZM200,42H176a6,6,0,0,0,0,12h24a2,2,0,0,1,2,2V200a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V136a6,6,0,0,0-12,0v64a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M58.34,101.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,69.66,37.66L43.31,64,69.66,90.34a8,8,0,0,1-11.32,11.32Zm40,0a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0,0-11.32l-32-32A8,8,0,0,0,98.34,37.66L124.69,64,98.34,90.34A8,8,0,0,0,98.34,101.66ZM200,40H176a8,8,0,0,0,0,16h24V200H56V136a8,8,0,0,0-16,0v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M61.17,98.83l-32-32a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,5.66L37.66,64,66.83,93.17a4,4,0,0,1-5.66,5.66Zm40,0a4,4,0,0,0,5.66,0l32-32a4,4,0,0,0,0-5.66l-32-32a4,4,0,0,0-5.66,5.66L130.34,64,101.17,93.17A4,4,0,0,0,101.17,98.83ZM200,44H176a4,4,0,0,0,0,8h24a4,4,0,0,1,4,4V200a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V136a4,4,0,0,0-8,0v64a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Z" }))
      ]
    ]);
    const CodeBlock = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    CodeBlock.displayName = "CodeBlock";
    Component = CodeBlock;
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
  CodeBlock_default as default
};
