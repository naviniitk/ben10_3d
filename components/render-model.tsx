import { Dimensions } from 'react-native'
import {
  Camera,
  DefaultLight,
  FilamentView,
  Model,
  useCameraManipulator,
} from 'react-native-filament'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-worklets-core'

const RenderModel = ({ source }: { source: any }) => {
  const cameraManipulator = useCameraManipulator({
    orbitHomePosition: [0, 0, 8], // "Camera location"
    targetPosition: [0, 0, 0], // "Looking at"
    orbitSpeed: [0.003, 0.003],
  })

  // Pan gesture
  const viewHeight = Dimensions.get('window').height
  const panGesture = Gesture.Pan()
    .onBegin((event) => {
      const yCorrected = viewHeight - event.translationY
      cameraManipulator?.grabBegin(event.translationX, yCorrected, false) // false means rotation instead of translation
    })
    .onUpdate((event) => {
      const yCorrected = viewHeight - event.translationY
      cameraManipulator?.grabUpdate(event.translationX, yCorrected)
    })
    .maxPointers(1)
    .onEnd(() => {
      cameraManipulator?.grabEnd()
    })

  // Scale gesture
  const previousScale = useSharedValue(1)
  const scaleMultiplier = 100
  const pinchGesture = Gesture.Pinch()
    .onBegin(({ scale }) => {
      previousScale.value = scale
    })
    .onUpdate(({ scale, focalX, focalY }) => {
      const delta = scale - previousScale.value
      cameraManipulator?.scroll(focalX, focalY, -delta * scaleMultiplier)
      previousScale.value = scale
    })

  const combinedGesture = Gesture.Race(pinchGesture, panGesture)

  return (
    <GestureDetector gesture={combinedGesture}>
      <FilamentView style={{ flex: 1 }}>
        {/* 💡 A light source, otherwise the scene will be black */}
        <DefaultLight />

        {/* 📦 A 3D model */}
        <Model source={source} transformToUnitCube />

        {/* 📹 A camera through which the scene is observed and projected onto the view */}
        <Camera cameraManipulator={cameraManipulator} />
      </FilamentView>
    </GestureDetector>
  )
}

export default RenderModel
