import {createMuiTheme} from "@material-ui/core";

// export default createMuiTheme({
// palette: {
//     primary: white,
//     secondary: white,
//     background: {
//       // default: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)'}
//       default: "#0f2027"
//       // default: "#0F2027"  /* fallback for old browsers */,
//       // default: "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)"  /* Chrome 10-25, Safari 5.1-6 */,
//       // default: "linear-gradient(to right, #2C5364, #203A43, #0F2027)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


//     }
// }});


// {"palette":{"common":{"black":"rgba(0, 0, 0, 1)","white":"rgba(255, 255, 255, 1)"},"background":{"paper":"rgba(255, 255, 255, 1)","default":"rgba(15, 32, 39, 1)"},"primary":{"light":"rgba(105, 179, 210, 1)","main":"rgba(80, 138, 162, 1)","dark":"rgba(51, 85, 99, 1)","contrastText":"rgba(255, 255, 255, 1)"},"secondary":{"light":"rgba(160, 160, 160, 1)","main":"rgba(77, 78, 77, 1)","dark":"rgba(49, 49, 49, 1)","contrastText":"rgba(255, 255, 255, 1)"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(0, 0, 0, 1)","disabled":"rgba(255, 255, 255, 1)","hint":"rgba(0, 0, 0, 1)"}}}


// export default createMuiTheme({});
// export default createMuiTheme({
//     "palette": {
//         "common": {
//             "black": "rgba(0, 0, 0, 1)",
//             "white": "rgba(255, 255, 255, 1)"
//         },
//         "background": {
//             "paper": "rgba(255, 255, 255, 1)",
//             "default": "rgba(15, 32, 39, 1)"
//         },
//         "primary": {
//             "light": "rgba(105, 179, 210, 1)",
//             "main": "rgba(80, 138, 162, 1)",
//             "dark": "rgba(51, 85, 99, 1)",
//             "contrastText": "rgba(255, 255, 255, 1)"
//         },
//         "secondary": {
//             "light": "rgba(160, 160, 160, 1)",
//             "main": "rgba(77, 78, 77, 1)",
//             "dark": "rgba(49, 49, 49, 1)",
//             "contrastText": "rgba(255, 255, 255, 1)"
//         },
//         "error": {
//             "light": "#e57373",
//             "main": "#f44336",
//             "dark": "#d32f2f",
//             "contrastText": "#fff"
//         },
//         "text": {
//             "primary": "rgba(255, 255, 255, 1)",
//             "secondary": "rgba(0, 0, 0, 1)",
//             "disabled": "rgba(255, 255, 255, 1)",
//             "hint": "rgba(0, 0, 0, 1)"
//         }
//     }
// });

export default createMuiTheme({
    palette: {
        primary: {
            light: '#36474f',
            main: '#0f2027',
            dark: '#000000',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#ffffff',
            main: '#e0e0e0',
            dark: '#aeaeae',
            contrastText: '#000000'
        },
        background: {
            paper: "rgba(255, 255, 255, 0.6)",
            default: "#fafafa",
        },
    },
    typography: {
        useNextVariants: true,
      },
});
