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
	return (
		<FlatList
			data={tracks}
			renderItem={({ item: track }) => <TrackListItem track={track} />}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			{...flatListProps}
		/>
	)
}

export default TracksList
