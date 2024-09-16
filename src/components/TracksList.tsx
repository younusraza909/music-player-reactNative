import { FlatList, FlatListProps, View } from 'react-native'
import library from '@/assets/data/library.json'
import { TrackListItem } from './TrackListItem'
import { utilsStyles } from '@/styles'

export type TrackListProps = Partial<FlatListProps<unknown>> & {
	tracks: any
}

const ItemDivider = () => {
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
}

const TracksList = ({ tracks, ...flatListProps }: TrackListProps) => {
	return (
		<FlatList
			data={tracks}
			renderItem={({ item: track }) => (
				<TrackListItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
			ItemSeparatorComponent={ItemDivider}
			ListFooterComponent={ItemDivider}
			{...flatListProps}
		/>
	)
}

export default TracksList
