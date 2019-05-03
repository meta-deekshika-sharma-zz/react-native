import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#020b19',
    },
    fieldBlock: {
        marginVertical: 10,
        marginHorizontal: 20
    },
    heading: {
        color: '#fcfdff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        marginBottom: 3,
        marginStart: 3
    },
    editText: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        height: 40,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        paddingStart: 10
    },
    submitButton: {
        position: 'absolute',
        bottom: 0,
        width: width,
    }
})