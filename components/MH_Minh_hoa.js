import React, { Component } from 'react';
import { Modal, Text, Image, View, Alert, Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import Du_lieu from '../data/Du_lieu';
import {
    MenuProvider,
    Menu,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    
} from 'react-native-popup-menu';

var dsTivi = Du_lieu.Danh_sach_Tivi.filter(x => { return x.Don_gia >= 10000000 })
class Minh_hoa extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    XL_Chon(value) {
        if (value == 1) {
            alert('Update ');
        }
        else {
            alert('Delete')
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 2 }}>
                    <MenuProvider style={{ flexDirection: 'column', padding: 30 }}>
                        <Menu onSelect={(value) => this.XL_Chon(value)}>
                            <MenuTrigger text='Cập nhật ' />
                            <MenuOptions>
                                <MenuOption value={1} text='Update' />
                                <MenuOption value={2}>
                                    <Text>Delete</Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                    </MenuProvider>
                </View>
                <View style={{ flex: 2, justifyContent: "center" }}>
                    <Swiper style={styles.wrapper} showsPagination={true} showsButtons={true} autoplay={true}>
                        {
                            dsTivi.map((item) => {
                                return (
                                    <View style={styles.slide1}>
                                        <Image source={{ uri: item.Hinh }} style={{ width: 180, height: 80 }} />
                                        <Text style={styles.text}>{item.Ten}</Text>
                                    </View>
                                )
                            })
                        }
                    </Swiper>
                </View>
                <View style={{ flex: 8 }}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <Text>Hello World!</Text>
                                <Button
                                    title="Hide Modal"
                                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                />
                            </View>
                        </View>
                    </Modal>
                    <Button
                        title="Show Modal"
                        color="#f194ff"
                        onPress={() => this.setModalVisible(true)}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#f63',
        fontSize: 14,
        fontWeight: 'bold',
    }
})
export default Minh_hoa