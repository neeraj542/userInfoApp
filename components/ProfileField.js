import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { ChevronRight, Edit2 } from "react-native-feather"

const ProfileField = ({ label, value, editable, onPress, showChevron }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {editable && <Edit2 stroke="#666" width={16} height={16} />}
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        {showChevron && <ChevronRight stroke="#666" width={20} height={20} />}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  valueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  value: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
})

export default ProfileField

