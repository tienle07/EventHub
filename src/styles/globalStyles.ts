/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { appColors } from "../constants/appColors";
import { fontFamilies } from "../constants/fontFamily";


export const globalStyles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: appColors.white,
   },
   text: {
      fontFamily: fontFamilies.regular,
      fontSize: 14,
      color: appColors.text,
    },
});