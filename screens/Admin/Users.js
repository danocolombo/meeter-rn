import { Text, View, StyleSheet } from 'react-native';
import TabHeader from '../../components/ui/TabHeader';
function Users() {
    return (
        <View style={styles.rootContainer}>
            <TabHeader titleText='System Users' />
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 20,
    },
});
export default Users;
