import React from 'react';
import { View, Text, Button, Image, SafeAreaView, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LoginScreen = ({ navigation }) => {
    return (
        // <SafeAreaView>
        <View style={tw`mt-2 mx-5`}>
            <View style={tw`h-24 flex justify-center items-center`}>
                <Image source={require('../assets/favicon.png')} />
            </View>
            <Image source={require('../assets/Microsoft_logo.png')} />
            <Text style={tw`text-2xl mt-2 font-bold`}>Sign In</Text>
            <Text>to continue to Skype</Text>
            <TextInput style={tw`mt-2 border-b h-10`} placeholder="Skype, phone or email" />
            <View style={tw`flex flex-row mt-3`}>
                <Text style={tw`mr-1`}>No account ?</Text>
                <Text style={tw`text-blue-500`}>Sign up</Text>
            </View>
            <View style={tw`mt-5 flex flex-row justify-end`}>
                <View style={tw`mr-1`}>
                    <Button color="gray" title="Back" />
                </View>
                <Button
                    color="#00A4E1"
                    title="Next"
                    onPress={() => navigation.navigate('Dashboard')}
                />
            </View>
        </View>
        // </SafeAreaView>
    );
};

// const styles = StyleSheet.create({});

export default LoginScreen;
