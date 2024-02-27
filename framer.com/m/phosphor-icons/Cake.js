let Component;
var Cake_default = (React) => {
  if (!Component) {
    const weights = /* @__PURE__ */ new Map([
      [
        "bold",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M236,112a28,28,0,0,0-28-28H140V81.94A36.07,36.07,0,0,0,164,48c0-31.06-29.38-46.11-30.63-46.73a12,12,0,0,0-10.74,0C121.38,1.89,92,16.94,92,48a36.07,36.07,0,0,0,24,33.94V84H48a28,28,0,0,0-28,28v23.33a44.7,44.7,0,0,0,8,25.49V200a28,28,0,0,0,28,28H200a28,28,0,0,0,28-28V160.82a44.7,44.7,0,0,0,8-25.49ZM124,29.93a42.49,42.49,0,0,1,4-3.57,41.26,41.26,0,0,1,4,3.57c5.33,5.52,8,11.6,8,18.07a12,12,0,0,1-24,0C116,41.53,118.71,35.45,124,29.93ZM44,112a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4v23.33c0,11.1-8.72,20.37-19.43,20.66A20,20,0,0,1,172,136a12,12,0,0,0-24,0,20,20,0,0,1-40,0,12,12,0,0,0-24,0,20,20,0,0,1-20.57,20C52.72,155.7,44,146.43,44,135.33Zm156,92H56a4,4,0,0,1-4-4V178.29A42.65,42.65,0,0,0,62.77,180a43.68,43.68,0,0,0,31.91-12.44c.46-.44.9-.9,1.33-1.35a44,44,0,0,0,64,0c.43.45.87.91,1.33,1.35A43.66,43.66,0,0,0,192,180l1.25,0A42.65,42.65,0,0,0,204,178.29V200A4,4,0,0,1,200,204Z" }))
      ],
      [
        "duotone",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
          "path",
          {
            d: "M104,48c0-24,24-40,24-40s24,16,24,40a24,24,0,0,1-48,0ZM208,96H48a16,16,0,0,0-16,16v23.33c0,17.44,13.67,32.18,31.1,32.66A32,32,0,0,0,96,136a32,32,0,0,0,64,0,32,32,0,0,0,32.9,32c17.43-.48,31.1-15.22,31.1-32.66V112A16,16,0,0,0,208,96Z",
            opacity: "0.2"
          }
        ), /* @__PURE__ */ React.createElement("path", { d: "M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z" }))
      ],
      [
        "fill",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M208,88H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24V112A24,24,0,0,0,208,88ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0Zm104,87.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33V112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Z" }))
      ],
      [
        "light",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M230,112a22,22,0,0,0-22-22H134V77.4A30.05,30.05,0,0,0,158,48c0-26.9-25.58-44.27-26.67-45a6,6,0,0,0-6.66,0C123.58,3.73,98,21.1,98,48a30.05,30.05,0,0,0,24,29.4V90H48a22,22,0,0,0-22,22v23.33a38.81,38.81,0,0,0,8,23.57V200a22,22,0,0,0,22,22H200a22,22,0,0,0,22-22V158.9a38.81,38.81,0,0,0,8-23.57ZM110,48c0-15.4,12-27.41,18-32.44,6,5,18,17,18,32.44a18,18,0,0,1-36,0ZM38,112a10,10,0,0,1,10-10H208a10,10,0,0,1,10,10v23.33c0,14.32-11.33,26.28-25.26,26.66A26,26,0,0,1,166,136a6,6,0,0,0-12,0,26,26,0,0,1-52,0,6,6,0,0,0-12,0,26,26,0,0,1-26.74,26C49.33,161.61,38,149.65,38,135.33Zm162,98H56a10,10,0,0,1-10-10V169.31A36.8,36.8,0,0,0,62.94,174,37.82,37.82,0,0,0,90.5,163.24,38.83,38.83,0,0,0,96,156.5a38,38,0,0,0,64,0,38.83,38.83,0,0,0,5.52,6.74A37.73,37.73,0,0,0,192,174h1.07A36.8,36.8,0,0,0,210,169.31V200A10,10,0,0,1,200,210Z" }))
      ],
      [
        "regular",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z" }))
      ],
      [
        "thin",
        /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", { d: "M228,112a20,20,0,0,0-20-20H132V75.71A28,28,0,0,0,156,48c0-25.84-24.73-42.63-25.78-43.33a4,4,0,0,0-4.44,0C124.73,5.37,100,22.16,100,48a28,28,0,0,0,24,27.71V92H48a20,20,0,0,0-20,20v23.33a36.85,36.85,0,0,0,8,22.91V200a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V158.24a36.85,36.85,0,0,0,8-22.91ZM108,48c0-17.39,14.37-30.53,20-35,5.63,4.48,20,17.62,20,35a20,20,0,0,1-40,0Zm92,164H56a12,12,0,0,1-12-12V165.73A35.16,35.16,0,0,0,63,172a36.13,36.13,0,0,0,33-19.48,36,36,0,0,0,64,0A36.13,36.13,0,0,0,192,172h1a35.16,35.16,0,0,0,19-6.26V200A12,12,0,0,1,200,212Zm20-76.67c0,15.39-12.21,28.25-27.21,28.66A28,28,0,0,1,164,136a4,4,0,0,0-8,0,28,28,0,0,1-56,0,4,4,0,0,0-8,0,28,28,0,0,1-28.79,28c-15-.41-27.21-13.27-27.21-28.66V112a12,12,0,0,1,12-12H208a12,12,0,0,1,12,12Z" }))
      ]
    ]);
    const Cake = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement("g", { ref, ...props }, weights.get(props.weight)));
    Cake.displayName = "Cake";
    Component = Cake;
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
  Cake_default as default
};
