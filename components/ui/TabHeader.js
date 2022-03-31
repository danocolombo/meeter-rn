import { View, Text, StyleSheet } from 'react-native';
function TabHeader({ titleText }) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{titleText}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
export default TabHeader;
