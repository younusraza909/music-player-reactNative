import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { colors, fontSize } from './tokens'

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerTitleAlign: 'left', // Center align the title for Android
	headerStyle: {
		backgroundColor: colors.background, // Background color
	},
	headerTitleStyle: {
		color: colors.text,
		fontSize: fontSize.xl,
		fontWeight: 'bold',
	},
	headerTintColor: colors.text,
	headerShadowVisible: true, // Set this to true on Android if you want a shadow
}
