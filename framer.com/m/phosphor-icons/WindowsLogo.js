let Component;
var WindowsLogo_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M107.69,51.88a12,12,0,0,0-9.84-2.6l-60,10.91A12,12,0,0,0,28,72v36a12,12,0,0,0,12,12h60a12,12,0,0,0,12-12V61.09A12,12,0,0,0,107.69,51.88ZM88,96H52V82l36-6.54ZM223.69,30.79a12,12,0,0,0-9.84-2.6L137.85,42A12,12,0,0,0,128,53.82V108a12,12,0,0,0,12,12h76a12,12,0,0,0,12-12V40A12,12,0,0,0,223.69,30.79ZM204,96H152V63.83l52-9.45ZM100,136H40a12,12,0,0,0-12,12v36a12,12,0,0,0,9.85,11.81l60,10.91A12,12,0,0,0,112,194.91V148A12,12,0,0,0,100,136ZM88,180.53,52,174V160H88ZM216,136H140a12,12,0,0,0-12,12v54.18A12,12,0,0,0,137.85,214l76,13.82A12,12,0,0,0,228,216V148A12,12,0,0,0,216,136Zm-12,65.62-52-9.45V160h52Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M136,144h80v72l-80-14.55ZM40,184l64,11.64V144H40ZM136,54.55V112h80V40ZM40,112h64V60.36L40,72Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm-8,70.41-64-11.63V152h64ZM104,136H40a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,104,136Zm-8,50.05-48-8.73V152H96ZM221.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86ZM208,104H144V61.22l64-11.63ZM109.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM96,104H48V78.68L96,70Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M112,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,32,184V144a8,8,0,0,1,8-8h64A8,8,0,0,1,112,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M216,138H136a6,6,0,0,0-6,6v57.45a6,6,0,0,0,4.93,5.91l80,14.54a5.46,5.46,0,0,0,1.07.1,6,6,0,0,0,6-6V144A6,6,0,0,0,216,138Zm-6,70.81-68-12.36V150h68ZM104,138H40a6,6,0,0,0-6,6v40a6,6,0,0,0,4.93,5.9l64,11.64a6.36,6.36,0,0,0,1.07.1,6,6,0,0,0,6-6V144A6,6,0,0,0,104,138Zm-6,50.45L46,179V150H98ZM219.84,35.39a6,6,0,0,0-4.91-1.29l-80,14.54A6,6,0,0,0,130,54.55V112a6,6,0,0,0,6,6h80a6,6,0,0,0,6-6V40A6,6,0,0,0,219.84,35.39ZM210,106H142V59.55l68-12.36ZM107.84,55.76a6,6,0,0,0-4.91-1.3l-64,11.64A6,6,0,0,0,34,72v40a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V60.36A6,6,0,0,0,107.84,55.76ZM98,106H46V77l52-9.46Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M216,136H136a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,216,224a8,8,0,0,0,8-8V144A8,8,0,0,0,216,136Zm-8,70.41-64-11.63V152h64ZM104,136H40a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,104,136Zm-8,50.05-48-8.73V152H96ZM221.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,128,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,221.13,33.86ZM208,104H144V61.22l64-11.63ZM109.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,32,72v40a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V60.36A8,8,0,0,0,109.13,54.22ZM96,104H48V78.68L96,70Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M216,140H136a4,4,0,0,0-4,4v57.45a4,4,0,0,0,3.28,3.94l80,14.55a4.37,4.37,0,0,0,.72.06,4,4,0,0,0,2.56-.93A4,4,0,0,0,220,216V144A4,4,0,0,0,216,140Zm-4,71.21-72-13.09V148h72ZM104,140H40a4,4,0,0,0-4,4v40a4,4,0,0,0,3.28,3.94l64,11.63a3.51,3.51,0,0,0,.72.07,4,4,0,0,0,4-4V144A4,4,0,0,0,104,140Zm-4,50.84L44,180.66V148h56ZM218.56,36.93a4,4,0,0,0-3.28-.87l-80,14.55A4,4,0,0,0,132,54.55V112a4,4,0,0,0,4,4h80a4,4,0,0,0,4-4V40A4,4,0,0,0,218.56,36.93ZM212,108H140V57.88l72-13.09ZM103.28,56.43l-64,11.63A4,4,0,0,0,36,72v40a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V60.36a4,4,0,0,0-4.72-3.93ZM100,108H44V75.34l56-10.18Z" }))
      ]
    ]);
    const WindowsLogo = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    WindowsLogo.displayName = "WindowsLogo";
    Component = WindowsLogo;
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
  WindowsLogo_default as default
};
