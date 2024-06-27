
import React, { useState, useContext } from "react";
import { Image, Text, ScrollView, TouchableOpacity, View } from "react-native";
import { verticalScale } from "../../../theme/metrics";
import { FloatingLabelInput } from "react-native-floating-label-input/index";
import styles from "./styles";
import colors from "../../../theme/colors";
import UnscalableText from "../UnscalableText";
import { use } from "i18next";

const PatientProfileNames = [
    { label: "Data 1" },
    { label: "Data 2" }
];





function GreenDropdown(props) {
    
    const [mobileNumberDropdown, TogglePatientProfileDropdown] = useState("hide");
    const [patientName, setPatientName] = useState(null)
    const [companyName,setCompanyName] = useState(null)
    const [isCompanyData,setIsCompanyData] = useState(false)
    const isDropdownVisible = mobileNumberDropdown === "show";
    
    // The Difference between GreenDropdown component & GreenDropdown2 component is the space occupied by the dropdown content's View element.
    // Dropdown Content2 component's view would have stylesheet similar to css's display none if not in active state

    return (
        <View style={{ marginTop: props.marginTop ? verticalScale(marginTop) : 0 }} >
            <FloatingLabelInput
                allowFontScaling={false}
                labelProps={{ allowFontScaling: false }}
                animationDuration={150}
                label={props.label?props.label:"Patient Profile"}
                // value={PatientProfileNames[0].label}
                value={patientName?patientName.label:"Select"}
                editable={false}
                isCompanyData={props.isCompanyData?props.isCompanyData:false}
                companyDataList={props.companyDataList?props.companyDataList:null}

                rightComponent={<View style={styles.rightComponentContainer}>
                    <Image style={styles.dropdownArrow} source={require("../../../../assets/arrow-down.png")} />
                </View>}
                containerStyles={props.containerStyles ? props.containerStyles : [styles.InputContainerStyles, {
                    borderBottomLeftRadius: mobileNumberDropdown === "show" ? 0 : 8,
                    borderBottomRightRadius: mobileNumberDropdown === "show" ? 0 : 8
                }]}
                customLabelStyles={styles.customLabelStyles}
                labelStyles={props.labelStyles ? props.labelStyles : styles.labelStyles}
                inputStyles={props.inputStyles ? props.inputStyles : styles.inputStyles}
            />

            <TouchableOpacity activeOpacity={1} style={styles.invisibleSelectMobileNumberButton} onPress={() => {
                console.log("toggle mobile number select");
                if (mobileNumberDropdown === "hide") {
                    TogglePatientProfileDropdown("show");
                } else {
                    TogglePatientProfileDropdown("hide");
                }
            }} >
                <UnscalableText></UnscalableText>
            </TouchableOpacity>

            {/* {TogglePatientProfileDropdown("show")?<View style={[TogglePatientProfileDropdown?styles.mobileNumberDropdown:styles.hiddenStyle ,{opacity: mobileNumberDropdown === "hide" ? 0 : 1}]}>
                {PatientProfileNames.map((item, index) => {
                    return (
                        <View key={index} style={styles.mobileNumberDropdownItem} onTouchEnd={()=>{
                            setPhone(item);
                            TogglePatientProfileDropdown("hide");
                        }} >
                            <UnscalableText style={styles.mobileNumberDropdownItemText} >{item.label}</UnscalableText>
                        </View>
                    );
                })}
            </View>:null} */}

            {isDropdownVisible && (
                <ScrollView style={[styles.mobileNumberDropdown, { opacity: isDropdownVisible ? 1 : 0 }]}>

                    

               
                    {isCompanyData?companyDataList.map((item, index) => (
                        <TouchableOpacity
                        key={index}
                        style={styles.mobileNumberDropdownItem}
                        onPress={() => {
                            setCompanyName(item);
                            TogglePatientProfileDropdown("hide");
                        }}>
                        <UnscalableText style={styles.mobileNumberDropdownItemText}>{item.label}</UnscalableText>
                    </TouchableOpacity>
                    )):
                    PatientProfileNames.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.mobileNumberDropdownItem}
                            onPress={() => {
                                setPatientName(item);
                                TogglePatientProfileDropdown("hide");
                            }}>
                            <UnscalableText style={styles.mobileNumberDropdownItemText}>{item.label}</UnscalableText>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};



export default GreenDropdown;
