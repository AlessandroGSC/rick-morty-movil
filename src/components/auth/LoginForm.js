import { 
    View, Text, StyleSheet, Keyboard, Dimensions, Image,
    ImageBackground,
    ScrollView
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { user, userDetail } from './../../utils/userDB';
import { SvgXml } from 'react-native-svg'
import rickImg from '../../assets/rick_morty_login.png';
import backgroundScreen1 from '../../assets/background-login.jpg';
import backgroundScreen2 from '../../assets/Back_login_1.jpg';
import componentTop1 from '../../assets/component-top.png';
import componentTop2 from '../../assets/component-top-2.png';
import { TextInput, Button, Snackbar, HelperText } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../../hooks/useAuth';


const { width, height } = Dimensions.get('screen');

export default function LoginForm() {

    const { login } = useAuth();
    console.log(useAuth());

    const [errors, setErrors] = useState("");
    const [dataUser, setDataUser] = useState({});
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [propSnackAlert, setPropSnackAlert] = useState({
        show: false,
        snackMessage: "",
        snackBackground: '#219EBC',
        iconColor: "#00d0ff",
        iconName: "exclamationcircle"
    });
    const [kuaSecureTextEntry, setKuaSecureTextEntry] = useState({
        isSecureText: true,
        colorIcon: '#fff',
        icon: "eye",
    });

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formData) => {
            setErrors('');
            setDataUser({});
            const { username, password } = formData;
            if(username != user.username || password != user.password) {
                console.log('Usuario o contraseña incorrectos');
                setErrors('Usuario o contraseña incorrecto');
                setPropSnackAlert({
                    snackMessage: 'Usuario o contraseña incorrecto',
                    snackBackground: '#219EBC',
                    iconColor: '#00d0ff',
                    iconName: 'exclamationcircle',
                    show: true,
                });
            }else {
                console.log('Login correto');
                setDataUser(formData);
                console.log(dataUser);
                login(userDetail);
                console.log(useAuth());
                // navigation.navigate('BottomNavigation', {
                // });
            }
        }
    });

    function validationSchema() {
        return {
            username: Yup.string().required('El nombre de usuario es obligatorio'),
            password: Yup.string().required('La contraseña de obligatoria')
        }
    }

    function initialValues() {
        return {
            username: '',
            password: '',
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#219EBC' style='light'/>
            <ImageBackground
                source={backgroundScreen1}
                style={styles.container}
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                >

                    <View style={styles.containerSvg}>
                        {/* <SvgXml 
                            width={width}
                            height={height}
                            xml={fondoSvg}
                            style={styles.fondoLogin}
                        /> */}
                        <ImageBackground
                            source={componentTop2}
                            style={{height: 500, width: width, top: 80}}
                        >
                             
                        </ImageBackground>
                        <Image 
                            source={rickImg}
                            style={{width: width, height: 250, top: 0, position: 'absolute'}}
                        />
                    </View>
                    <Text style={styles.titleText}>Inicio de sesión</Text>
                    <View style={styles.containerLogin}>

                        <TextInput 
                            label={"Nombre de usuario"}
                            autoCapitalize='none'
                            value={formik.values.username}
                            mode={"outlined"}
                            style={styles.input}
                            underlineColor='#fff'
                            activeUnderlineColor='#fff'
                            outlineColor='#00d6fc'
                            activeOutlineColor='#00d6fc'
                            textColor={'#fff'}
                            onChangeText={(text) => formik.setFieldValue('username', text)}
                            // outlineColor={"inpActividad" in validations ? Palette.colors.danger600 : Palette.colors.input}
                        />
                        <View
                            style={{
                                display: formik.errors.username != undefined ? "flex" : "none",
                                marginHorizontal: 10
                            }}
                        >
                            <HelperText type="error" style={{ paddingLeft: 0, color: '#00d4ff' }}>
                                <MaterialCommunityIcons
                                    name="alert-circle-outline"
                                    size={16}
                                    color={'#00d4ff'}
                                />
                                {" " + formik.errors.username}
                            </HelperText>
                        </View>
                        <TextInput 
                            label={"Contraseña"}
                            autoCapitalize='none'
                            secureTextEntry={kuaSecureTextEntry.isSecureText}
                            value={formik.values.password}
                            mode={"outlined"}
                            style={styles.input}
                            underlineColor='#fff'
                            activeUnderlineColor='#fff'
                            outlineColor='#00d6fc'
                            activeOutlineColor='#00d6fc'
                            textColor={'#fff'}
                            onChangeText={(text) => formik.setFieldValue('password', text)}
                            right={
                                <TextInput.Icon
                                    name="eye"
                                    color={'#00d6fc'}
                                    onPress={() => {
                                        setShowPassword(!showPassword);
                                        setKuaSecureTextEntry({...kuaSecureTextEntry, isSecureText: !kuaSecureTextEntry.isSecureText, icon: kuaSecureTextEntry.isSecureText === true ? "eye-off" : "eye"});

                                        return false;
                                    }}
                                />
                            }
                            // outlineColor={"inpActividad" in validations ? Palette.colors.danger600 : Palette.colors.input}
                        />
                        <View
                            style={{
                                display: formik.errors.password != undefined ? "flex" : "none",
                                marginHorizontal: 10
                            }}
                        >
                            <HelperText type="error" style={{ paddingLeft: 0, color: '#00d4ff' }}>
                                <MaterialCommunityIcons
                                    name="alert-circle-outline"
                                    size={16}
                                    color={'#00d4ff'}
                                />
                                {" " + formik.errors.password}
                            </HelperText>
                        </View>

                        {/* <TextInput 
                            placeholder='Nombre de usuario'
                            style={styles.input}
                            autoCapitalize='none'
                            value={formik.values.username}
                            onChangeText={(text) => formik.setFieldValue('username', text)}
                        /> */}
                        {/* <TextInput 
                            placeholder='Contraseña'
                            style={styles.input}
                            autoCapitalize='none'
                            secureTextEntry={true}
                            value={formik.values.password}
                            onChangeText={(text) => formik.setFieldValue('password', text)}
                        /> */}
                        {/* <Button title='Iniciar sesión' onPress={formik.handleSubmit}/> */}

                        <Button
                            icon="send"
                            mode="contained"
                            style={styles.btnLogin}
                            onPress={formik.handleSubmit}
                        >
                            Iniciar sesión
                        </Button>
                        
                        <View style={{marginTop: 80}}>

                            <Snackbar
                                visible={propSnackAlert.show}
                                onDismiss={() => setPropSnackAlert({...propSnackAlert, show: false})}
                                style={{
                                    backgroundColor: propSnackAlert.snackBackground,
                                    zIndex: 100,
                                    borderRadius: 15
                                }}
                                action={{
                                    label: 'Aceptar',
                                    textColor: '#fff',
                                    onPress: () => {
                                        setPropSnackAlert({...propSnackAlert, show: false})
                                    },
                                }}
                                theme={{ colors: { accent: '#fff' } }}
                                duration={4000}
                                
                            >
                                <View style={{flexDirection: 'row', padding: 5}}>
                                    <AntDesign name={propSnackAlert.iconName} size={20} color={propSnackAlert.iconColor} />
                                    <Text style={{ fontSize: 15, color: '#fff', marginLeft: 10 }}>
                                        &nbsp;&nbsp;{propSnackAlert.snackMessage}
                                    </Text>
                                </View>
                                
                            </Snackbar>
                        </View>
                        
                    </View>
                    
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const fondoSvg = `<svg width="360" height="394" viewBox="0 0 360 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H360V297.875L338.768 261.461C331.053 248.23 311.939 248.226 304.218 261.453L262.948 332.155C255.42 345.05 236.929 345.449 228.853 332.89L200.429 288.689C191.286 274.471 169.721 277.305 164.561 293.403L137.058 379.216C131.271 397.273 105.95 397.891 99.2877 380.139L58 270.116L55.2583 260.808C50.0138 243.004 25.4538 241.325 17.8356 258.25L0 297.875V305.882V0Z" fill="url(#paint0_radial_12_17)"/>
                    <defs>
                    <radialGradient id="paint0_radial_12_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(194 190) rotate(-149.123) scale(226.035 187.495)">
                    <stop stop-color="#28ED48"/>
                    <stop offset="0.950835" stop-color="#219EBC"/>
                    </radialGradient>
                    </defs>
                </svg>
`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerSvg: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300
    },
    containerLogin: {
        flex: 0.7,
        marginTop: 100
        // backgroundColor: '#0b85a0',
        // borderWidth: 1,
        // borderColor: '#05d1ff',
        // // borderTopRightRadius: 20,
        // // borderTopLeftRadius: 20,
        // borderRadius: 20,
        // marginHorizontal: 20,
        // marginBottom: 20
    },
    titleText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: -30,
        marginBottom: 20,
        fontStyle: 'italic',
        color: '#fff'
    },
    input: {
        backgroundColor: '#219EBC',
        margin: 10,
        padding: 10,
        fontSize: 16,
        borderRadius: 100
    },
    error: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    },
    textData: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    },
    btnLogin: {
        marginTop: 15,
        marginBottom: 8,
        marginHorizontal: 10,
        padding: 2,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#00d0ff',
        display: "flex",
        backgroundColor: '#219EBC'
    }
});