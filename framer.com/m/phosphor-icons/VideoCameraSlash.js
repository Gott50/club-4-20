let Component;
var VideoCameraSlash_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M249.45,69.31a12,12,0,0,0-12.51,1L212,88.43V72a20,20,0,0,0-20-20H123.88a12,12,0,0,0,0,24H188v68a12,12,0,0,0,4.46,9.33c.15.13.31.25.48.38l44,32A12,12,0,0,0,256,176V80A12,12,0,0,0,249.45,69.31ZM232,152.43l-20-14.54V118.11l20-14.54ZM56.88,31.93A12,12,0,1,0,39.12,48.07L42.69,52H32A20,20,0,0,0,12,72V184a20,20,0,0,0,20,20H180.87l18.25,20.07a12,12,0,0,0,17.76-16.14ZM36,180V76H64.51l94.55,104Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M200,72V184a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H192A8,8,0,0,1,200,72Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H113.06a8,8,0,0,0,0,16H192v87.63a8,8,0,0,0,16,0V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM240,161.05l-32-21.33V116.28L240,95ZM53.92,34.62A8,8,0,1,0,42.08,45.38L51.73,56H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H182.64l19.44,21.38a8,8,0,1,0,11.84-10.76ZM32,184V72H66.28L168.1,184Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M213.92,210.62a8,8,0,1,1-11.84,10.76L182.64,200H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H51.73L42.08,45.38A8,8,0,1,1,53.92,34.62ZM251.77,73a8,8,0,0,0-8.21.39l-32,21.34a8,8,0,0,0-3.56,6.65v53.34a8,8,0,0,0,3.56,6.65l32,21.34A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73Zm-73.69,74.46A8,8,0,0,0,192,142V72a16,16,0,0,0-16-16H113.06a8,8,0,0,0-5.92,13.38Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M250.83,74.71a6,6,0,0,0-6.16.3L206,100.79V72a14,14,0,0,0-14-14H113.06a6,6,0,0,0,0,12H192a2,2,0,0,1,2,2v87.63a6,6,0,0,0,12,0v-4.42L244.67,181a6,6,0,0,0,9.33-5V80A6,6,0,0,0,250.83,74.71ZM242,164.79l-36-24V115.21l36-24ZM52.44,36A6,6,0,0,0,43.56,44L56.25,58H32A14,14,0,0,0,18,72V184a14,14,0,0,0,14,14H183.53l20,22a6,6,0,0,0,8.88-8.08ZM32,186a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H67.16L172.62,186Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H113.06a8,8,0,0,0,0,16H192v87.63a8,8,0,0,0,16,0V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM240,161.05l-32-21.33V116.28L240,95ZM53.92,34.62A8,8,0,1,0,42.08,45.38L51.73,56H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H182.64l19.44,21.38a8,8,0,1,0,11.84-10.76ZM32,184V72H66.28L168.1,184Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M249.89,76.47a4,4,0,0,0-4.11.2L204,104.53V72a12,12,0,0,0-12-12H113.06a4,4,0,0,0,0,8H192a4,4,0,0,1,4,4v87.63a4,4,0,0,0,8,0v-8.16l41.78,27.86A4,4,0,0,0,252,176V80A4,4,0,0,0,249.89,76.47ZM244,168.53l-40-26.67V114.14l40-26.67ZM51,37.31A4,4,0,0,0,45,42.69L60.78,60H32A12,12,0,0,0,20,72V184a12,12,0,0,0,12,12H184.41L205,218.69a4,4,0,1,0,5.92-5.38ZM32,188a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H68.05L177.14,188Z" }))
      ]
    ]);
    const VideoCameraSlash = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    VideoCameraSlash.displayName = "VideoCameraSlash";
    Component = VideoCameraSlash;
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
  VideoCameraSlash_default as default
};
