import { GetApi } from "../../services/GetApi";
import { useState, useEffect } from "react";
import { TweetCard } from "../TweetCard/TweetCard";
import { List, Conteiner } from "./TweetList.styled";
import { LoadMoreBtn } from "../LoadMore/LoadMore";
import { useLocalStorage } from "../hooks/useLocalStorage";
import MyLoader from "../Loader/Loader";
export function TweetsList({ selectValue }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [followingTweets, setFollowingTweets] = useLocalStorage("id", []);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  useEffect(() => {
    setStatus("pending");
    GetApi(page)
      .then((response) => setUsers((state) => [...state, ...response.data]))
      .catch((error) => setError(error), setStatus("rejected"))
      .finally(setStatus("fulfilled"));
  }, [page]);

  const LoadMore = () => {
    setPage((state) => state + 1);
  };

  const onClick = (id) => {
    if (followingTweets.includes(id)) {
      setFollowingTweets(followingTweets.filter((item) => item !== id));
      return;
    }
    setFollowingTweets((state) => [id, ...state]);
  };
  return (
    <Conteiner>
      {status === "pending" && <MyLoader />}
      {status === "rejected" && <div>{error.message}</div>}
      {status === "fulfilled" && (
        <>
          <List>
            {users.map((user) => {
              switch (selectValue) {
                case "all":
                  return (
                    <li key={user.id}>
                      <TweetCard
                        isFollowing={followingTweets.includes(user.id)}
                        onClick={onClick}
                        user={user}
                      />
                    </li>
                  );

                case "follow":
                  return (
                    !followingTweets.includes(user.id) && (
                      <li key={user.id}>
                        <TweetCard
                          isFollowing={false}
                          onClick={onClick}
                          user={user}
                        />
                      </li>
                    )
                  );

                case "followings":
                  return (
                    followingTweets.includes(user.id) && (
                      <li key={user.id}>
                        <TweetCard
                          isFollowing={true}
                          onClick={onClick}
                          user={user}
                        />
                      </li>
                    )
                  );

                default:
                  return console.log("error");
              }
            })}
          </List>
          <LoadMoreBtn LoadMore={LoadMore} />
        </>
      )}
    </Conteiner>
  );
}