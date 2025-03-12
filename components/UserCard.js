import { View, Text, StyleSheet, Image } from "react-native"

const UserCard = ({ user }) => {
  if (!user) return null

  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} resizeMode="cover" />
        <Text style={styles.name}>{`${user.first_name} ${user.last_name}`}</Text>
      </View>

      <View style={styles.infoContainer}>
        <InfoRow label="ID" value={user.id} />
        <InfoRow label="UID" value={user.uid} />
        <InfoRow label="Password" value={user.password} />
        <InfoRow label="First Name" value={user.first_name} />
        <InfoRow label="Last Name" value={user.last_name} />
        <InfoRow label="Username" value={user.username} />
        <InfoRow label="Email" value={user.email} />
      </View>
    </View>
  )
}

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#0e0f14",
  },
  infoContainer: {
    marginTop: 10,
  },
  infoRow: {
    flexDirection: "row",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    flex: 1,
    fontWeight: "bold",
    color: "#555",
    fontSize: 16,
  },
  value: {
    flex: 2,
    fontSize: 16,
    color: "#333",
  },
})

export default UserCard

