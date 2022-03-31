import { Text, View, StyleSheet } from 'react-native';
import TabHeader from '../../components/ui/TabHeader';
function Configs() {
    return (
        <View style={styles.rootContainer}>
            <TabHeader titleText='System Configurations' />
        </View>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 20,
    },
});
export default Configs;
