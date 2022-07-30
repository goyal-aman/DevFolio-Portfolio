import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

var X = { "data": { "user": { "name": "Saad Pasta", "bio": "20 | First Pakistani Google Code-In Finalist  | Software Engineer @SadaPay | Still Finding 💭  ", "isHireable": true, "avatarUrl": "https://avatars.githubusercontent.com/u/23307811?u=eab46b153eef3f5183930e61898b462447af9219&v=4", "location": "Karachi , Pakistan", "pinnedItems": { "totalCount": 6, "edges": [{ "node": { "name": "developerFolio", "description": "🚀 Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.", "forkCount": 1429, "stargazers": { "totalCount": 3256 }, "url": "https://github.com/saadpasta/developerFolio", "id": "MDEwOlJlcG9zaXRvcnkyMTgyODI0NTM=", "diskUsage": 23358, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "react-blog-github", "description": "🔥 React + Github Issues    👉 Your Personal Blog ", "forkCount": 130, "stargazers": { "totalCount": 732 }, "url": "https://github.com/saadpasta/react-blog-github", "id": "MDEwOlJlcG9zaXRvcnkyMzUwNTIwMDE=", "diskUsage": 18787, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "awesome-web-components", "description": "🤖 Awesome web components and snippets for every Front-End Developer", "forkCount": 24, "stargazers": { "totalCount": 44 }, "url": "https://github.com/saadpasta/awesome-web-components", "id": "MDEwOlJlcG9zaXRvcnkyMTU1NDg3ODY=", "diskUsage": 2139, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "Grocery-Items-Detection", "description": "🎉 Grocery Items Detection using Tenserflow.js and IBM Watson.📸", "forkCount": 8, "stargazers": { "totalCount": 32 }, "url": "https://github.com/saadpasta/Grocery-Items-Detection", "id": "MDEwOlJlcG9zaXRvcnkxOTMwMzQ1ODI=", "diskUsage": 26200, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "PWA-Olx-Clone", "description": "Olx Clone Progressive Web App with Offline Feature, Messaging and Add to Favorite", "forkCount": 13, "stargazers": { "totalCount": 17 }, "url": "https://github.com/saadpasta/PWA-Olx-Clone", "id": "MDEwOlJlcG9zaXRvcnkxNDczNzg5MzY=", "diskUsage": 3165, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "Locate-Me", "description": "📍A React Native live location application to find your loved one's", "forkCount": 5, "stargazers": { "totalCount": 6 }, "url": "https://github.com/saadpasta/Locate-Me", "id": "MDEwOlJlcG9zaXRvcnkxNzM1NjA0MzQ=", "diskUsage": 32945, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }] } } } };
const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return X;
              // return result.json();
            }
          })
          .then(response => {
            console.log(response, "THIS IS RESPONSE");
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction("Error");
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
