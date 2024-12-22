import { Text, View } from 'react-native'
import { FilamentScene } from 'react-native-filament'
import RenderModel from '../../components/render-model'
import { useLocalSearchParams } from 'expo-router'

import alienModels from '../../assets/models'

export default function Preview() {
  const searchParams = useLocalSearchParams()

  const { name } = searchParams



  const Model = alienModels[name]

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <FilamentScene>
        <RenderModel source={Model} />
      </FilamentScene>
      <Text>{name}</Text>
    </View>
  )
}
