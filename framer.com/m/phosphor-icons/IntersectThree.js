let Component;
var IntersectThree_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M200,93.66c0-.55,0-1.1,0-1.66A72,72,0,0,0,56,92c0,.56,0,1.11,0,1.66a72,72,0,1,0,72,124.65A72,72,0,1,0,200,93.66Zm-41.28,35.22A71.73,71.73,0,0,0,148,110.77a47.69,47.69,0,0,1,25-1.92A48.21,48.21,0,0,1,158.68,128.88ZM128,187.7a47.81,47.81,0,0,1-11.47-24.62,72,72,0,0,0,22.94,0A47.81,47.81,0,0,1,128,187.7ZM83.06,108.85a47.69,47.69,0,0,1,25,1.92,71.73,71.73,0,0,0-10.72,18.11A48.21,48.21,0,0,1,83.06,108.85ZM128,140a47.88,47.88,0,0,1-8.94-.85A48,48,0,0,1,128,124.3a48,48,0,0,1,8.94,14.85A47.88,47.88,0,0,1,128,140Zm0-96a48.07,48.07,0,0,1,47.47,40.92A71.77,71.77,0,0,0,128,93.69a71.77,71.77,0,0,0-47.47-8.77A48.07,48.07,0,0,1,128,44ZM44,156a47.89,47.89,0,0,1,17.32-36.88A72.45,72.45,0,0,0,92,154.34c0,.55,0,1.1,0,1.66a71.64,71.64,0,0,0,16,45.23A48,48,0,0,1,44,156Zm120,48a47.67,47.67,0,0,1-16-2.77A71.64,71.64,0,0,0,164,156c0-.56,0-1.11,0-1.66a72.45,72.45,0,0,0,30.72-35.22A48,48,0,0,1,164,204Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M104.64,147.28a60,60,0,0,1-36-46.56A60.06,60.06,0,0,1,128,108,59.94,59.94,0,0,0,104.64,147.28Zm0,0A60,60,0,0,0,128,204a60,60,0,0,0,23.36-56.72,60.17,60.17,0,0,1-46.72,0Zm82.72-46.56A60.06,60.06,0,0,0,128,108a59.94,59.94,0,0,1,23.36,39.28A60,60,0,0,0,187.36,100.72Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M195.88,96c.07-1.31.12-2.63.12-4A68,68,0,0,0,60,92c0,1.33,0,2.65.12,4A68,68,0,1,0,128,213.65,68,68,0,1,0,195.88,96ZM128,193.47a51.89,51.89,0,0,1-16-35.38,67.55,67.55,0,0,0,31.9,0A51.89,51.89,0,0,1,128,193.47ZM128,144a51.93,51.93,0,0,1-14.08-1.95A52.06,52.06,0,0,1,128,118.53a52.06,52.06,0,0,1,14.08,23.52A51.93,51.93,0,0,1,128,144Zm-28.77-8.71A52.19,52.19,0,0,1,77.92,106a51.88,51.88,0,0,1,36.79,3.28A68.17,68.17,0,0,0,99.23,135.29Zm42.06-26.06A51.88,51.88,0,0,1,178.08,106a52.19,52.19,0,0,1-21.31,29.34A68.17,68.17,0,0,0,141.29,109.23ZM128,40A52.06,52.06,0,0,1,180,89.91,67.72,67.72,0,0,0,128,98.35a67.72,67.72,0,0,0-51.95-8.44A52.06,52.06,0,0,1,128,40ZM40,156a52,52,0,0,1,23.23-43.29A68.36,68.36,0,0,0,96.12,152c-.07,1.31-.12,2.63-.12,4a67.74,67.74,0,0,0,18.71,46.77A52,52,0,0,1,40,156Zm124,52a51.65,51.65,0,0,1-22.71-5.23A67.74,67.74,0,0,0,160,156c0-1.33-.05-2.65-.12-4a68.36,68.36,0,0,0,32.89-39.33A52,52,0,0,1,164,208Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M195.88,96c.07-1.31.12-2.63.12-4A68,68,0,0,0,60,92c0,1.33,0,2.65.12,4A68,68,0,1,0,128,213.65,68,68,0,1,0,195.88,96ZM128,193.47a51.89,51.89,0,0,1-16-35.38,67.55,67.55,0,0,0,31.9,0A51.89,51.89,0,0,1,128,193.47ZM99.23,135.29A52.19,52.19,0,0,1,77.92,106a51.88,51.88,0,0,1,36.79,3.28A68.17,68.17,0,0,0,99.23,135.29Zm42.06-26.06A51.88,51.88,0,0,1,178.08,106a52.19,52.19,0,0,1-21.31,29.34A68.17,68.17,0,0,0,141.29,109.23ZM128,40A52.06,52.06,0,0,1,180,89.91,67.72,67.72,0,0,0,128,98.35a67.72,67.72,0,0,0-51.95-8.44A52.06,52.06,0,0,1,128,40ZM40,156a52,52,0,0,1,23.23-43.29A68.36,68.36,0,0,0,96.12,152c-.07,1.31-.12,2.63-.12,4a67.74,67.74,0,0,0,18.71,46.77A52,52,0,0,1,40,156Zm124,52a51.65,51.65,0,0,1-22.71-5.23A67.74,67.74,0,0,0,160,156c0-1.33-.05-2.65-.12-4a68.36,68.36,0,0,0,32.89-39.33A52,52,0,0,1,164,208Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M193.78,97.13c.13-1.69.22-3.4.22-5.13A66,66,0,0,0,62,92c0,1.73.09,3.44.22,5.13A66,66,0,1,0,128,211.27,66,66,0,1,0,193.78,97.13ZM74,92a54,54,0,0,1,108,0c0,.17,0,.34,0,.51a65.75,65.75,0,0,0-54,8.22,65.75,65.75,0,0,0-54-8.22C74,92.34,74,92.17,74,92Zm72,64a53.88,53.88,0,0,1-18,40.21A53.88,53.88,0,0,1,110,156c0-.17,0-.34,0-.51a65.73,65.73,0,0,0,36,0C146,155.66,146,155.83,146,156Zm-18-10a53.61,53.61,0,0,1-16.5-2.59A54.09,54.09,0,0,1,128,115.79a54.09,54.09,0,0,1,16.5,27.62A53.61,53.61,0,0,1,128,146Zm-27.6-7.61a54.14,54.14,0,0,1-24.9-33.8A53.85,53.85,0,0,1,118,108.71,66.09,66.09,0,0,0,100.4,138.39ZM138,108.71a53.85,53.85,0,0,1,42.53-4.12,54.14,54.14,0,0,1-24.9,33.8A66.09,66.09,0,0,0,138,108.71ZM92,210A54,54,0,0,1,64.4,109.61a66.29,66.29,0,0,0,33.82,41.26c-.13,1.69-.22,3.4-.22,5.13a65.8,65.8,0,0,0,20,47.29A53.64,53.64,0,0,1,92,210Zm72,0a53.64,53.64,0,0,1-26-6.71A65.8,65.8,0,0,0,158,156c0-1.73-.09-3.44-.22-5.13a66.29,66.29,0,0,0,33.82-41.26A54,54,0,0,1,164,210Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M195.88,96c.07-1.31.12-2.63.12-4A68,68,0,0,0,60,92c0,1.33,0,2.65.12,4A68,68,0,1,0,128,213.65,68,68,0,1,0,195.88,96ZM128,193.47a51.89,51.89,0,0,1-16-35.38,67.55,67.55,0,0,0,31.9,0A51.89,51.89,0,0,1,128,193.47ZM128,144a51.93,51.93,0,0,1-14.08-1.95A52.06,52.06,0,0,1,128,118.53a52.06,52.06,0,0,1,14.08,23.52A51.93,51.93,0,0,1,128,144Zm-28.77-8.71A52.19,52.19,0,0,1,77.92,106a51.88,51.88,0,0,1,36.79,3.28A68.17,68.17,0,0,0,99.23,135.29Zm42.06-26.06A51.88,51.88,0,0,1,178.08,106a52.19,52.19,0,0,1-21.31,29.34A68.17,68.17,0,0,0,141.29,109.23ZM128,40A52.06,52.06,0,0,1,180,89.91,67.72,67.72,0,0,0,128,98.35a67.72,67.72,0,0,0-51.95-8.44A52.06,52.06,0,0,1,128,40ZM40,156a52,52,0,0,1,23.23-43.29A68.36,68.36,0,0,0,96.12,152c-.07,1.31-.12,2.63-.12,4a67.74,67.74,0,0,0,18.71,46.77A52,52,0,0,1,40,156Zm124,52a51.65,51.65,0,0,1-22.71-5.23A67.74,67.74,0,0,0,160,156c0-1.33-.05-2.65-.12-4a68.36,68.36,0,0,0,32.89-39.33A52,52,0,0,1,164,208Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M191.69,98.3c.2-2.07.31-4.17.31-6.3A64,64,0,0,0,64,92c0,2.13.11,4.23.31,6.3A64,64,0,1,0,128,208.88,64,64,0,1,0,191.69,98.3ZM72,92a56,56,0,0,1,112,0c0,1.07,0,2.13-.1,3.18a63.84,63.84,0,0,0-55.9,7.94,63.84,63.84,0,0,0-55.9-7.94C72,94.13,72,93.07,72,92Zm76,64a55.88,55.88,0,0,1-20,42.85A55.88,55.88,0,0,1,108,156c0-1.07,0-2.13.1-3.18a63.86,63.86,0,0,0,39.8,0C148,153.87,148,154.93,148,156Zm-20-8a55.63,55.63,0,0,1-18.86-3.28A56.06,56.06,0,0,1,128,113.15a56.06,56.06,0,0,1,18.86,31.57A55.63,55.63,0,0,1,128,148Zm-26.3-6.58a56.18,56.18,0,0,1-28.56-38.14,55.87,55.87,0,0,1,48.21,5A64.06,64.06,0,0,0,101.7,141.42Zm33-33.09a55.87,55.87,0,0,1,48.21-5,56.18,56.18,0,0,1-28.56,38.14A64.06,64.06,0,0,0,134.65,108.33ZM92,212A56,56,0,0,1,65.7,106.58a64.26,64.26,0,0,0,34.61,43.12c-.2,2.07-.31,4.17-.31,6.3a63.87,63.87,0,0,0,21.35,47.67A55.71,55.71,0,0,1,92,212Zm72,0a55.71,55.71,0,0,1-29.35-8.33A63.87,63.87,0,0,0,156,156c0-2.13-.11-4.23-.31-6.3a64.26,64.26,0,0,0,34.61-43.12A56,56,0,0,1,164,212Z" }))
      ]
    ]);
    const IntersectThree = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    IntersectThree.displayName = "IntersectThree";
    Component = IntersectThree;
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
  IntersectThree_default as default
};
