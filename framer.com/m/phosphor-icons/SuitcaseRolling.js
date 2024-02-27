let Component;
var SuitcaseRolling_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M116,96v80a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Zm24,0v80a12,12,0,0,0,24,0V96a12,12,0,0,0-24,0Zm72-32V208a20,20,0,0,1-20,20H180v12a12,12,0,0,1-24,0V228H100v12a12,12,0,0,1-24,0V228H64a20,20,0,0,1-20-20V64A20,20,0,0,1,64,44H84V28A28,28,0,0,1,112,0h32a28,28,0,0,1,28,28V44h20A20,20,0,0,1,212,64ZM108,44h40V28a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4Zm80,24H68V204H188Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M200,64V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H192A8,8,0,0,1,200,64Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M104,88v96a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V88A8,8,0,0,0,128,80Zm32,0a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V88A8,8,0,0,0,160,80Zm48-16V208a16,16,0,0,1-16,16H176v16a8,8,0,0,1-16,0V224H96v16a8,8,0,0,1-16,0V224H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H88V24A24,24,0,0,1,112,0h32a24,24,0,0,1,24,24V48h24A16,16,0,0,1,208,64ZM104,48h48V24a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8Zm88,160V64H64V208H192Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M192,48H168V24A24,24,0,0,0,144,0H112A24,24,0,0,0,88,24V48H64A16,16,0,0,0,48,64V208a16,16,0,0,0,16,16H80v16a8,8,0,0,0,16,0V224h64v16a8,8,0,0,0,16,0V224h16a16,16,0,0,0,16-16V64A16,16,0,0,0,192,48ZM96,192a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm40,0a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0ZM152,48H104V24a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8Zm24,144a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M102,88v96a6,6,0,0,1-12,0V88a6,6,0,0,1,12,0Zm26-6a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V88A6,6,0,0,0,128,82Zm32,0a6,6,0,0,0-6,6v96a6,6,0,0,0,12,0V88A6,6,0,0,0,160,82Zm46-18V208a14,14,0,0,1-14,14H174v18a6,6,0,0,1-12,0V222H94v18a6,6,0,0,1-12,0V222H64a14,14,0,0,1-14-14V64A14,14,0,0,1,64,50H90V24A22,22,0,0,1,112,2h32a22,22,0,0,1,22,22V50h26A14,14,0,0,1,206,64ZM102,50h52V24a10,10,0,0,0-10-10H112a10,10,0,0,0-10,10Zm92,14a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H192a2,2,0,0,0,2-2Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M104,88v96a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm24-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V88A8,8,0,0,0,128,80Zm32,0a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V88A8,8,0,0,0,160,80Zm48-16V208a16,16,0,0,1-16,16H176v16a8,8,0,0,1-16,0V224H96v16a8,8,0,0,1-16,0V224H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H88V24A24,24,0,0,1,112,0h32a24,24,0,0,1,24,24V48h24A16,16,0,0,1,208,64ZM104,48h48V24a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8Zm88,160V64H64V208H192Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M100,88v96a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Zm28-4a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V88A4,4,0,0,0,128,84Zm32,0a4,4,0,0,0-4,4v96a4,4,0,0,0,8,0V88A4,4,0,0,0,160,84Zm44-20V208a12,12,0,0,1-12,12H172v20a4,4,0,0,1-8,0V220H92v20a4,4,0,0,1-8,0V220H64a12,12,0,0,1-12-12V64A12,12,0,0,1,64,52H92V24A20,20,0,0,1,112,4h32a20,20,0,0,1,20,20V52h28A12,12,0,0,1,204,64ZM100,52h56V24a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12Zm96,12a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4Z" }))
      ]
    ]);
    const SuitcaseRolling = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    SuitcaseRolling.displayName = "SuitcaseRolling";
    Component = SuitcaseRolling;
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
  SuitcaseRolling_default as default
};
