import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing} from '../utils/sizes';

const FocusHistory = function({ history }) {

  if(!history || !history.length) return <Text style={{ textAlign: "center" }}>We haven't focused on anything yet</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>-{item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus History</Text>
      <FlatList data={history} renderItem={renderItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    textAlign: "center",
    padding: spacing.md,
    fontWeight: "bold"
  }
})

export default FocusHistory;