import React, { CSSProperties } from "react";
import Header from "../components/Header";
import { Colors } from "../assets/colors";
import { getUserProfile, getUserSavedSearches } from "../API";

const styles = {
  userInfos: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "10vh",
    width: "100%",
    backgroundColor: Colors.lightBlue,
  },
  searchContainer: {
    display: "flex",
    width: "99%",
    flexWrap: "wrap",
  },
  searchCard: {
    width: "19%",
    backgroundColor: Colors.darkBlue,
    color: "white",
    margin: "5px",
  },
};

function UserSearches() {
  const [userProfile, setUserProfile] = React.useState<{
    name: string;
    email: string;
  }>();

  const [userSearches, setUserSearches] = React.useState<
    {
      results: [
        {
          address: string;
          latitude: string;
          longitude: string;
        }
      ];
      parameters: {
        Etiquette_DPE: string;
        Etiquette_GES: string;
        "Code_postal_(BAN)": number;
        Surface_habitable_logement: number;
      };
    }[]
  >([]);

  React.useEffect(() => {
    async function fetchUserProfile() {
      const userProfile = await getUserProfile();

      return userProfile;
    }

    async function fetchUserSearches() {
      const userSearches = await getUserSavedSearches(1);

      return userSearches;
    }

    fetchUserProfile().then((userProfile) => {
      setUserProfile(userProfile);
    });

    fetchUserSearches().then((userSearches) => {
      setUserSearches(userSearches);
    });
  }, []);

  return (
    <div>
      <Header />
      <div style={styles.userInfos}>
        <p>{userProfile?.name}</p>
        <p>{userProfile?.email}</p>
      </div>
      <div>
        <h1>Historique de vos recherches</h1>
        <div style={styles.searchContainer as CSSProperties}>
          {userSearches.map((search, index) => (
            <div style={styles.searchCard}>
              <p>Etiquette_DPE : {search.parameters.Etiquette_DPE}</p>
              <p>Etiquette_GES : {search.parameters.Etiquette_GES}</p>
              <p>
                Code_postal_(BAN) : {search.parameters["Code_postal_(BAN)"]}
              </p>
              <p>
                Surface_habitable_logement :{" "}
                {search.parameters.Surface_habitable_logement}
              </p>
              <div>
                {search.results.map((result, index) => (
                  <div>
                    <p>address : {result.address}</p>
                    <p>latitude : {result.latitude}</p>
                    <p>longitude : {result.longitude}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserSearches;
