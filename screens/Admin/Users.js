import { Text, View, StyleSheet } from 'react-native';

function Users() {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>System Users</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
export default Users;