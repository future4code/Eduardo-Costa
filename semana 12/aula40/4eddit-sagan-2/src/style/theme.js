import {createMuiTheme} from "@material-ui/core";

export default createMuiTheme({
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "background": {
            "paper": "#fff",
            "default": "rgba(219, 224, 230, 1)"
        },
        "primary": {
            "light": "rgba(88, 175, 240, 1)",
            "main": "rgba(0, 121, 210, 1)",
            "dark": "rgba(0, 71, 125, 1)",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "rgba(193, 198, 201, 1)",
            "main": "rgba(134, 138, 141, 1)",
            "dark": "rgba(102, 105, 107, 1)",
            "contrastText": "rgba(255, 255, 255, 1)"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 121, 210, 1)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(65, 117, 5, 1)"
        }
    }
});
