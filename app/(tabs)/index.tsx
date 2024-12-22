import { Link } from 'expo-router'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

const aliens = [
  'amphibian',
  'armodrillo',
  'atomix',
  'ben_10',
  'big_chill',
  'blitzwolfer',
  'bloxx',
  'brainstorm',
  'buzzshock',
  'canonbolt',
  'chromastone',
  'classic_ben',
  'clockwork',
  'crabdozer',
  'diamondhead',
  'ditto',
  'echo_echo',
  'evil_way_big',
  'eye_guy',
  'fasttrack',
  'feedback',
  'fourarms',
  'ghostfreak',
  'goop_ben_10',
  'grav_attack',
  'gray_matter',
  'grey_matter',
  'gwen_tennyson',
  'heatblast',
  'humungousaur',
  'jetray',
  'khyber',
  'malware',
  'mucilator',
  'nrg',
  'omniverse_xlr8',
  'rath',
  'ripjaws',
  'shocksquatch',
  'sixsix',
  'slamworm',
  'snare_oh',
  'spitter',
  'stinkfly',
  'swampfire',
  'ultimate_echo_echo',
  'ultimate_humungousaur',
  'upchuck',
  'upgrade',
  'vilgax',
  'waybig_omniverse',
  'waybig',
  'wildmutt',
  'xlr8',
  'zed',
]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={aliens}
        renderItem={({ item }) => <AliensCard alien={item} />}
        keyExtractor={(item) => item}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 20, width: '100%', flex: 1 }}
      />
    </View>
  )
}

const AliensCard = ({ alien }: { alien: string }) => {
  return (
    <Link href={`/preview/${alien}`} style={{ width: '100%' }}>
      <View style={{ padding: 10, backgroundColor: 'green', borderRadius: 8, flex: 1 }}>
        <Image source={{ uri: '' }} />
        <Text style={{ color: 'white' }}>{alien}</Text>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
