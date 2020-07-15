import React, { Component } from "react";
import { StatusBar } from "react-native";
import CodePush from "react-native-code-push";
import OneSignal from "react-native-onesignal";

import "./config/reactotronConfig";

import App from "./app";

class Index extends Component {
    constructor(props) {
        super(props);

        OneSignal.init("7b111c06-6586-4c74-bdfd-af7d071861e3");
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentDidMount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds)
    }

    onReceived = (data) => {};

    onOpened = (notification) => {};

    onIds = (id) => {};

    render() {
        return (
            <>
                <StatusBar barStyle="light-content"backgroundColor="#7159c1" />
                <App />
            </>
        )

    }
}

export default CodePush({
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index)