import { DefaultTheme } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import colors from "../config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
