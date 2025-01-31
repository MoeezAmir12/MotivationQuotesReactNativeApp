import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform,Button,Linking,TouchableOpacity } from 'react-native';
import { Block, Text, theme, Button as GaButton } from 'galio-framework';
import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';




const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 2;

const Profile = ({navigation}) => {
  return (
    <Block style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }} >
      <Block flex={0.6} >
        <ImageBackground
          source={require('../assets/images/header.jpg')}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}
        >
          <Block flex style={styles.profileCard}>
            <Block style={{ position: 'absolute', width: width, zIndex: 5, paddingHorizontal: 20 }}>
              <Block middle style={{ top: height * 0.15 }}>
                <Image source={require('../assets/images/photop.jpg')} style={styles.avatar} />
              </Block>
              <Block style={{ top: height * 0.2 }}>
                <Block middle >
                  <Text
                    style={{
                      fontFamily: 'montserrat-bold',
                      marginBottom: theme.SIZES.BASE / 2,
                      fontWeight: '900',
                      fontSize: 26
                    }}
                    color='#ffffff'
                    >
                   Moeez Amir
                  </Text>

                  <Text
                    size={16}
                    color="white"
                    style={{
                      marginTop: 5,
                      fontFamily: 'montserrat-bold',
                      lineHeight: 20,
                      fontWeight: 'bold',
                      fontSize: 18,
                      opacity: .8
                    }}
                  >
                    App Developer
                  </Text>
                </Block>
                <Block style={styles.info}>
                  <Block row space="around">

                    <Block middle>
                      <Text
                        size={18}
                        color="white"
                        style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                      >
                        2K
                      </Text>
                      <Text style={{ fontFamily: 'montserrat-regular' }} size={14} color="white">
                        Friends
                      </Text>
                    </Block>

                    <Block middle>
                      <Text
                        color="white"
                        size={18}
                        style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                      >
                        26
                      </Text>
                      <Text style={{ fontFamily: 'montserrat-regular' }} size={14} color="white">
                        Comments
                        </Text>
                    </Block>

                    <Block middle>
                      <Text
                        color="white"
                        size={18}
                        style={{ marginBottom: 4, fontFamily: 'montserrat-bold' }}
                      >
                        48
                      </Text>
                      <Text style={{ fontFamily: 'montserrat-regular' }} size={14} color="white">
                        Bookmarks
                      </Text>
                    </Block>

                  </Block>
                </Block>
              </Block>

            </Block>


            <Block
              middle
              row
              style={{ position: 'absolute', width: width, top: height * 0.6 - 26, zIndex: 99 }}
            >
              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.instagram.com/iammoeex79/')}}>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="instagram"
                iconFamily="Font-Awesome"
            onPress={()=>{Linking.openURL('https://www.instagram.com/iammoeex79/')}}
                color={'#888888'}
                style={[styles.social, styles.shadow]}
              />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.facebook.com/moeez.amir.12/')}}>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="facebook"
                iconFamily="Font-Awesome"
                onPress={()=>{Linking.openURL('https://www.facebook.com/moeez.amir.12/')}}
                color={'#888888'}
                style={[styles.social, styles.shadow]}
              />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{Linking.openURL('https://www.facebook.com/moeez.amir.12/')}}>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="linkedin"
                iconFamily="Font-Awesome"
                onPress={()=>{Linking.openURL('https://www.linkedin.com/in/moeez-amir-462b26216/')}}
                color={'#888888'}
                style={[styles.social, styles.shadow]}
              />
              </TouchableOpacity>
            </Block>
          </Block>
        </ImageBackground>


      </Block>
      <Block />
      <Block flex={0.4} style={{ padding: theme.SIZES.BASE, marginTop: 90}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex style={{ marginTop: 20 }}>
            <Block middle>
              <Text
                style={{
                  color: '#2c2c2c',
                  fontWeight: 'bold',
                  fontSize: 19,
                  fontFamily: 'montserrat-bold',
                  marginTop: 40,
                  marginBottom: 34,
                  zIndex: 2
                }}
              >
                About me
                  </Text>
              <Text
                size={16}
                muted
                style={{
                  textAlign: 'center',
                  fontFamily: 'montserrat-regular',
                  zIndex: 2,
                  lineHeight: 25,
                  color: '#9A9A9A',
                  paddingHorizontal: 15
                }}
              >
               A React Native Developer & CEO Of Ace Dev Studios here to provide the best in Apps and making your day 
               brighter with our Apps.
                  </Text>
            </Block>
            <Block row style={{ paddingVertical: 14, paddingHorizontal: 15 }} space="between">
              <Text bold size={16} color="#2c2c2c" style={{ marginTop: 3 }}>
              
                  </Text>
             
            </Block>


            
          </Block>
        </ScrollView>
      </Block>
    </Block>

  )
}




export default Profile;
const styles = StyleSheet.create({

  profileContainer: {
    width,
    height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width,
    height: height * 0.6
  },

  info: {
    marginTop: 30,
    paddingHorizontal: 10,
    height: height * 0.8
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  avatar: {
    width: thumbMeasure,
    height: thumbMeasure,
    borderRadius: 50,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  social: {
   
    justifyContent: 'center',
    zIndex: 99,
    marginHorizontal: 5
  }
});


