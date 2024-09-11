import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from '@/constants/layout'
import { SafeAreaView } from 'react-native-safe-area-context'

const FavoritesScreenLayout = () => {
	return (
		<SafeAreaView style={{ ...defaultStyles.container, flex: 1 }}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Favorites' }}
				/>
			</Stack>
		</SafeAreaView>
	)
}

export default FavoritesScreenLayout
