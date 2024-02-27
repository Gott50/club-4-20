let Component;
var ChargingStation_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M137.94,121.27a12,12,0,0,1,1.2,11.19l-16,40A12,12,0,0,1,112,180a11.86,11.86,0,0,1-4.46-.86,12,12,0,0,1-6.68-15.6L110.28,140H96a12,12,0,0,1-11.14-16.46l16-40a12,12,0,0,1,22.28,8.92L113.72,116H128A12,12,0,0,1,137.94,121.27ZM256,86.63V166a30,30,0,0,1-60,0V128a4,4,0,0,0-4-4H180v80h12a12,12,0,0,1,0,24H32a12,12,0,0,1,0-24H44V56A28,28,0,0,1,72,28h80a28,28,0,0,1,28,28v44h12a28,28,0,0,1,28,28v38a6,6,0,0,0,12,0V86.63a4,4,0,0,0-1.17-2.83L211.51,64.49a12,12,0,0,1,17-17L247.8,66.83A27.81,27.81,0,0,1,256,86.63ZM156,204V56a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4V204Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M168,56V216H56V56A16,16,0,0,1,72,40h80A16,16,0,0,1,168,56Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M134.62,123.51a8,8,0,0,1,.81,7.46l-16,40A8,8,0,0,1,104.57,165l11.61-29H96a8,8,0,0,1-7.43-11l16-40A8,8,0,1,1,119.43,91l-11.61,29H128A8,8,0,0,1,134.62,123.51ZM248,86.63V168a24,24,0,0,1-48,0V128a8,8,0,0,0-8-8H176v88h16a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H48V56A24,24,0,0,1,72,32h80a24,24,0,0,1,24,24v48h16a24,24,0,0,1,24,24v40a8,8,0,0,0,16,0V86.63A8,8,0,0,0,229.66,81L210.34,61.66a8,8,0,0,1,11.32-11.32L241,69.66A23.85,23.85,0,0,1,248,86.63ZM160,208V56a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM135.43,131l-16,40A8,8,0,0,1,104.57,165l11.61-29H96a8,8,0,0,1-7.43-11l16-40A8,8,0,1,1,119.43,91l-11.61,29H128a8,8,0,0,1,7.43,11Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M133,124.64a6,6,0,0,1,.6,5.59l-16,40a6,6,0,1,1-11.14-4.46L119.14,134H96a6,6,0,0,1-5.57-8.23l16-40a6,6,0,0,1,11.14,4.46L104.86,122H128A6,6,0,0,1,133,124.64Zm113-38V168a22,22,0,0,1-44,0V128a10,10,0,0,0-10-10H174v92h18a6,6,0,0,1,0,12H32a6,6,0,0,1,0-12H50V56A22,22,0,0,1,72,34h80a22,22,0,0,1,22,22v50h18a22,22,0,0,1,22,22v40a10,10,0,0,0,20,0V86.63a9.93,9.93,0,0,0-2.93-7.07L211.76,60.24a6,6,0,0,1,8.48-8.48l19.32,19.31A21.88,21.88,0,0,1,246,86.63ZM162,210V56a10,10,0,0,0-10-10H72A10,10,0,0,0,62,56V210Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M134.62,123.51a8,8,0,0,1,.81,7.46l-16,40A8,8,0,0,1,104.57,165l11.61-29H96a8,8,0,0,1-7.43-11l16-40A8,8,0,1,1,119.43,91l-11.61,29H128A8,8,0,0,1,134.62,123.51ZM248,86.63V168a24,24,0,0,1-48,0V128a8,8,0,0,0-8-8H176v88h16a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H48V56A24,24,0,0,1,72,32h80a24,24,0,0,1,24,24v48h16a24,24,0,0,1,24,24v40a8,8,0,0,0,16,0V86.63A8,8,0,0,0,229.66,81L210.34,61.66a8,8,0,0,1,11.32-11.32L241,69.66A23.85,23.85,0,0,1,248,86.63ZM160,208V56a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M131.31,125.76a4,4,0,0,1,.4,3.73l-16,40A4,4,0,0,1,112,172a3.91,3.91,0,0,1-1.49-.29,4,4,0,0,1-2.22-5.2L122.09,132H96a4,4,0,0,1-3.71-5.49l16-40a4,4,0,1,1,7.42,3L101.91,124H128A4,4,0,0,1,131.31,125.76ZM244,86.63V168a20,20,0,0,1-40,0V128a12,12,0,0,0-12-12H172v96h20a4,4,0,0,1,0,8H32a4,4,0,0,1,0-8H52V56A20,20,0,0,1,72,36h80a20,20,0,0,1,20,20v52h20a20,20,0,0,1,20,20v40a12,12,0,0,0,24,0V86.63a12,12,0,0,0-3.51-8.49L213.17,58.83a4,4,0,0,1,5.66-5.66l19.31,19.32A19.85,19.85,0,0,1,244,86.63ZM164,212V56a12,12,0,0,0-12-12H72A12,12,0,0,0,60,56V212Z" }))
      ]
    ]);
    const ChargingStation = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    ChargingStation.displayName = "ChargingStation";
    Component = ChargingStation;
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
  ChargingStation_default as default
};
