let Component;
var GlobeHemisphereWest_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,108a83.64,83.64,0,0,1-4.47,27L167,130a19.65,19.65,0,0,0-7.8-2.78l-22.82-3.08A20.14,20.14,0,0,0,117.72,132h-4.07l-2.71-5.6a19.88,19.88,0,0,0-13.8-10.84L94.46,115l4-7h14.39a20,20,0,0,0,9.66-2.49l12.25-6.76a20.57,20.57,0,0,0,3.74-2.68l26.92-24.33A20,20,0,0,0,172,56.49,84,84,0,0,1,212,128ZM140.76,45l6.2,11.1L122.75,78l-10.93,6H96.14A20.05,20.05,0,0,0,78.78,94.06l-4.49,7.85L67.68,84.28l9.91-23.42A83.91,83.91,0,0,1,140.76,45ZM44,128a83.52,83.52,0,0,1,4.4-26.77l7.74,20.65a19.89,19.89,0,0,0,14.52,12.53l19.53,4.2,3,6.1a20.11,20.11,0,0,0,13.55,10.77l-5,11.12a20,20,0,0,0,3.58,21.71l.21.22,18.16,18.7-.89,4.59A84.09,84.09,0,0,1,44,128Zm103.65,81.66a20.11,20.11,0,0,0-5-17.3l-.21-.22-17.72-18.25,11.37-25.52,19,2.56,41.43,25.48A84.2,84.2,0,0,1,147.65,209.66Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M213.09,172.48a96,96,0,0,1-80.41,51.41l3.17-16.44a8,8,0,0,0-2-6.95l-19.74-20.33a8,8,0,0,1-1.44-8.69l13.7-30.74a8,8,0,0,1,8.38-4.67l22.82,3.08a8.11,8.11,0,0,1,3.12,1.11ZM116.71,95,129,88.24a7.46,7.46,0,0,0,1.5-1.07l26.91-24.33A8,8,0,0,0,159,53l-10.5-18.81A96.62,96.62,0,0,0,128,32,95.61,95.61,0,0,0,67.78,53.23L56,81.08A8,8,0,0,0,55.88,87l11.5,30.67a8,8,0,0,0,5.81,5l2.69.58L89.2,100a8,8,0,0,1,6.94-4h16.71A7.9,7.9,0,0,0,116.71,95Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102a89.55,89.55,0,0,1-7.46,35.86l-46.69-28.71a13.94,13.94,0,0,0-5.46-2l-22.82-3.07A14.06,14.06,0,0,0,121.06,138h-9.92a2,2,0,0,1-1.8-1.13l-3.8-7.86a13.94,13.94,0,0,0-9.66-7.59l-10.71-2.3L94.4,103a2,2,0,0,1,1.74-1h16.71a13.9,13.9,0,0,0,6.76-1.75l12.25-6.75a14.73,14.73,0,0,0,2.62-1.88l26.91-24.33a13.93,13.93,0,0,0,2.83-17.21L161,44.25A90.16,90.16,0,0,1,218,128ZM144.6,39.54l9.15,16.39a2,2,0,0,1-.41,2.46L126.43,82.72a1.84,1.84,0,0,1-.37.27l-12.25,6.76a2,2,0,0,1-1,.25H96.14A14,14,0,0,0,84,97L73.18,115.91a2,2,0,0,1-.19-.35L61.5,84.89a2,2,0,0,1,0-1.48L72.68,57.06A89.9,89.9,0,0,1,144.6,39.54ZM38,128A89.52,89.52,0,0,1,49.38,84.23a13.85,13.85,0,0,0,.89,4.87l11.49,30.67a13.94,13.94,0,0,0,10.16,8.78l21.44,4.6a2,2,0,0,1,1.38,1.09l3.8,7.86a14.07,14.07,0,0,0,12.6,7.9h4.56l-8.49,19a14,14,0,0,0,2.51,15.2l.1.11,19.68,20.26a2,2,0,0,1,.46,1.7L127.7,218A90.1,90.1,0,0,1,38,128Zm102.08,89.19,1.67-8.6a14.07,14.07,0,0,0-3.47-12.16l-.1-.11L118.5,176.06a2,2,0,0,1-.33-2.14l13.7-30.73A2,2,0,0,1,134,142l22.82,3.08a2,2,0,0,1,.78.27L205,174.55A90.18,90.18,0,0,1,140.08,217.19Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm92,100a91.44,91.44,0,0,1-8.58,38.76L162.8,136.85a12.07,12.07,0,0,0-4.68-1.67l-22.82-3.07a12,12,0,0,0-12.56,7l-.4.88h-11.2a4,4,0,0,1-3.6-2.26l-3.8-7.86a11.93,11.93,0,0,0-8.28-6.5L82.07,120.5,92.67,102a4,4,0,0,1,3.47-2h16.71a12,12,0,0,0,5.8-1.5l12.24-6.76a11.79,11.79,0,0,0,2.25-1.6L160.05,65.8a12,12,0,0,0,2.43-14.75l-5.86-10.49A92.17,92.17,0,0,1,220,128ZM145.89,37.75l9.6,17.2a4,4,0,0,1-.81,4.92L127.77,84.21a4.41,4.41,0,0,1-.75.53L114.78,91.5a4,4,0,0,1-1.93.5H96.14a12,12,0,0,0-10.41,6l-11.86,20.7a4,4,0,0,1-2.75-2.47L59.63,85.6a4,4,0,0,1,.06-3L71,55.81A91.51,91.51,0,0,1,128,36,92.53,92.53,0,0,1,145.89,37.75ZM36,128A91.52,91.52,0,0,1,56,70.77l-3.71,8.75a12,12,0,0,0-.18,8.88l11.49,30.67a11.93,11.93,0,0,0,8.72,7.52l21.43,4.61a4,4,0,0,1,2.76,2.17l3.8,7.86a12.07,12.07,0,0,0,10.8,6.77h7.64L109,169.85A12,12,0,0,0,111.26,183l19.68,20.26a4,4,0,0,1,1,3.47L129.36,220,128,220A92.1,92.1,0,0,1,36,128Zm101.6,91.5,2.18-11.29a12.08,12.08,0,0,0-3-10.49l-19.68-20.26a4,4,0,0,1-.71-4.35l13.7-30.74a4,4,0,0,1,4.18-2.33l22.82,3.07a4.12,4.12,0,0,1,1.56.56l49.11,30.2A92.12,92.12,0,0,1,137.6,219.5Z" }))
      ]
    ]);
    const GlobeHemisphereWest = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    GlobeHemisphereWest.displayName = "GlobeHemisphereWest";
    Component = GlobeHemisphereWest;
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
  GlobeHemisphereWest_default as default
};
