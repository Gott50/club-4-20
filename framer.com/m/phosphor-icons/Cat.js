let Component;
var Cat_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M223.65,29.53a20,20,0,0,0-21.79,4.34c-.2.2-.39.4-.57.61l-15,17.3a115.34,115.34,0,0,0-116.5,0l-15-17.3c-.18-.21-.37-.41-.57-.61A20,20,0,0,0,20,48v88c0,55.14,48.45,100,108,100s108-44.86,108-100V48A20,20,0,0,0,223.65,29.53ZM212,136c0,38.22-31.35,69.93-72,75.21V197l12.49-12.49a12,12,0,0,0-17-17L128,175l-7.51-7.52a12,12,0,0,0-17,17L116,197v14.24c-40.65-5.28-72-37-72-75.21V58.74L58.54,75.47a12,12,0,0,0,16.21,1.76A86,86,0,0,1,96,65.74V88a12,12,0,0,0,24,0V60.35q4-.35,8-.35t8,.35V88a12,12,0,0,0,24,0V65.74a86.2,86.2,0,0,1,21.25,11.49,12,12,0,0,0,16.21-1.76L212,58.74Zm-112,4a16,16,0,1,1-16-16A16,16,0,0,1,100,140Zm88,0a16,16,0,1,1-16-16A16,16,0,0,1,188,140Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M224,48v88c0,48.6-43,88-96,88s-96-39.4-96-88V48a8,8,0,0,1,13.66-5.66L67.6,67.6h0a102.87,102.87,0,0,1,120.8,0h0l21.94-25.24A8,8,0,0,1,224,48Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M96,140a12,12,0,1,1-12-12A12,12,0,0,1,96,140Zm76-12a12,12,0,1,0,12,12A12,12,0,0,0,172,128Zm60-80v88c0,52.93-46.65,96-104,96S24,188.93,24,136V48A16,16,0,0,1,51.31,36.69c.14.14.26.27.38.41L69,57a111.22,111.22,0,0,1,118.1,0L204.31,37.1c.12-.14.24-.27.38-.41A16,16,0,0,1,232,48Zm-16,0-21.56,24.8A8,8,0,0,1,183.63,74,88.86,88.86,0,0,0,168,64.75V88a8,8,0,1,1-16,0V59.05a97.43,97.43,0,0,0-16-2.72V88a8,8,0,1,1-16,0V56.33a97.43,97.43,0,0,0-16,2.72V88a8,8,0,1,1-16,0V64.75A88.86,88.86,0,0,0,72.37,74a8,8,0,0,1-10.81-1.17L40,48v88c0,41.66,35.21,76,80,79.67V195.31l-13.66-13.66a8,8,0,0,1,11.32-11.31L128,180.68l10.34-10.34a8,8,0,0,1,11.32,11.31L136,195.31v20.36c44.79-3.69,80-38,80-79.67Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M222.83,33.54a16,16,0,0,0-18.14,3.15c-.14.14-.26.27-.38.41L187.05,57A111.28,111.28,0,0,0,69,57L51.69,37.1c-.12-.14-.24-.27-.38-.41a16,16,0,0,0-18.14-3.15A16.4,16.4,0,0,0,24,48.46V136c0,49,40.06,89.63,91.56,95.32a4,4,0,0,0,4.44-4v-32l-13.42-13.43a8.22,8.22,0,0,1-.41-11.37,8,8,0,0,1,11.49-.18L128,180.68l10.34-10.35a8,8,0,0,1,11.49.18,8.22,8.22,0,0,1-.41,11.37L136,195.31v32a4,4,0,0,0,4.44,4C191.94,225.62,232,185,232,136V48.46A16.4,16.4,0,0,0,222.83,33.54ZM84,152a12,12,0,1,1,12-12A12,12,0,0,1,84,152Zm20-64a8,8,0,1,1-16,0V69a8,8,0,0,1,16,0Zm32,0a8,8,0,1,1-16,0V64a8,8,0,0,1,16,0Zm16,0V69a8,8,0,0,1,16,0V88a8,8,0,1,1-16,0Zm20,64a12,12,0,1,1,12-12A12,12,0,0,1,172,152Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M221.36,35.07a14,14,0,0,0-15.26,3l-.29.3L187.42,59.58a109.16,109.16,0,0,0-118.84,0L50.19,38.41l-.29-.3A14,14,0,0,0,26,48v88c0,51.83,45.76,94,102,94s102-42.17,102-94V48A14,14,0,0,0,221.36,35.07ZM218,136c0,43.38-37.16,79-84,81.81V194.48l14.24-14.24a6,6,0,0,0-8.48-8.49L128,183.51l-11.76-11.76a6,6,0,0,0-8.48,8.49L122,194.48v23.33C75.16,215,38,179.38,38,136V48a1.91,1.91,0,0,1,1.23-1.85,2.28,2.28,0,0,1,.82-.17,1.87,1.87,0,0,1,1.26.5l21.76,25a6,6,0,0,0,8.11.88A91.52,91.52,0,0,1,90,61.68V88a6,6,0,1,0,12,0V57.51a97.85,97.85,0,0,1,20-3.32V88a6,6,0,1,0,12,0V54.19a97.85,97.85,0,0,1,20,3.32V88a6,6,0,1,0,12,0V61.68a91.52,91.52,0,0,1,18.82,10.73,6,6,0,0,0,8.11-.88l21.76-25A2,2,0,0,1,218,48ZM94,140a10,10,0,1,1-10-10A10,10,0,0,1,94,140Zm88,0a10,10,0,1,1-10-10A10,10,0,0,1,182,140Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M96,140a12,12,0,1,1-12-12A12,12,0,0,1,96,140Zm76-12a12,12,0,1,0,12,12A12,12,0,0,0,172,128Zm60-80v88c0,52.93-46.65,96-104,96S24,188.93,24,136V48A16,16,0,0,1,51.31,36.69c.14.14.26.27.38.41L69,57a111.22,111.22,0,0,1,118.1,0L204.31,37.1c.12-.14.24-.27.38-.41A16,16,0,0,1,232,48Zm-16,0-21.56,24.8A8,8,0,0,1,183.63,74,88.86,88.86,0,0,0,168,64.75V88a8,8,0,1,1-16,0V59.05a97.43,97.43,0,0,0-16-2.72V88a8,8,0,1,1-16,0V56.33a97.43,97.43,0,0,0-16,2.72V88a8,8,0,1,1-16,0V64.75A88.86,88.86,0,0,0,72.37,74a8,8,0,0,1-10.81-1.17L40,48v88c0,41.66,35.21,76,80,79.67V195.31l-13.66-13.66a8,8,0,0,1,11.32-11.31L128,180.68l10.34-10.34a8,8,0,0,1,11.32,11.31L136,195.31v20.36c44.79-3.69,80-38,80-79.67Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M220.59,36.94a11.83,11.83,0,0,0-13.08,2.61l-.19.2L187.77,62.24a107.1,107.1,0,0,0-119.54,0L48.68,39.75l-.19-.2A12,12,0,0,0,28,48v88c0,50.72,44.86,92,100,92s100-41.27,100-92V48A11.82,11.82,0,0,0,220.59,36.94ZM220,136c0,45.09-39.12,82-88,83.91V193.66l14.83-14.83a4,4,0,1,0-5.66-5.65L128,186.35l-13.17-13.17a4,4,0,1,0-5.66,5.65L124,193.66v26.26C75.12,218,36,181.1,36,136V48a3.93,3.93,0,0,1,2.47-3.7,4.39,4.39,0,0,1,1.6-.31,3.77,3.77,0,0,1,2.67,1.1L64.58,70.23a4,4,0,0,0,5.4.59A94,94,0,0,1,92,58.74V88a4,4,0,0,0,8,0V56a100.07,100.07,0,0,1,24-3.93V88a4,4,0,0,0,8,0V52.09A100.07,100.07,0,0,1,156,56V88a4,4,0,0,0,8,0V58.74a94,94,0,0,1,22,12.08,4,4,0,0,0,5.4-.59l21.84-25.11A4,4,0,0,1,220,48ZM92,140a8,8,0,1,1-8-8A8,8,0,0,1,92,140Zm88,0a8,8,0,1,1-8-8A8,8,0,0,1,180,140Z" }))
      ]
    ]);
    const Cat = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    Cat.displayName = "Cat";
    Component = Cat;
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
  Cat_default as default
};
