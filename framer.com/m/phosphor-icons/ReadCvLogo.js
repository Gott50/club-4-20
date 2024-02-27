let Component;
var ReadCvLogo_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M211.48,35.32l-130.25-23A20,20,0,0,0,58.05,28.54l-29.75,169a20,20,0,0,0,16.22,23.16l130.25,23h0a20.1,20.1,0,0,0,3.52.31A20,20,0,0,0,198,227.46l29.75-169A20,20,0,0,0,211.48,35.32ZM175,219.36,52.63,197.75,81,36.64,203.37,58.25ZM91.9,67a12,12,0,0,1,13.9-9.73L173,69.14A12,12,0,0,1,171,93a12.59,12.59,0,0,1-2.1-.18L101.63,80.9A12,12,0,0,1,91.9,67ZM85,106.39a12,12,0,0,1,13.91-9.73l67.22,11.88A12,12,0,0,1,164,132.35a12.5,12.5,0,0,1-2.1-.18L94.69,120.29A12,12,0,0,1,85,106.39ZM78,145.78a12,12,0,0,1,13.9-9.73L125.54,142a12,12,0,0,1-2.07,23.82,11.63,11.63,0,0,1-2.1-.19l-33.61-5.93A12,12,0,0,1,78,145.78Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M215.88,56.39l-29.75,169a8,8,0,0,1-9.27,6.49l-130.25-23a8,8,0,0,1-6.49-9.26l29.75-169a8,8,0,0,1,9.27-6.49l130.25,23A8,8,0,0,1,215.88,56.39Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM135.5,131.56a8,8,0,0,1-7.87,6.61,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,87.52,115L129,122.29A8,8,0,0,1,135.5,131.56Zm47-24.18a8,8,0,0,1-7.86,6.61,7.55,7.55,0,0,1-1.41-.13l-83-14.65a8,8,0,0,1,2.79-15.76l83,14.66A8,8,0,0,1,182.53,107.38Zm5.55-31.52a8,8,0,0,1-7.87,6.61,8.36,8.36,0,0,1-1.4-.12l-83-14.66a8,8,0,1,1,2.78-15.75l83,14.65A8,8,0,0,1,188.08,75.86Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M210.43,41.22l-130.25-23A14,14,0,0,0,64,29.58l-29.75,169a14,14,0,0,0,11.36,16.22l130.25,23h0a13.64,13.64,0,0,0,2.46.22A14,14,0,0,0,192,226.42l29.75-169A14,14,0,0,0,210.43,41.22ZM210,55.36l-29.75,169a2,2,0,0,1-.82,1.3,2,2,0,0,1-1.49.33L47.65,203A2,2,0,0,1,46,200.64l29.75-169a2,2,0,0,1,.82-1.3A2.06,2.06,0,0,1,78.1,30L208.35,53A2,2,0,0,1,210,55.36ZM186.11,75.51a6,6,0,0,1-5.9,5,6.2,6.2,0,0,1-1.05-.09l-83-14.66a6,6,0,1,1,2.09-11.81l83,14.65A6,6,0,0,1,186.11,75.51ZM180.56,107a6,6,0,0,1-5.9,5,5.48,5.48,0,0,1-1-.1l-83-14.65a6,6,0,0,1,2.09-11.82l83,14.66A6,6,0,0,1,180.56,107Zm-47,24.19a6,6,0,0,1-5.91,4.95,6.38,6.38,0,0,1-1.05-.09l-41.49-7.33a6,6,0,1,1,2.09-11.81l41.49,7.32A6,6,0,0,1,133.53,131.22Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M210.09,43.19l-130.25-23a12,12,0,0,0-13.91,9.73l-29.75,169a12,12,0,0,0,9.73,13.9l130.26,23a11.58,11.58,0,0,0,2.11.19,12,12,0,0,0,11.79-9.92l29.75-169A12,12,0,0,0,210.09,43.19Zm1.85,12.51-29.75,169a4,4,0,0,1-4.63,3.25l-130.26-23a4,4,0,0,1-3.24-4.63l29.75-169a4,4,0,0,1,4.63-3.25l130.26,23A4,4,0,0,1,211.94,55.7Zm-27.8,19.47a4,4,0,0,1-3.93,3.3,4.14,4.14,0,0,1-.7-.06l-83-14.66a4,4,0,1,1,1.39-7.88l83,14.66A4,4,0,0,1,184.14,75.17Zm-5.54,31.51a4,4,0,0,1-3.94,3.31,3.39,3.39,0,0,1-.7-.07L91,95.27a4,4,0,1,1,1.39-7.88l83,14.66A4,4,0,0,1,178.6,106.68Zm-47,24.19a4,4,0,0,1-3.94,3.3,4.23,4.23,0,0,1-.7-.06l-41.49-7.33a4,4,0,1,1,1.39-7.87l41.49,7.32A4,4,0,0,1,131.56,130.87Z" }))
      ]
    ]);
    const ReadCvLogo = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    ReadCvLogo.displayName = "ReadCvLogo";
    Component = ReadCvLogo;
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
  ReadCvLogo_default as default
};
