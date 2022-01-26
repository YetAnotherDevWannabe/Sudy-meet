import { Text, View } from "react-native";
import { Button } from "react-native-web";

export default function ScreenA({route, navigation})
{
	return (
		<View style={{flex:1, backgroundColor:'#FD0'}}>
			<Text>ScreenA</Text>
			<Button title="Access screen A" onPress={() => [
				navigation.navigate('ScreenA')
			]} />
			<Button title="Access screen B" onPress={() => [
				navigation.navigate('ScreenB')
			]} />
		</View>
	)
}