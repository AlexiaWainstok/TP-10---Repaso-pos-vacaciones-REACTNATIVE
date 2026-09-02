import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="favoritos"
        options={{
          title: "Favoritos",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
