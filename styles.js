import {Platform, StyleSheet} from "react-native";
import {horizontalScale, verticalScale} from "../../../theme/metrics";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
    leftComponentContainer:{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: horizontalScale(7),
        top: verticalScale(8),
        marginRight: horizontalScale(0),
    },
   
    rightComponentContainer:{
        justifyContent: "flex-end",
        alignItems: "flex-start",
        // backgroundColor: "black",
        height: verticalScale(70)
    },
    dropdownArrow: {
        tintColor: colors.textGrey4,
        objectFit: "contain",
        width: horizontalScale(24),
        height: verticalScale(24),
        bottom: verticalScale(15)
    },
    InputContainerStyles: {
        borderWidth: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: verticalScale(76),
        borderColor: colors.focusedInputFieldBorder,
        backgroundColor: colors.focusedInputFieldBackground,
        position: 'relative',
        paddingRight: horizontalScale(10)
    },
    customLabelStyles: {
        colorFocused: colors.inputFieldLabel,
        colorBlurred: colors.inputFieldLabel,
        fontSizeFocused: 16,
        fontSizeBlurred: 16,

    },
    labelStyles:{
        fontFamily: "Manrope-Medium",
        fontSize: 17,
        // marginLeft: horizontalScale(82),
        paddingHorizontal: horizontalScale(10),
    },
    inputStyles:{
        fontSize: 18,
        fontFamily: "Manrope-Medium",
        color: colors.textTertiary,
        top: verticalScale(9),
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(15),
    },
    invisibleSelectMobileNumberButton: {
        borderRadius: 8,
        paddingVertical: verticalScale(24),
        borderWidth:0,
        opacity: 0,
        width: '100%',
        position: 'absolute'
    },
    mobileNumberDropdownItem:{
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(8),
    },
    mobileNumberDropdown: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: colors.focusedInputFieldBorder,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        backgroundColor: "white",
        paddingVertical: verticalScale(8),
        marginBottom: verticalScale(10),
    },
    mobileNumberDropdownItemText:{
        fontSize: 18,
        color: colors.textTertiary
    },

    hiddenStyle:{
        opacity: 0,
        position: 'absolute',
        height: 0,
        width: 0,
      }
});

export default styles;
