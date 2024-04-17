import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import HeaderLayout from '../Components/HeaderLayout';
import TextElement from '../Components/TextElement';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../Components/Mixuns';
import {BLACK, GRAY, PRIMARY_COLOR, SearchIcon, WHITE} from '../assets/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {TutorData} from '../assets/MockData';

function StudentHome({navigation, route}) {
  console.log('route', route?.params?.data);
  return (
    <View>
      <View
        style={{
          paddingTop: WINDOW_HEIGHT * 0.08,
          backgroundColor: PRIMARY_COLOR,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
        }}>
        <SafeAreaView />
        <View style={{width: WINDOW_WIDTH * 0.8, flexDirection: 'row'}}>
          <Image
            source={route?.params?.data?.Picture}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
          <View style={{marginLeft: 15}}>
            <TextElement textStyle={{color: WHITE, fontSize: 14}}>
              Hello
            </TextElement>

            <TextElement textStyle={{color: WHITE, fontSize: 14}}>
              {`${route?.params?.data?.Name} ${route?.params?.data?.lastName}`}
            </TextElement>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchScreen')}
          style={{
            backgroundColor: WHITE,
            width: WINDOW_WIDTH * 0.8,
            marginTop: 20,
            padding: 12,
            borderRadius: 20,
            marginBottom: 25,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons name="search" color={SearchIcon} size={20} />
          <TextElement textStyle={{color: GRAY, fontSize: 16, marginLeft: 10}}>
            Search Tutor
          </TextElement>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: WINDOW_WIDTH * 0.8,
          marginTop: 40,
          alignSelf: 'center',
          height: WINDOW_HEIGHT * 0.7,
        }}>
        <TextElement textStyle={{color: BLACK, fontSize: 20}}>
          Upcoming Lessons
        </TextElement>
        <View
          style={{
            backgroundColor: PRIMARY_COLOR,
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
          }}>
          <TextElement textStyle={{color: WHITE}}>
            Adam Evan , Math lesson
          </TextElement>
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Image
              source={require('../assets/Images/tutor9.jpeg')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <View style={{marginLeft: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Feather name="video" color={WHITE} />
                <TextElement textStyle={{color: WHITE, marginLeft: 5}}>
                  Video call
                </TextElement>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo name="calendar" color={WHITE} />
                <TextElement textStyle={{color: WHITE, marginLeft: 5}}>
                  Tuesday, 9 june
                </TextElement>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Feather name="clock" color={WHITE} />
                <TextElement textStyle={{color: WHITE, marginLeft: 5}}>
                  12:00 AM
                </TextElement>
              </View>
            </View>
          </View>
        </View>
        <TextElement textStyle={{color: BLACK, fontSize: 20, marginTop: 10}}>
          Popular Tutor
        </TextElement>
        {TutorData.map((item, index) =>
          item?.showHome ? (
            <View
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 15,
                marginTop: 10,
              }}>
              <View style={{marginTop: 5, flexDirection: 'row'}}>
                <Image
                  source={item.Picture}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                      {`${item.Name} ${item.lastName}`}
                    </TextElement>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 8,
                    }}>
                    <Entypo name="book" color={PRIMARY_COLOR} />
                    <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                      {item.Subject[0]}
                    </TextElement>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('TutorHome', {
                        data: item,
                        from: 'nothing',
                      });
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      marginTop: 8,
                      alignSelf: 'flex-end',
                    }}>
                    <Entypo name="info" color={BLACK} />
                    <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                      More Info
                    </TextElement>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <></>
          ),
        )}

        {/* <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
          }}>
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Image
              source={require('../assets/Images/Student.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <View style={{marginLeft: 10, flex: 1}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  Elsa Kay
                </TextElement>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Entypo name="book" color={PRIMARY_COLOR} />
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  BIOLOGY
                </TextElement>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  marginTop: 8,
                  alignSelf: 'flex-end',
                }}>
                <Entypo name="info" color={BLACK} />
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  More Info
                </TextElement>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
          }}>
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Image
              source={require('../assets/Images/Student.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <View style={{marginLeft: 10, flex: 1}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  Elsa Kay
                </TextElement>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Entypo name="book" color={PRIMARY_COLOR} />
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  BIOLOGY
                </TextElement>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  marginTop: 8,
                  alignSelf: 'flex-end',
                }}>
                <Entypo name="info" color={BLACK} />
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  More Info
                </TextElement>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
          }}>
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Image
              source={require('../assets/Images/Student.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <View style={{marginLeft: 10, flex: 1}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  Elsa Kay
                </TextElement>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Entypo name="book" color={PRIMARY_COLOR} />
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  BIOLOGY
                </TextElement>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  marginTop: 8,
                  alignSelf: 'flex-end',
                }}>
                <Entypo name="info" color={BLACK} />
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  More Info
                </TextElement>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
          }}>
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Image
              source={require('../assets/Images/Student.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <View style={{marginLeft: 10, flex: 1}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  Elsa Kay
                </TextElement>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Entypo name="book" color={PRIMARY_COLOR} />
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  BIOLOGY
                </TextElement>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  marginTop: 8,
                  alignSelf: 'flex-end',
                }}>
                <Entypo name="info" color={BLACK} />
                <TextElement textStyle={{color: BLACK, marginLeft: 5}}>
                  More Info
                </TextElement>
              </View>
            </View>
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default StudentHome;
