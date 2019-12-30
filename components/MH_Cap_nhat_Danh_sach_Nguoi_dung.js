import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet, Alert, Platform } from 'react-native';
import Du_lieu from '../data/Du_lieu';
import Modal from 'react-native-modalbox';
const { width, height } = Dimensions.get('window');
import Them_Nguoi_dung from './MH_Them_Nguoi_dung';
import Cap_nhat_Nguoi_dung from './MH_Cap_nhat_Nguoi_dung';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            So: 0
        }
    }
    refresh_Nguoi_dung(){
        this.setState({So: this.state.So+1});
    }
    Sua() {
        this.props.parentFlatList.refs.Th_Cap_nhat.Mo_Hop_thoai(this.props.item,this);
    }
    Xoa() {
        Alert.alert(

            "Thong bao",
            "Ban co chac xoa khong?",
            [
                {text:'Bo qua', onPress:() =>{console.log("chon k")},style:'cancel'},
                {text:'Dong y', onPress:() =>{
                    Du_lieu.Danh_sach_Nguoi_dung.splice(this.props.index,1);
                    this.props.parentFlatList.refresh_Danh_sach_Nguoi_dung(this.props.item.Ma_so);
                }}
            ],
            {cancelable:true}
        )
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <Image
                        style={{ height: 30, width: 30, margin: 10, borderRadius: 20 }}
                        source={require('../images/avatar-40.png')}>
                    </Image>
                    <View style={{ flex: 1, justifyContent: 'center', height: 50 }}>
                        <Text style={styles.itemText}>{this.props.item.Ho_ten}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', height: 50 }}>
                        <TouchableOpacity
                            onPress={this.Sua.bind(this)}
                            activeOpacity={0.5}>
                            <Image
                                style={{ height: 20, width: 20, margin: 5, tintColor: '#A7A7A7' }}
                                source={require('../images/edit-32.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', height: 50 }}>
                        <TouchableOpacity
                            onPress={this.Xoa.bind(this)}
                            activeOpacity={0.5}>
                            <Image
                                style={{ height: 20, width: 20, margin: 5, tintColor: '#A7A7A7' }}
                                source={require('../images/trash-32.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: "#e6e5e5" }}></View>
            </View>
        );
    }
}


export default class Cap_nhat_Danh_sach_Nguoi_dung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Danh_sach_Nguoi_dung: Du_lieu.Danh_sach_Nguoi_dung,
            key: '',
            Ma_so: '',
            Ho_ten: ''
        };
    }

    Mo_hop_thoai_Thong_tin(item) {
        this.setState({ Ma_so: item.Ma_so })
        this.setState({ Ho_ten: item.Ho_ten })
        this.refs.Th_hop_thoai_thong_tin.open();
    }

    Them() {
        this.refs.Th_Them.Mo_Hop_thoai();
    }

    refresh_Danh_sach_Nguoi_dung(Ma_so) {
        this.setState({ key: Ma_so });
        this.refs.Th_Danh_sach.scrollToEnd();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Danh sách người dùng</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.Them.bind(this)}>
                        <Image style={styles.inputIcon} source={require('../images/plus-32.png')} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    ref={'Th_Danh_sach'}
                    data={this.state.Danh_sach_Nguoi_dung}
                    extraData={this.state.key}
                    keyExtractor={(item) => item.Ma_so}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => { this.Mo_hop_thoai_Thong_tin(item) }}>
                                <FlatListItem item={item} index={index} parentFlatList={this}>
                                </FlatListItem>
                            </TouchableOpacity>
                        );
                    }}>
                </FlatList>
                <Modal
                    ref={'Th_hop_thoai_thong_tin'} style={{
                        borderRadius: Platform.OS === 'ios' ? 20 : 6,
                        shadowRadius: 10, width: width - 80, height: 240
                    }}
                    position="center"
                    backdrop={true}
                >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 25, marginBottom: 20, color: '#4387fd' }}>
                        Thong6 tin nguoi dung
                    </Text>
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 25 }}> Ma so: {this.state.Ma_so} </Text>
                </Modal>
                <Them_Nguoi_dung ref={'Th_Them'} parentFlatList={this}></Them_Nguoi_dung>
                <Cap_nhat_Nguoi_dung ref={'Th_Cap_nhat'} parentFlatList={this}></Cap_nhat_Nguoi_dung>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemText: {
        color: "#000000",
        padding: 5,
        fontSize: 14
    },
    inputContainer: {
        borderColor: '#b9b7b7',
        backgroundColor: '#4387fd',
        borderBottomWidth: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginRight: 5,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center'
    },
    inputIcon: {
        width: 26,
        height: 26,
        tintColor: '#ffffff',
        marginRight: 5,
        justifyContent: 'center'
    }
})