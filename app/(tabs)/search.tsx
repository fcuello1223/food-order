import { Text, SafeAreaView, Button } from "react-native";
import seed from "@/lib/seed";

const Search = () => {
  return (
    <SafeAreaView>
      <Text>Search</Text>
      {/* <Button
        title="Seed"
        onPress={() =>
          seed().catch((err) =>
            console.log("Failed to Seed the Database!", err)
          )
        }
      /> */}
    </SafeAreaView>
  );
};

export default Search;
