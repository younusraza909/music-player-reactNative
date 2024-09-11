import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from '@/constants/layout'
import { SafeAreaView } from 'react-native-safe-area-context'

const ArtisitsScreenLayout = () => {
	return (
		<SafeAreaView style={{ ...defaultStyles.container, flex: 1 }}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Artisits' }}
				/>
			</Stack>
		</SafeAreaView>
	)
}

export default ArtisitsScreenLayout
