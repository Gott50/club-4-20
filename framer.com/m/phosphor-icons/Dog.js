let Component;
var Dog_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M108,136a16,16,0,1,1-16-16A16,16,0,0,1,108,136Zm56-16a16,16,0,1,0,16,16A16,16,0,0,0,164,120Zm68.24,26.18a20.42,20.42,0,0,1-8.41,1.85,19.59,19.59,0,0,1-3.83-.39V184a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V147.63a19,19,0,0,1-3.85.39,20.31,20.31,0,0,1-8.39-1.84,19.71,19.71,0,0,1-11.4-21.9l16.42-88A20,20,0,0,1,53.29,20.59l.47.13,52,15.27h44.54l52-15.27.47-.13a20,20,0,0,1,24.51,15.72l16.42,88A19.71,19.71,0,0,1,232.24,146.18Zm-60-91.63L217,112.42,204.44,45.09ZM39,112.42,83.76,54.55l-32.2-9.46ZM196,184V124.48L146.11,60H109.89L60,124.48V184a20,20,0,0,0,20,20h36v-7l-12.48-12.49a12,12,0,0,1,17-17L128,175l7.51-7.52a12,12,0,0,1,17,17L140,197v7h36A20,20,0,0,0,196,184Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M208,120.38V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V120.38L104,48h48Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM32,128h0L48.43,40,90.5,52.37Zm144,80H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.93,56h40.14L200,123.11V184A24,24,0,0,1,176,208Zm48-80L165.5,52.37,207.57,40,224,128ZM104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM176,208H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.93,56h40.14L200,123.11V184A24,24,0,0,1,176,208Zm-72-68a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M102,140a10,10,0,1,1-10-10A10,10,0,0,1,102,140Zm62-10a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm65.77,10.72a14.24,14.24,0,0,1-5.89,1.29,13.72,13.72,0,0,1-9.88-4.23V184a38,38,0,0,1-38,38H80a38,38,0,0,1-38-38V137.78A13.76,13.76,0,0,1,32.11,142a14.23,14.23,0,0,1-5.88-1.29,13.82,13.82,0,0,1-8-15.34l16.42-88a14,14,0,0,1,17.16-11l.24.07L104.86,42h46.28l52.79-15.51.24-.07a14,14,0,0,1,17.16,11l16.42,88A13.81,13.81,0,0,1,229.77,140.72ZM93.88,51.27,48.84,38a1.9,1.9,0,0,0-1.49.27,2,2,0,0,0-.88,1.32l-16.42,88a2,2,0,0,0,3.54,1.61ZM202,184V122.43L149.06,54H106.94L54,122.43V184a26,26,0,0,0,26,26h42V194.48l-14.24-14.24a6,6,0,0,1,8.48-8.48L128,183.51l11.76-11.75a6,6,0,0,1,8.48,8.48L134,194.48V210h42A26,26,0,0,0,202,184ZM226,127.6l-16.42-88a2,2,0,0,0-.88-1.31,2.07,2.07,0,0,0-1.49-.27l-45,13.23,60.32,78A2,2,0,0,0,226,127.6Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M239.71,125l-16.42-88a16,16,0,0,0-19.61-12.58l-.31.09L150.85,40h-45.7L52.63,24.56l-.31-.09A16,16,0,0,0,32.71,37.05L16.29,125a15.77,15.77,0,0,0,9.12,17.52A16.26,16.26,0,0,0,32.12,144,15.48,15.48,0,0,0,40,141.84V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40V141.85a15.5,15.5,0,0,0,7.87,2.16,16.31,16.31,0,0,0,6.72-1.47A15.77,15.77,0,0,0,239.71,125ZM32,128h0L48.43,40,90.5,52.37Zm144,80H136V195.31l13.66-13.65a8,8,0,0,0-11.32-11.32L128,180.69l-10.34-10.35a8,8,0,0,0-11.32,11.32L120,195.31V208H80a24,24,0,0,1-24-24V123.11L107.92,56h40.15L200,123.11V184A24,24,0,0,1,176,208Zm48-80L165.5,52.37,207.57,40,224,128ZM104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,140Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M100,140a8,8,0,1,1-8-8A8,8,0,0,1,100,140Zm64,8a8,8,0,1,0-8-8A8,8,0,0,0,164,148Zm64.94-9.11a12.12,12.12,0,0,1-5,1.11,11.83,11.83,0,0,1-9.35-4.62L212,132.09V184a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V132.09l-2.53,3.27A11.88,11.88,0,0,1,32.1,140a12.08,12.08,0,0,1-5-1.11,11.82,11.82,0,0,1-6.84-13.14l16.42-88a12,12,0,0,1,14.7-9.43l.16,0L104.58,44h46.84L204.5,28.4l.16,0a12,12,0,0,1,14.7,9.43l16.42,88A11.81,11.81,0,0,1,228.94,138.89ZM97.25,50.18,49.34,36.1a4.18,4.18,0,0,0-.92-.1,4,4,0,0,0-3.92,3.26l-16.42,88a4,4,0,0,0,7.08,3.22ZM204,121.75,150,52H106L52,121.75V184a28,28,0,0,0,28,28h44V193.66l-14.83-14.83a4,4,0,0,1,5.66-5.66L128,186.34l13.17-13.17a4,4,0,0,1,5.66,5.66L132,193.66V212h44a28,28,0,0,0,28-28Zm23.92,5.48-16.42-88a4,4,0,0,0-4.84-3.16L158.75,50.18l62.11,80.28a4,4,0,0,0,7.06-3.23Z" }))
      ]
    ]);
    const Dog = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    Dog.displayName = "Dog";
    Component = Dog;
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
  Dog_default as default
};
