import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Du_lieu from '../data/Du_lieu';
import MH_Dang_nhap from './MH_Dang_nhap'
import Cap_nhat_Danh_sach_Nguoi_dung from './MH_Cap_nhat_Danh_sach_Nguoi_dung'

export default class MH_Chinh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Hop_le: false,
            User :'',
        }
    }

    login(co,user) {
        this.setState({ Hop_le: co });
        this.setState({ User: user });
    }
    thoat() {
        this.setState({ Hop_le: false });
    }

    render() {
        if (!this.state.Hop_le) {
            return (
                <View style={{ flex: 1 }}>
                    <MH_Dang_nhap parent={this}></MH_Dang_nhap>
                </View>
            )

        } else {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.5,justifyContent: 'center',alignContent:'center' }}>
                        <Text>Xin chao: {this.state.User.Ho_ten} - Nhan vien : {this.state.User.Nhom_Nguoi_dung.Ten}</Text>
                    </View>
                    <View style={{ flex: 8 }}>
                        <Cap_nhat_Danh_sach_Nguoi_dung></Cap_nhat_Danh_sach_Nguoi_dung>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={this.thoat.bind(this)} activeOpacity={0.5}>
                            <View style={style.button}>
                                <Text style={style.text}>{this.state.Ten_Dang_nhap} - Thoát Đăng nhập</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            )

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





