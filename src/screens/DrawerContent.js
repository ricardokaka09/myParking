import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { windowHeight } from '../utils/Dimentions';
// import { auth1 } from '../constants/firebase'
import {connect }from 'react-redux'
import PropTypes from 'prop-types';

// import{ AuthContext } from '../components/context';

const DrawerContent = ({navigation, user}) => {

    // const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1, backgroundColor: '#281DA1'}}>
          <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                    <TouchableOpacity
                        style={{marginTop: 10, marginLeft: 10, alignSelf: 'flex-start'}}
                        onPress={() => {
                            navigation.goBack();
                        }}>
                        <Icon name="arrow-left" color="#fff" size={20} />
                    </TouchableOpacity>
                        
                        <View style={{flexDirection:'column', justifyContent:'center', alignItems: 'center',paddingTop: 10, alignSelf: 'center'}}>
                            {/* <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                                backgroundColor= '#fff'
                                
                            /> */}
                            <Icon name='account-circle'
                             color='#fff'
                              size={80}
                              style={{borderRadius: 1}}/>
                            <View style={{ flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                                <Title style={styles.title}>{user? user.userInfo.email : 'UNKOWN'}</Title>
                                <Caption style={styles.caption}>0979831203</Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="history" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Lịch sử đặt"
                            onPress={() => {navigation.navigate('History')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="heart" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Yêu thích"
                            onPress={() => {navigation.navigate('Like')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="phone" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Góp ý"
                            onPress={() => {navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="help-circle" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="trợ giúp"
                            onPress={() => {navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="exit-to-app" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Đăng suất"
                            onPress={() => auth.signOut()}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}
DrawerContent.propTypes = {
    isAuthenticated: PropTypes.bool,
    user :PropTypes.object.isRequired,
  }
const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    user: state.user
  })
  
export default connect(mapStateToProps, null)(DrawerContent)
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      top: 0,
      marginHorizontal: 0
    },
    userInfoSection: {
        // flexDirection: 'row',
        // justifyContent: 'center'
    //   paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color: '#fff'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: '#fff'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      height:windowHeight,
      backgroundColor: '#fff',
    //   color: 'black'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });