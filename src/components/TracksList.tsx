import { FlatList, FlatListProps, View } from 'react-native'
import { TrackListItem } from './TrackListItem'
import { utilsStyles } from '@/styles'
import { Track } from 'react-native-track-player'

export type TrackListProps = Partial<FlatListProps<Track>> & {
	tracks: any
}

const ItemDivider = () => {
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
}

const TracksList = ({ tracks, ...flatListProps }: TrackListProps) => {
	const handleTrackSelect = (track: Track) => {
		console.log('track', track)
	}
	return (
		<FlatList
			data={tracks}
			renderItem={({ item: track }) => (
				<TrackListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			{...flatListProps}
		/>
	)
}

export default TracksList
