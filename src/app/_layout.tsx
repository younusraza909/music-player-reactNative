import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SplashScreen } from 'expo-router'
import { useCallback } from 'react'
import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState'

// Showing Splash screen until hide manualy
SplashScreen.preventAutoHideAsync()

const App = () => {
	// function to hide splash screen
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})
	useLogTrackPlayerState()

	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}

export default App
