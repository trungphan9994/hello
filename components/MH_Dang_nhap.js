import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Du_lieu from '../data/Du_lieu';
import Cap_nhat_Danh_sach_Nguoi_dung from './MH_Cap_nhat_Danh_sach_Nguoi_dung'
export default class MH_Dang_nhap extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Ten_Dang_nhap: '', 
            Mat_khau: '', 
            Thong_bao: '', 
            
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
                    <Image style={style.image} source={require('../images/user_login.png')}></Image>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-start" }}>
                    <TextInput onChangeText={(Ten_Dang_nhap) => this.setState({ Ten_Dang_nhap })}
                        value={this.state.Ten_Dang_nhap} placeholder='Tên đăng nhập' style={style.input} />
                    <TextInput onChangeText={(Mat_khau) => this.setState({ Mat_khau })}
                        value={this.state.Mat_khau} placeholder='Mật khẩu' style={style.input} secureTextEntry />

                    <TouchableOpacity onPress={this.XL_Nhan.bind(this)} activeOpacity={0.5}>
                        <View style={style.button}>
                            <Text style={style.text}>Đăng nhập</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={{ textAlign: "center" }}>{this.state.Thong_bao}</Text>
                </View>
            </View>
        );

    }

    // XL_Nhan() {
    //     if (this.state.Ten_Dang_nhap == Du_lieu.Nguoi_dung.Ten_Dang_nhap && this.state.Mat_khau == Du_lieu.Nguoi_dung.Mat_khau)
    //         Alert.alert("Đăng nhập thành công");
    //     else
    //         Alert.alert("Đăng nhập thất bại");
    // }

    XL_Nhan() {
        if (Du_lieu.Danh_sach_Nguoi_dung.find(user => user.Ten_Dang_nhap.toLowerCase()==this.state.Ten_Dang_nhap.toLowerCase())
        && 
        Du_lieu.Danh_sach_Nguoi_dung.find(user => user.Mat_khau.toLowerCase()==this.state.Mat_khau.toLowerCase())) {
            //Alert.alert("Đăng nhập thành công");
            this.setState({ Thong_bao: "Đăng nhập thành công" })
            this.props.parent.login(true,Du_lieu.Danh_sach_Nguoi_dung.find(user => user.Ten_Dang_nhap.toLowerCase()==this.state.Ten_Dang_nhap.toLowerCase()))
            
        
        }else{
            //Alert.alert("Đăng nhập thất bại");
            this.setState({ Thong_bao: "Đăng nhập thất bại" })
        }
            
    }

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    input: {
        height: 44,
        paddingHorizontal: 6,
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 5
    },
    button: {
        height: 46,
        borderRadius: 5,
        margin: 5,
        backgroundColor: '#036fa9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    },
    image: {
        width: 140, height: 140,
        marginBottom: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})


