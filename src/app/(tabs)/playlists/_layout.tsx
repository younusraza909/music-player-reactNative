import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackScreenWithSearchBar } from '@/constants/layout'

const PlaylistsScreenLayout = () => {
	return (
		<SafeAreaView style={{ ...defaultStyles.container, flex: 1 }}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Playlists' }}
				/>
			</Stack>
		</SafeAreaView>
	)
}

export default PlaylistsScreenLayout
