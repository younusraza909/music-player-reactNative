import TracksList from '@/components/TracksList'
import { colors, screenPadding } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { View, ScrollView } from 'react-native'
import library from '@/assets/data/library.json'
import { useMemo } from 'react'
import { trackTitleFilter } from '@/helpers/filter'

const SongsScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
			headerIconColor: '#FFF',
			textColor: colors.text,
		},
	})

	const filteredTracks = useMemo(() => {
		if (!search) return library
		return library.filter(trackTitleFilter(search))
	}, [search, library])

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList
					tracks={filteredTracks}
					scrollEnabled={false}
					contentContainerStyle={{ paddingBottom: 40 }}
				/>
			</ScrollView>
		</View>
	)
}

export default SongsScreen
