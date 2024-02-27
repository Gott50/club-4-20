let Component;
var SelectionSlash_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M100,40a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,40Zm44,164H112a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24ZM208,28H184a12,12,0,0,0,0,24h20V72a12,12,0,0,0,24,0V48A20,20,0,0,0,208,28Zm8,72a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V112A12,12,0,0,0,216,100ZM40,156a12,12,0,0,0,12-12V112a12,12,0,0,0-24,0v32A12,12,0,0,0,40,156Zm32,48H52V184a12,12,0,0,0-24,0v24a20,20,0,0,0,20,20H72a12,12,0,0,0,0-24ZM56.88,31.93A12,12,0,1,0,39.12,48.07l160,176a12,12,0,0,0,17.76-16.14Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M216,40V216H40V40Z", opacity: "0.2" }), /* @__PURE__ */ React.createElement("path", { d: "M104,40a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,40Zm40,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,32H184a8,8,0,0,0,0,16h24V72a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32Zm8,72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,216,104ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM53.92,34.62A8,8,0,1,0,42.08,45.38l160,176a8,8,0,1,0,11.84-10.76Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM152,56h32a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V72H152a8,8,0,0,1,0-16ZM104,200H72a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Zm101.66,5.66a8,8,0,0,1-11.32,0L188.69,200H152a8,8,0,0,1,0-16h20.69L72,83.31V104a8,8,0,0,1-16,0V67.31l-5.66-5.65A8,8,0,0,1,61.66,50.34l8,8h0l136,136A8,8,0,0,1,205.66,205.66Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M106,40a6,6,0,0,1,6-6h32a6,6,0,0,1,0,12H112A6,6,0,0,1,106,40Zm38,170H112a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM208,34H184a6,6,0,0,0,0,12h24a2,2,0,0,1,2,2V72a6,6,0,0,0,12,0V48A14,14,0,0,0,208,34Zm8,72a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,216,106ZM40,150a6,6,0,0,0,6-6V112a6,6,0,0,0-12,0v32A6,6,0,0,0,40,150Zm32,60H48a2,2,0,0,1-2-2V184a6,6,0,0,0-12,0v24a14,14,0,0,0,14,14H72a6,6,0,0,0,0-12ZM52.44,36A6,6,0,0,0,43.56,44l160,176a6,6,0,0,0,8.88-8.08Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M104,40a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,40Zm40,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,32H184a8,8,0,0,0,0,16h24V72a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32Zm8,72a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,216,104ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM53.92,34.62A8,8,0,1,0,42.08,45.38l160,176a8,8,0,1,0,11.84-10.76Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M108,40a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H112A4,4,0,0,1,108,40Zm36,172H112a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM208,36H184a4,4,0,0,0,0,8h24a4,4,0,0,1,4,4V72a4,4,0,0,0,8,0V48A12,12,0,0,0,208,36Zm8,72a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V112A4,4,0,0,0,216,108ZM40,148a4,4,0,0,0,4-4V112a4,4,0,0,0-8,0v32A4,4,0,0,0,40,148Zm32,64H48a4,4,0,0,1-4-4V184a4,4,0,0,0-8,0v24a12,12,0,0,0,12,12H72a4,4,0,0,0,0-8ZM51,37.31A4,4,0,0,0,45,42.69l160,176a4,4,0,1,0,5.92-5.38Z" }))
      ]
    ]);
    const SelectionSlash = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    SelectionSlash.displayName = "SelectionSlash";
    Component = SelectionSlash;
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
  SelectionSlash_default as default
};
