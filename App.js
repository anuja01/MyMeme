/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import YouTube from 'react-native-youtube';
import ViewShot from 'react-native-view-shot';
import {API_KEY} from './constants';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native-elements';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <ViewShot ref="viewShot" options={{format: 'jpg', quality: 1}}>
                <YouTube
                  apiKey={API_KEY}
                  videoId="8mMPqbqmTg8"
                  play
                  // onReady={e => this.setState({isReady: true})}
                  // onChangeState={e => this.setState({status: e.state})}
                  // onChangeQuality={e => this.setState({quality: e.quality})}
                  // onError={e => this.setState({error: e.error})}
                  style={{alignSelf: 'stretch', height: 300}}
                />
              </ViewShot>

              <View
                style={{
                  width: 400,
                  height: 400,
                  backgroundColor: 'gray',
                  marginLeft: 10,
                  marginTop: 10,
                }}>
                {this.state.uri && (
                  <Image
                    style={{width: 400, height: 400}}
                    source={{uri: this.state.uri}}
                  />
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Button
                  title="Clear"
                  onPress={() => {
                    this.setState({uri: undefined});
                  }}
                />
                <Button
                  title="Snap"
                  onPress={() => {
                    this.refs.viewShot.capture().then(uri => {
                      console.log('do something with ', uri);
                      this.setState({uri: uri});
                    });
                  }}
                />
                <Button
                  title="Next"
                  onPress={() => {
                    this.setState({uri: undefined});
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
