// import { AuthProvider, useAuth } from "@/lib/auth-context";
import CustomAppBar from "@/components/CustomAppBar";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

// components.


function RouteGuard({ children }: { children: React.ReactNode }) {
  // const router = useRouter();
  // const { user, isLoadingUser } = useAuth();
 //  const segments = useSegments();

  // useEffect(() => {
  //   const inAuthGroup = segments[0] === "auth";

  //   if (!user && !inAuthGroup && !isLoadingUser) {
  //     router.replace("/auth");
  //   } else if (user && inAuthGroup && !isLoadingUser) {
  //     router.replace("/");
  //   }
  // }, [user, segments]);

  // return <>{children}</>;
}

export default function RootLayout() {
  return (
     <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <SafeAreaProvider>
          <CustomAppBar>
            <Stack screenOptions={{ headerShown: false }}>
              {/* Screens like (tabs) will still render inside Layout */}
              {/* Optionally declare screens here, or let Expo Router auto-discover */}
            </Stack>
          </CustomAppBar>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}