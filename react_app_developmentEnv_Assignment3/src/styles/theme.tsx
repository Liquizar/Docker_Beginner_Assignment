// import { createTheme } from "@mui/material";
// import type { Theme } from "@mui/material";

// export const ColorPalette = {
//   fontDark: "#101727",
//   fontLight: "#f0f0f0",
//   purple: "#b624ff",
//   red: "#ff3131",
// } as const;

// const commonComponentProps: Theme["components"] = {
//   MuiTooltip: {
//     defaultProps: {
//       disableInteractive: true,
//       style: {
//         backdropFilter: "blur(6px)",
//         WebkitBackdropFilter: "blur(6px)",
//       },
//     },
//   },
//   MuiButton: {
//     defaultProps: {
//       sx: {
//         p: "12px 24px",
//         borderRadius: "14px",
//       },
//     },
//   },
//   MuiSelect: {
//     defaultProps: {
//       style: {
//         borderRadius: "18px",
//       },
//     },
//   },
//   MuiDialog: {
//     defaultProps: {
//       PaperProps: {
//         style: {
//           padding: "12px",
//           borderRadius: "24px",
//         },
//       },
//     },
//   },
//   MuiInput: {
//     defaultProps: {
//       style: {
//         color: "black",
//       },
//     },
//   },
// };

// export const createCustomTheme = (primaryColor: string, backgroundColor = "#232e58"): Theme => {
//   return createTheme({
//     components: {
//       ...commonComponentProps,
//     },
//     palette: {
//       primary: {
//         main: primaryColor,
//       },
//       secondary: {
//         main: backgroundColor,
//       },
//       error: {
//         main: ColorPalette.red,
//       },
//     },
//   });
// };

// export type AppTheme = "system" | "purple" | "light purple" | "blue" | "pink" | "ultra pink";
// /**
//  * ### To add a new theme:
//  * - Update the AppTheme interface with the new theme name.
//  * - Create a new Mui theme using `createCustomTheme()`.
//  * - Add the new theme to the `Themes` object with its `name` and `MuiTheme`.
//  */
// export const Themes: { name: Exclude<AppTheme, "system">; MuiTheme: Theme }[] = [
//   {
//     name: "purple", // system dark
//     MuiTheme: createCustomTheme(ColorPalette.purple),
//   },
//   {
//     name: "light purple", // system light
//     MuiTheme: createCustomTheme(ColorPalette.purple, "#edeef6"),
//   },
//   {
//     name: "blue",
//     MuiTheme: createCustomTheme("#2a93d5"),
//   },
//   {
//     name: "pink",
//     MuiTheme: createCustomTheme("#e5369a"),
//   },
//   {
//     name: "ultra pink",
//     MuiTheme: createCustomTheme("#ff0090", "#ff94d1"),
//   },
// ];
import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material";

export const ColorPalette = {
  fontDark: "#222222",
  fontLight: "#ffffff",
  Blue: "#0B72B9", 
  Green: "#4CAF50", 
} as const;

const commonComponentProps: Theme["components"] = {
  MuiTooltip: {
    defaultProps: {
      disableInteractive: true,
      style: {
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      },
    },
  },
  MuiButton: {
    defaultProps: {
      sx: {
        p: "12px 24px",
        borderRadius: "14px",
      },
    },
  },
  MuiSelect: {
    defaultProps: {
      style: {
        borderRadius: "18px",
      },
    },
  },
  MuiDialog: {
    defaultProps: {
      PaperProps: {
        style: {
          padding: "12px",
          borderRadius: "24px",
        },
      },
    },
  },
  MuiInput: {
    defaultProps: {
      style: {
        color: ColorPalette.fontDark,
      },
    },
  },
};

export const createCustomTheme = (primaryColor: string, backgroundColor = "#f4f4f4"): Theme => {
  return createTheme({
    components: {
      ...commonComponentProps,
    },
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: ColorPalette.Green,
      },
      error: {
        main: "#cc0000", // Darker red color
      },
      background: {
        default: backgroundColor,
      },
    },
  });
};

export type AppTheme = "system" | "Blue" | "blue" | "green" | "ultra green";

export const Themes: { name: Exclude<AppTheme, "system">; MuiTheme: Theme }[] = [
  {
    name: "Blue",
    MuiTheme: createCustomTheme(ColorPalette.Blue),
  },
  {
    name: "blue",
    MuiTheme: createCustomTheme("#2a93d5"),
  },
  {
    name: "green",
    MuiTheme: createCustomTheme("#4CAF50"),
  },
  {
    name: "ultra green",
    MuiTheme: createCustomTheme("#4CAF50", "#C8E6C9"),
  },
];
