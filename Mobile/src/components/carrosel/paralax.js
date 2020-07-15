import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, View, FlatList, Dimensions, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import api from "../../services/api";
import Forn1 from "../../assets/Forn1.png"
const DEVICE_WIDTH = (Dimensions.get('window').width - 45);

class Paralax extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectIndex: 0,
            high: [],
            offline: false,
        }
    }

    setRef = (c) => {
        this.listRef = c;
      }
    
      scrollToIndex = ({index}) => {
        this.listRef && this.listRef.scrollToIndex({ index });
      }

   async componentDidMount() {

        try {

            const response = await api.get('companies');

            const highlights = response.data.filter((item) => item.highlight === true);
            
            this.setState({
                high: highlights
            });

            setInterval(() => {
                
                this.setState(prev => ({ selectIndex: prev.selectIndex === highlights.length - 1 ? 0 : prev.selectIndex + 1 }), 
                    () => {
                        this.scrollToIndex({
                            index: this.state.selectIndex,
                        })
                    }
                )
            }, 5000);

        } catch {
            this.setState({
                offline: true
            });
        }
    
    }

    render () {
        const { selectIndex, high, offline } = this.state;
        return (
            <View style={{ height: "100%", width: "100%" }} >
                { offline ? <Image source={Forn1} style={ styles.backgroundImage}/> : 
                <FlatList horizontal pagingEnabled  
                ref={this.setRef} showsHorizontalScrollIndicator={false}
                data={high}
                style={ styles.backgroundImage}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                    <View>
                        <RectButton onPress={() => this.props.navigation.navigate('Company', { brand: item })}>
                    { item !== [] ? 
                        <Image source={{uri: item.path.url}} style={ styles.backgroundImage}/> : 
                        <Image source={Forn1} style={ styles.backgroundImage}/>}
                        </RectButton>
                    </View>
                )}

                    /> }
                <View style={styles.circleDiv}>
                    { high.map((image, i) => (
                        <View  
                            key={String(image.id)}
                            style={[ styles.whiteCircul, {opacity: i === selectIndex ? 0.5 : 1} ]}
                        />
                    )) }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: "100%",
        width: DEVICE_WIDTH,
        alignSelf: 'center',
        borderRadius: 4,
    },
    circleDiv: {
        position: "absolute",
        bottom: 15,
        height: 10,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    whiteCircul: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff"
    }
});

export default withNavigation(Paralax)